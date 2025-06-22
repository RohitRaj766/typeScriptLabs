import type { Project } from "./projects";

// Renders the search input inside the given container
export const SearchADD = (container: HTMLElement) => {
  container.innerHTML = `
    <input type="text" id="search--bar" placeholder="Type to search..." />
  `;
};

// Filters projects based on query string (case-insensitive)
export const SearchFeat = (projects: Project[], query: string): Project[] => {
  const userValue = query.trim().toLowerCase();

  if (!userValue) return projects;

  return projects.filter(project =>
    project.name.toLowerCase().includes(userValue) ||
    project.description.toLowerCase().includes(userValue)
  );
};
