import Link from 'next/link';

export default function TaskPlanner() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Task Planner</h1>
      <p className="mb-4">Der Task Planner ist eine moderne Web-App zur Organisation und Priorisierung von Aufgaben. Nutzer können Aufgaben anlegen, Deadlines setzen, Kategorien vergeben und den Fortschritt in Echtzeit verfolgen.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Intuitive Drag-and-Drop-Oberfläche</li>
        <li>Benachrichtigungen für anstehende Aufgaben</li>
        <li>Synchronisation über mehrere Geräte</li>
        <li>Statistiken und Auswertungen zur Produktivität</li>
      </ul>
      <p className="mb-4">Technologien: React, JavaScript, Firebase</p>
      <a href="https://github.com/koskogo/TaskPlanner" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200">Zum GitHub-Repository</a>
      <Link href="/" className="text-blue-600 underline">Zurück zur Übersicht</Link>
    </div>
  );
} 