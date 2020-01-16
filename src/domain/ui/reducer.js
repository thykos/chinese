import I from 'seamless-immutable';
import { setTitle } from './actions';

const initialState = I({
  title: null
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setTitle.type:
      return state.set('title', action.payload);

    default:
      return state;
  }
};

export { reducer };
