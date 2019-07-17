const MOVIE_SEARCH_BASE_URL = `http://www.omdbapi.com/`
const API_KEY = '?apikey=1244f9a6';
const INITIAL_PAGE = '&page=1'
const SEARCH_PARAMETER = '&s=';
const ID_PARAMETER = '&i='
const SEARCH_BASE_URL = MOVIE_SEARCH_BASE_URL + API_KEY + INITIAL_PAGE + SEARCH_PARAMETER;
const DETAILS_BASE_URL = MOVIE_SEARCH_BASE_URL + API_KEY + INITIAL_PAGE + ID_PARAMETER;

const api = {
    movie: {
        search: (query) =>
            fetch(SEARCH_BASE_URL + query)
                .then(res => res.json())
                .catch(error => error),

        details: movieId =>
            fetch(DETAILS_BASE_URL + movieId)
                .then(res => res.json())
                .catch(error => error),
    },
    
}

export default api;