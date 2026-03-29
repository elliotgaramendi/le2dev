import { Link } from 'react-router-dom'
import { heroConfig, weeksCatalog } from '../../data/siteConfig'

const HeroSection = () => {
  const titleParts = heroConfig.title.split(heroConfig.highlightedText)
  const projectsCount = weeksCatalog.reduce((total, week) => total + week.projects.length, 0)

  return (
    <section className="hero section">
      <div className="container d-flex fd-column ai-center g-4 ta-center">
        <h1 className="title title--hero">
          {titleParts[0]}
          <span className="c-primary">{heroConfig.highlightedText}</span>
          {titleParts[1]}
        </h1>
        <p className="text text--md c-ash200">{heroConfig.description}</p>
        <Link to={heroConfig.ctaPath} className="button button--primary interactive interactive--md">
          {heroConfig.ctaLabel}
        </Link>
        <div className="d-flex fw-wrap jc-center g-2">
          <span className="badge interactive interactive--sm">{weeksCatalog.length} semanas</span>
          <span className="badge interactive interactive--sm">{projectsCount} proyectos reales</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
