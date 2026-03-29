import { Link } from 'react-router'
import { coursesConfig } from '../../data/siteConfig'
import LogoMark from '../common/LogoMark'

const SiteFooter = () => {
  return (
    <footer className="footer">
      <section className="container g-layout g-layout--auto-fit-columns g-4 footer__top">
        <div className="d-flex fd-column g-2">
          <div className="d-flex ai-center g-1">
            <LogoMark />
            <h2 className="subtitle subtitle--sm">Elliot Garamendi</h2>
          </div>
          <p className="text text--xs c-ash400">Aprende desarrollo web gratis con los mejores, en un solo lugar.</p>
        </div>
        <div className="d-flex fd-column g-2">
          <h3 className="subtitle subtitle--xs">Le2Dev</h3>
          <Link to="/" className="link text text--xs c-ash300">Cursos</Link>
          <Link to="/desarrollo-frontend" className="link text text--xs c-ash300">Proyectos</Link>
        </div>
        <div className="d-flex fd-column g-2">
          <h3 className="subtitle subtitle--xs">Cursos</h3>
          {coursesConfig.slice(0, 3).map((course) => (
            <p key={course.id} className="text text--xs c-ash300">{course.title}</p>
          ))}
        </div>
      </section>
      <section className="container section section--compact d-flex jc-space-between fw-wrap g-2 footer__bottom">
        <p className="text text--2xs c-ash400">Elliot Garamendi © 2026 Le2Dev. Todos los derechos reservados.</p>
        <p className="text text--2xs c-ash400">Made with love by Elliot Garamendi.</p>
      </section>
    </footer>
  )
}

export default SiteFooter
