import { 
    MOVIE_DETAILS_PENDING,
    MOVIE_DETAILS_SUCCESS,
    MOVIE_DETAILS_ERROR,
} from '../../utils/actionTypes';

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

    const movieSearchURL = `http://www.omdbapi.com/?apikey=1244f9a6&page=1&i=`
    
    fetch(movieSearchURL+id)
    .then((res) => res.json())
    .then(res => {
        if(res.Response === 'False') {
            throw(res.Error)
        }
        dispatch(movieDetailsSuccess(res))
        
    })
    .catch(error => {
        dispatch(movieDetailsError(error));
    })
}