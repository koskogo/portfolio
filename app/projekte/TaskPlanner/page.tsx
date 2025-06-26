import Link from 'next/link';
import { FaTasks, FaGithub } from 'react-icons/fa';

export default function TaskPlanner() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-100 text-blue-600 rounded-full p-4">
            <FaTasks size={36} />
          </div>
          <h1 className="text-3xl font-bold">Task Planner</h1>
        </div>
        <p className="mb-6 text-gray-700 text-lg">Der Task Planner ist eine moderne Web-App zur Organisation und Priorisierung von Aufgaben. Nutzer können Aufgaben anlegen, Deadlines setzen, Kategorien vergeben und den Fortschritt in Echtzeit verfolgen.</p>
        <ul className="list-disc ml-8 mb-6 text-gray-800 space-y-1">
          <li>Intuitive Drag-and-Drop-Oberfläche</li>
          <li>Benachrichtigungen für anstehende Aufgaben</li>
          <li>Synchronisation über mehrere Geräte</li>
          <li>Statistiken und Auswertungen zur Produktivität</li>
        </ul>
        <div className="mb-6">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">React</span>
          <span className="inline-block bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">JavaScript</span>
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Firebase</span>
        </div>
        <a href="https://github.com/koskogo/TaskPlanner" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow">
          <FaGithub size={20} /> GitHub-Repository
        </a>
        <div>
          <Link href="/" className="text-blue-600 hover:underline text-sm">← Zurück zur Übersicht</Link>
        </div>
      </div>
    </div>
  );
} 