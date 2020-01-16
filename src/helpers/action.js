export function syncAction(type) {
  const actionCreator = (payload) => ({ payload, type });
  return Object.assign(actionCreator, { type });
}
