import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Connect from './Connect';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutMe: false,
      projects: false,
      contact: false,
      connect: false
    }

    this.hoverAboutMe = this.hoverAboutMe.bind(this);
    this.hoverProjects = this.hoverProjects.bind(this);
    this.hoverContact = this.hoverContact.bind(this);
    this.hoverConnect = this.hoverConnect.bind(this);
  }

  hoverAboutMe() {
    this.setState({
      aboutMe: !this.state.aboutMe
    })
  }

  hoverProjects() {
    this.setState({
      projects: !this.state.projects
    })
  }

  hoverContact() {
    this.setState({
      contact: true
    })
  }

  handleContact() {
    this.setState({
      contact: false
    })
  }

  hoverConnect() {
    this.setState({
      connect: !this.state.connect
    })
  }

  render() {
    return (
     <div>
      <h1 className='title'>Cecilia Song Avery</h1>
      <div className='title-box' onClick={this.hoverAboutMe}>
      About Me
      {this.state.aboutMe ? <AboutMe /> : null}
      </div>
      <div className='title-box' onClick={this.hoverProjects}>
      Projects
      {this.state.projects ? <Projects /> : null}
      </div>
      <a href='https://medium.com/@ceciliasongavery' target='none'><div className='title-box'>Blog</div></a>
      <div className='title-box' onClick={this.hoverContact}>
      Contact
      {this.state.contact ? <Contact handleContact={this.handleContact}/> : null}
      </div>
      <div className='title-box' onClick={this.hoverConnect}>
      Connect
      {this.state.connect ? <Connect /> : null}
      </div>
    </div>
    );
  }
}

export default App;
