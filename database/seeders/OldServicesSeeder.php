<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service;

class OldServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Web Development',
                'starting_price' => '₹3,999',
                'features' => [
                    'Business Websites',
                    'Corporate Websites',
                    'Portfolio Websites',
                    'Landing Pages',
                    'E-Commerce Platforms',
                    'Admin Dashboards',
                    'SEO Optimization'
                ],
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
            ],
            [
                'title' => 'Mobile App Development',
                'starting_price' => '₹4,999',
                'features' => [
                    'Android Apps',
                    'Cross Platform Apps',
                    'Business Applications',
                    'Inventory Systems',
                    'Booking Applications',
                    'Offline First Applications'
                ],
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'
            ],
            [
                'title' => 'AI Solutions',
                'starting_price' => '₹4,999',
                'features' => [
                    'AI Chatbots',
                    'Automation Systems',
                    'Machine Learning Solutions',
                    'AI Assistants',
                    'Predictive Analytics',
                    'Intelligent Workflows'
                ],
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3.4 2 6.1 5 7.4V20h6v-2.6c3-1.3 5-4 5-7.4a8 8 0 0 0-8-8Z"/><path d="M9 22h6"/><path d="M8 18v4"/><path d="M16 18v4"/></svg>'
            ],
            [
                'title' => 'Data Analytics',
                'starting_price' => '₹2,999',
                'features' => [
                    'Business Intelligence',
                    'Dashboards',
                    'KPI Tracking',
                    'Data Visualization',
                    'Reporting Systems',
                    'Performance Analytics'
                ],
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>'
            ],
            [
                'title' => 'UI/UX Design',
                'starting_price' => '₹2,999',
                'features' => [
                    'User Interface Design',
                    'User Experience Design',
                    'Wireframes',
                    'Prototypes',
                    'Design Systems',
                    'Mobile App Design'
                ],
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>'
            ],
            [
                'title' => 'Digital Transformation',
                'starting_price' => '₹4,999',
                'features' => [
                    'Process Automation',
                    'Workflow Optimization',
                    'Cloud Solutions',
                    'Software Modernization',
                    'Digital Strategy',
                    'Business Management Systems'
                ],
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>'
            ]
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
