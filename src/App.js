import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Intro from './Intro';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <p>Hey, (From <b>App</b> Component)</p>
        <Intro />
      </div>
    );
  }
}

export default App;
