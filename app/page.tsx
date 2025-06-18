import Link from 'next/link'
import Image from 'next/image'

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
              I&apos;m a passionate developer
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Link href="/contact" className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Contact Me
              </Link>
            </div>
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mt-12">
              {/* Description and Skills */}
              <div className="text-left md:order-1 md:w-2/3 mt-6 md:mt-0">
                <p className="text-lg text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, massa erat ultricies enim, nec dictum ex enim eu sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc eu nunc.
                </p>
                <div>
                  <h2 className="text-xl font-semibold mb-2">IT Skills</h2>
                  <ul className="flex flex-wrap gap-3">
                    <li className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">JavaScript</li>
                    <li className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Python</li>
                    <li className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">React</li>
                    <li className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Next.js</li>
                  </ul>
                </div>
              </div>
              {/* Profile Picture */}
              <div className="flex-shrink-0 md:order-2 md:w-1/3 flex justify-center md:justify-end w-full">
                <Image
                  src="https://placehold.co/200x200"
                  alt="Profile Picture Placeholder"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-gray-200 bg-white shadow-md object-cover"
                />
              </div>
            </div>
            {/* End Profile Section */}
          </div>
        </div>
      </section>
    </div>
  )
}