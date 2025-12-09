import { movies } from "./movies.js";

const container = document.querySelector("#movieContainer");
const searchInput = document.querySelector("#searchInput");
const genreFilter = document.querySelector("#genreFilter");

function renderMovies(list) {
  container.innerHTML = "";

  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.year}</p>
      <p>⭐ ${movie.rating}</p>
    `;

    container.appendChild(card);
  });
}

renderMovies(movies);

// SEARCH BAR
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(value)
  );
  renderMovies(filtered);
});

// GENRE FILTER
genreFilter.addEventListener("change", () => {
  const value = genreFilter.value;
  const filtered = value ? movies.filter(m => m.genre === value) : movies;
  renderMovies(filtered);
});
