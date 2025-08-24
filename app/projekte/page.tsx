'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiJavascript, SiPython, SiNextdotjs, SiTypescript, SiReact, SiHtml5, SiCss3, SiBootstrap, SiNodedotjs } from 'react-icons/si';
import { FaReact, FaGithub } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  icon: string;
  githubUrl: string;
  projectUrl: string;
  badges: string[];
}

const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Eine moderne, responsive Portfolio-Website zur Präsentation meiner Projekte und Fähigkeiten, entwickelt mit Next.js und TypeScript.',
    type: 'Einzelprojekt',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS3'],
    icon: '📁',
    githubUrl: 'https://github.com/koskogo/portfolio',
    projectUrl: '/projekte/PortfolioWebsite',
    badges: ['Einzelprojekt']
  },
  {
    id: 'chess',
    title: 'Chess Game',
    description: 'Ein vollständiges Schachspiel in Python mit allen Regeln, entwickelt mit objektorientierter Programmierung und umfassender Spiellogik.',
    type: 'Einzelprojekt',
    technologies: ['Python'],
    icon: '♔',
    githubUrl: 'https://github.com/koskogo/chess',
    projectUrl: '/projekte/Chess',
    badges: ['Einzelprojekt']
  },
  {
    id: 'ksh-hackathon',
    title: 'KSH Hackathon 2025',
    description: 'Ein innovatives Projekt für das erste KSH Hackathon 2025, entwickelt im Team mit modernen Web-Technologien und kreativen Lösungsansätzen.',
    type: 'Teamprojekt',
    technologies: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap'],
    icon: '🏆',
    githubUrl: 'https://github.com/koskogo/ksh_hackathon',
    projectUrl: '/projekte/KSHHackathon',
    badges: ['Teamprojekt', 'Hackathon', 'Top 5']
  },
  {
    id: 'mensa-app',
    title: 'M462 Mensa App',
    description: 'Eine moderne Mensa-Anwendung für Schüler und Studenten, entwickelt im Team mit TypeScript und React.',
    type: 'Teamprojekt',
    technologies: ['TypeScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'Bootstrap'],
    icon: '🍽️',
    githubUrl: 'https://github.com/koskogo/M462_Mensaapp',
    projectUrl: '/projekte/MensaApp',
    badges: ['Teamprojekt', 'Schulprojekt']
  }
];

const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies))).sort();
const allTypes = Array.from(new Set(projects.map(p => p.type))).sort();

export default function ProjectsOverview() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredProjects = projects.filter(project => {
    const matchesTechnology = selectedTechnologies.length === 0 || 
      selectedTechnologies.some(tech => project.technologies.includes(tech));
    const matchesType = selectedTypes.length === 0 || 
      selectedTypes.includes(project.type);
    return matchesTechnology && matchesType;
  });

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSelectedTechnologies([]);
    setSelectedTypes([]);
  };

  const getTechnologyIcon = (tech: string) => {
    switch (tech) {
      case 'TypeScript': return <SiTypescript className="text-blue-600" size={20} />;
      case 'Next.js': return <SiNextdotjs className="text-gray-800" size={20} />;
      case 'React': return <FaReact className="text-cyan-500" size={20} />;
      case 'JavaScript': return <SiJavascript className="text-yellow-500" size={20} />;
      case 'Python': return <SiPython className="text-green-500" size={20} />;
      case 'HTML5': return <SiHtml5 className="text-orange-500" size={20} />;
      case 'CSS3': return <SiCss3 className="text-blue-500" size={20} />;
      case 'Bootstrap': return <SiBootstrap className="text-purple-600" size={20} />;
      case 'Node.js': return <SiNodedotjs className="text-green-600" size={20} />;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="heading-1 text-center">Alle Projekte</h1>
        <p className="text-lg text-muted text-center mb-8">Entdecke meine verschiedenen Projekte und filtere nach Technologien und Projekttypen.</p>

        {/* Filters */}
        <div className="card mb-8">
          <h2 className="heading-2 mb-4">Filter</h2>
          
          {/* Technology Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologien</h3>
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => toggleTechnology(tech)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                    selectedTechnologies.includes(tech)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getTechnologyIcon(tech)}
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Project Type Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Projekttyp</h3>
            <div className="flex flex-wrap gap-2">
              {allTypes.map(type => (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedTypes.includes(type)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(selectedTechnologies.length > 0 || selectedTypes.length > 0) && (
            <button
              onClick={clearFilters}
              className="btn-outline"
            >
              Filter zurücksetzen
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted">
            {filteredProjects.length} von {projects.length} Projekten angezeigt
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="card hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  <span>{project.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="heading-2 mb-0">{project.title}</h3>
                    {project.badges.map(badge => (
                      <span key={badge} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.technologies.map(tech => (
                      <span key={tech} className="flex items-center gap-1 text-sm text-gray-600">
                        {getTechnologyIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={project.projectUrl} className="btn-primary">
                      Mehr erfahren
                    </Link>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted mb-4">Keine Projekte gefunden</p>
            <button onClick={clearFilters} className="btn-primary">
              Filter zurücksetzen
            </button>
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <div className="flex gap-4 justify-center">
            <Link href="/" className="btn-outline">
              Zurück zur Startseite
            </Link>
            <Link href="/projekte/filter" className="btn-primary">
              Erweiterte Suche
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



