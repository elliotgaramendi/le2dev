import { Link } from 'react-router'
import WeekCard from '../common/WeekCard'
import { weeksCatalog } from '../../data/siteConfig'

const WeekHighlightsSection = () => {
  const highlightWeeks = weeksCatalog.slice(0, 6)

  return (
    <section className="section">
      <div className="container d-flex fd-column g-3">
        <p className="text text--xs c-primary">Ruta guiada</p>
        <h2 className="title title--lg">Explora el plan por semanas</h2>
        <p className="text text--md c-ash300">Cada semana agrupa sus ejercicios y proyectos para avanzar con orden y enfoque práctico.</p>
        <div className="g-layout g-layout--auto-fit-columns g-3">
          {highlightWeeks.map((week) => (
            <WeekCard key={week.id} week={week} />
          ))}
        </div>
        <Link to="/desarrollo-frontend" className="button button--primary interactive w-fit">
          Ver roadmap completo
        </Link>
      </div>
    </section>
  )
}

export default WeekHighlightsSection
