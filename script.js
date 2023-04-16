const API_KEY = 'df9abdcd'

const form = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')
const movieList = document.querySelector('#movie-list')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = searchInput.value.trim()
    const API_URL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            const movies = data.Search
            movieList.innerHTML = ''
            if (movies) {
                movies.forEach((movie) => {
                    const movieItem = document.createElement('li')
                    const movieImg = document.createElement('img')
                    const movieTitle = document.createElement('h2')
                    const movieYear = document.createElement('span')
                    const moviePlot = document.createElement('p')

                    movieImg.src = movie.Poster
                    movieTitle.innerText = movie.Title
                    movieYear.innerText = `(${movie.Year})`

                    movieItem.appendChild(movieImg)
                    movieItem.appendChild(movieTitle)
                    movieItem.appendChild(movieYear)

                    movieList.appendChild(movieItem)
                })
            } else {
                movieList.innerText = 'No movies found'
            }
        })
})
