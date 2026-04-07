const projectFiles = import.meta.glob('../data/projects/*.yml', { eager: true });

export function loadProjects() {
  return Object.values(projectFiles).map((mod) => mod.default || mod);
}

export function getFeatured(projects) {
  return projects.filter((p) => p.featured);
}

export function filterByTag(projects, tag) {
  if (tag === 'All') return projects;
  return projects.filter((p) => p.tags.includes(tag));
}

export function getAllTags(projects) {
  const tags = new Set();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return ['All', ...Array.from(tags).sort()];
}
