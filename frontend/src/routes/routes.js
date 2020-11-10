import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';

import Home from '../pages/Home';
import Search from '../pages/Search';
import SerieDetail from '../pages/SerieDetail';

const Routes = () => (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SerieDetail" component={SerieDetail} />
            <Route exact path="/Search" component={Search} />
        </Switch>
    </BrowserRouter>
);

export default Routes;