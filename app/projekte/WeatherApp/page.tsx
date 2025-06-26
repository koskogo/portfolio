import Link from 'next/link';
import { FaCloudSun, FaGithub } from 'react-icons/fa';

export default function WeatherApp() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-cyan-100 text-cyan-600 rounded-full p-4">
            <FaCloudSun size={36} />
          </div>
          <h1 className="text-3xl font-bold">Weather App</h1>
        </div>
        <p className="mb-6 text-gray-700 text-lg">Die Weather App liefert aktuelle Wetterdaten und Prognosen für jeden Ort weltweit. Nutzer können Favoriten speichern und erhalten Warnungen bei Unwettern.</p>
        <ul className="list-disc ml-8 mb-6 text-gray-800 space-y-1">
          <li>Live-Wetterdaten und 7-Tage-Vorhersage</li>
          <li>Interaktive Kartenansicht</li>
          <li>Push-Benachrichtigungen bei Wetterwarnungen</li>
          <li>Integration von OpenWeatherMap API</li>
        </ul>
        <div className="mb-6">
          <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">Python</span>
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">React</span>
          <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">REST-API</span>
        </div>
        <a href="https://github.com/koskogo/WeatherApp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow">
          <FaGithub size={20} /> GitHub-Repository
        </a>
        <div>
          <Link href="/" className="text-blue-600 hover:underline text-sm">← Zurück zur Übersicht</Link>
        </div>
      </div>
    </div>
  );
} 