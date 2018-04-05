# Frist program in ReactJS - 'Hello World' 


In this tutorial we can learn by creating seperate components in seperate files and loading in App.js 


## Step1: Bootstrapping the React App
### > create-react-app hello-world 
this is the creation of react app biolerplate code 

Starting the server
### > npm start 
to start the server, and default react app will load here.


## Step 2: 
Create two components named Header.js and Intro.js 
 
Creating `Header.js`
```
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
```



## Step3 :
Import Header and Intro and use in Apps.js 



