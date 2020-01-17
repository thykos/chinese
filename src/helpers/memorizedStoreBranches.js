

export const setItemToLocalStorage = (obj = {}) => {
  const memorizedStoreBranches = localStorage.getItem('memorizedStoreBranches');
  const parsedMemorizedStoreBranches = memorizedStoreBranches ? JSON.parse(memorizedStoreBranches) : {};
  localStorage.setItem('memorizedStoreBranches', JSON.stringify({...parsedMemorizedStoreBranches, ...obj}));
};

export const getItemFromLocalStorage = () => {
  const memorizedStoreBranches = localStorage.getItem('memorizedStoreBranches');
  return memorizedStoreBranches ? JSON.parse(memorizedStoreBranches) : {};
};

export const reducerWrapper = (reducer, initialState, key) => (state = initialState, action = {}) => {
  const newState = reducer(state, action);
  if (newState !== state) {
    setItemToLocalStorage({[key]: newState});
  }
  return newState;
};
