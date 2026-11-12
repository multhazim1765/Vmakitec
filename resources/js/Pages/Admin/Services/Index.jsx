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
                    <h2 className="font-display text-xl font-extrabold leading-tight text-navy uppercase tracking-wider">
                        Manage Services
                    </h2>
                    <Link
                        href={route('admin.services.create')}
                        className="inline-flex items-center rounded-full bg-navy text-white hover:bg-navy-hover shadow-cube px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
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
                        <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-2xl relative shadow-cube">
                            {success}
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.length === 0 ? (
                            <div className="col-span-full text-center text-ink-muted py-12 cube-card-static rounded-3xl">
                                No services found. Add one to get started.
                            </div>
                        ) : (
                            services.map((service) => (
                                <div key={service.id} className="cube-card-static rounded-3xl overflow-hidden flex flex-col relative group hover:border-sky-400 transition-colors shadow-glass">
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            {service.icon_svg ? (
                                                <div className="w-12 h-12 text-amber bg-white border border-sky-300 rounded-2xl flex items-center justify-center p-2 mb-4 shadow-cube" dangerouslySetInnerHTML={{ __html: service.icon_svg }}></div>
                                            ) : (
                                                <div className="w-12 h-12 bg-sky-100 border border-sky-300 rounded-2xl mb-4"></div>
                                            )}
                                        </div>
                                        <h3 className="font-display text-xl font-extrabold text-navy mb-2">{service.title}</h3>
                                        <p className="text-ink-muted text-sm mb-4">Starting at: <span className="text-amber font-bold">{service.starting_price || 'N/A'}</span></p>
                                        
                                        <div className="flex-1 mb-6">
                                            <div className="flex flex-col gap-2">
                                                {service.features ? service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 text-ink-soft text-sm">
                                                        <span className="text-amber shrink-0 mt-0.5">✓</span>
                                                        <span>{feature}</span>
                                                    </div>
                                                )) : <span className="text-ink-muted text-sm">No features listed</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-sky-100/60 px-6 py-4 border-t border-sky-300 flex justify-between items-center">
                                        <Link href={route('admin.services.edit', service.id)} className="text-navy hover:text-sky-500 font-semibold text-sm transition-colors">
                                            Edit Service
                                        </Link>
                                        <button onClick={() => handleDelete(service.id)} className="text-red-600 hover:text-red-700 font-semibold text-sm transition-colors">
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
