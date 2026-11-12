import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ leads, success }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this lead? This cannot be undone.')) {
            destroy(route('admin.leads.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-display text-xl font-extrabold leading-tight text-navy uppercase tracking-wider">
                        Contact Requests (Leads)
                    </h2>
                    <a
                        href={route('admin.leads.create')}
                        className="inline-flex items-center rounded-full bg-navy text-white hover:bg-navy-hover shadow-cube px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                        Add New Lead
                    </a>
                </div>
            }
        >
            <Head title="Leads" />

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
                                        <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-left">Contact Info</th>
                                        <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-left">Service & Budget</th>
                                        <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-left">Project Description</th>
                                        <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-left">Date</th>
                                        <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white/70 divide-y divide-line">
                                    {leads.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-12 whitespace-nowrap text-sm text-ink-muted text-center">
                                                <svg className="w-12 h-12 text-sky-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                                No leads found. When a user submits a contact form, it will appear here.
                                            </td>
                                        </tr>
                                    ) : (
                                        leads.map((lead) => (
                                            <tr key={lead.id} className="hover:bg-sky-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <div className="font-bold text-navy text-base mb-1">{lead.name}</div>
                                                    <div className="text-ink-muted flex items-center gap-2 mb-1">
                                                        <svg className="w-4 h-4 text-sky-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                        <a href={`mailto:${lead.email}`} className="hover:text-navy transition-colors">{lead.email}</a>
                                                    </div>
                                                    <div className="text-ink-muted flex items-center gap-2">
                                                        <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                                        <a href={`tel:${lead.phone}`} className="hover:text-navy transition-colors">{lead.phone}</a>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <div className="font-semibold text-navy bg-sky-100 px-3 py-1 rounded-full border border-sky-300 inline-block mb-2 text-xs">
                                                        {lead.service}
                                                    </div>
                                                    <div className="text-ink-muted font-medium">
                                                        Budget: <span className="text-ink font-semibold">{lead.budget || 'Not specified'}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-ink-soft">
                                                    <p className="line-clamp-3 overflow-hidden text-ellipsis leading-relaxed whitespace-pre-wrap max-w-md">
                                                        {lead.description}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-muted">
                                                    {new Date(lead.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end gap-4">
                                                    <a href={route('admin.leads.edit', lead.id)} className="text-navy hover:text-sky-500 font-semibold flex items-center gap-1 transition-colors">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                        Edit
                                                    </a>
                                                    <button onClick={() => handleDelete(lead.id)} className="text-red-600 hover:text-red-700 font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
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
