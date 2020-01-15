import { createStore, combineReducers } from 'redux';
import { reducer as auth } from './auth';

const store = combineReducers({
  auth
});

export default createStore(store);
