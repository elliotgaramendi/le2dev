import { weeksCatalog } from '../data/siteConfig'
import WeekCard from '../components/common/WeekCard'

const WeekListPage = () => {
  return (
    <section className="section">
      <div className="container d-flex fd-column g-3">
        <p className="text text--xs c-primary">Roadmap completo</p>
        <h1 className="title title--lg">Desarrollo Frontend Ordenado por Semana</h1>
        <p className="text text--md c-ash300">Contenido centralizado en `public/content/desarrollo-frontend`, listo para despliegue estático y migración futura a CMS.</p>
        <div className="d-flex fw-wrap g-2">
          <span className="badge interactive interactive--sm">Semanas: {weeksCatalog.length}</span>
          <span className="badge interactive interactive--sm">Proyectos: {weeksCatalog.reduce((total, week) => total + week.projects.length, 0)}</span>
        </div>
        <div className="g-layout g-layout--auto-fit-columns g-3">
          {weeksCatalog.map((week) => (
            <WeekCard key={week.id} week={week} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeekListPage
