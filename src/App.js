import React, { Component } from 'react';
// import './App.css';
// import Hello from './components/Hello';
import NavBar from './components/NavBar';
import {WelcomeBackground} from './components/Background';
import Header from './StyledComponents/Header';
import Content from './components/Content';
import Social from './components/Social';
import Button from './components/Button';
import {Container} from 'semantic-ui-react';
import Project from './components/Projects';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <WelcomeBackground>
		<Container>
        <Content />
		  <Header size={'medium'} adjust={'center'}>Hi, my name is Katrina Tran.</Header>
		  <Header size={'medium'} adjust={'center'}>I am a Junior full stack web developer from Salt Lake City, Utah with a passion for learning. </Header>
		  <Button />
		  <Project />
		  <Header size={'medium'} adjust={'center'}>Contact Me</Header>
		  		<p align='center'>Feel free to contact me through email or follow me on social media.</p>
		  <Social />
	  	</Container>
		  </WelcomeBackground>

	  </div>

    );
  }
}

export default App;
