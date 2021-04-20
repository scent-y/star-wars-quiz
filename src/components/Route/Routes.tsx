import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { Home } from "../../container/Home";
import { FirstQuestion } from "../../container/FirstQuestion";
import { PATH_NAME } from "../../routes";

export const Routes = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path={PATH_NAME.home()}>
                        <Home />
                    </Route>
                    <Route exact path={PATH_NAME.firstQuestion()}>
                        <FirstQuestion />
                    </Route>
                </Switch>
        </Router>
    );
}

