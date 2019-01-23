import React, { Component } from 'react';
import NavBar from './components/NavBar';
import {WelcomeBackground} from './components/Background';
import Header from './StyledComponents/Header';
import Content from './components/Content';
import Social from './components/Social';
import {Container} from 'semantic-ui-react';
import Project from './components/Projects';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <WelcomeBackground id="katrinatran">
		<Container>
        <Content />
		  <Header size={'medium'} adjust={'center'}>Hello, my name is Katrina Tran.</Header>
		  <Header size={'small'} adjust={'center'}>I am a junior full stack web developer from Salt Lake City, Utah with a passion for learning and desire to build functional web applications. I am new to programming and finished a course through DevPoint Labs where I learned JavaScript, React, Ruby, Ruby on Rails, and PostgreSQL. I would love the opportunity to utilize the skills I have learned and work on new projects.</Header>
		  <hr />
			<h1 id="projects" style={{color: '#4a274f'}} size={'medium'} align={'center'}>Projects</h1>

		  <Project />
		  	<hr />
		  <Header id="contact" style={{color: '#4a274f'}} size={'medium'} adjust={'center'}>Contact Me</Header>
		  		<p style={{fontSize: '18px'}} align='center'>Feel free to contact me through email or follow me on social media.</p>
		  <Social />
		  	<a name="contact"></a>
	  	</Container>
		  </WelcomeBackground>

	  </div>

    );
  }
}

export default App;
