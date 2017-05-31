/**
 * Test Suit for Feed Actions
 */

import * as actions from './feed';

describe('Feed Action', () => {
  it('should create an action for receiving feed', () => {
    const feed = [{ id: 1, content: 'Hello World' }];

    const expectedAction = {
        type: 'RECEIVE_FEED',
        feed,
    };

    expect(actions.receiveFeed(feed)).toEqual(expectedAction);
  });
});
