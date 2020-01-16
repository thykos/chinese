import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as ui } from './ui';

const store = combineReducers({
  ui,
});

export default createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__());
