import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ lead }) {
    const { data, setData, put, processing, errors } = useForm({
        name: lead.name || '',
        email: lead.email || '',
        phone: lead.phone || '',
        service: lead.service || '',
        budget: lead.budget || '',
        description: lead.description || '',
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.leads.update', lead.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-display text-xl font-extrabold leading-tight text-navy uppercase tracking-wider">
                    Edit Lead
                </h2>
            }
        >
            <Head title="Edit Lead" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="cube-card-static shadow-glass rounded-3xl overflow-hidden">
                        <div className="p-6 sm:p-8 text-ink">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Name</label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                        />
                                        {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                        />
                                        {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Phone</label>
                                        <input
                                            type="text"
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                        />
                                        {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Service Required</label>
                                        <select
                                            value={data.service}
                                            onChange={e => setData('service', e.target.value)}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="AI Solutions">AI Solutions</option>
                                            <option value="Data Analytics">Data Analytics</option>
                                            <option value="UI/UX Design">UI/UX Design</option>
                                            <option value="Digital Transformation">Digital Transformation</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.service && <div className="text-red-600 text-sm mt-1">{errors.service}</div>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Budget</label>
                                        <input
                                            type="text"
                                            value={data.budget}
                                            onChange={e => setData('budget', e.target.value)}
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                        />
                                        {errors.budget && <div className="text-red-600 text-sm mt-1">{errors.budget}</div>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Description</label>
                                        <textarea
                                            value={data.description}
                                            onChange={e => setData('description', e.target.value)}
                                            rows="4"
                                            className="w-full bg-white border border-sky-300 rounded-xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 px-4 py-2.5 transition-colors"
                                        ></textarea>
                                        {errors.description && <div className="text-red-600 text-sm mt-1">{errors.description}</div>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-line">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center rounded-full bg-navy text-white hover:bg-navy-hover shadow-cube px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
                                    >
                                        Update Lead
                                    </button>
                                    <Link
                                        href={route('admin.leads.index')}
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
