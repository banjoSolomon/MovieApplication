const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394";
const API_URL = "https://api.themoviedb.org/3"
const MOVIE_URL = `${API_URL}/movie/popular?${API_KEY}`;
const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`
console.log(MOVIE_URL)
const getMovies = (url)=>{
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results);
            showMovies(data.results);
        })
        .catch((error)=>console.log(error))
}
getMovies(MOVIE_URL);


const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

const movieContainer = document.querySelector(".movieContainer");
const showMovies = (movies) => {
    movieContainer.innerHTML = "";
    movies.forEach((movies) => {
        const {title, overview, poster_path, vote_average} = movies;
        const divTag = document.createElement('div');
        const MOVIE_URL = `${API_URL}/popular?${API_KEY}`;
        divTag.classList.add("moviesDetails");
        divTag.innerHTML = `<img src="${IMAGE_URL}${poster_path} " alt="">
            <div id="movieTitle">
                <p>${title}</p>
                <p>${vote_average}</p>
            </div>
            <h2>Overview</h2>
            <p>${overview}</p>`

        movieContainer.appendChild(divTag)


    })

    const form = document.querySelector(".search")
    const search = document.querySelector("#searchInput")

    form.addEventListener("keyup", (e) => {
        e.preventDefault();
        const searchValue = search.value
        if(searchValue){
            getMovies(SEARCH_URL + "&query=" + searchValue)
        }else{
            getMovies(MOVIE_URL)
        }
    })


}
