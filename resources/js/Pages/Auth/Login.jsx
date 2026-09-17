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
        <div className="min-h-screen bg-[#050510] flex items-center justify-center p-4 relative overflow-hidden font-sans">
            <Head title="Log in" />

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* The Lanyard Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-[15vh] bg-gradient-to-b from-slate-900 to-slate-700 rounded-b-full shadow-lg z-10 hidden sm:block"></div>

            {/* ID Badge Container */}
            <div className="w-full max-w-sm bg-slate-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative animate-id-badge pt-10 pb-8 px-8 border-t-[12px] border-blue-600 flex flex-col items-center z-20">
                
                {/* Lanyard Hole */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#050510] rounded-full border-4 border-slate-700 shadow-inner hidden sm:block"></div>
                
                {/* Badge Header */}
                <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 tracking-widest uppercase mb-6">
                    VMAKITEC
                </h1>

                {/* Profile Placeholder */}
                <div className="w-24 h-24 bg-slate-800 rounded-xl border border-slate-600 flex items-center justify-center mb-4 overflow-hidden shadow-inner relative group">
                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
                    <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>

                {/* Badge Details */}
                <h2 className="text-lg font-bold text-slate-200 uppercase tracking-wide">Authorized Access</h2>
                <p className="text-xs text-slate-500 mb-8 uppercase tracking-widest font-semibold bg-slate-800/50 py-1 px-3 rounded mt-1">Staff ID Required</p>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-400 text-center w-full">
                        {status}
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit={submit} className="w-full">
                    <div>
                        <InputLabel htmlFor="email" value="Email ID" className="text-slate-400 text-xs uppercase tracking-wider mb-1" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full bg-slate-800 border-slate-700 text-slate-200 focus:border-blue-500 focus:ring-blue-500 text-center text-sm"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2 text-center" />
                    </div>

                    <div className="mt-5">
                        <InputLabel htmlFor="password" value="Passcode" className="text-slate-400 text-xs uppercase tracking-wider mb-1" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full bg-slate-800 border-slate-700 text-slate-200 focus:border-blue-500 focus:ring-blue-500 text-center text-sm tracking-widest font-mono"
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
                                className="bg-slate-800 border-slate-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
                            />
                            <span className="ms-2 text-xs text-slate-400 uppercase">Remember</span>
                        </label>

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                Recover Access
                            </Link>
                        )}
                    </div>

                    <div className="mt-8">
                        <button 
                            disabled={processing}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold uppercase tracking-widest py-3 rounded-lg shadow-lg shadow-blue-500/30 transition-all disabled:opacity-50"
                        >
                            Authenticate
                        </button>
                    </div>
                </form>

                {/* Simulated Barcode */}
                <div className="mt-10 w-full flex flex-col items-center opacity-30">
                    <div className="flex gap-[2px] h-8 justify-center items-center w-full">
                        <div className="w-1 h-full bg-slate-400"></div>
                        <div className="w-2 h-full bg-slate-400"></div>
                        <div className="w-[1px] h-full bg-slate-400"></div>
                        <div className="w-1 h-full bg-slate-400"></div>
                        <div className="w-[3px] h-full bg-slate-400"></div>
                        <div className="w-2 h-full bg-slate-400"></div>
                        <div className="w-1 h-full bg-slate-400"></div>
                        <div className="w-1 h-full bg-slate-400"></div>
                        <div className="w-[2px] h-full bg-slate-400"></div>
                        <div className="w-2 h-full bg-slate-400"></div>
                        <div className="w-[1px] h-full bg-slate-400"></div>
                        <div className="w-1 h-full bg-slate-400"></div>
                        <div className="w-[3px] h-full bg-slate-400"></div>
                        <div className="w-2 h-full bg-slate-400"></div>
                        <div className="w-1 h-full bg-slate-400"></div>
                        <div className="w-[2px] h-full bg-slate-400"></div>
                        <div className="w-1 h-full bg-slate-400"></div>
                        <div className="w-[2px] h-full bg-slate-400"></div>
                        <div className="w-2 h-full bg-slate-400"></div>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] font-mono mt-1 text-slate-400">VMA-SEC-0916</span>
                </div>
            </div>
        </div>
    );
}
