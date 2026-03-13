import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ArenaPage from './pages/ArenaPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/arena" element={<ArenaPage />} />
    </Routes>
  );
}
