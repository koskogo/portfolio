import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I&apos;m a passionate developer creating beautiful and functional web experiences.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-gray-600 mb-8">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}