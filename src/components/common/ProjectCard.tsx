import type { WeekProject } from '../../data/siteConfig'

type ProjectCardProps = {
  project: WeekProject
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const shortPath = project.sourcePath.replace(/^public\/content\/desarrollo-frontend\//, '')

  return (
    <article className="card card--surface card--project d-flex fd-column g-2">
      <p className="text text--2xs c-primary">Proyecto {index + 1}</p>
      <h3 className="title title--xs">{project.title}</h3>
      <p className="text text--xs c-ash400">{shortPath}</p>
      <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="button button--primary interactive mt-auto w-fit">
        Ver proyecto original
      </a>
    </article>
  )
}

export default ProjectCard
