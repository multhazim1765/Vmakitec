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
                <h2 className="text-xl font-bold leading-tight text-slate-100 uppercase tracking-wider">
                    Edit Lead
                </h2>
            }
        >
            <Head title="Edit Lead" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-slate-800 overflow-hidden shadow-xl sm:rounded-lg border border-slate-700">
                        <div className="p-6 text-slate-300">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                        />
                                        {errors.name && <div className="text-red-400 text-sm mt-1">{errors.name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                        />
                                        {errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                                        <input
                                            type="text"
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                        />
                                        {errors.phone && <div className="text-red-400 text-sm mt-1">{errors.phone}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Service Required</label>
                                        <select
                                            value={data.service}
                                            onChange={e => setData('service', e.target.value)}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
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
                                        {errors.service && <div className="text-red-400 text-sm mt-1">{errors.service}</div>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Budget</label>
                                        <input
                                            type="text"
                                            value={data.budget}
                                            onChange={e => setData('budget', e.target.value)}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                        />
                                        {errors.budget && <div className="text-red-400 text-sm mt-1">{errors.budget}</div>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                                        <textarea
                                            value={data.description}
                                            onChange={e => setData('description', e.target.value)}
                                            rows="4"
                                            className="w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm text-white focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                        ></textarea>
                                        {errors.description && <div className="text-red-400 text-sm mt-1">{errors.description}</div>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-700">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded transition-colors disabled:opacity-50 tracking-wide"
                                    >
                                        Update Lead
                                    </button>
                                    <Link
                                        href={route('admin.leads.index')}
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
