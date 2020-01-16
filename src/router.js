import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/main';
import Test from './pages/test';
import LearnList from './pages/learn-list';
import Learn from './pages/learn';
import NoPath from './pages/noPath';
import Header from './components/header';
import './App.css';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <div className="ch-container">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/learn/:wordId">
              <Learn />
            </Route>
            <Route path="/test/:wordId">
              <Test />
            </Route>

            <Route exact path="/learn">
              <LearnList />
            </Route>
            <Route exact path="/test">
              <Test />
            </Route>

            <Route path="*">
              <NoPath />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
