import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function Form({ service }) {
    const isEditing = !!service;

    const { data, setData, post, put, processing, errors } = useForm({
        title: service?.title || '',
        starting_price: service?.starting_price || '',
        features: service?.features ? service.features.join('\n') : '',
        icon_svg: service?.icon_svg || '',
    });

    const submit = (e) => {
        e.preventDefault();

        // Convert features string (newline separated) to array
        const payload = {
            ...data,
            features: data.features ? data.features.split('\n').map(s => s.trim()).filter(s => s) : null,
        };

        if (isEditing) {
            put(route('admin.services.update', service.id), { data: payload });
        } else {
            post(route('admin.services.store'), { data: payload });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold leading-tight text-slate-100 uppercase tracking-wider">
                        {isEditing ? 'Edit Service' : 'Add New Service'}
                    </h2>
                    <Link
                        href={route('admin.services.index')}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        &larr; Back to Services
                    </Link>
                </div>
            }
        >
            <Head title={isEditing ? 'Edit Service' : 'Add Service'} />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-slate-800 shadow-xl sm:rounded-lg overflow-hidden border border-slate-700">
                        <form onSubmit={submit} className="p-6 space-y-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel htmlFor="title" value="Service Title *" className="text-slate-300" />
                                    <TextInput
                                        id="title"
                                        className="mt-1 block w-full bg-slate-900 border-slate-700 text-white focus:border-indigo-500 focus:ring-indigo-500"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        required
                                    />
                                    <InputError className="mt-2" message={errors.title} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="starting_price" value="Starting Price (e.g. ₹3,999)" className="text-slate-300" />
                                    <TextInput
                                        id="starting_price"
                                        className="mt-1 block w-full bg-slate-900 border-slate-700 text-white focus:border-indigo-500 focus:ring-indigo-500"
                                        value={data.starting_price}
                                        onChange={(e) => setData('starting_price', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.starting_price} />
                                </div>
                            </div>

                            <div>
                                <InputLabel htmlFor="features" value="Features (one per line)" className="text-slate-300" />
                                <textarea
                                    id="features"
                                    className="mt-1 block w-full rounded-md bg-slate-900 border-slate-700 text-white focus:border-indigo-500 focus:ring-indigo-500 shadow-sm font-mono text-sm"
                                    rows="6"
                                    placeholder="Business Websites&#10;Corporate Websites&#10;Portfolio Websites"
                                    value={data.features}
                                    onChange={(e) => setData('features', e.target.value)}
                                ></textarea>
                                <InputError className="mt-2" message={errors.features} />
                            </div>

                            <div>
                                <InputLabel htmlFor="icon_svg" value="Icon SVG Code (raw html)" className="text-slate-300" />
                                <textarea
                                    id="icon_svg"
                                    className="mt-1 block w-full rounded-md bg-slate-900 border-slate-700 text-white focus:border-indigo-500 focus:ring-indigo-500 shadow-sm font-mono text-xs"
                                    rows="4"
                                    placeholder="<svg>...</svg>"
                                    value={data.icon_svg}
                                    onChange={(e) => setData('icon_svg', e.target.value)}
                                ></textarea>
                                <InputError className="mt-2" message={errors.icon_svg} />
                                {data.icon_svg && (
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="text-xs text-slate-400">Preview:</span>
                                        <div className="w-8 h-8 text-indigo-400" dangerouslySetInnerHTML={{ __html: data.icon_svg }}></div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="ml-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded uppercase tracking-widest transition-colors disabled:opacity-50"
                                >
                                    {processing ? 'Saving...' : 'Save Service'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
