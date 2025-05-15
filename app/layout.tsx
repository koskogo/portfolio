import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Your Portfolio',
    description: 'Welcome to my professional portfolio showcasing my work and skills',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <nav className="bg-white shadow-sm">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="text-xl font-bold text-gray-800">
                            Theodor Schneider
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-600 hover:text-gray-900">
                                Home
                            </Link>
                            <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                                Projects
                            </Link>
                            <Link href="/about" className="text-gray-600 hover:text-gray-900">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                                Contact
                            </Link>
                        </div>
                        <button className="md:hidden">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
            <footer className="bg-gray-50 border-t">
                <div className="container mx-auto py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600">© 2024 Your Portfolio. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/impressum" className="text-gray-600 hover:text-gray-900">
                                Impressum
                            </Link>
                            <Link href="/datenschutz" className="text-gray-600 hover:text-gray-900">
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
