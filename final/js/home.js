import { movies } from "./movies.js";

function renderTopPicks() {
  const container = document.getElementById("topPicks");

  movies.forEach(movie => {
    const card = document.createElement("article");
    card.classList.add("movie-card");

    card.innerHTML = `
    <div class="movie-poster">
      <img src="${movie.poster}" alt="${movie.title} poster">
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

renderTopPicks();