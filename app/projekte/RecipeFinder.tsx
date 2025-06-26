import Link from 'next/link';

export default function RecipeFinder() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Recipe Finder</h1>
      <p className="mb-4">Mit dem Recipe Finder können Nutzer Rezepte anhand der vorhandenen Zutaten finden. Die App schlägt kreative Rezepte vor und bietet Schritt-für-Schritt-Anleitungen.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Zutaten-Scanner per Kamera oder Texteingabe</li>
        <li>Filter nach Ernährungsform (vegan, glutenfrei, etc.)</li>
        <li>Favoriten- und Einkaufslistenfunktion</li>
        <li>Bewertungen und Kommentare zu Rezepten</li>
      </ul>
      <p className="mb-4">Technologien: React, Next.js, Node.js</p>
      <Link href="/" className="text-blue-600 underline">Zurück zur Übersicht</Link>
    </div>
  );
} 