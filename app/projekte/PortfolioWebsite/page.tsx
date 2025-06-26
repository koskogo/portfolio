import Link from 'next/link';
import { FaLaptopCode, FaGithub } from 'react-icons/fa';

export default function PortfolioWebsite() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gray-200 text-gray-700 rounded-full p-4">
            <FaLaptopCode size={36} />
          </div>
          <h1 className="text-3xl font-bold">Portfolio Website</h1>
        </div>
        <p className="mb-6 text-gray-700 text-lg">Die Portfolio Website dient der Präsentation von Projekten, Fähigkeiten und Kontaktmöglichkeiten. Sie ist responsiv, barrierefrei und modern gestaltet.</p>
        <ul className="list-disc ml-8 mb-6 text-gray-800 space-y-1">
          <li>Individuelles Design mit Dark Mode</li>
          <li>Interaktive Projektgalerie</li>
          <li>Kontaktformular mit E-Mail-Versand</li>
          <li>SEO-Optimierung und schnelle Ladezeiten</li>
        </ul>
        <div className="mb-6">
          <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">Next.js</span>
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">React</span>
          <span className="inline-block bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
        </div>
        <a href="https://github.com/koskogo/PortfolioWebsite" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow">
          <FaGithub size={20} /> GitHub-Repository
        </a>
        <div>
          <Link href="/" className="text-blue-600 hover:underline text-sm">← Zurück zur Übersicht</Link>
        </div>
      </div>
    </div>
  );
} 