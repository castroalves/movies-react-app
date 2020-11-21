import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

function App() {

    return (
        <>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/movie/:id">
                <MoviePage />
            </Route>
        </Switch>
        </>
    );
}

export default App;
