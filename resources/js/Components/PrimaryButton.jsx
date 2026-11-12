export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-full border border-transparent bg-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-cube transition duration-300 ease-cube hover:bg-navy-hover focus:bg-navy-hover focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-[.97] disabled:opacity-25 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
