import React from "react";
import {Switch, Route} from "react-router-dom";
import PublicRoutes from "./publicRoutes";
import App from "../App";


const routes = (
    <App>
        <Switch>
            <Route path={'/'} component={PublicRoutes}/>
        </Switch>
    </App>
);

export default routes;