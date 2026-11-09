import type { PortfolioCopy } from '../i18n/translations'
import type { Language, Project } from '../types'
import { Arrow } from './Arrow'
import { Tags } from './Tags'

interface ProjectCardProps {
  project: Project
  number: number
  language: Language
  copy: PortfolioCopy['projects']
}

export function ProjectCard({ project, number, language, copy }: ProjectCardProps) {
  const { image } = project
  const name = project.name[language]

  const content = (
    <>
      <div className="project-top">
        <span>{String(number).padStart(2, '0')}</span>
        <span>{project.category[language]}</span>
      </div>

      <div className={`project-shot${image ? ' project-shot-image' : ''}`}>
        {image ? (
          <img
            src={image.src}
            alt={image.alt[language]}
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        ) : (
          <span>{copy.placeholder}</span>
        )}
      </div>

      <div className="project-content">
        <h3>{name}</h3>
        <p>{project.description[language]}</p>
        <Tags items={project.tags[language]} />
      </div>

      <span className="project-arrow"><Arrow size={19} /></span>
    </>
  )

  if (project.href) {
    return (
      <a
        className="project-card"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${copy.visit} ${name}`}
      >
        {content}
      </a>
    )
  }

  return <article className="project-card">{content}</article>
}
