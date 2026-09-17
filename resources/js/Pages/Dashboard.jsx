import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold leading-tight text-slate-100 uppercase tracking-wider">
                    Command Center
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">
                    
                    {/* Welcome Banner */}
                    <div className="overflow-hidden bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-800/50 shadow-xl shadow-blue-900/20 sm:rounded-lg">
                        <div className="p-6 text-blue-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Welcome back to VMAKITEC.</h3>
                                <p className="text-blue-300">Your systems are online and running optimally.</p>
                            </div>
                            <div className="hidden sm:block">
                                <div className="h-16 w-16 rounded-full border-4 border-blue-500/30 border-t-blue-400 animate-spin"></div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Manage Projects Card */}
                        <div className="group overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg sm:rounded-lg">
                            <div className="p-6 text-slate-300">
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    Manage Portfolio
                                </h4>
                                <p className="text-sm text-slate-400 mb-6">Add, edit, or remove projects from the "Our Work" section of the main website.</p>
                                <Link 
                                    href={route('admin.projects.index')}
                                    className="inline-flex items-center justify-center w-full bg-slate-900 group-hover:bg-blue-600 border border-slate-700 group-hover:border-blue-500 text-slate-300 group-hover:text-white font-bold uppercase tracking-widest py-3 px-4 rounded transition-all duration-300"
                                >
                                    Access Database
                                </Link>
                            </div>
                        </div>

                        {/* Manage Services Card */}
                        <div className="group overflow-hidden bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-all duration-300 shadow-lg sm:rounded-lg">
                            <div className="p-6 text-slate-300">
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    Manage Services
                                </h4>
                                <p className="text-sm text-slate-400 mb-6">Update the service offerings, pricing, and features listed on the public site.</p>
                                <Link 
                                    href={route('admin.services.index')}
                                    className="inline-flex items-center justify-center w-full bg-slate-900 group-hover:bg-indigo-600 border border-slate-700 group-hover:border-indigo-500 text-slate-300 group-hover:text-white font-bold uppercase tracking-widest py-3 px-4 rounded transition-all duration-300"
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
