const initialState = {
  list: [],
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCHING_FEED':
        return { ...state, isFetching: true };
    case 'FINISH_FETCHING_FEED':
        return { ...state, isFetching: false };
    case 'RECEIVE_FEED':
      return { ...state, list: action.feed };
    default:
      return state;
  }
};
