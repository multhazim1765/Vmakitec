import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-canvas flex items-center justify-center p-4 relative overflow-hidden font-sans text-ink">
            <Head title="Log in" />

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* The Lanyard Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-[15vh] bg-gradient-to-b from-navy to-navy-700 rounded-b-full shadow-cube z-10 hidden sm:block"></div>

            {/* ID Badge Container */}
            <div className="w-full max-w-sm bg-white rounded-3xl border border-sky-300 shadow-glass-lg relative animate-id-badge pt-10 pb-8 px-8 border-t-[12px] border-t-navy flex flex-col items-center z-20">
                
                {/* Lanyard Hole */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-4 bg-canvas rounded-full border-4 border-navy-700 shadow-inner hidden sm:block"></div>
                
                {/* Badge Header */}
                <h1 className="font-display text-2xl font-extrabold text-navy tracking-widest uppercase mb-6">
                    VMAKITEC
                </h1>

                {/* Profile Placeholder */}
                <div className="w-24 h-24 bg-sky-50 rounded-2xl border border-sky-300 flex items-center justify-center mb-4 overflow-hidden shadow-inner relative group">
                    <div className="absolute inset-0 bg-sky-100/40 group-hover:bg-sky-100/80 transition-colors"></div>
                    <svg className="w-12 h-12 text-navy/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>

                {/* Badge Details */}
                <h2 className="font-display text-lg font-extrabold text-navy uppercase tracking-wide">Authorized Access</h2>
                <p className="text-[11px] text-navy mb-8 uppercase tracking-wider font-bold bg-sky-100 border border-sky-300 py-1 px-3 rounded-full mt-2">Staff ID Required</p>

                {status && (
                    <div className="mb-4 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 text-center w-full">
                        {status}
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit={submit} className="w-full">
                    <div>
                        <InputLabel htmlFor="email" value="Email ID" className="mb-1" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full text-center text-sm"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2 text-center" />
                    </div>

                    <div className="mt-5">
                        <InputLabel htmlFor="password" value="Passcode" className="mb-1" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full text-center text-sm tracking-widest font-mono"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2 text-center" />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="bg-white"
                            />
                            <span className="ms-2 text-[11px] font-bold tracking-wider text-ink-soft uppercase">Remember</span>
                        </label>

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-xs font-semibold text-navy hover:text-amber-deep underline-offset-4 hover:underline transition-colors"
                            >
                                Recover Access
                            </Link>
                        )}
                    </div>

                    <div className="mt-8">
                        <button 
                            disabled={processing}
                            className="w-full bg-navy hover:bg-navy-hover text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full shadow-cube hover:shadow-cube-hover focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-[.97] transition-all duration-300 ease-cube disabled:opacity-50"
                        >
                            Authenticate
                        </button>
                    </div>
                </form>

                {/* Simulated Barcode */}
                <div className="mt-10 w-full flex flex-col items-center opacity-40">
                    <div className="flex gap-[2px] h-8 justify-center items-center w-full">
                        <div className="w-1 h-full bg-navy"></div>
                        <div className="w-2 h-full bg-navy"></div>
                        <div className="w-[1px] h-full bg-navy"></div>
                        <div className="w-1 h-full bg-navy"></div>
                        <div className="w-[3px] h-full bg-navy"></div>
                        <div className="w-2 h-full bg-navy"></div>
                        <div className="w-1 h-full bg-navy"></div>
                        <div className="w-1 h-full bg-navy"></div>
                        <div className="w-[2px] h-full bg-navy"></div>
                        <div className="w-2 h-full bg-navy"></div>
                        <div className="w-[1px] h-full bg-navy"></div>
                        <div className="w-1 h-full bg-navy"></div>
                        <div className="w-[3px] h-full bg-navy"></div>
                        <div className="w-2 h-full bg-navy"></div>
                        <div className="w-1 h-full bg-navy"></div>
                        <div className="w-[2px] h-full bg-navy"></div>
                        <div className="w-1 h-full bg-navy"></div>
                        <div className="w-[2px] h-full bg-navy"></div>
                        <div className="w-2 h-full bg-navy"></div>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] font-mono mt-1 text-navy">VMA-SEC-0916</span>
                </div>
            </div>
        </div>
    );
}
