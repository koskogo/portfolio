import Link from 'next/link'
import Image from 'next/image'
import { SiJavascript, SiPython, SiNextdotjs } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mt-12">
              {/* Description and Skills */}
              <div className="text-left md:order-1 md:w-2/3 mt-6 md:mt-0">
                <p className="text-lg text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, massa erat ultricies enim, nec dictum ex enim eu sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc eu nunc.
                </p>
                <div>
                  <h2 className="text-xl font-semibold mb-2">IT Skills</h2>
                  <ul className="flex flex-wrap gap-3 mb-8">
                    <li className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium flex items-center"><span className="text-blue-800"><SiJavascript size={24} title="JavaScript" /></span></li>
                    <li className="px-3 py-1 bg-green-100 rounded-full text-sm font-medium flex items-center"><span className="text-green-800"><SiPython size={24} title="Python" /></span></li>
                    <li className="px-3 py-1 bg-cyan-100 rounded-full text-sm font-medium flex items-center"><span className="text-cyan-800"><FaReact size={24} title="React" /></span></li>
                    <li className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium flex items-center"><span className="text-gray-800"><SiNextdotjs size={24} title="Next.js" /></span></li>
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
          {/* Projects Section - now full width and centered in viewport */}
          <div className="w-full flex flex-col items-center justify-center mt-16">
            <div className="flex flex-col gap-10 w-full max-w-3xl px-4">
              {/* Project Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8 min-h-[220px]">
                <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  <Image src="/window.svg" alt="Task Planner" width={100} height={100} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold mb-2">Task Planner</h3>
                  <p className="text-lg text-gray-600 mb-4">A productivity app to organize, prioritize, and track your daily tasks efficiently.</p>
                  <div className="flex gap-4">
                    <span className="text-yellow-500"><SiJavascript size={32} title="JavaScript" /></span>
                    <span className="text-cyan-500"><FaReact size={32} title="React" /></span>
                  </div>
                </div>
              </div>
              {/* Project Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8 min-h-[220px]">
                <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  <Image src="/globe.svg" alt="Weather App" width={100} height={100} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold mb-2">Weather App</h3>
                  <p className="text-lg text-gray-600 mb-4">A real-time weather application providing forecasts and current conditions for any location.</p>
                  <div className="flex gap-4">
                    <span className="text-green-500"><SiPython size={32} title="Python" /></span>
                  </div>
                </div>
              </div>
              {/* Project Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8 min-h-[220px]">
                <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  <Image src="/file.svg" alt="Recipe Finder" width={100} height={100} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold mb-2">Recipe Finder</h3>
                  <p className="text-lg text-gray-600 mb-4">An app to search and discover recipes based on ingredients you have at home.</p>
                  <div className="flex gap-4">
                    <span className="text-cyan-500"><FaReact size={32} title="React" /></span>
                    <span className="text-gray-800"><SiNextdotjs size={32} title="Next.js" /></span>
                  </div>
                </div>
              </div>
              {/* Project Card 4 */}
              <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8 min-h-[220px]">
                <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  <Image src="/next.svg" alt="Portfolio Website" width={100} height={100} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>
                  <p className="text-lg text-gray-600 mb-4">A personal portfolio website to showcase projects, skills, and contact information.</p>
                  <div className="flex gap-4">
                    <span className="text-yellow-500"><SiJavascript size={32} title="JavaScript" /></span>
                    <span className="text-gray-800"><SiNextdotjs size={32} title="Next.js" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Me Button moved below Projects */}
          <div className="flex justify-center gap-4 mt-12">
            <Link href="/contact" className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}