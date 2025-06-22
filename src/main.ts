import './style.css';
import { Cards } from './ts/card';
import { SearchADD, SearchFeat } from './ts/search';
import { projectCollections } from './ts/projects';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <div id="main--container">
      <div id="search--container"></div>
      <div id="card--container"></div>
    </div>
  </main>
`;



const allProjects = Object.values(projectCollections);

const searchContainer = document.getElementById('search--container')!;
const cardsContainer = document.getElementById('card--container')!;

// Render search input box
SearchADD(searchContainer);

// Initial render of all projects
Cards(cardsContainer, allProjects);

const searchBar = document.getElementById('search--bar') as HTMLInputElement;

searchBar.addEventListener('input', () => {
  const filtered = SearchFeat(allProjects, searchBar.value);

  if (filtered.length === 0) {
    cardsContainer.innerHTML = `<p>No projects found matching "${searchBar.value}"</p>`;
  } else {
    Cards(cardsContainer, filtered);
  }
});
