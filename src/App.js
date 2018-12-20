import React, { Component } from 'react';
// import './App.css';
// import Hello from './components/Hello';
import NavBar from './components/NavBar';
import {WelcomeBackground} from './components/Background';
import Header from './StyledComponents/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <WelcomeBackground>
        <Header chipsandsalsa={'medium'} align={'center'}> HELLO. My name is Katrina and I am a full-stack web developer.</Header> Header>
      </WelcomeBackground>
      </div>
    );
  }
}

export default App;
