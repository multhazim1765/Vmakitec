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
                    <h2 className="text-xl font-bold leading-tight text-slate-100 uppercase tracking-wider">
                        Client Testimonials
                    </h2>
                    <Link
                        href={route('admin.testimonials.create')}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded text-sm uppercase tracking-wider transition-colors"
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
                        <div className="mb-4 bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded relative shadow-lg">
                            {success}
                        </div>
                    )}

                    <div className="bg-slate-800 shadow-xl sm:rounded-lg overflow-hidden border border-slate-700">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-700">
                                <thead className="bg-slate-900">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Client Details</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Feedback</th>
                                        <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                        <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-slate-800 divide-y divide-slate-700">
                                    {testimonials.length === 0 ? (
                                        <tr>
                                            <td colSpan="3" className="px-6 py-12 whitespace-nowrap text-sm text-slate-400 text-center">
                                                No testimonials found. Add one to display it on the public site!
                                            </td>
                                        </tr>
                                    ) : (
                                        testimonials.map((testimonial) => (
                                            <tr key={testimonial.id} className="hover:bg-slate-750/50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <div className="font-bold text-white text-base mb-1">{testimonial.client_name}</div>
                                                    <div className="text-slate-400 text-xs uppercase tracking-wider">
                                                        {testimonial.role && <span>{testimonial.role}</span>}
                                                        {testimonial.company_name && <span> @ {testimonial.company_name}</span>}
                                                    </div>
                                                    {testimonial.project_name && (
                                                        <div className="text-indigo-400 text-xs font-medium mt-1">Project: {testimonial.project_name}</div>
                                                    )}
                                                    <div className="mt-2 text-yellow-500 flex text-xs">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <span key={i} className={i < testimonial.rating ? '' : 'opacity-30'}>★</span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-300">
                                                    <p className="line-clamp-3 overflow-hidden text-ellipsis leading-relaxed whitespace-pre-wrap max-w-md italic">
                                                        "{testimonial.feedback}"
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${testimonial.is_approved ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                                                        {testimonial.is_approved ? 'Approved' : 'Pending'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end gap-4">
                                                    <button onClick={() => handleToggleApproval(testimonial.id)} className={`${testimonial.is_approved ? 'text-amber-500 hover:text-amber-400' : 'text-green-500 hover:text-green-400'} flex items-center gap-1`}>
                                                        {testimonial.is_approved ? 'Hide' : 'Approve'}
                                                    </button>
                                                    <Link href={route('admin.testimonials.edit', testimonial.id)} className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                                                        Edit
                                                    </Link>
                                                    <button onClick={() => handleDelete(testimonial.id)} className="text-red-400 hover:text-red-300 flex items-center justify-end gap-1 ml-auto">
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
