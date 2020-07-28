
const querySelector = state => id => {
  if (id in state) {
    return state[id];
  }

  return null;
};

export default querySelector;
