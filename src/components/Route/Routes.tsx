import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { Home } from "../../container/Home";
import { FirstQuestion } from "../../container/FirstQuestion";
import { SecondQuestion } from "../../container/SecondQuestion";
import { ThirdQuestion } from "../../container/ThirdQuestion";
import { FourthQuestion } from "../../container/FourthQuestion";
import { FifthQuestion } from "../../container/FifthQuestion";
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
                    <Route exact path={PATH_NAME.thirdQuestion()}>
                        <ThirdQuestion />
                    </Route>
                    <Route exact path={PATH_NAME.fourthQuestion()}>
                        <FourthQuestion />
                    </Route>
                    <Route exact path={PATH_NAME.fifthQuestion()}>
                        <FifthQuestion />
                    </Route>
                </Switch>
        </Router>
    );
}

