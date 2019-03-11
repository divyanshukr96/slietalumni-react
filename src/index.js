import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'connected-react-router'
import routes from "./routes"
import * as serviceWorker from './serviceWorker';
import NetworkService from "./utils/networkService"
import configureStore, {history} from "./stores/configureStore";

const store = configureStore();

NetworkService.setupInterceptors(store, history);

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history} children={routes}/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
