import React from 'react';
import { shallow } from 'enzyme';
import FeedItem from './FeedItem';

describe('FeedItem', () => {
  it('should show correct feed content', () => {
    const subject = shallow(<FeedItem
      content="Hello, Something goes here"
    />);

    expect(subject.find('.FeedItem__content').text()).toBe('Hello, Something goes here');
  });

  it('should able to hide/show feed content', () => {
    const subject = shallow(<FeedItem
        content="Hey There"
    />);

    expect(subject.find('.FeedItem__content').text()).toBe('Hey There');
    expect(subject.find('.FeedItem__btn-visibility').text()).toBe('Hide');

    subject.find('.FeedItem__btn-visibility').simulate('click');

    expect(subject.find('.FeedItem__content').text()).toBe('');
    expect(subject.find('.FeedItem__btn-visibility').text()).toBe('Show');

    subject.find('.FeedItem__btn-visibility').simulate('click');

    expect(subject.find('.FeedItem__content').text()).toBe('Hey There');
    expect(subject.find('.FeedItem__btn-visibility').text()).toBe('Hide');
  });
});
