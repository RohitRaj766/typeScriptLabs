import type { Project } from "./projects";

export const Cards = (container: HTMLElement, projects: Project[]) => {
  container.innerHTML = projects
    .map(project => `
      <div class="card">
        <div class="card--item--holder">
          <img src="${project.image}" alt="${project.name}" class="card--image" />
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        </div>
        <div id="button--container"> 
          <button id="check--live">Live</button>
          <button id="check--code">Code</button>
        </div>
      </div>
    `)
    .join('');
};
