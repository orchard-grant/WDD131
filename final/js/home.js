import { movies } from "./movies.js";

/* -----------------------------
   FEATURED MOVIE OF THE DAY
------------------------------ */
function renderFeaturedMovie() {
  const featured = movies[Math.floor(Math.random() * movies.length)];

  const container = document.getElementById("featuredMovie");

  container.innerHTML = `
    <div class="featured-card">
      <img src="${featured.poster}" alt="${featured.title}">
      <div class="featured-info">
        <h3>${featured.title}</h3>
        <p><strong>Year:</strong> ${featured.year}</p>
        <p><strong>Rating:</strong> ⭐ ${featured.rating}</p>
        <p><strong>Director:</strong> ${featured.director}</p>
      </div>
    </div>
  `;
}

/* -----------------------------
   TOP MOVIES GRID
------------------------------ */
function renderTopMovies() {
  const topContainer = document.getElementById("topMovies");

  // Show first 12 movies (or however many you want)
  const topList = movies.slice(0, 12);

  topContainer.innerHTML = topList
    .map(movie => {
      return `
        <div class="movie-card">
          <img src="${movie.poster}" alt="${movie.title}">
          <h4>${movie.title}</h4>
          <p>${movie.year} • ⭐ ${movie.rating}</p>
        </div>
      `;
    })
    .join("");
}

/* Run both rendering functions */
renderFeaturedMovie();
renderTopMovies();
