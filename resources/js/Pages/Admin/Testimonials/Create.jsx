import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        client_name: '',
        role: '',
        company_name: '',
        project_name: '',
        feedback: '',
        rating: 5,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.testimonials.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-display text-xl font-extrabold leading-tight text-navy uppercase tracking-wider">
                    Add Testimonial
                </h2>
            }
        >
            <Head title="Add Testimonial" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="cube-card-static shadow-glass rounded-3xl overflow-hidden">
                        <div className="p-6 sm:p-8 text-ink">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Client Name *</label>
                                        <input
                                            type="text"
                                            value={data.client_name}
                                            onChange={e => setData('client_name', e.target.value)}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                            required
                                        />
                                        {errors.client_name && <div className="text-red-600 text-sm mt-1">{errors.client_name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Role (e.g., CEO, Founder)</label>
                                        <input
                                            type="text"
                                            value={data.role}
                                            onChange={e => setData('role', e.target.value)}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                        />
                                        {errors.role && <div className="text-red-600 text-sm mt-1">{errors.role}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            value={data.company_name}
                                            onChange={e => setData('company_name', e.target.value)}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                        />
                                        {errors.company_name && <div className="text-red-600 text-sm mt-1">{errors.company_name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Project Name</label>
                                        <input
                                            type="text"
                                            value={data.project_name}
                                            onChange={e => setData('project_name', e.target.value)}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                        />
                                        {errors.project_name && <div className="text-red-600 text-sm mt-1">{errors.project_name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Rating (1-5) *</label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={data.rating}
                                            onChange={e => setData('rating', parseInt(e.target.value))}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                            required
                                        />
                                        {errors.rating && <div className="text-red-600 text-sm mt-1">{errors.rating}</div>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Client Feedback *</label>
                                        <textarea
                                            value={data.feedback}
                                            onChange={e => setData('feedback', e.target.value)}
                                            rows="4"
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                            required
                                        ></textarea>
                                        {errors.feedback && <div className="text-red-600 text-sm mt-1">{errors.feedback}</div>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-line">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center rounded-full bg-navy text-white hover:bg-navy-hover shadow-cube px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
                                    >
                                        Save Testimonial
                                    </button>
                                    <Link
                                        href={route('admin.testimonials.index')}
                                        className="inline-flex items-center rounded-full bg-sky-100 border border-sky-300 text-navy hover:border-sky-400 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
