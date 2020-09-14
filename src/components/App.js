import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import routes from '../routes';

const HomePage = lazy(() => import('./Homepage/Homepage'));
const MovieDetails = lazy(() => import('./Details/MovieDetails'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));

export class App extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className="header">
          <li className="list-item">
            <NavLink to={routes.homepage}>Home</NavLink>
          </li>
          <li>
            <NavLink to={routes.moviesPage}>Movies</NavLink>
          </li>
        </ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path={routes.homepage} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetails} />
            <Route path={routes.moviesPage} component={MoviesPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
