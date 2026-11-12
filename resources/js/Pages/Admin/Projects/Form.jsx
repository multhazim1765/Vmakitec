import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function Form({ project }) {
    const isEditing = !!project;
    const [imagePreview, setImagePreview] = useState(null);

    const { data, setData, post, put, processing, errors, transform } = useForm({
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

        transform((data) => ({
            ...data,
            tech_stack: data.tech_stack ? data.tech_stack.split(',').map(s => s.trim()) : null,
            _method: isEditing ? 'put' : undefined,
        }));

        if (isEditing) {
            post(route('admin.projects.update', project.id), {
                forceFormData: true,
            });
        } else {
            post(route('admin.projects.store'), {
                forceFormData: true,
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-display text-xl font-extrabold leading-tight text-navy uppercase tracking-wider">
                        {isEditing ? 'Edit Project' : 'Add New Project'}
                    </h2>
                    <Link
                        href={route('admin.projects.index')}
                        className="inline-flex items-center rounded-full bg-sky-100 border border-sky-300 text-navy hover:border-sky-400 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                        &larr; Back to Portfolio
                    </Link>
                </div>
            }
        >
            <Head title={isEditing ? 'Edit Project' : 'Add Project'} />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="cube-card-static shadow-glass rounded-3xl overflow-hidden">
                        <form onSubmit={submit} className="p-6 space-y-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel htmlFor="client_name" value="Client Name *" className="text-ink-soft" />
                                    <TextInput
                                        id="client_name"
                                        className="mt-1 block w-full bg-white border-sky-300 rounded-xl text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15"
                                        value={data.client_name}
                                        onChange={(e) => setData('client_name', e.target.value)}
                                        required
                                    />
                                    <InputError className="mt-2" message={errors.client_name} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="industry" value="Industry" className="text-ink-soft" />
                                    <TextInput
                                        id="industry"
                                        className="mt-1 block w-full bg-white border-sky-300 rounded-xl text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15"
                                        value={data.industry}
                                        onChange={(e) => setData('industry', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.industry} />
                                </div>
                            </div>

                            <div>
                                <InputLabel htmlFor="challenge" value="Challenge" className="text-ink-soft" />
                                <textarea
                                    id="challenge"
                                    className="mt-1 block w-full bg-white border-sky-300 rounded-xl text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 shadow-sm"
                                    rows="3"
                                    value={data.challenge}
                                    onChange={(e) => setData('challenge', e.target.value)}
                                ></textarea>
                                <InputError className="mt-2" message={errors.challenge} />
                            </div>

                            <div>
                                <InputLabel htmlFor="solution" value="Solution" className="text-ink-soft" />
                                <textarea
                                    id="solution"
                                    className="mt-1 block w-full bg-white border-sky-300 rounded-xl text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 shadow-sm"
                                    rows="3"
                                    value={data.solution}
                                    onChange={(e) => setData('solution', e.target.value)}
                                ></textarea>
                                <InputError className="mt-2" message={errors.solution} />
                            </div>

                            <div>
                                <InputLabel htmlFor="outcome" value="Outcome" className="text-ink-soft" />
                                <textarea
                                    id="outcome"
                                    className="mt-1 block w-full bg-white border-sky-300 rounded-xl text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 shadow-sm"
                                    rows="3"
                                    value={data.outcome}
                                    onChange={(e) => setData('outcome', e.target.value)}
                                ></textarea>
                                <InputError className="mt-2" message={errors.outcome} />
                            </div>

                            <div>
                                <InputLabel htmlFor="tech_stack" value="Tech Stack (comma separated)" className="text-ink-soft" />
                                <TextInput
                                    id="tech_stack"
                                    className="mt-1 block w-full bg-white border-sky-300 rounded-xl text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15"
                                    value={data.tech_stack}
                                    placeholder="e.g. React, Laravel, TailwindCSS"
                                    onChange={(e) => setData('tech_stack', e.target.value)}
                                />
                                <InputError className="mt-2" message={errors.tech_stack} />
                            </div>

                            <div>
                                <InputLabel htmlFor="link" value="Project URL/Link" className="text-ink-soft" />
                                <TextInput
                                    id="link"
                                    type="url"
                                    className="mt-1 block w-full bg-white border-sky-300 rounded-xl text-ink placeholder:text-ink-muted/60 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15"
                                    value={data.link}
                                    onChange={(e) => setData('link', e.target.value)}
                                />
                                <InputError className="mt-2" message={errors.link} />
                            </div>

                            <div>
                                <InputLabel htmlFor="image" value={isEditing ? "Update Image (optional)" : "Project Image"} className="text-ink-soft" />
                                <input
                                    id="image"
                                    type="file"
                                    className="mt-1 block w-full text-sm text-ink-soft file:mr-4 file:py-2 file:px-4 file:rounded-full file:border file:border-solid file:border-sky-300 file:text-xs file:font-semibold file:uppercase file:tracking-wider file:bg-sky-100 file:text-navy hover:file:border-sky-400 hover:file:bg-sky-50 file:transition-colors"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setData('image', file);
                                        if (file) {
                                            setImagePreview(URL.createObjectURL(file));
                                        } else {
                                            setImagePreview(null);
                                        }
                                    }}
                                    accept="image/*"
                                />
                                <InputError className="mt-2" message={errors.image} />
                                {imagePreview && (
                                    <div className="mt-2">
                                        <p className="text-sm text-ink-muted mb-2">Selected Image Preview:</p>
                                        <img src={imagePreview} alt="Preview" className="h-32 object-contain rounded-xl border border-sky-300 bg-white p-1" />
                                    </div>
                                )}
                                {!imagePreview && isEditing && project.image_path && (
                                    <div className="mt-2">
                                        <p className="text-sm text-ink-muted mb-2">Current Image:</p>
                                        <img src={project.image_path} alt="Current" className="h-32 object-contain rounded-xl border border-sky-300 bg-white p-1" />
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="ml-4 inline-flex items-center rounded-full bg-navy text-white hover:bg-navy-hover shadow-cube px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
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



