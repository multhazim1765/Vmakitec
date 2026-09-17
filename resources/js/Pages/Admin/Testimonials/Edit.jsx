import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ testimonial }) {
    const { data, setData, put, processing, errors } = useForm({
        client_name: testimonial.client_name || '',
        role: testimonial.role || '',
        company_name: testimonial.company_name || '',
        project_name: testimonial.project_name || '',
        feedback: testimonial.feedback || '',
        rating: testimonial.rating || 5,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.testimonials.update', testimonial.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold leading-tight text-slate-100 uppercase tracking-wider">
                    Edit Testimonial
                </h2>
            }
        >
            <Head title="Edit Testimonial" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-slate-800 overflow-hidden shadow-xl sm:rounded-lg border border-slate-700">
                        <div className="p-6 text-slate-300">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Client Name *</label>
                                        <input
                                            type="text"
                                            value={data.client_name}
                                            onChange={e => setData('client_name', e.target.value)}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                            required
                                        />
                                        {errors.client_name && <div className="text-red-400 text-sm mt-1">{errors.client_name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Role (e.g., CEO, Founder)</label>
                                        <input
                                            type="text"
                                            value={data.role}
                                            onChange={e => setData('role', e.target.value)}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                        />
                                        {errors.role && <div className="text-red-400 text-sm mt-1">{errors.role}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            value={data.company_name}
                                            onChange={e => setData('company_name', e.target.value)}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                        />
                                        {errors.company_name && <div className="text-red-400 text-sm mt-1">{errors.company_name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Project Name</label>
                                        <input
                                            type="text"
                                            value={data.project_name}
                                            onChange={e => setData('project_name', e.target.value)}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                        />
                                        {errors.project_name && <div className="text-red-400 text-sm mt-1">{errors.project_name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Rating (1-5) *</label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={data.rating}
                                            onChange={e => setData('rating', parseInt(e.target.value))}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                            required
                                        />
                                        {errors.rating && <div className="text-red-400 text-sm mt-1">{errors.rating}</div>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Client Feedback *</label>
                                        <textarea
                                            value={data.feedback}
                                            onChange={e => setData('feedback', e.target.value)}
                                            rows="4"
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                            required
                                        ></textarea>
                                        {errors.feedback && <div className="text-red-400 text-sm mt-1">{errors.feedback}</div>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-700">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded transition-colors disabled:opacity-50 tracking-wide"
                                    >
                                        Update Testimonial
                                    </button>
                                    <Link
                                        href={route('admin.testimonials.index')}
                                        className="text-slate-400 hover:text-white transition-colors"
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
