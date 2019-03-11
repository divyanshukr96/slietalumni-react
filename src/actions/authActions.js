import * as type from './typeActions';
import {addFlashMessage} from './flashMessageActions';
import SetAuthorizationToken from "../utils/setAuthorizationToken";

const removeCurrentUser = () => dispatch => {
    localStorage.removeItem('token');
    SetAuthorizationToken(false);
    dispatch(setCurrentUser({}));
};

export const setCurrentUser = user => {
    return {
        type: type.SET_CURRENT_USER,
        user
    }
};

export const unauthorized = (history) => dispatch => {
    removeCurrentUser();
    history.push('/login');
    dispatch(addFlashMessage({
        message: 'Unauthorized login to access ...',
        options: {variant: 'warning'}
    }))
};

export const logout = () => dispatch => {
    removeCurrentUser();
    dispatch(addFlashMessage({
        message: 'You are Successfully Logged-out ...',
        options: {variant: 'success'}
    }))
};