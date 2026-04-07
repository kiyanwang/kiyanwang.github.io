import Tag from './Tag';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <span className="project-card__title">{project.name}</span>
        {project.featured && <Tag label="Featured" variant="secondary" />}
      </div>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} variant="orange" />
        ))}
      </div>
      <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="project-card__link">
        View on GitHub →
      </a>
    </div>
  );
}
