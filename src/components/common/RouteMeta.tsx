import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { weeksCatalog } from '../../data/siteConfig'

const baseTitle = 'Le2Dev | Desarrollo Frontend'

const RouteMeta = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      document.title = `${baseTitle} | Inicio`
      return
    }

    if (pathname === '/desarrollo-frontend') {
      document.title = `${baseTitle} | Roadmap`
      return
    }

    const weekSlug = pathname.split('/')[2]
    const week = weeksCatalog.find((item) => item.slug === weekSlug)

    if (week) {
      document.title = `${baseTitle} | ${week.title}`
      return
    }

    document.title = `${baseTitle} | 404`
  }, [pathname])

  return null
}

export default RouteMeta
