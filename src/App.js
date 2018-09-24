import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import styles from './customStyles.css.js';

class App extends Component {

  render() {
    return (
      /* Uses a header that scrolls with the text, rather than staying locked at the top */
    <div style={styles.header}>
        <Layout className='header-color' >
        <Header className="header-color" title={<span><span>}></span><strong><Link className="link" to="/">Cecilia Avery</Link></strong></span>}>
                <Navigation className="navigation-text">
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<span><span style={{ color: '#ddd' }}></span><strong><Link className="link" to="/">Cecilia Avery</Link></strong></span>}>
                <Navigation>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
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
