import { 
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
    MOVIE_DETAILS_PENDING,
    MOVIE_DETAILS_SUCCESS,
    MOVIE_DETAILS_ERROR,
} from '../../utils/actionTypes';


function searchMoviePending() {
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

function searchMovieError(error) {
    return {
        type: SEARCH_MOVIE_ERROR,
        error: error
    }
}


function movieDetailsPending() {
    return {
        type: MOVIE_DETAILS_PENDING
    }
}

export function movieDetailsSuccess(movie) {    
    return {
        type: MOVIE_DETAILS_SUCCESS,
        movie
    }
}

function movieDetailsError(error) {
    return {
        type: MOVIE_DETAILS_ERROR,
        error: error
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
        //console.log('result', JSON.stringify(res));
        //dispatch(searchMovieSuccess(res.Search))
        dispatch(searchMovieSuccess(res))

    })
    .catch(error => {
        dispatch(searchMovieError(error));
    })
}