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
                    <h2 className="text-xl font-bold leading-tight text-slate-100 uppercase tracking-wider">
                        Manage Portfolio
                    </h2>
                    <Link
                        href={route('admin.projects.create')}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-sm uppercase tracking-wider"
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
                        <div className="mb-4 bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded relative">
                            {success}
                        </div>
                    )}

                    <div className="bg-slate-800 shadow-xl sm:rounded-lg overflow-hidden border border-slate-700">
                        <table className="min-w-full divide-y divide-slate-700">
                            <thead className="bg-slate-900">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Client Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Industry</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Tech Stack</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-slate-800 divide-y divide-slate-700">
                                {projects.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-sm text-slate-400 text-center">
                                            No projects found. Add one to get started.
                                        </td>
                                    </tr>
                                ) : (
                                    projects.map((project) => (
                                        <tr key={project.id} className="hover:bg-slate-750 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                                {project.client_name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                                                {project.industry}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                                                {project.tech_stack ? project.tech_stack.join(', ') : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                <Link href={route('admin.projects.edit', project.id)} className="text-blue-400 hover:text-blue-300">Edit</Link>
                                                <button onClick={() => handleDelete(project.id)} className="text-red-400 hover:text-red-300">Delete</button>
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
