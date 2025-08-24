import Link from 'next/link';
import { SiTypescript, SiReact, SiGit, SiGithub, SiNpm, SiHtml5, SiCss3, SiBootstrap, SiNodedotjs } from 'react-icons/si';
import { FaUsers, FaDatabase, FaMobile, FaGithub } from 'react-icons/fa';

export default function MensaApp() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-1">M462 Mensa App</h1>
        <p className="text-lg text-muted mb-6">Eine moderne Mensa-Anwendung für Schüler und Studenten, entwickelt im Team mit TypeScript und React. Die App hilft bei der Suche nach Speiseplänen und Mensa-Informationen.</p>
        
        <div className="card mb-8">
          <h2 className="heading-2">Funktionen</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-body">
            <li>Anzeige von aktuellen Speiseplänen</li>
            <li>Benutzerfreundliche Oberfläche</li>
            <li>Responsive Design für verschiedene Geräte</li>
            <li>Integration mit Mensa-Daten</li>
            <li>Suchfunktion für Gerichte</li>
            <li>Allergen-Informationen</li>
            <li>Preisübersicht</li>
            <li>Öffnungszeiten und Standorte</li>
            <li>Push-Benachrichtigungen</li>
            <li>Offline-Funktionalität</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="heading-2">Technologien & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-body">
              <SiTypescript className="text-blue-600" size={20} />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiReact className="text-cyan-500" size={20} />
              <span>React.js</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiNodedotjs className="text-green-600" size={20} />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiHtml5 className="text-orange-500" size={20} />
              <span>HTML5</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiCss3 className="text-blue-500" size={20} />
              <span>CSS3</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiBootstrap className="text-purple-600" size={20} />
              <span>Bootstrap</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiNpm className="text-red-500" size={20} />
              <span>npm</span>
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
              <FaDatabase className="text-blue-600" size={20} />
              <span>Database</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <FaMobile className="text-green-600" size={20} />
              <span>Mobile-First</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <FaUsers className="text-blue-600" size={20} />
              <span>Team Project</span>
            </div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="heading-2">Projekt Details</h2>
          <div className="space-y-3 text-body">
            <div><strong>Projekttyp:</strong> Teamprojekt (Schulprojekt)</div>
            <div><strong>Teamgröße:</strong> 4-5 Entwickler</div>
            <div><strong>Entwicklungszeit:</strong> 8-10 Wochen</div>
            <div><strong>Status:</strong> In Entwicklung</div>
            <div><strong>Kurs:</strong> M462 - Web Development</div>
            <div><strong>Zielgruppe:</strong> Schüler & Studenten</div>
            <div><strong>Plattform:</strong> Web App (PWA)</div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="heading-2">Team & Rollen</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-body">
            <li><strong>Frontend Development:</strong> React.js, TypeScript, UI/UX</li>
            <li><strong>Backend Development:</strong> Node.js, API Development</li>
            <li><strong>Database Design:</strong> Datenmodellierung, Integration</li>
            <li><strong>Project Management:</strong> Scrum, Dokumentation</li>
            <li><strong>Testing & QA:</strong> Unit Tests, Integration Tests</li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="heading-2">Entwicklungsprozess</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-body">
            <li>Agile Entwicklung mit Scrum</li>
            <li>Wöchentliche Sprints</li>
            <li>Code Reviews und Pair Programming</li>
            <li>Continuous Integration/Deployment</li>
            <li>User Testing und Feedback</li>
            <li>Dokumentation und Präsentation</li>
          </ul>
        </div>
        
        <div className="flex gap-4">
          <Link href="/" className="btn-primary">Zurück zur Übersicht</Link>
          <Link href="/projekte" className="btn-outline">Zurück zur Projektübersicht</Link>
          <a href="https://github.com/koskogo/M462_Mensaapp" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
            <FaGithub size={16} />
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
