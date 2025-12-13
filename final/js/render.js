const container = document.querySelector("#movieContainer");
const searchInput = document.querySelector("#searchInput");
const genreFilter = document.querySelector("#genreFilter");

async function getMovies(query){
    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWJmMWI2NDJlNzFmODA1OWVlNDhiZDVlMjQxZDY1YyIsIm5iZiI6MTcyMDQ5MjEyMS4zNjYwMDAyLCJzdWIiOiI2NjhjYTA1OTQ0MGNlNjc3NzcxNjhmNTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1jfpre8zLDnp1TBpFGE8smnKRxw7uDpxM51b1mUKcRA'
  }
};

const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`, 
  options
  );
  const data = await response.json();
  renderMoviesFromAPI(data.results);
}

function renderMoviesFromAPI(list){
  container.innerHTML = "";
  list.forEach(movie => {
    if (!movie.poster_path) return;
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
    <h3>${movie.title}<h3>
    <p>${movie.release_date?.slice(0,4) ?? "N/A"}</p>
    <p>⭐ ${movie.vote_average.toFixed(1)}</p>
    `;

    container.appendChild(card);
  });
}


// search
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  
  if(query.length < 2) {
    container.innerHTML = "";
    return;
  }

  getMovies(query);
});

getMovies("avengers");