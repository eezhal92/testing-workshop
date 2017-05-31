import React from 'react';
import { connect } from 'react-redux';

import { ambilFeed } from '../actions';
import FeedItem from '../components/FeedItem';

class Feed extends React.Component {
  componentDidMount() {
    this.props.ambilFeed();
  }

  render() {
    const { feed, isFetchingFeed } = this.props;

    return (
      <div className="Feed">
        {isFetchingFeed ? 'Loading' : ''}
        {feed.map((item, i) => (
            <FeedItem key={i} content={item.content} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state.feed.list,
  isFetchingFeed: state.feed.isFetching,
});

const mapDispatchToProps = ({
    ambilFeed,
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);