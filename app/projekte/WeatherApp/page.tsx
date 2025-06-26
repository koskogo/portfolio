import Link from 'next/link';

export default function WeatherApp() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Weather App</h1>
      <p className="mb-4">Die Weather App liefert aktuelle Wetterdaten und Prognosen für jeden Ort weltweit. Nutzer können Favoriten speichern und erhalten Warnungen bei Unwettern.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Live-Wetterdaten und 7-Tage-Vorhersage</li>
        <li>Interaktive Kartenansicht</li>
        <li>Push-Benachrichtigungen bei Wetterwarnungen</li>
        <li>Integration von OpenWeatherMap API</li>
      </ul>
      <p className="mb-4">Technologien: Python, React, REST-API</p>
      <a href="https://github.com/koskogo/WeatherApp" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200">Zum GitHub-Repository</a>
      <Link href="/" className="text-blue-600 underline">Zurück zur Übersicht</Link>
    </div>
  );
} 