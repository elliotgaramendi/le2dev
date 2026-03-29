import { Link } from 'react-router'
import type { Week } from '../../data/siteConfig'

type WeekCardProps = {
  week: Week
}

const WeekCard = ({ week }: WeekCardProps) => {
  const previewProjects = week.projects.slice(0, 3)

  return (
    <Link to={`/desarrollo-frontend/${week.slug}`} className="card card--surface card--interactive card--week d-flex fd-column g-2">
      <div className="d-flex ai-center jc-space-between g-2">
        <p className="badge interactive interactive--sm">Semana {week.order}</p>
        <p className="text text--2xs c-ash300 week-card__meta">{week.projects.length} labs</p>
      </div>
      <h3 className="title title--sm week-card__title">{week.title.replace(/^Semana \d+:\s*/, '')}</h3>
      <p className="text text--sm c-ash400 week-card__summary">{week.description}</p>
      <ul className="list d-flex fd-column g-1 week-card__list">
        {previewProjects.map((project) => (
          <li key={project.id} className="text text--2xs c-ash300">{project.title}</li>
        ))}
      </ul>
      <p className="text text--xs c-primary mt-auto week-card__count">{week.projects.length} proyectos</p>
    </Link>
  )
}

export default WeekCard
