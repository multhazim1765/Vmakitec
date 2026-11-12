import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? 'border-navy bg-sky-100 text-navy focus:border-navy-hover focus:bg-sky-100 focus:text-navy'
                    : 'border-transparent text-ink-soft hover:border-sky-300 hover:bg-sky-50 hover:text-navy focus:border-sky-300 focus:bg-sky-50 focus:text-navy'
            } text-base font-medium transition duration-300 ease-cube focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
