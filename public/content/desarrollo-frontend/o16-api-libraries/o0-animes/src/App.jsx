import { Route, Routes } from 'react-router'
import Animes from './pages/Animes'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animes" element={<Animes />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
