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
      <Link href="/" className="text-blue-600 underline">Zurück zur Übersicht</Link>
    </div>
  );
} 