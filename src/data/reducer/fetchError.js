
const fetchError = (state, action) => {
  const { id } = action.payload;
  const { [id]: query } = state;

  return {
    ...state,
    [id]: {
      ...query,
      error: true,
    },
  };
};

export default fetchError;
