import { useState } from 'react';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import Tag from '../components/Tag';
import { loadProjects, filterByTag, getAllTags } from '../utils/loadProjects';
import './Projects.css';

const allProjects = loadProjects();
const tags = getAllTags(allProjects);

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = filterByTag(allProjects, activeTag);

  return (
    <div>
      <NavBar />
      <div className="projects__header">
        <h1 className="projects__title">Projects</h1>
        <p className="projects__subtitle">
          Things I've built — tools, experiments, and open source contributions.
        </p>
      </div>
      <div className="projects__filters">
        {tags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            variant={tag === activeTag ? 'active' : 'secondary'}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>
      <div className="projects__grid">
        {filtered.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
    </div>
  );
}
