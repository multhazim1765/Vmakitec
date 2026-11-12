import MainLayout from '@/Layouts/MainLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function LeaveFeedback() {
    const { flash } = usePage().props;
    
    const { data, setData, post, processing, errors, reset } = useForm({
        client_name: '',
        role: '',
        company_name: '',
        project_name: '',
        feedback: '',
        rating: 5,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('leave-feedback.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <MainLayout>
            <Head title="Leave Feedback" />

            <section className="pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-300/40 blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sky-100 blur-[120px]"></div>
                </div>

                <div className="max-w-3xl mx-auto px-6 w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-4 text-navy">
                            Share Your Experience
                        </h1>
                        <p className="text-ink-muted text-lg leading-relaxed">
                            Your feedback helps us improve and lets others know what it's like to work with VMAKITEC.
                        </p>
                    </div>

                    <div className="cube-card-static p-8 md:p-12 rounded-3xl relative">
                        
                        {flash && flash.success && (
                            <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 text-center font-medium">
                                {flash.success}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Your Name *</label>
                                    <input
                                        type="text"
                                        value={data.client_name}
                                        onChange={e => setData('client_name', e.target.value)}
                                        className="w-full bg-white border border-sky-300 rounded-2xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 p-3 transition-colors"
                                        required
                                        placeholder="John Doe"
                                    />
                                    {errors.client_name && <div className="text-red-600 text-sm mt-1">{errors.client_name}</div>}
                                </div>
                                
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Company Name (Optional)</label>
                                    <input
                                        type="text"
                                        value={data.company_name}
                                        onChange={e => setData('company_name', e.target.value)}
                                        className="w-full bg-white border border-sky-300 rounded-2xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 p-3 transition-colors"
                                        placeholder="Acme Corp"
                                    />
                                    {errors.company_name && <div className="text-red-600 text-sm mt-1">{errors.company_name}</div>}
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Your Role (Optional)</label>
                                    <input
                                        type="text"
                                        value={data.role}
                                        onChange={e => setData('role', e.target.value)}
                                        className="w-full bg-white border border-sky-300 rounded-2xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 p-3 transition-colors"
                                        placeholder="CEO, Founder, etc."
                                    />
                                    {errors.role && <div className="text-red-600 text-sm mt-1">{errors.role}</div>}
                                </div>
                                
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Project Name (Optional)</label>
                                    <input
                                        type="text"
                                        value={data.project_name}
                                        onChange={e => setData('project_name', e.target.value)}
                                        className="w-full bg-white border border-sky-300 rounded-2xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 p-3 transition-colors"
                                        placeholder="E-commerce Redesign"
                                    />
                                    {errors.project_name && <div className="text-red-600 text-sm mt-1">{errors.project_name}</div>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Rating *</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                type="button"
                                                key={star}
                                                onClick={() => setData('rating', star)}
                                                className={`text-3xl transition-transform hover:scale-110 ${data.rating >= star ? 'text-amber' : 'text-sky-300'}`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                    {errors.rating && <div className="text-red-600 text-sm mt-1">{errors.rating}</div>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft mb-2">Your Feedback *</label>
                                    <textarea
                                        value={data.feedback}
                                        onChange={e => setData('feedback', e.target.value)}
                                        rows="5"
                                        className="w-full bg-white border border-sky-300 rounded-2xl shadow-sm text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 p-3 transition-colors resize-none"
                                        required
                                        placeholder="Tell us about your experience working with us..."
                                    ></textarea>
                                    {errors.feedback && <div className="text-red-600 text-sm mt-1">{errors.feedback}</div>}
                                </div>
                            </div>

                            <div className="pt-4 text-center">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-navy hover:bg-navy-hover text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-cube disabled:opacity-50 shadow-cube hover:shadow-cube-hover w-full md:w-auto"
                                >
                                    {processing ? 'Submitting...' : 'Submit Feedback'}
                                </button>
                                <p className="text-ink-muted text-xs mt-4">
                                    By submitting this form, you agree that your feedback may be displayed publicly on our website once approved.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
