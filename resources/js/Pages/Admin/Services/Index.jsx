import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ services, success }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this service?')) {
            destroy(route('admin.services.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold leading-tight text-slate-100 uppercase tracking-wider">
                        Manage Services
                    </h2>
                    <Link
                        href={route('admin.services.create')}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded text-sm uppercase tracking-wider transition-colors"
                    >
                        Add New Service
                    </Link>
                </div>
            }
        >
            <Head title="Services" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {success && (
                        <div className="mb-4 bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded relative">
                            {success}
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.length === 0 ? (
                            <div className="col-span-full text-center text-slate-400 py-12 bg-slate-800 rounded-lg border border-slate-700">
                                No services found. Add one to get started.
                            </div>
                        ) : (
                            services.map((service) => (
                                <div key={service.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex flex-col relative group hover:border-indigo-500/50 transition-colors shadow-lg">
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            {service.icon_svg ? (
                                                <div className="w-12 h-12 text-indigo-400 bg-indigo-500/10 rounded-lg flex items-center justify-center p-2 mb-4" dangerouslySetInnerHTML={{ __html: service.icon_svg }}></div>
                                            ) : (
                                                <div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                        <p className="text-slate-400 text-sm mb-4">Starting at: <span className="text-indigo-400 font-bold">{service.starting_price || 'N/A'}</span></p>
                                        
                                        <div className="flex-1 mb-6">
                                            <div className="flex flex-col gap-2">
                                                {service.features ? service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                                                        <span className="text-indigo-500 shrink-0 mt-0.5">✓</span>
                                                        <span>{feature}</span>
                                                    </div>
                                                )) : <span className="text-slate-500 text-sm">No features listed</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-900 px-6 py-4 border-t border-slate-700 flex justify-between items-center">
                                        <Link href={route('admin.services.edit', service.id)} className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors">
                                            Edit Service
                                        </Link>
                                        <button onClick={() => handleDelete(service.id)} className="text-red-400 hover:text-red-300 font-medium text-sm transition-colors">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
