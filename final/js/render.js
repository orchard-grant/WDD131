// for the API stuff, i took that from the TMBD database, and changed it up to work for my website, and had brother Thompson help me out with that at all
// i know that we didn't learn about that in class, but he helped me with it, and I used AI to help debug, not write the whole thing

const container = document.querySelector("#movieContainer");
const searchInput = document.querySelector("#searchInput");

// API call, with key
async function getMovies(query){
    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWJmMWI2NDJlNzFmODA1OWVlNDhiZDVlMjQxZDY1YyIsIm5iZiI6MTcyMDQ5MjEyMS4zNjYwMDAyLCJzdWIiOiI2NjhjYTA1OTQ0MGNlNjc3NzcxNjhmNTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1jfpre8zLDnp1TBpFGE8smnKRxw7uDpxM51b1mUKcRA'
  }
};
// getting a response to the key
const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`, 
  options
  );
  const data = await response.json();
  renderMoviesFromAPI(data.results);
}
// rendering the movies and returning their posters, and putting them in the grid
function renderMoviesFromAPI(list){
  container.innerHTML = "";
  list.forEach(movie => {
    if (!movie.poster_path) return;
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
    <img 
      src="https://image.tmdb.org/t/p/w342${movie.poster_path}"
      width="200"
      height="300"
      loading="lazy"
      alt="${movie.title} poster">
    <h3>${movie.title}<h3>
    <p>${movie.release_date?.slice(0,4) ?? "N/A"}</p>
    <p>⭐ ${movie.vote_average.toFixed(1)}</p>
    `;

    container.appendChild(card);
  });
}
// search function
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  
  if(query.length < 2) {
    container.innerHTML = "";
    return;
  }

  getMovies(query);
});

// this is setting the search for "avengers" so that the page isn't blank when first loading in. when searching, it works fine
getMovies("avengers");