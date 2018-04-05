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

Creaing `Intro.js`
```
import React, { Component } from 'react';

class Intro extends Component {
  render(){
    return(
      <div>
        <p className="App-intro">
          <h1> HELLO WORLD</h1>
          <p> First react program with React components </p>
          This is loading from <b>Intro</b> Component.
        </p> 
      </div>
    );
  }
}

export default Intro;


```
 
## Step3 :
Import Header and Intro and use in Apps.js 

`App.js` Code Import `Header.js` and `Intro.js`

```
import React, { Component } from 'react';

class Intro extends Component {
  render(){
    return(
      <div>
        <p className="App-intro">
          <h1> HELLO WORLD</h1>
          <p> First react program with React components </p>
          This is loading from <b>Intro</b> Component.
        </p> 
      </div>
    );
  }
}

export default Intro;
```

# How to get the code and run on your machine

1. Download or git clone the repository
2. npm i - to install all the required modules
3. npm start - to start the server 
4. http://localhost:3000 the browser will show the output. 
