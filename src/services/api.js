const MOVIE_SEARCH_BASE_URL = `http://www.omdbapi.com/?apikey=1244f9a6&page=1&s=`

const api = {
    movie: {
        search: ( query) => {
            fetch(MOVIE_SEARCH_BASE_URL + query)
                .then((res) => res.json())
                .catch(error => error)
        },
    },
    
}

export default api;