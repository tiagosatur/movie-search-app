import { 
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
} from '../../utils/actionTypes';

function loginUserPending() {
    return {
        type: LOGIN_USER_PENDING
    }
}

export function loginUserSuccess(user) {    
    return {
        type: LOGIN_USER_SUCCESS,
        user
    }
}

function loginUserError(error) {
    return {
        type: LOGIN_USER_ERROR,
        error: error
    }
}

export const loginUser = (data) => (dispatch) => {
    dispatch(loginUserSuccess(data))
}