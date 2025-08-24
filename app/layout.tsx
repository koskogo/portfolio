import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import MobileMenu from './components/MobileMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Theodor Schneider - Portfolio',
    description: 'Professional portfolio showcasing web development projects and skills',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-200">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                            Theodor Schneider
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Home
                            </Link>
                            <Link href="/projekte" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Projekte
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Contact
                            </Link>
                        </div>
                        <MobileMenu />
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-16 pb-32">
                {children}
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
                <div className="container mx-auto py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm">© 2024 Theodor Schneider. All rights reserved.</p>
                        <div className="flex space-x-6 mt-2 md:mt-0">
                            <Link href="/impressum" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                                Impressum
                            </Link>
                            <Link href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                                Datenschutz
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </body>
        </html>
    )
}
