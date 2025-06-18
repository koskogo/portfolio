import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-xl font-bold text-gray-900">
                                Portfolio
                            </Link>
                        </div>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link
                                href="/"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                            >
                                Home
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <MobileMenu />
                </div>
            </nav>
        </header>
    );
} 