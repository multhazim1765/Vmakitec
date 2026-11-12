import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-semibold leading-5 transition duration-300 ease-cube focus:outline-none ' +
                (active
                    ? 'border-navy text-navy focus:border-navy-hover '
                    : 'border-transparent text-ink-soft hover:border-sky-300 hover:text-navy focus:border-sky-300 focus:text-navy ') +
                className
            }
        >
            {children}
        </Link>
    );
}
