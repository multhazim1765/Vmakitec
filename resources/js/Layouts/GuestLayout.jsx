import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-canvas px-4 pt-6 text-ink sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-navy" />
                </Link>
            </div>

            <div className="cube-card-static mt-6 w-full overflow-hidden rounded-3xl px-6 py-8 shadow-cube sm:max-w-md sm:px-8">
                {children}
            </div>
        </div>
    );
}
