import Link from 'next/link';
import { FaUtensils, FaGithub } from 'react-icons/fa';

export default function RecipeFinder() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gradient-to-br from-pink-50 to-orange-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-pink-100 text-pink-600 rounded-full p-4">
            <FaUtensils size={36} />
          </div>
          <h1 className="text-3xl font-bold">Recipe Finder</h1>
        </div>
        <p className="mb-6 text-gray-700 text-lg">Mit dem Recipe Finder können Nutzer Rezepte anhand der vorhandenen Zutaten finden. Die App schlägt kreative Rezepte vor und bietet Schritt-für-Schritt-Anleitungen.</p>
        <ul className="list-disc ml-8 mb-6 text-gray-800 space-y-1">
          <li>Zutaten-Scanner per Kamera oder Texteingabe</li>
          <li>Filter nach Ernährungsform (vegan, glutenfrei, etc.)</li>
          <li>Favoriten- und Einkaufslistenfunktion</li>
          <li>Bewertungen und Kommentare zu Rezepten</li>
        </ul>
        <div className="mb-6">
          <span className="inline-block bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">React</span>
          <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">Next.js</span>
          <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Node.js</span>
        </div>
        <a href="https://github.com/koskogo/RecipeFinder" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow">
          <FaGithub size={20} /> GitHub-Repository
        </a>
        <div>
          <Link href="/" className="text-blue-600 hover:underline text-sm">← Zurück zur Übersicht</Link>
        </div>
      </div>
    </div>
  );
} 