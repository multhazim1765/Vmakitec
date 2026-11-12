import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ projects, success }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            destroy(route('admin.projects.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-display text-xl font-extrabold leading-tight text-navy uppercase tracking-wider">
                        Manage Portfolio
                    </h2>
                    <Link
                        href={route('admin.projects.create')}
                        className="inline-flex items-center rounded-full bg-navy text-white hover:bg-navy-hover shadow-cube px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                        Add New Project
                    </Link>
                </div>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {success && (
                        <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-2xl relative shadow-cube">
                            {success}
                        </div>
                    )}

                    <div className="cube-card-static shadow-glass rounded-3xl overflow-hidden">
                        <table className="min-w-full divide-y divide-line">
                            <thead className="bg-sky-100/60">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-left">Client Name</th>
                                    <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-left">Industry</th>
                                    <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-left">Tech Stack</th>
                                    <th scope="col" className="px-6 py-4 text-[11px] font-bold text-ink-muted uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white/70 divide-y divide-line">
                                {projects.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-8 whitespace-nowrap text-sm text-ink-muted text-center">
                                            No projects found. Add one to get started.
                                        </td>
                                    </tr>
                                ) : (
                                    projects.map((project) => (
                                        <tr key={project.id} className="hover:bg-sky-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-navy">
                                                {project.client_name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-soft">
                                                {project.industry}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-soft">
                                                {project.tech_stack ? project.tech_stack.join(', ') : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                <Link href={route('admin.projects.edit', project.id)} className="text-navy hover:text-sky-500 font-semibold transition-colors">Edit</Link>
                                                <button onClick={() => handleDelete(project.id)} className="text-red-600 hover:text-red-700 font-semibold transition-colors">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


