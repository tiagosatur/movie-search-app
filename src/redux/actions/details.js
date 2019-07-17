import { 
    MOVIE_DETAILS_PENDING,
    MOVIE_DETAILS_SUCCESS,
    MOVIE_DETAILS_ERROR,
} from '../../utils/actionTypes';
import { api } from '../../services';

export function movieDetailsPending() {
    return {
        type: MOVIE_DETAILS_PENDING
    }
}

export function movieDetailsSuccess(details) {
    return {
        type: MOVIE_DETAILS_SUCCESS,
        details
    }
}

export function movieDetailsError(error) {
    return {
        type: MOVIE_DETAILS_ERROR,
        error: error
    }
}

export const movieDetails = (id) => (dispatch) => {
    dispatch(movieDetailsPending());

    return api.movie
        .details(id)
        .then((res) => {
            dispatch(movieDetailsSuccess(res))
        })
        .catch((error) => {
            dispatch(movieDetailsError(error));
        })
}