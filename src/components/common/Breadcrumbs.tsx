import { Link, useLocation } from 'react-router'
import { weeksCatalog } from '../../data/siteConfig'

const getSegmentLabel = (segment: string, parent?: string) => {
  if (segment === 'frontend') {
    return 'Cursos'
  }

  if (segment === 'desarrollo-frontend') {
    return 'Desarrollo Frontend'
  }

  if (parent === 'desarrollo-frontend') {
    return weeksCatalog.find((week) => week.slug === segment)?.title ?? segment
  }

  return segment
}

const Breadcrumbs = () => {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0 || pathname === '/') {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className="container breadcrumbs section--compact">
      <ol className="list d-flex fw-wrap ai-center g-1">
        <li>
          <Link to="/" className="link text text--xs c-ash300 breadcrumbs__link">
            Inicio
          </Link>
        </li>
        {segments.map((segment, index) => {
          const to = `/${segments.slice(0, index + 1).join('/')}`
          const isLast = index === segments.length - 1
          const label = getSegmentLabel(segment, segments[index - 1])

          return (
            <li key={to} className="d-flex ai-center g-1">
              <span className="text text--xs c-ash400 breadcrumbs__separator">/</span>
              {isLast ? (
                <span className="text text--xs c-white breadcrumbs__current">{label}</span>
              ) : (
                <Link to={to} className="link text text--xs c-ash300 breadcrumbs__link">
                  {label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
