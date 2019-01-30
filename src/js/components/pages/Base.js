import React, { Component } from "react";
import Navigation from "../Navigation";
import { Provider } from "react-redux";
import history from "../../History";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { store } from "../../store";
import { ROUTES } from "../../Routes";
import Search from "../Search";

class Base extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navigation />
          <br />
          <br />
          <br />
          <div className="container">
            <Search />
          </div>
          <Router history={history}>
            <Switch>
              <Route
                exact
                path={ROUTES.library.url}
                component={ROUTES.library.component}
              />
              <Route
                exact
                path={ROUTES.movie.url}
                component={ROUTES.movie.component}
              />
              <Route
                exact
                path={ROUTES.series.url}
                component={ROUTES.series.component}
              />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}
export default Base;
// <Results />

//<Preview title="Adventure Time" year="2010" cover="https://image.tmdb.org/t/p/original/ftVVl9zg4Kiuwr25IJhJ2vaxCBR.jpg" img="https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"/>
//        <SeasonBrowser />
