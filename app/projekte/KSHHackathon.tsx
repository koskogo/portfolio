import Link from 'next/link';
import { SiJavascript, SiReact, SiGit, SiGithub, SiNpm, SiHtml5, SiCss3, SiBootstrap } from 'react-icons/si';
import { FaUsers, FaGithub } from 'react-icons/fa';

export default function KSHHackathon() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-1">KSH Hackathon 2025</h1>
        <p className="text-lg text-muted mb-6">Ein innovatives Projekt für das erste KSH Hackathon 2025, entwickelt im Team mit modernen Web-Technologien und kreativen Lösungsansätzen.</p>
        
        <div className="card mb-8">
          <h2 className="heading-2">Funktionen</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-body">
            <li>Innovative Lösung für die Hackathon-Herausforderung</li>
            <li>Moderne Web-Technologien und Frameworks</li>
            <li>Kollaborative Entwicklung im Team</li>
            <li>Präsentation der Ergebnisse vor einer Jury</li>
            <li>Responsive Web-Design</li>
            <li>Interaktive Benutzeroberfläche</li>
            <li>Real-time Datenverarbeitung</li>
            <li>API-Integration</li>
            <li>Performance-Optimierung</li>
            <li>Cross-Browser Kompatibilität</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="heading-2">Technologien & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-body">
              <SiJavascript className="text-yellow-500" size={20} />
              <span>JavaScript ES6+</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiReact className="text-cyan-500" size={20} />
              <span>React.js</span>
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
              <FaUsers className="text-blue-600" size={20} />
              <span>Team Collaboration</span>
            </div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="heading-2">Projekt Details</h2>
          <div className="space-y-3 text-body">
            <div><strong>Projekttyp:</strong> Teamprojekt (Hackathon)</div>
            <div><strong>Teamgröße:</strong> 3-4 Entwickler</div>
            <div><strong>Entwicklungszeit:</strong> 48 Stunden (Hackathon)</div>
            <div><strong>Status:</strong> Abgeschlossen</div>
            <div><strong>Event:</strong> KSH Hackathon 2025</div>
            <div><strong>Platzierung:</strong> Top 5 Finalisten</div>
            <div><strong>Kategorie:</strong> Innovation & Kreativität</div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="heading-2">Team & Rollen</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-body">
            <li><strong>Frontend Development:</strong> React.js, UI/UX Design</li>
            <li><strong>Backend Integration:</strong> API Development, Datenverarbeitung</li>
            <li><strong>Project Management:</strong> Scrum, Zeitmanagement</li>
            <li><strong>Presentation:</strong> Demo-Vorbereitung, Pitch</li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="heading-2">Hackathon Erfahrung</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-body">
            <li>Intensive 48-Stunden Entwicklungsphase</li>
            <li>Kollaborative Problemlösung im Team</li>
            <li>Rapid Prototyping und Iteration</li>
            <li>Präsentation vor Experten-Jury</li>
            <li>Networking mit anderen Entwicklern</li>
            <li>Feedback von Branchenexperten</li>
          </ul>
        </div>
        
        <div className="flex gap-4">
          <Link href="/" className="btn-primary">Zurück zur Übersicht</Link>
          <Link href="/projekte" className="btn-outline">Zurück zur Projektübersicht</Link>
          <a href="https://github.com/koskogo/ksh_hackathon" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
            <FaGithub size={16} />
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
