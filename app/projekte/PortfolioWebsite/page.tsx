import Link from 'next/link';

export default function PortfolioWebsite() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Portfolio Website</h1>
      <p className="mb-4">Die Portfolio Website dient der Präsentation von Projekten, Fähigkeiten und Kontaktmöglichkeiten. Sie ist responsiv, barrierefrei und modern gestaltet.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Individuelles Design mit Dark Mode</li>
        <li>Interaktive Projektgalerie</li>
        <li>Kontaktformular mit E-Mail-Versand</li>
        <li>SEO-Optimierung und schnelle Ladezeiten</li>
      </ul>
      <p className="mb-4">Technologien: Next.js, React, Tailwind CSS</p>
      <a href="https://github.com/koskogo/PortfolioWebsite" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200">Zum GitHub-Repository</a>
      <Link href="/" className="text-blue-600 underline">Zurück zur Übersicht</Link>
    </div>
  );
} 