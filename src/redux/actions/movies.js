import { 
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
} from '../../utils/actionTypes';
import { api } from '../../services';

export function searchMoviePending() {
    return {
        type: SEARCH_MOVIE_PENDING
    }
}

export function searchMovieSuccess(list) {
    return {
        type: SEARCH_MOVIE_SUCCESS,
        list
    }
}

export function searchMovieError(error) {
    return {
        type: SEARCH_MOVIE_ERROR,
        error: error
    }
}

export const searchMovie = (query) => (dispatch) => {
    dispatch(searchMoviePending());
    
    return api.movie
        .search(query)
        .then((res) => {
            dispatch(searchMovieSuccess(res))
        })
        .catch((error) => {
            dispatch(searchMovieError(error));
        })
}