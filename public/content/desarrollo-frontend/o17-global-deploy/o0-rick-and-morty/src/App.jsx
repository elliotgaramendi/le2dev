import { Route, Routes } from 'react-router';
import PrimaryLayout from './layouts/PrimaryLayout';
import CharacterPage from './pages/CharacterPage';
import CharactersPage from './pages/CharactersPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
