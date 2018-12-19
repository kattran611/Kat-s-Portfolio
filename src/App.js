import React, { Component } from 'react';
// import './App.css';
// import Hello from './components/Hello';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p>Hi, my name is Katrina! I'm a full stack web developer</p>
      </div>
    );
  }
}

export default App;
