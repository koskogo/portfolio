import Link from 'next/link'
import Image from 'next/image'
import { SiJavascript, SiPython, SiNextdotjs, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiNodedotjs } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mt-12">
              {/* Description and Skills */}
              <div className="text-left md:order-1 md:w-2/3 mt-6 md:mt-0">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Mit einer Vorliebe für knifflige Herausforderungen analysiere ich zunächst gründlich, entwickle dann durchdachte Lösungen und erweitere dabei kontinuierlich mein Fachwissen – sei es beim Programmieren eigener Web-Projekte, beim strategischen Schachspiel oder beim Eintauchen in Fach- und Fantasyliteratur. Diese ruhige, selbstständige Arbeitsweise, gepaart mit echter Neugier, treibt mich an, Technologie kreativ mit klaren Konzepten zu verbinden und gemeinsam mit anderen kluge Antworten zu finden.
                </p>
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">IT Skills</h2>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="px-3 py-2 bg-blue-100 rounded-full text-sm font-medium flex items-center gap-2">
                      <SiJavascript size={20} className="text-blue-800" />
                      <span className="text-blue-800">JavaScript</span>
                    </div>
                    <div className="px-3 py-2 bg-green-100 rounded-full text-sm font-medium flex items-center gap-2">
                      <SiPython size={20} className="text-green-800" />
                      <span className="text-green-800">Python</span>
                    </div>
                    <div className="px-3 py-2 bg-cyan-100 rounded-full text-sm font-medium flex items-center gap-2">
                      <FaReact size={20} className="text-cyan-800" />
                      <span className="text-cyan-800">React</span>
                    </div>
                    <div className="px-3 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2">
                      <SiNextdotjs size={20} className="text-gray-800" />
                      <span className="text-gray-800">Next.js</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile Picture */}
              <div className="flex-shrink-0 md:order-2 md:w-1/3 flex justify-center md:justify-end w-full">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden aspect-square border-4 border-gray-200 bg-white shadow-lg">
                  <Image
                    src="/portrait.jpg"
                    alt="Portrait von Theodor Schneider"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="w-full flex flex-col items-center justify-center mt-16">
              <div className="flex flex-col gap-8 w-full max-w-3xl px-4">
                {/* Project Cards */}
                <ProjectCard
                  title="Chess Game"
                  description="Ein vollständiges Schachspiel in Python mit allen Regeln, entwickelt mit objektorientierter Programmierung."
                  icon="♔"
                  tags={['Einzelprojekt']}
                  technologies={[{ icon: SiPython, name: 'Python', color: 'text-green-500' }]}
                  href="/projekte/Chess"
                />
                
                <ProjectCard
                  title="KSH Hackathon 2025"
                  description="Ein innovatives Projekt für das erste KSH Hackathon 2025, entwickelt im Team mit modernen Web-Technologien."
                  icon="🏆"
                  tags={['Teamprojekt', 'Hackathon']}
                  technologies={[
                    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
                    { icon: FaReact, name: 'React', color: 'text-cyan-500' },
                    { icon: SiHtml5, name: 'HTML5', color: 'text-orange-500' },
                    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500' },
                    { icon: SiBootstrap, name: 'Bootstrap', color: 'text-purple-500' }
                  ]}
                  href="/projekte/KSHHackathon"
                />
                
                <ProjectCard
                  title="M462 Mensa App"
                  description="Eine moderne Mensa-Anwendung für Schüler und Studenten, entwickelt im Team mit TypeScript und React."
                  icon="🍽️"
                  tags={['Teamprojekt', 'Schulprojekt']}
                  technologies={[
                    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
                    { icon: FaReact, name: 'React', color: 'text-cyan-500' },
                    { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500' },
                    { icon: SiHtml5, name: 'HTML5', color: 'text-orange-500' },
                    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500' },
                    { icon: SiBootstrap, name: 'Bootstrap', color: 'text-purple-500' }
                  ]}
                  href="/projekte/MensaApp"
                />
                
                <ProjectCard
                  title="Portfolio Website"
                  description="Eine moderne, responsive Portfolio-Website zur Präsentation meiner Projekte und Fähigkeiten."
                  icon={<Image src="/next.svg" alt="Portfolio Website" width={100} height={100} />}
                  tags={['Einzelprojekt']}
                  technologies={[
                    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
                    { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-800' }
                  ]}
                  href="/projekte/PortfolioWebsite"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Project Card Component
function ProjectCard({ 
  title, 
  description, 
  icon, 
  tags, 
  technologies, 
  href 
}: {
  title: string
  description: string
  icon: string | React.ReactNode
  tags: string[]
  technologies: Array<{ icon: any, name: string, color: string }>
  href: string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 min-h-[220px] hover:shadow-xl transition-shadow duration-300">
      <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-4xl">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex gap-3 mb-4 flex-wrap">
          {technologies.map((tech, index) => (
            <span key={index} className="flex items-center gap-1 text-sm text-gray-600">
              <tech.icon size={16} className={tech.color} />
              {tech.name}
            </span>
          ))}
        </div>
        <Link 
          href={href} 
          className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Mehr erfahren
        </Link>
      </div>
    </div>
  )
}