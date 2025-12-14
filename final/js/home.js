// importing in movies from the movies.js, which has the content for the home page
import { movies } from "./movies.js";
// rendering in my top movie picks from the movies.js site
function renderTopPicks() {
  const container = document.getElementById("topPicks");
  // for each movie, creating an article, and then creating the html for the site
  movies.forEach(movie => {
    const card = document.createElement("article");
    card.classList.add("movie-card");
    // creating the html, and adding a link to the posters that can be followed to the IMDb website page for that movie
    card.innerHTML = `
    <div class="movie-poster">
    <a href="https://www.imdb.com/title/${movie.key}" target="_blank" rel="noopener">
        <img 
          src="${movie.poster}" 
          alt="${movie.title} poster"
          width="150"
          height="225"
          loading="lazy"
      />
      </a>
    </div>
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <p><strong>Director: </strong>${movie.director}</p>
      <p>${movie.rating} - ${movie.year}</p>
      <p>${movie.description}</p>
    </div>
    `;
    container.appendChild(card);
  });
}

// rendering in the top picks function
renderTopPicks();