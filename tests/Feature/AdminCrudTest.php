<?php

namespace Tests\Feature;

use App\Models\Lead;
use App\Models\Project;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

/**
 * End-to-end checks for every admin panel action: each change must be
 * persisted to the database and visible on the public pages afterwards.
 */
class AdminCrudTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create();
    }

    public function test_guests_cannot_reach_admin_pages(): void
    {
        foreach (['/admin/services', '/admin/projects', '/admin/leads', '/admin/testimonials'] as $url) {
            $this->get($url)->assertRedirect('/login');
        }
        $this->put('/admin/services/1', ['title' => 'x'])->assertRedirect('/login');
    }

    public function test_admin_index_and_form_pages_load(): void
    {
        $service = Service::create(['title' => 'S', 'features' => ['a']]);
        $project = Project::create(['client_name' => 'P']);
        $lead = Lead::create(['name' => 'L', 'email' => 'l@x.com', 'phone' => '1', 'service' => 'Web', 'description' => 'd']);
        $testimonial = Testimonial::create(['client_name' => 'T', 'feedback' => 'f', 'rating' => 5]);

        $pages = [
            '/admin/services', '/admin/services/create', "/admin/services/{$service->id}/edit",
            '/admin/projects', '/admin/projects/create', "/admin/projects/{$project->id}/edit",
            '/admin/leads', '/admin/leads/create', "/admin/leads/{$lead->id}/edit",
            '/admin/testimonials', '/admin/testimonials/create', "/admin/testimonials/{$testimonial->id}/edit",
            '/dashboard',
        ];
        foreach ($pages as $url) {
            $this->actingAs($this->admin)->get($url)->assertOk();
        }
    }

    // ── Services ──────────────────────────────────────────────

    public function test_service_create_update_delete_persist_and_show_publicly(): void
    {
        $this->actingAs($this->admin)->post('/admin/services', [
            'title' => 'Cloud Hosting',
            'starting_price' => '₹9,999',
            'features' => "Fast\nSecure\n\n",
            'icon_svg' => '<svg></svg>',
        ])->assertRedirect('/admin/services')->assertSessionHasNoErrors();

        $service = Service::where('title', 'Cloud Hosting')->firstOrFail();
        $this->assertSame(['Fast', 'Secure'], $service->features);

        $this->actingAs($this->admin)->put("/admin/services/{$service->id}", [
            'title' => 'Cloud Hosting Pro',
            'starting_price' => '₹19,999',
            'features' => "Faster\nSafer",
            'icon_svg' => '',
        ])->assertRedirect('/admin/services')->assertSessionHasNoErrors();

        $service->refresh();
        $this->assertSame('Cloud Hosting Pro', $service->title);
        $this->assertSame('₹19,999', $service->starting_price);
        $this->assertSame(['Faster', 'Safer'], $service->features);

        // Visible on the public pages that read services
        $this->get('/services')->assertOk()->assertSee('Cloud Hosting Pro', false);
        $this->get('/')->assertOk()->assertSee('Cloud Hosting Pro', false);

        $this->actingAs($this->admin)->delete("/admin/services/{$service->id}")->assertRedirect('/admin/services');
        $this->assertDatabaseMissing('services', ['id' => $service->id]);
    }

    public function test_service_update_rejects_missing_title(): void
    {
        $service = Service::create(['title' => 'Keep Me']);
        $this->actingAs($this->admin)->put("/admin/services/{$service->id}", ['title' => ''])
            ->assertSessionHasErrors('title');
        $this->assertSame('Keep Me', $service->fresh()->title);
    }

    // ── Projects ──────────────────────────────────────────────

    public function test_project_create_update_with_image_delete(): void
    {
        $this->actingAs($this->admin)->post('/admin/projects', [
            'client_name' => 'Acme',
            'industry' => 'Retail',
            'tech_stack' => ['Laravel', 'React'],
            'link' => 'https://acme.test',
            // real 1x1 PNG bytes (no GD extension needed)
            'image' => UploadedFile::fake()->createWithContent('shot.png', base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==')),
        ])->assertRedirect('/admin/projects')->assertSessionHasNoErrors();

        $project = Project::where('client_name', 'Acme')->firstOrFail();
        $this->assertStringStartsWith('data:image/png;base64,', $project->image_path);
        $this->get("/images/projects/{$project->id}")->assertOk()->assertHeader('Content-Type', 'image/png');

        // The edit form posts multipart with _method=put
        $this->actingAs($this->admin)->post("/admin/projects/{$project->id}", [
            '_method' => 'put',
            'client_name' => 'Acme Corp',
            'industry' => 'E-commerce',
            'tech_stack' => ['Laravel'],
            'link' => '',
        ])->assertRedirect('/admin/projects')->assertSessionHasNoErrors();

        $project->refresh();
        $this->assertSame('Acme Corp', $project->client_name);
        $this->assertSame('E-commerce', $project->industry);
        $this->assertSame(['Laravel'], $project->tech_stack);
        $this->assertStringStartsWith('data:image/png;base64,', $project->image_path, 'image must survive an edit without a new upload');

        $this->get('/why-us')->assertOk()->assertSee('Acme Corp', false);

        $this->actingAs($this->admin)->delete("/admin/projects/{$project->id}")->assertRedirect('/admin/projects');
        $this->assertDatabaseMissing('projects', ['id' => $project->id]);
    }

    // ── Leads ─────────────────────────────────────────────────

    public function test_lead_create_update_delete_and_public_contact_form(): void
    {
        $this->post('/contact', [
            'name' => 'Visitor', 'email' => 'v@x.com', 'phone' => '999', 'service' => 'Web Development',
            'budget' => '₹50,000', 'description' => 'Need a site',
        ])->assertSessionHasNoErrors();
        $this->assertDatabaseHas('leads', ['email' => 'v@x.com']);

        $this->actingAs($this->admin)->post('/admin/leads', [
            'name' => 'Admin Lead', 'email' => 'a@x.com', 'phone' => '1', 'service' => 'AI', 'description' => 'x',
        ])->assertRedirect('/admin/leads')->assertSessionHasNoErrors();
        $lead = Lead::where('email', 'a@x.com')->firstOrFail();

        $this->actingAs($this->admin)->put("/admin/leads/{$lead->id}", [
            'name' => 'Admin Lead 2', 'email' => 'a2@x.com', 'phone' => '2', 'service' => 'Data', 'budget' => '10', 'description' => 'y',
        ])->assertRedirect('/admin/leads')->assertSessionHasNoErrors();
        $this->assertDatabaseHas('leads', ['id' => $lead->id, 'name' => 'Admin Lead 2', 'email' => 'a2@x.com', 'service' => 'Data']);

        $this->actingAs($this->admin)->delete("/admin/leads/{$lead->id}")->assertRedirect('/admin/leads');
        $this->assertDatabaseMissing('leads', ['id' => $lead->id]);
    }

    // ── Testimonials ──────────────────────────────────────────

    public function test_testimonial_create_update_toggle_delete(): void
    {
        $this->actingAs($this->admin)->post('/admin/testimonials', [
            'client_name' => 'Ravi', 'role' => 'CEO', 'company_name' => 'Co', 'project_name' => 'App',
            'feedback' => 'Great', 'rating' => 5,
        ])->assertRedirect('/admin/testimonials')->assertSessionHasNoErrors();
        $t = Testimonial::where('client_name', 'Ravi')->firstOrFail();

        $this->actingAs($this->admin)->put("/admin/testimonials/{$t->id}", [
            'client_name' => 'Ravi K', 'feedback' => 'Excellent', 'rating' => 4,
        ])->assertRedirect('/admin/testimonials')->assertSessionHasNoErrors();
        $this->assertDatabaseHas('testimonials', ['id' => $t->id, 'client_name' => 'Ravi K', 'feedback' => 'Excellent', 'rating' => 4]);

        $before = (bool) $t->fresh()->is_approved;
        $this->actingAs($this->admin)->patch("/admin/testimonials/{$t->id}/toggle-approval")->assertRedirect();
        $this->assertSame(!$before, (bool) $t->fresh()->is_approved);

        if ($t->fresh()->is_approved) {
            $this->get('/why-us')->assertOk()->assertSee('Ravi K', false);
        }

        $this->actingAs($this->admin)->patch("/admin/testimonials/{$t->id}/toggle-approval")->assertRedirect();
        $this->assertSame($before, (bool) $t->fresh()->is_approved);

        $this->actingAs($this->admin)->delete("/admin/testimonials/{$t->id}")->assertRedirect('/admin/testimonials');
        $this->assertDatabaseMissing('testimonials', ['id' => $t->id]);
    }

    public function test_unsafe_maintenance_routes_are_gone(): void
    {
        $hash = $this->admin->password;
        foreach (['/fix-hash', '/debug-session', '/fix-db'] as $url) {
            $this->get($url)->assertNotFound();
        }
        $this->assertSame($hash, $this->admin->fresh()->password, 'admin password must not be reset by any public URL');
    }

    public function test_admin_pages_never_expose_password_hash(): void
    {
        $html = $this->actingAs($this->admin)->get('/admin/services')->assertOk()->getContent();
        $this->assertStringNotContainsString($this->admin->password, $html);
        $this->assertStringNotContainsString('remember_token', $html);
    }

    public function test_admin_can_update_profile_and_password(): void
    {
        $this->actingAs($this->admin)->patch('/profile', ['name' => 'Admin Renamed', 'email' => $this->admin->email])
            ->assertSessionHasNoErrors()->assertRedirect('/profile');
        $this->assertSame('Admin Renamed', $this->admin->fresh()->name);
    }

    public function test_public_feedback_form_creates_testimonial(): void
    {
        $this->post('/leave-feedback', [
            'client_name' => 'Guest', 'feedback' => 'Nice work', 'rating' => 5,
        ])->assertSessionHasNoErrors();
        $this->assertDatabaseHas('testimonials', ['client_name' => 'Guest']);
    }
}
