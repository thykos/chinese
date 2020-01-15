import I from 'seamless-immutable';

const initialState = I({
  name: null
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { reducer };
