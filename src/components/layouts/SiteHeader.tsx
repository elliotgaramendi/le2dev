import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navConfig } from '../../data/siteConfig'
import LogoMark from '../common/LogoMark'

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="container d-flex ai-center jc-space-between g-2">
        <NavLink to="/frontend" className="link d-flex ai-center g-1 brand-link">
          <LogoMark />
          <span className="interactive interactive--sm c-ash200">{navConfig.brand}</span>
        </NavLink>
        <ul className="list d-flex ai-center g-3 md:fd-row header__links">
          {navConfig.links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `link interactive interactive--sm header__link ${isActive ? 'c-white header__link--active' : 'c-ash200'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <a href={navConfig.cta.path} className="button button--primary interactive interactive--sm header__cta">
          {navConfig.cta.label}
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
