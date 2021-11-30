/*
const searchBox = document.querySelector('#movie-title');

const findAMovie = function () {
  let searchTitle = searchBox.value.trim();
  console.log(searchTitle);
};

searchBox.addEventListener('keyup', findAMovie);

fetch(
  `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${findAMovie}`,
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host':
        'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      'x-rapidapi-key': '68d03c46femshddc6ba1d9d8adabp112c10jsn1ca43f37d1a1',
    },
  }
)
  .then((response) => {
    console.log(response.json());
  })
  .catch((err) => {
    console.error(err);
  });

  */

// Titles: https://omdbapi.com/?s=thor&page=1&apikey=99e6a288
// details: https://www.omdbapi.com/?i=tt3896198&apikey=99e6a288

const movieSearchBox = document.querySelector('#movie-title');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');
// const movYear = Search[0].Year;

async function loadMovies(searchTitle) {
  const url = `https://omdbapi.com/?s=${searchTitle}&page=1&apikey=99e6a288`;
  const searchRes = await fetch(`${url}`);
  const data = await searchRes.json();
  // if (data.Response === 'True') console.log(data.Search);
  if (data.Response === 'True') displayMovieList(data.Search);
}

function findMovies() {
  let searchTerm = movieSearchBox.value.trim();
  // console.log(searchTerm);
  if (searchTerm.length > 0) {
    searchList.classList.remove('hide-search-list');
    loadMovies(searchTerm);
  } else {
    searchList.classList.add('hide-search-list');
  }
}

function displayMovieList(movies) {
  searchList.innerHTML = '';
  for (let idx = 0; idx < movies.length; idx++) {
    let movieListItem = document.createElement('div');
    // console.log(movieListItem);
    movieListItem.dataset.id = movies[idx].imdbID;

    movieListItem.classList.add('search-list-item');
    if (movies[idx].Poster != 'N/A') {
      moviePoster = movies[idx].Poster;
    } else {
      moviePoster = '../assets/images/image_not_found.png';
    }
    if (movies[idx].Year >= '1990' && movies[idx].Year <= '2009') {
      movieListItem.innerHTML = `
      <div class="search-list-item">
      <div class="search-item-thumbnail">
        <img src="${moviePoster}" />
      </div>
    </div>
      `;
      searchList.appendChild(movieListItem);
    } else {
      movieListItem.innerHTML = `'../assets/images/image_not_found.png'`;
    }
  }
  loadMovieDetails();
}

function loadMovieDetails() {
  const searchListMovies = searchList.querySelectorAll('.search-list-item');
  searchListMovies.forEach((movie) => {
    // console.log(movie);
    movie.addEventListener('click', async () => {
      // console.log(movie.dataset.id);
      searchList.classList.add('hide-search-list');
      movieSearchBox.value = '';
      const resDetails = await fetch(
        `https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=99e6a288`
      );
      const movieDetails = await resDetails.json();
      const movieYear = movieDetails.Year;
      // console.log(movieYear);
      if (movieYear >= '1990' && movieYear <= '2009') {
        displayMovieDetails(movieDetails);
      } else {
        resultGrid.innerText = 'Movie was not released between 1990 - 2009';
      }
      // displayMovieDetails(movieDetails);
    });
  });
}

function displayMovieDetails(details) {
  resultGrid.innerHTML = `
  <div class="movie-poster">
  <img
    src="${
      details.Poster != 'N/A'
        ? details.Poster
        : '../assets/images/image_not_found.png'
    }"
    alt="movie poster"
  />
</div>
<div class="movie-info">
  <h3 class="movie-title">${details.Title}</h3>
  <ul class="movie-misc-info">
    <li class="year">Year: ${details.Year}</li>
  </ul>
  <p class="plot">
    <b>Plot:</b> ${details.Plot}
  </p>
</div>
  `;
}

movieSearchBox.addEventListener('keyup', findMovies);
