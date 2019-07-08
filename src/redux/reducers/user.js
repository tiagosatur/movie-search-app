import { 
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
} from '../../utils/actionTypes';

export const initialState = {
    pending: false,
    isLogged: false,
    user: {},
    error: null
}

export const user = ( state = initialState, action ) => {
    const { type, user, error } = action;

    switch(type) {
        case LOGIN_USER_PENDING:
            return {
                ...state,
                user: {},
                pending: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                isLogged: true,
                user: user,
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                pending: false,
                isLogged: false,
                user: {},
                error: error
            };
        default: 
            return state;
    }
};