import { 
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
    SEARCH_MOVIE_CLEAR,
} from '../../utils/actionTypes';

export const initialState = {
    pending: false,
    movie: [],
    totalResults: 0,
    error: null
}

export default ( state = initialState, action ) => {
    const { type, movie, error } = action;

    switch(type) {
        case SEARCH_MOVIE_PENDING:
            return {
                ...state,
                movie: [],
                totalResults: 0,
                pending: true
            };
        case SEARCH_MOVIE_CLEAR :
            return {
                ...state,
                movie: [],
                totalResults: 0,
                pending: true
            };
        case SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                pending: false,
                movie: movie.Search,
                totalResults: movie.totalResults,
            };
        case SEARCH_MOVIE_ERROR:
            return {
                ...state,
                movie: [],
                pending: false,
                totalResults: 0,
                error: error
            };
        default: 
            return state;
    }
};