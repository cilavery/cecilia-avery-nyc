import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-126493246-1');
    ReactGA.pageview('/');
}

class App extends Component {

  render() {
    let title = <Link className="title-link" to="/">Cecilia Avery</Link>

    return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header" title={title} scroll>
                <Navigation className="navigation-text header">
                <div className="header-color">
                    <Link className="header-link" to="/projects">Projects</Link>
                    <Link className="header-link"  to="/aboutme">About Me</Link>
                    {/* <Link className="header-link"  to="/resume">Resume</Link> */}
                    <Link className="header-link"  to="/contact">Contact</Link>
                </div>
                </Navigation>
            </Header>
            <Drawer title={title}>
                <Navigation>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    {/* <Link to="/resume">Resume</Link> */}
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content">
                <Main />
                </div>
            </Content>
        </Layout>

    </div>
    );
  }
}

export default App;
