import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/movie/:id" component={Movie}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;