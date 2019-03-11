import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import flashMessageReducer from "./flashMessageReducer";
import auth from "./authReducer"


export default (history) => combineReducers({
    router: connectRouter(history),
    flashMessage: flashMessageReducer,
    auth: auth,
})
