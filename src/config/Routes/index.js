import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Portfolio, Project } from '../../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/project">
                    <Project />
                </Route>
                <Route path="/">
                    <Portfolio />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;