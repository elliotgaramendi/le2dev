import type { WeekProject } from '../../data/siteConfig'

type ProjectCardProps = {
  project: WeekProject
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const shortPath = project.sourcePath.replace(/^public\/content\/desarrollo-frontend\//, '')

  return (
    <article className="card card--surface card--project d-flex fd-column g-2">
      <p className="text text--2xs c-primary project-card__index">Proyecto {index + 1}</p>
      <h3 className="title title--xs project-card__title">{project.title}</h3>
      <p className="text text--xs c-ash400 project-card__path">{shortPath}</p>
      <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="button button--primary interactive mt-auto w-fit project-card__cta">
        Ver proyecto original
      </a>
    </article>
  )
}

export default ProjectCard
