import { 
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
    SEARCH_MOVIE_CLEAR,
} from '../../utils/actionTypes';


export function searchMoviePending() {
    return {
        type: SEARCH_MOVIE_PENDING
    }
}

export function searchMovieSuccess(movie) {
    return {
        type: SEARCH_MOVIE_SUCCESS,
        movie
    }
}

export function searchMovieError(error) {
    return {
        type: SEARCH_MOVIE_ERROR,
        error: error
    }
}


export function searchMovieClear(error) {
    return {
        type: SEARCH_MOVIE_CLEAR,
    }
}


export const searchMovie = (query) => (dispatch) => {
    dispatch(searchMoviePending());

    const movieSearchURL = `http://www.omdbapi.com/?apikey=1244f9a6&page=1&s=`
    
    fetch(movieSearchURL+query)
    .then((res) => res.json())
    .then(res => {
        if(res.Response == 'False') {
            throw(res.Error)
        }
        dispatch(searchMovieSuccess(res))

    })
    .catch(error => {
        dispatch(searchMovieError(error));
    })
}