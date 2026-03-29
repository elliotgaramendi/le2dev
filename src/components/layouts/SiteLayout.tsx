import { Outlet } from 'react-router'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import ScrollToTop from '../common/ScrollToTop'
import Breadcrumbs from '../common/Breadcrumbs'
import RouteMeta from '../common/RouteMeta'

const SiteLayout = () => {
  return (
    <>
      <ScrollToTop />
      <RouteMeta />
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <SiteHeader />
      <main id="main-content">
        <Breadcrumbs />
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}

export default SiteLayout
