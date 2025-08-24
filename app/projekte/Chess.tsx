import Link from 'next/link';
import { SiPython, SiGit, SiGithub, SiPycharm } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

export default function Chess() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-1">Chess Game</h1>
        <p className="text-lg text-muted mb-6">Ein vollständiges Schachspiel in Python, das alle Grundregeln des Schachspiels implementiert und eine interaktive Konsolenoberfläche bietet.</p>
        
        <div className="card mb-8">
          <h2 className="heading-2">Funktionen</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-body">
            <li>Vollständige Implementierung aller Schachregeln</li>
            <li>Interaktive Konsolenoberfläche mit ASCII-Art Brett</li>
            <li>Zugvalidierung für alle Schachfiguren</li>
            <li>Schachmatt- und Patt-Erkennung</li>
            <li>Rochade (kurze und lange Rochade)</li>
            <li>En Passant Züge</li>
            <li>Bauernumwandlung</li>
            <li>Spielstand-Tracking</li>
            <li>Zug-Historie</li>
            <li>Speichern und Laden von Spielständen</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="heading-2">Technologien & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-body">
              <SiPython className="text-green-500" size={20} />
              <span>Python 3.11+</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiGit className="text-orange-600" size={20} />
              <span>Git</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiGithub className="text-gray-800" size={20} />
              <span>GitHub</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiPycharm className="text-green-600" size={20} />
              <span>PyCharm</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <span className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VS</span>
              <span>VS Code</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <span className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold">T</span>
              <span>Terminal</span>
            </div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="heading-2">Projekt Details</h2>
          <div className="space-y-3 text-body">
            <div><strong>Projekttyp:</strong> Einzelprojekt</div>
            <div><strong>Entwicklungszeit:</strong> 3-4 Wochen</div>
            <div><strong>Status:</strong> Funktionsfähig</div>
            <div><strong>Schwierigkeitsgrad:</strong> Fortgeschritten</div>
            <div><strong>Architektur:</strong> Objektorientiert</div>
            <div><strong>Testabdeckung:</strong> Unit Tests</div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="heading-2">Code-Qualität</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-body">
            <li>Clean Code Prinzipien</li>
            <li>Dokumentierte Funktionen</li>
            <li>Type Hints</li>
            <li>Error Handling</li>
            <li>Modulare Architektur</li>
          </ul>
        </div>
        
        <div className="flex gap-4">
          <Link href="/" className="btn-primary">Zurück zur Übersicht</Link>
          <Link href="/projekte" className="btn-outline">Zurück zur Projektübersicht</Link>
          <a href="https://github.com/koskogo/chess" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
            <FaGithub size={16} />
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
