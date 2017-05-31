import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Feed from './containers/Feed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Feed />
        </div>
      </div>
    );
  }
}

export default App;
