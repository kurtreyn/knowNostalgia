// Titles: https://omdbapi.com/?s=thor&page=1&apikey=99e6a288
// details: https://www.omdbapi.com/?i=tt3896198&apikey=99e6a288

const tvSearchBox = document.querySelector('#tv-title');
const searchList = document.querySelector('#search-list');
const resultGrid = document.querySelector('#result-grid');

function findTvShow(tvSearch) {
  fetch(`https://omdbapi.com/?s=${tvSearch}&page=1&apikey=99e6a288`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === 'True') console.log(data.Search);
      const list = data.Search;
      let searchFor = tvSearchBox.value.trim();
      //   console.log(searchFor);
      //   console.log(list);

      //   list.map((item) => {
      //     const name = item.Title;
      //     const poster = item.Poster;
      //     const tvShows = `<li><img src="${poster}"></li>`;
      //     // searchList.innerHTML = tvShows;
      //     console.log(name);
      //   });
    })
    .catch((err) => {
      console.error(err);
    });
}

findTvShow('Friends');

tvSearchBox.addEventListener('keyup', findTvShow);
