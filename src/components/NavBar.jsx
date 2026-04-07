import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const { hash } = useLocation();
  const path = hash.replace('#', '') || '/';

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Nadeem Shabir</Link>
      <div className="navbar__links">
        <Link
          to="/projects"
          className={`navbar__link ${path === '/projects' ? 'navbar__link--active' : ''}`}
        >
          Projects
        </Link>
        <Link
          to="/writing"
          className={`navbar__link ${path === '/writing' ? 'navbar__link--active' : ''}`}
        >
          Writing
        </Link>
        <a href="#/" className="navbar__link">About</a>
      </div>
    </nav>
  );
}
