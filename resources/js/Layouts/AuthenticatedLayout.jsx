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
        <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-sky-300/50 selection:text-navy">
            <nav className="sticky top-0 z-50 border-b border-sky-300 bg-white/80 shadow-glass backdrop-blur-xl backdrop-saturate-150">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/" className="flex items-center gap-2">
                                    <img src="/vmakitec-logo.jpg" alt="VMAKITEC Logo" className="w-8 h-8 rounded-lg object-cover ring-1 ring-sky-300" />
                                    <span className="font-display font-extrabold text-navy tracking-widest text-lg">VMAKITEC</span>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                    className={route().current('dashboard') ? "text-navy border-navy" : "text-ink-soft hover:text-navy border-transparent hover:border-sky-300"}
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    href={route('admin.projects.index')}
                                    active={route().current('admin.projects.*')}
                                    className={route().current('admin.projects.*') ? "text-navy border-navy" : "text-ink-soft hover:text-navy border-transparent hover:border-sky-300"}
                                >
                                    Projects
                                </NavLink>
                                <NavLink
                                    href={route('admin.services.index')}
                                    active={route().current('admin.services.*')}
                                    className={route().current('admin.services.*') ? "text-navy border-navy" : "text-ink-soft hover:text-navy border-transparent hover:border-sky-300"}
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    href={route('admin.leads.index')}
                                    active={route().current('admin.leads.*')}
                                    className={route().current('admin.leads.*') ? "text-navy border-navy" : "text-ink-soft hover:text-navy border-transparent hover:border-sky-300"}
                                >
                                    Leads
                                </NavLink>
                                <NavLink
                                    href={route('admin.testimonials.index')}
                                    active={route().current('admin.testimonials.*')}
                                    className={route().current('admin.testimonials.*') ? "text-navy border-navy" : "text-ink-soft hover:text-navy border-transparent hover:border-sky-300"}
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
                                                className="inline-flex items-center rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-semibold leading-4 text-navy transition duration-300 ease-cube hover:border-sky-400 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
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

                                    <Dropdown.Content contentClasses="py-1 glass-panel-elevated">
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                            className="text-ink-soft hover:bg-sky-50 hover:text-navy focus:bg-sky-50"
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="text-ink-soft hover:bg-sky-50 hover:text-navy focus:bg-sky-50"
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
                                className="inline-flex items-center justify-center rounded-full p-2 text-ink-soft transition duration-300 ease-cube hover:bg-sky-100 hover:text-navy focus:bg-sky-100 focus:text-navy focus:outline-none"
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

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden bg-white/95 border-b border-sky-300'}>
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}
                            className={route().current('dashboard') ? "bg-sky-100 border-navy text-navy" : "text-ink-soft hover:bg-sky-50 border-transparent hover:border-sky-300"}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('admin.projects.index')} active={route().current('admin.projects.*')}
                            className={route().current('admin.projects.*') ? "bg-sky-100 border-navy text-navy" : "text-ink-soft hover:bg-sky-50 border-transparent hover:border-sky-300"}
                        >
                            Projects
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('admin.services.index')} active={route().current('admin.services.*')}
                            className={route().current('admin.services.*') ? "bg-sky-100 border-navy text-navy" : "text-ink-soft hover:bg-sky-50 border-transparent hover:border-sky-300"}
                        >
                            Services
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('admin.leads.index')} active={route().current('admin.leads.*')}
                            className={route().current('admin.leads.*') ? "bg-sky-100 border-navy text-navy" : "text-ink-soft hover:bg-sky-50 border-transparent hover:border-sky-300"}
                        >
                            Leads
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('admin.testimonials.index')} active={route().current('admin.testimonials.*')}
                            className={route().current('admin.testimonials.*') ? "bg-sky-100 border-navy text-navy" : "text-ink-soft hover:bg-sky-50 border-transparent hover:border-sky-300"}
                        >
                            Testimonials
                        </ResponsiveNavLink>
                    </div>
                    <div className="border-t border-line pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-semibold text-navy">{user.name}</div>
                            <div className="text-sm font-medium text-ink-muted">{user.email}</div>
                        </div>
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')} className="text-ink-soft hover:bg-sky-50 hover:text-navy">Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button" className="text-ink-soft hover:bg-sky-50 hover:text-navy">Log Out</ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white/60 border-b border-sky-300/60 backdrop-blur-sm">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="py-8">{children}</main>
        </div>
    );
}
