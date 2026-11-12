import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'rounded-xl border-sky-300 bg-white text-ink shadow-sm placeholder:text-ink-muted transition duration-300 ease-cube hover:border-sky-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 ' +
                className
            }
            ref={localRef}
        />
    );
});
