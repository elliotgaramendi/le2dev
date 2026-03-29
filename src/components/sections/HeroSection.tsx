import { Link } from 'react-router'
import { heroConfig, weeksCatalog } from '../../data/siteConfig'

const HeroSection = () => {
  const titleParts = heroConfig.title.split(heroConfig.highlightedText)
  const projectsCount = weeksCatalog.reduce((total, week) => total + week.projects.length, 0)

  return (
    <section className="hero section">
      <div className="container hero__content d-flex fd-column ai-center g-4 ta-center">
        <p className="hero__eyebrow text text--xs c-primary">Programa intensivo</p>
        <h1 className="title title--hero">
          {titleParts[0]}
          <span className="c-primary">{heroConfig.highlightedText}</span>
          {titleParts[1]}
        </h1>
        <p className="text text--md c-ash200 hero__lead">{heroConfig.description}</p>
        <Link to={heroConfig.ctaPath} className="button button--primary interactive interactive--md">
          {heroConfig.ctaLabel}
        </Link>
        <div className="d-flex fw-wrap jc-center g-2 hero__metrics">
          <span className="badge interactive interactive--sm">Semanas: {weeksCatalog.length}</span>
          <span className="badge interactive interactive--sm">Proyectos: {projectsCount}</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
