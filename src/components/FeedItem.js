import React, { Component } from 'react';
import './FeedItem.css';

class FeedItem extends Component {
  state = {
    isShow: true,
  };

  toggleVisibility = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  };

  render() {
    const { isShow } = this.state;
    const { content } = this.props;

    return (
      <div className="FeedItem">
        <button
          className="FeedItem__btn-visibility"
          onClick={this.toggleVisibility}
          style={{ float: 'right', clearfix: 'both' }}
        >
          {isShow ? 'Hide' : 'Show'}
        </button>
        <br />
        <div className="FeedItem__content">{isShow && content}</div>
      </div>
    );
  }
}

export default FeedItem;
