import { Route, Routes } from 'react-router'
import SiteLayout from './components/layouts/SiteLayout'
import FrontendHomePage from './pages/FrontendHomePage'
import NotFoundPage from './pages/NotFoundPage'
import WeekListPage from './pages/WeekListPage'
import WeekProjectsPage from './pages/WeekProjectsPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<FrontendHomePage />} />
        <Route path="/desarrollo-frontend" element={<WeekListPage />} />
        <Route path="/desarrollo-frontend/:weekSlug" element={<WeekProjectsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
