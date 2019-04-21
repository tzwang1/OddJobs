import React, { Component } from 'react';

import Header from './header/Header';
import Jobs from './jobs/Jobs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Jobs/>
      </div>
    );
  }
}

export default App;
