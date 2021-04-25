import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { Home } from "../../container/Home";
import { FirstQuestion } from "../../container/FirstQuestion";
import { SecondQuestion } from "../../container/SecondQuestion";
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
                    <Route exact path={PATH_NAME.secondQuestion()}>
                        <SecondQuestion />
                    </Route>
                </Switch>
        </Router>
    );
}

