import { projects } from '../data/projects'
import type { PortfolioCopy } from '../i18n/translations'
import type { Language } from '../types'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'
import './Projects.css'

interface ProjectsProps {
  language: Language
  copy: PortfolioCopy['projects']
}

export function Projects({ language, copy }: ProjectsProps) {
  const visibleProjects = projects.filter((project) => !project.hidden)

  return (
    <section className="section container work" id="work">
      <SectionHeading {...copy.heading} />
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            number={index + 1}
            language={language}
            copy={copy}
          />
        ))}
      </div>
    </section>
  )
}
