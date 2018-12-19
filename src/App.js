import React, { Component } from 'react';
// import './App.css';
// import Hello from './components/Hello';
import NavBar from './components/NavBar';
import {WelcomeBackground} from './components/Background'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <WelcomeBackground>
        <p>Hi, my name is Katrina! I'm a full stack web developer.</p>
      </WelcomeBackground>
      </div>
    );
  }
}

export default App;
