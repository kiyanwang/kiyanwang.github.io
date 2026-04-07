import { HashRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Writing from './pages/Writing';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </HashRouter>
  );
}
