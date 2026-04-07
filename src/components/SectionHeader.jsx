import { Link } from 'react-router-dom';
import './SectionHeader.css';

export default function SectionHeader({ label, linkText, linkTo }) {
  return (
    <div className="section-header">
      <span className="section-header__label">{label}</span>
      {linkText && <Link to={linkTo} className="section-header__link">{linkText}</Link>}
    </div>
  );
}
