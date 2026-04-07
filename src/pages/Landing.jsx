import NavBar from '../components/NavBar';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import ArticleRow from '../components/ArticleRow';
import { loadProjects, getFeatured } from '../utils/loadProjects';
import articles from '../data/articles.json';
import './Landing.css';

const allProjects = loadProjects();
const featured = getFeatured(allProjects);
const latestArticles = articles.slice(0, 3);

export default function Landing() {
  return (
    <div>
      <NavBar />
      <section className="landing__hero" id="about">
        <div className="landing__hero-text">
          <span className="landing__subtitle">Staff Engineer · BibliU</span>
          <h1 className="landing__headline">
            I build platforms, grow teams, offer technical advice, and mentor.
          </h1>
          <p className="landing__description">
            Staff Engineer at BibliU, formerly Head of Platform at Talis. I think about
            distributed systems, platform engineering, and the human side of shipping
            software. Technical advisor to early-stage startups, and a mentor to many.
          </p>
          <div className="landing__socials">
            <a href="https://github.com/kiyanwang" target="_blank" rel="noopener noreferrer" className="landing__social-btn">GitHub</a>
            <a href="https://linkedin.com/in/nadeemshabir" target="_blank" rel="noopener noreferrer" className="landing__social-btn">LinkedIn</a>
            <a href="https://virtualchaos.substack.com" target="_blank" rel="noopener noreferrer" className="landing__social-btn">Substack</a>
          </div>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Nadeem Shabir"
          className="landing__photo"
        />
      </section>

      <section className="landing__section">
        <SectionHeader label="Featured Projects" linkText="View all →" linkTo="/projects" />
        <div className="landing__cards">
          {featured.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>
      </section>

      <section className="landing__section">
        <SectionHeader label="Latest Writing" linkText="View all →" linkTo="/writing" />
        <div className="landing__articles">
          {latestArticles.map((a) => (
            <ArticleRow key={a.link} article={a} titleColor="white" />
          ))}
        </div>
      </section>
    </div>
  );
}
