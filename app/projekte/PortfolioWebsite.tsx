import Link from 'next/link';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel, SiGit, SiGithub } from 'react-icons/si';
import { FaFigma, FaGithub } from 'react-icons/fa';

export default function PortfolioWebsite() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-1">Portfolio Website</h1>
        <p className="text-lg text-muted mb-6">Eine moderne, responsive Portfolio-Website zur Präsentation meiner Projekte und Fähigkeiten, entwickelt mit Next.js und TypeScript.</p>
        
        <div className="card mb-8">
          <h2 className="heading-2">Funktionen</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-body">
            <li>Individuelles Design mit modernem UI/UX</li>
            <li>Interaktive Projektgalerie mit detaillierten Projektseiten</li>
            <li>Kontaktformular mit E-Mail-Versand über API</li>
            <li>SEO-Optimierung und schnelle Ladezeiten</li>
            <li>Responsive Design für alle Geräte (Mobile-First)</li>
            <li>TypeScript für bessere Code-Qualität und Typsicherheit</li>
            <li>Dark/Light Mode Unterstützung</li>
            <li>Barrierefreiheit (WCAG 2.1 AA)</li>
            <li>Performance-Optimierung mit Next.js</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="heading-2">Technologien & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-body">
              <SiNextdotjs className="text-gray-800" size={20} />
              <span>Next.js 14</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiReact className="text-cyan-500" size={20} />
              <span>React 18</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiTypescript className="text-blue-600" size={20} />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiTailwindcss className="text-cyan-500" size={20} />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SiVercel className="text-black" size={20} />
              <span>Vercel Deployment</span>
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
              <FaFigma className="text-purple-600" size={20} />
              <span>Figma Design</span>
            </div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="heading-2">Projekt Details</h2>
          <div className="space-y-3 text-body">
            <div><strong>Projekttyp:</strong> Einzelprojekt</div>
            <div><strong>Entwicklungszeit:</strong> 2-3 Wochen</div>
            <div><strong>Status:</strong> Live & aktiv gewartet</div>
            <div><strong>Deployment:</strong> Vercel</div>
            <div><strong>Domain:</strong> Portfolio-Website</div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link href="/" className="btn-primary">Zurück zur Übersicht</Link>
          <Link href="/projekte" className="btn-outline">Zurück zur Projektübersicht</Link>
          <a href="https://github.com/koskogo/portfolio" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
            <FaGithub size={16} />
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
} 