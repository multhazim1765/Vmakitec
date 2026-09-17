import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-blue-500/30">
            <nav className="border-b border-slate-800 bg-slate-950 sticky top-0 z-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/" className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white font-bold">V</div>
                                    <span className="font-bold text-white tracking-widest text-lg">VMAKITEC</span>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                    className={route().current('dashboard') ? "text-blue-400 border-blue-500" : "text-slate-400 hover:text-slate-200 border-transparent hover:border-slate-700"}
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    href={route('admin.projects.index')}
                                    active={route().current('admin.projects.*')}
                                    className={route().current('admin.projects.*') ? "text-blue-400 border-blue-500" : "text-slate-400 hover:text-slate-200 border-transparent hover:border-slate-700"}
                                >
                                    Projects
                                </NavLink>
                                <NavLink
                                    href={route('admin.services.index')}
                                    active={route().current('admin.services.*')}
                                    className={route().current('admin.services.*') ? "text-blue-400 border-blue-500" : "text-slate-400 hover:text-slate-200 border-transparent hover:border-slate-700"}
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    href={route('admin.leads.index')}
                                    active={route().current('admin.leads.*')}
                                    className={route().current('admin.leads.*') ? "text-blue-400 border-blue-500" : "text-slate-400 hover:text-slate-200 border-transparent hover:border-slate-700"}
                                >
                                    Leads
                                </NavLink>
                                <NavLink
                                    href={route('admin.testimonials.index')}
                                    active={route().current('admin.testimonials.*')}
                                    className={route().current('admin.testimonials.*') ? "text-blue-400 border-blue-500" : "text-slate-400 hover:text-slate-200 border-transparent hover:border-slate-700"}
                                >
                                    Testimonials
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-medium leading-4 text-slate-300 transition duration-150 ease-in-out hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content contentClasses="py-1 bg-slate-800 border border-slate-700 shadow-xl">
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                            className="text-slate-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700"
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="text-slate-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 transition duration-150 ease-in-out hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white focus:outline-none"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden bg-slate-900 border-b border-slate-800'}>
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}
                            className={route().current('dashboard') ? "bg-slate-800 border-blue-500 text-blue-400" : "text-slate-400 hover:bg-slate-800 border-transparent hover:border-slate-700"}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('admin.projects.index')} active={route().current('admin.projects.*')}
                            className={route().current('admin.projects.*') ? "bg-slate-800 border-blue-500 text-blue-400" : "text-slate-400 hover:bg-slate-800 border-transparent hover:border-slate-700"}
                        >
                            Projects
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('admin.services.index')} active={route().current('admin.services.*')}
                            className={route().current('admin.services.*') ? "bg-slate-800 border-blue-500 text-blue-400" : "text-slate-400 hover:bg-slate-800 border-transparent hover:border-slate-700"}
                        >
                            Services
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('admin.leads.index')} active={route().current('admin.leads.*')}
                            className={route().current('admin.leads.*') ? "bg-slate-800 border-blue-500 text-blue-400" : "text-slate-400 hover:bg-slate-800 border-transparent hover:border-slate-700"}
                        >
                            Leads
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('admin.testimonials.index')} active={route().current('admin.testimonials.*')}
                            className={route().current('admin.testimonials.*') ? "bg-slate-800 border-blue-500 text-blue-400" : "text-slate-400 hover:bg-slate-800 border-transparent hover:border-slate-700"}
                        >
                            Testimonials
                        </ResponsiveNavLink>
                    </div>
                    <div className="border-t border-slate-800 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-white">{user.name}</div>
                            <div className="text-sm font-medium text-slate-400">{user.email}</div>
                        </div>
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')} className="text-slate-400 hover:bg-slate-800 hover:text-white">Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button" className="text-slate-400 hover:bg-slate-800 hover:text-white">Log Out</ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-slate-900 border-b border-slate-800/50 shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="py-8">{children}</main>
        </div>
    );
}
