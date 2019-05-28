import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/movie/:id" component={Movie}></Route>
        </Switch>
    </HashRouter>
);

export default Routes;