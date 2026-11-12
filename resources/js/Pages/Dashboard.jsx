import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-serif text-3xl font-light leading-tight text-navy">
                    Command Center
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">
                    
                    {/* Welcome Banner */}
                    <div className="cube-card-static overflow-hidden rounded-none sm:rounded-3xl">
                        <div className="p-6 sm:p-8 text-ink flex items-center justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-extrabold text-navy mb-2">Welcome back to VMAKITEC.</h3>
                                <p className="text-ink-muted">Your systems are online and running optimally.</p>
                            </div>
                            <div className="hidden sm:block">
                                <div className="h-16 w-16 rounded-full border-4 border-sky-300 border-t-amber animate-spin"></div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Manage Projects Card */}
                        <div className="group cube-gradient-card overflow-hidden rounded-none sm:rounded-3xl">
                            <div className="p-6 sm:p-8 text-ink-soft">
                                <h4 className="font-display text-lg font-extrabold text-navy mb-4 flex items-center gap-3">
                                    <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    Manage Portfolio
                                </h4>
                                <p className="text-sm text-ink-muted mb-6">Add, edit, or remove projects from the "Our Work" section of the main website.</p>
                                <Link 
                                    href={route('admin.projects.index')}
                                    className="inline-flex items-center justify-center w-full bg-sky-100 group-hover:bg-navy border border-sky-300 group-hover:border-navy text-navy group-hover:text-white text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-full shadow-sm group-hover:shadow-cube transition-all duration-300 ease-cube"
                                >
                                    Access Database
                                </Link>
                            </div>
                        </div>

                        {/* Manage Services Card */}
                        <div className="group cube-gradient-card overflow-hidden rounded-none sm:rounded-3xl">
                            <div className="p-6 sm:p-8 text-ink-soft">
                                <h4 className="font-display text-lg font-extrabold text-navy mb-4 flex items-center gap-3">
                                    <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    Manage Services
                                </h4>
                                <p className="text-sm text-ink-muted mb-6">Update the service offerings, pricing, and features listed on the public site.</p>
                                <Link 
                                    href={route('admin.services.index')}
                                    className="inline-flex items-center justify-center w-full bg-sky-100 group-hover:bg-navy border border-sky-300 group-hover:border-navy text-navy group-hover:text-white text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-full shadow-sm group-hover:shadow-cube transition-all duration-300 ease-cube"
                                >
                                    Access Database
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
