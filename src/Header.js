import React, { Component } from 'react';
import logo from './logo.svg';

 class Header extends Component {
  render(){
    return(
      <div>
        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          {
            // <div> This is a comment in React </div>
          }

          <h2>Welcome to React</h2>
          <p> Loading from <b>Header</b> Component</p>
        </div>
      </div>
    );
  }
}

export default Header;
