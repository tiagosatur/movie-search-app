import { 
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
} from '../../utils/actionTypes';

export const initialState = {
    pending: false,
    list: [],
    totalResults: 0,
    error: null
}

export const movie = ( state = initialState, action ) => {
    const { type, list, error } = action;

    switch(type) {
        case SEARCH_MOVIE_PENDING:
            return {
                ...state,
                list: [],
                totalResults: 0,
                pending: true
            };
        case SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                pending: false,
                list: list.Search,
                totalResults: list.totalResults,
                error: null,
            };
        case SEARCH_MOVIE_ERROR:
            return {
                ...state,
                list: [],
                pending: false,
                totalResults: 0,
                error: error
            };
        default: 
            return state;
    }
};