import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{width:'100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="../profile_smaller.jpg"
              alt="profile"
              className="profile-img"
            />

            <div className="banner-text">
              <h5>Front End Web Developer</h5>
              <hr />
              <p>Javascript | HTML | CSS | React</p>
              <div className="social-links">
                <a href="http://www.github.com/cilavery" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"
                aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/cecilia-song/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"
                aria-hidden="true" />
                </a>
                <a href="https://twitter.com/_meowzers_?lang=en" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"
                aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
