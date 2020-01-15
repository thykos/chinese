import React, { Component } from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import store from './domain/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ch-app">
        <Provider store={store}>
        <Router/>
        </Provider>
      </div>
    );
  }
}

export default App;
