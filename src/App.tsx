import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layouts/SiteLayout'
import FrontendHomePage from './pages/FrontendHomePage'
import WeekListPage from './pages/WeekListPage'
import WeekProjectsPage from './pages/WeekProjectsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Navigate to="/frontend" replace />} />
        <Route path="/frontend" element={<FrontendHomePage />} />
        <Route path="/desarrollo-frontend" element={<WeekListPage />} />
        <Route path="/desarrollo-frontend/:weekSlug" element={<WeekProjectsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
