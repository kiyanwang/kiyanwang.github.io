import { describe, it, expect } from 'vitest';
import { filterByTag, getAllTags, getFeatured } from './loadProjects';

const mockProjects = [
  { name: 'A', tags: ['AI', 'Python'], featured: true },
  { name: 'B', tags: ['JavaScript', 'AI'], featured: false },
  { name: 'C', tags: ['Shell'], featured: false },
];

describe('filterByTag', () => {
  it('returns all projects when tag is "All"', () => {
    expect(filterByTag(mockProjects, 'All')).toEqual(mockProjects);
  });

  it('filters projects by tag', () => {
    const result = filterByTag(mockProjects, 'AI');
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('A');
    expect(result[1].name).toBe('B');
  });

  it('returns empty array for unknown tag', () => {
    expect(filterByTag(mockProjects, 'Rust')).toEqual([]);
  });
});

describe('getAllTags', () => {
  it('returns sorted unique tags with "All" first', () => {
    const tags = getAllTags(mockProjects);
    expect(tags[0]).toBe('All');
    expect(tags).toContain('AI');
    expect(tags).toContain('Python');
    expect(tags).toContain('JavaScript');
    expect(tags).toContain('Shell');
    expect(new Set(tags).size).toBe(tags.length);
  });
});

describe('getFeatured', () => {
  it('returns only featured projects', () => {
    const result = getFeatured(mockProjects);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('A');
  });
});
