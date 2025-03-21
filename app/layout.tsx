export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
        </head>
        <body>
        <header style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <p>About ME</p>
            <p>Projects</p>
            <p>Contact</p>
        </header>
        <main>{children}</main>
        <footer>
            <p>Email: Mail@mail.com</p>
            <p>Phone: +41 99 999 99 99</p>
            <p>githublink</p>
        </footer>
        </body>
        </html>
    )
}
