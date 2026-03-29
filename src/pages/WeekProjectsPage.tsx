import { Link, useParams } from 'react-router'
import ProjectCard from '../components/common/ProjectCard'
import { weeksCatalog } from '../data/siteConfig'

const WeekProjectsPage = () => {
  const { weekSlug } = useParams()
  const weekIndex = weeksCatalog.findIndex((item) => item.slug === weekSlug)
  const week = weekIndex >= 0 ? weeksCatalog[weekIndex] : undefined
  const previousWeek = weekIndex > 0 ? weeksCatalog[weekIndex - 1] : undefined
  const nextWeek = weekIndex >= 0 && weekIndex < weeksCatalog.length - 1 ? weeksCatalog[weekIndex + 1] : undefined

  if (!week) {
    return (
      <section className="section">
        <div className="container d-flex fd-column g-2">
          <h1 className="title title--lg">Semana no encontrada</h1>
          <Link to="/desarrollo-frontend" className="button button--primary interactive w-fit">Volver a semanas</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container d-flex fd-column g-3">
        <Link to="/desarrollo-frontend" className="link text text--sm c-primary">← Volver a semanas</Link>
        <h1 className="title title--lg">{week.title}</h1>
        <p className="text text--md c-ash300">{week.projects.length} proyectos detectados dentro de `public/content/desarrollo-frontend`.</p>
        <div className="d-flex fw-wrap g-2">
          {previousWeek ? (
            <Link to={`/desarrollo-frontend/${previousWeek.slug}`} className="button interactive w-fit">
              ← {previousWeek.title}
            </Link>
          ) : null}
          {nextWeek ? (
            <Link to={`/desarrollo-frontend/${nextWeek.slug}`} className="button interactive w-fit">
              {nextWeek.title} →
            </Link>
          ) : null}
        </div>
        <div className="g-layout g-layout--auto-fit-columns g-3">
          {week.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeekProjectsPage
