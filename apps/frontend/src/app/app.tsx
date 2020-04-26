// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './app.scss';

import HomeDarkPage from './pages/home-dark.page';
import NotFoundPage from './pages/not-found.page';

export const App = () => {
  return (
    <BrowserRouter basename={'/'}>
      <Switch>
        <Route
          exact
          path="/"
          component={HomeDarkPage}
        />
        <Route
          exact
          path="/404"
          component={NotFoundPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
