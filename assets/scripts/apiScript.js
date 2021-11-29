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

// load movies from api
async function loadMovies(searchTitle) {
  const url = `https://omdbapi.com/?s=${searchTitle}&page=1&apikey=99e6a288`;
  const res = await fetch(`${url}`);
  const data = await res.json();
  // if (data.Response === 'True') console.log(data.Search);
  if (data.Response === 'True') displayMovieList(data.Search);
}

function findMovie() {
  let searchTitle = movieSearchBox.value;
  console.log(searchTitle);
}

movieSearchBox.addEventListener('keyup', findMovie);
