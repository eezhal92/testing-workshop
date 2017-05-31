import feedReducer from './feed';

describe('Feed Reducer', () => {
  it('should able to receive feed', () => {
    const feed = [{ id: 1, content: 'Hey There' }];
    const action = {
      type: 'RECEIVE_FEED',
      feed,
    };

    const result = feedReducer(undefined, action);

    const expectedState = {
        isFetching: false,
        list: feed,
    };

    expect(result).toEqual(expectedState);
  });

  it('should able to change fetching indicator to true', () => {
    const action = { type: 'START_FETCHING_FEED' };

    const result = feedReducer(undefined, action);

    const expectedState = { list: [], isFetching: true };

    expect(result).toEqual(expectedState);
  });

  it('should able to change fetching indicator to false', () => {
    const action = { type: 'FINISH_FETCHING_FEED' };

    const predefinedState = {
      isFetching: true,
      list: [],
    };

    const result = feedReducer(predefinedState, action);

    const expectedState = {
        isFetching: false,
        list: [],
    };

    expect(result).toEqual(expectedState);
  });
});