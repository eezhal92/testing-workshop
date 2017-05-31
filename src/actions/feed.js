import { getFeed } from '../api';

/**
 * Action Creators
 */

export const receiveFeed = (feed) => ({
  type: 'RECEIVE_FEED',
  feed,
});

export const startFetchingFeed = () => ({
  type: 'START_FETCHING_FEED',
});

export const finishFetchingFeed = () => ({
  type: 'FINISH_FETCHING_FEED',
});


/**
 * Async Action Creators
 */

/**
 * @return {Function}
 */
export const ambilFeed = () => dispatch => {
  dispatch(startFetchingFeed());

  return getFeed().then((feed) => {
    dispatch(receiveFeed(feed));
    dispatch(finishFetchingFeed());

    return feed;
  });
}
