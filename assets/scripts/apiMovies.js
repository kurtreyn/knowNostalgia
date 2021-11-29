// Rapid API
// fetch('https://imdb8.p.rapidapi.com/auto-complete?q=2005%2C%20movies', {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//     'x-rapidapi-key': '3491b2c1aamsh3116d3b6bdcb406p1eb320jsnc9c29a6b6a7c',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     const list = data.d;

//     list.map((item) => {
//       const name = item.l;
//       const poster = item.i.imageUrl;
//       const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
//       document.querySelector('.movies').innerHTML += movie;
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// ************** OMDb API **********************

// Titles: https://omdbapi.com/?s=thor&page=1&apikey=99e6a288
// details: http://www.omdbapi.com/?i=tt3896198&apikey=99e6a288

const movieSearchBox = document.querySelector('#movie-title');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');
const searchMovBtn = document.querySelector('#search-movies-btn');

// async function loadMovies(searchTitle) {
//   const url = `https://omdbapi.com/?s=${searchTitle}&page=1&apikey=99e6a288`;
//   const res = await fetch(`${url}`);
//   const data = await res.json();
//   // if (data.Response === 'True') console.log(data.Search);
//   if (data.Response === 'True') displayMovieList(data.Search);
// }

async function loadMovies(searchList) {
  const URL = `https://omdbapi.com/?s=${searchList}&page=1&apikey=99e6a288`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  // console.log(data.Search);
  if (data.Response == 'True') displayMovieList(data.Search);
}

function findMovies() {
  let searchTerm = movieSearchBox.value.trim();
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
    movieListItem.dataset.id = movies[idx].imdbID; // setting movie id in  data-id
    movieListItem.classList.add('search-list-item');
    if (movies[idx].Poster != 'N/A') moviePoster = movies[idx].Poster;
    else moviePoster = 'image_not_found.png';

    movieListItem.innerHTML = `
      <div class = "search-item-thumbnail">
          <img src = "${moviePoster}">
      </div>
      <div class = "search-item-info">
          <h3>${movies[idx].Title}</h3>
          <p>${movies[idx].Year}</p>
      </div>
      `;
    searchList.appendChild(movieListItem);
  }
  loadMovieDetails();
}

function loadMovieDetails() {
  const searchListMovies = searchList.querySelectorAll('.search-list-item');
  searchListMovies.forEach((movie) => {
    movie.addEventListener('click', async () => {
      // console.log(movie.dataset.id);
      searchList.classList.add('hide-search-list');
      movieSearchBox.value = '';
      const result = await fetch(
        `http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=fc1fef96`
      );
      const movieDetails = await result.json();
      // console.log(movieDetails);
      displayMovieDetails(movieDetails);
    });
  });
}

function displayMovieDetails(details) {
  resultGrid.innerHTML = `
  <div class = "movie-poster">
      <img src = "${
        details.Poster != 'N/A' ? details.Poster : 'image_not_found.png'
      }" alt = "movie poster">
  </div>
  <div class = "movie-info">
      <h3 class = "movie-title">${details.Title}</h3>
      <ul class = "movie-misc-info">
          <li class = "year">Year: ${details.Year}</li>
          <li class = "rated">Ratings: ${details.Rated}</li>
          <li class = "released">Released: ${details.Released}</li>
      </ul>
      <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
      <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
      <p class = "actors"><b>Actors: </b>${details.Actors}</p>
      <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
      <p class = "language"><b>Language:</b> ${details.Language}</p>
      <p class = "awards"><b><i class = "fas fa-award"></i></b> ${
        details.Awards
      }</p>
  </div>
  `;
}

window.addEventListener('click', (event) => {
  if (event.target.className != 'form-control') {
    searchList.classList.add('hide-search-list');
  }
});
// movieSearchBox.addEventListener('keyup', findMovie);
// searchMovBtn.addEventListener('click', findMovie);
