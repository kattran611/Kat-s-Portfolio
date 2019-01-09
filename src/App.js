import React, { Component } from 'react';
// import './App.css';
// import Hello from './components/Hello';
import NavBar from './components/NavBar';
import {WelcomeBackground} from './components/Background';
import Header from './StyledComponents/Header';
import Content from './components/Content';
import Social from './components/Social';
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <WelcomeBackground>
        <Content />
		  <Header size={'medium'} adjust={'center'}> HELLO. My name is Katrina and I am a full-stack web developer.</Header> 
        </WelcomeBackground>
		  <Button />
        <Social />
      </div>
    );
  }
}

export default App;
