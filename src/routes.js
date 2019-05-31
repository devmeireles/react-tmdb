import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';
import People from './pages/People';

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/movie/:id" component={Movie}></Route>
            <Route path="/people/:id" component={People}></Route>
            <Route render={ () => <h1>404 Error</h1> } />
        </Switch>
    </HashRouter>
);

export default Routes;