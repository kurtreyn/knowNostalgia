'use strict';
// Titles: https://omdbapi.com/?s=thor&page=1&apikey=99e6a288
// details: https://www.omdbapi.com/?i=tt3896198&apikey=99e6a288

const tvSearchBox = document.querySelector('#tv-title');
const searchListTV = document.querySelector('#search-list-tv');
const resultGridTV = document.querySelector('#result-grid-tv');
let tvPoster;

function loadTvShow(tvSearch) {
  fetch(`https://omdbapi.com/?s=${tvSearch}&page=1&apikey=99e6a288`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      // if (data.Response === 'True') console.log(data.Search);
      if (data.Response === 'True') displayTVList(data.Search);
      // const list = data.Search;

      // console.log(`list is: ${list}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

function findTvShow() {
  let searchFor = tvSearchBox.value.trim();
  // console.log(`searched for ${searchFor}`);
  if (searchFor.length > 0) {
    searchListTV.classList.remove('hide-search-list');
    loadTvShow(searchFor);
  } else {
    searchListTV.classList.add('hide-search-list');
  }
}

function displayTVList(tvShow) {
  searchListTV.innerHTML = '';
  for (let tvx = 0; tvx < tvShow.length; tvx++) {
    let tvListItem = document.createElement('div');
    // console.log(tvListItem);
    tvListItem.dataset.id = tvShow[tvx].imdbID;

    tvListItem.classList.add('search-list-item');
    if (tvShow[tvx].Poster != 'N/A') {
      tvPoster = tvShow[tvx].Poster;
    } else {
      tvPoster = '../assets/images/image_not_found.png';
    }
    let tvYear = tvShow[tvx].Year;
    let tvType = tvShow[tvx].Type;
    if (tvYear >= '1990' && tvYear <= '2009' && tvType === 'series') {
      tvListItem.innerHTML = `
      <div class="search-list-item">
      <div class="search-item-thumbnail">
        <img src="${tvPoster}" />
      </div>
    </div>
      `;
      searchListTV.appendChild(tvListItem);
    } else {
      tvListItem.innerHTML = '../assets/images/image_not_found.png';
    }
  }
  loadTVDetails();
}

function loadTVDetails() {
  const searchListTvShows = searchListTV.querySelectorAll('.search-list-item');
  searchListTvShows.forEach((tvShow) => {
    // console.log(tvShow);
    tvShow.addEventListener('click', async () => {
      // console.log(movie.dataset.id);
      searchListTV.classList.add('hide-search-list');
      tvSearchBox.value = '';
      const resultDetails = await fetch(
        `https://www.omdbapi.com/?i=${tvShow.dataset.id}&apikey=99e6a288`
      );
      const tvShowDetails = await resultDetails.json();
      const tvYear = tvShowDetails.Year;
      // console.log(tvShowDetails);
      if (tvYear >= '1990' && tvYear <= '2009') {
        displayTVDetails(tvShowDetails);
      } else {
        resultGridTV.innerText = 'TV Show was not released between 1990 - 2009';
      }
    });
  });
}

function displayTVDetails(detailsTV) {
  resultGridTV.innerHTML = `
  <div class="movie-poster">
  <img
    src="${
      detailsTV.Poster != 'N/A'
        ? detailsTV.Poster
        : '../assets/images/image_not_found.png'
    }"
    alt="movie poster"
  />
</div>
<div class="movie-info">
  <h3 class="movie-title">${detailsTV.Title}</h3>
  <ul class="movie-misc-info">
    <li class="year">Year: ${detailsTV.Year}</li>
  </ul>
  <p class="plot">
    <b>Plot:</b> ${detailsTV.Plot}
  </p>
</div>
  `;
}

// findTvShow('Friends');

tvSearchBox.addEventListener('keyup', findTvShow);
