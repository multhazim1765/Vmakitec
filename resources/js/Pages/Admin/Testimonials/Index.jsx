import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Index({ testimonials, success }) {
    const { delete: destroy, patch } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this testimonial?')) {
            destroy(route('admin.testimonials.destroy', id));
        }
    };

    const handleToggleApproval = (id) => {
        patch(route('admin.testimonials.toggle-approval', id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-display text-xl font-extrabold leading-tight text-navy uppercase tracking-wider">
                        Client Testimonials
                    </h2>
                    <Link
                        href={route('admin.testimonials.create')}
                        className="inline-flex items-center rounded-full bg-navy text-white hover:bg-navy-hover shadow-cube px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                        Add Testimonial
                    </Link>
                </div>
            }
        >
            <Head title="Testimonials" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {success && (
                        <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-2xl relative shadow-cube">
                            {success}
                        </div>
                    )}

                    <div className="cube-card-static shadow-glass rounded-3xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-line">
                                <thead className="bg-sky-100/60">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-left">Client Details</th>
                                        <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-left">Feedback</th>
                                        <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-center">Status</th>
                                        <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white/70 divide-y divide-line">
                                    {testimonials.length === 0 ? (
                                        <tr>
                                            <td colSpan="3" className="px-6 py-12 whitespace-nowrap text-sm text-ink-muted text-center">
                                                No testimonials found. Add one to display it on the public site!
                                            </td>
                                        </tr>
                                    ) : (
                                        testimonials.map((testimonial) => (
                                            <tr key={testimonial.id} className="hover:bg-sky-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <div className="font-bold text-navy text-base mb-1">{testimonial.client_name}</div>
                                                    <div className="text-ink-muted text-xs uppercase tracking-wider">
                                                        {testimonial.role && <span>{testimonial.role}</span>}
                                                        {testimonial.company_name && <span> @ {testimonial.company_name}</span>}
                                                    </div>
                                                    {testimonial.project_name && (
                                                        <div className="text-sky-500 text-xs font-semibold mt-1">Project: {testimonial.project_name}</div>
                                                    )}
                                                    <div className="mt-2 text-amber flex text-xs">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <span key={i} className={i < testimonial.rating ? '' : 'opacity-30'}>★</span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-ink-soft">
                                                    <p className="line-clamp-3 overflow-hidden text-ellipsis leading-relaxed whitespace-pre-wrap max-w-md italic">
                                                        "{testimonial.feedback}"
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className={`px-3 py-0.5 inline-flex text-[11px] leading-5 font-bold uppercase tracking-wider rounded-full ${testimonial.is_approved ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                                                        {testimonial.is_approved ? 'Approved' : 'Pending'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end gap-4">
                                                    <button onClick={() => handleToggleApproval(testimonial.id)} className={`${testimonial.is_approved ? 'text-amber-700 hover:text-amber-deep font-semibold transition-colors' : 'text-emerald-700 hover:text-emerald-600 font-semibold transition-colors'} flex items-center gap-1`}>
                                                        {testimonial.is_approved ? 'Hide' : 'Approve'}
                                                    </button>
                                                    <Link href={route('admin.testimonials.edit', testimonial.id)} className="text-navy hover:text-sky-500 font-semibold flex items-center gap-1 transition-colors">
                                                        Edit
                                                    </Link>
                                                    <button onClick={() => handleDelete(testimonial.id)} className="text-red-600 hover:text-red-700 font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
