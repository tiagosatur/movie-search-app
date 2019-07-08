import { 
    MOVIE_DETAILS_PENDING,
    MOVIE_DETAILS_SUCCESS,
    MOVIE_DETAILS_ERROR,
} from '../../utils/actionTypes';

export const initialState = {
    pending: false,
    details: {},
    error: null
}

export default ( state = initialState, action ) => {
    const { type, details, error } = action;

    switch(type) {
        case MOVIE_DETAILS_PENDING:
            return {
                ...state,
                details: {},
                pending: true
            };
        case MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                pending: false,
                details: details,
            };
        case MOVIE_DETAILS_ERROR:
            return {
                ...state,
                details: {},
                pending: false,
                error: error
            };
        default: 
            return state;
    }
    
};