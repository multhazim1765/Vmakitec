import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function Form({ project }) {
    const isEditing = !!project;

    const { data, setData, post, put, processing, errors } = useForm({
        client_name: project?.client_name || '',
        industry: project?.industry || '',
        challenge: project?.challenge || '',
        solution: project?.solution || '',
        outcome: project?.outcome || '',
        tech_stack: project?.tech_stack ? project.tech_stack.join(', ') : '',
        link: project?.link || '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        // Convert tech_stack string to array before submission if needed, or handle in backend.
        // The backend validation expects an array, so let's format it here.
        const payload = {
            ...data,
            tech_stack: data.tech_stack ? data.tech_stack.split(',').map(s => s.trim()) : null,
        };

        if (isEditing) {
            // Inertia doesn't support PUT with FormData (files), so we fake it with _method
            payload._method = 'put';
            post(route('admin.projects.update', project.id), {
                data: payload,
                forceFormData: true,
            });
        } else {
            post(route('admin.projects.store'), {
                data: payload,
                forceFormData: true,
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold leading-tight text-slate-100 uppercase tracking-wider">
                        {isEditing ? 'Edit Project' : 'Add New Project'}
                    </h2>
                    <Link
                        href={route('admin.projects.index')}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        &larr; Back to Portfolio
                    </Link>
                </div>
            }
        >
            <Head title={isEditing ? 'Edit Project' : 'Add Project'} />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-slate-800 shadow-xl sm:rounded-lg overflow-hidden border border-slate-700">
                        <form onSubmit={submit} className="p-6 space-y-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel htmlFor="client_name" value="Client Name *" className="text-slate-300" />
                                    <TextInput
                                        id="client_name"
                                        className="mt-1 block w-full bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                        value={data.client_name}
                                        onChange={(e) => setData('client_name', e.target.value)}
                                        required
                                    />
                                    <InputError className="mt-2" message={errors.client_name} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="industry" value="Industry" className="text-slate-300" />
                                    <TextInput
                                        id="industry"
                                        className="mt-1 block w-full bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                        value={data.industry}
                                        onChange={(e) => setData('industry', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.industry} />
                                </div>
                            </div>

                            <div>
                                <InputLabel htmlFor="challenge" value="Challenge" className="text-slate-300" />
                                <textarea
                                    id="challenge"
                                    className="mt-1 block w-full rounded-md bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                    rows="3"
                                    value={data.challenge}
                                    onChange={(e) => setData('challenge', e.target.value)}
                                ></textarea>
                                <InputError className="mt-2" message={errors.challenge} />
                            </div>

                            <div>
                                <InputLabel htmlFor="solution" value="Solution" className="text-slate-300" />
                                <textarea
                                    id="solution"
                                    className="mt-1 block w-full rounded-md bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                    rows="3"
                                    value={data.solution}
                                    onChange={(e) => setData('solution', e.target.value)}
                                ></textarea>
                                <InputError className="mt-2" message={errors.solution} />
                            </div>

                            <div>
                                <InputLabel htmlFor="outcome" value="Outcome" className="text-slate-300" />
                                <textarea
                                    id="outcome"
                                    className="mt-1 block w-full rounded-md bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                    rows="3"
                                    value={data.outcome}
                                    onChange={(e) => setData('outcome', e.target.value)}
                                ></textarea>
                                <InputError className="mt-2" message={errors.outcome} />
                            </div>

                            <div>
                                <InputLabel htmlFor="tech_stack" value="Tech Stack (comma separated)" className="text-slate-300" />
                                <TextInput
                                    id="tech_stack"
                                    className="mt-1 block w-full bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                    value={data.tech_stack}
                                    placeholder="e.g. React, Laravel, TailwindCSS"
                                    onChange={(e) => setData('tech_stack', e.target.value)}
                                />
                                <InputError className="mt-2" message={errors.tech_stack} />
                            </div>

                            <div>
                                <InputLabel htmlFor="link" value="Project URL/Link" className="text-slate-300" />
                                <TextInput
                                    id="link"
                                    type="url"
                                    className="mt-1 block w-full bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                    value={data.link}
                                    onChange={(e) => setData('link', e.target.value)}
                                />
                                <InputError className="mt-2" message={errors.link} />
                            </div>

                            <div>
                                <InputLabel htmlFor="image" value={isEditing ? "Update Image (optional)" : "Project Image"} className="text-slate-300" />
                                <input
                                    id="image"
                                    type="file"
                                    className="mt-1 block w-full text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-blue-200 hover:file:bg-blue-800"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                    accept="image/*"
                                />
                                <InputError className="mt-2" message={errors.image} />
                                {isEditing && project.image_path && (
                                    <div className="mt-2">
                                        <p className="text-sm text-slate-400 mb-2">Current Image:</p>
                                        <img src={`/storage/${project.image_path}`} alt="Current" className="h-32 object-contain rounded border border-slate-700" />
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="ml-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded uppercase tracking-widest transition-colors disabled:opacity-50"
                                >
                                    {processing ? 'Saving...' : 'Save Project'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
