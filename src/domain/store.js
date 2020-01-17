import { createStore, combineReducers } from 'redux';
import { getItemFromLocalStorage } from '../helpers/memorizedStoreBranches';
import { reducer as ui } from './ui';

const store = combineReducers({
  ui,
});

const preparedStore = getItemFromLocalStorage();

export default createStore(store, preparedStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
