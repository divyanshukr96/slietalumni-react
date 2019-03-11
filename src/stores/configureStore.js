import thunk from "redux-thunk";
import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router'
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import createRootReducer from '../reducers/reducer'
import SetAuthorizationToken from "../utils/setAuthorizationToken";

const middleware = [thunk];

const token = localStorage.token;

export const history = createBrowserHistory();

const configureStore = initialState => createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            ...middleware,
        ),
    ),
);

if (token) {
    SetAuthorizationToken(token);
    // configureStore.dispatch(setCurrentUser(jwtDecode(token)));
}

SetAuthorizationToken(token);

export default configureStore