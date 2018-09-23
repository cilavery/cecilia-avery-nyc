import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };

  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
        {/*project 1*/}
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(../pintrips.png) right  center/cover'}}>
          </CardTitle>
          <CardText className="card-text">
          <strong>Pintrips</strong> <br />Web app where multiple users can save locations on a single map, making it easier to create itineraries and reflect on past trips with fellow travelers. <div className="card-space"></div><strong>Technologies:</strong><br />React, Google Firebase.
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/acdc-1802/pintrips" target="_blank" rel="noopener noreferrer">Github</a></Button>
            <Button colored><a href="http://www.mypintrips.com" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

        {/*Project 2*/}
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(../airplay.png) center/cover'}}>

          </CardTitle>
          <CardText className="card-text">
            <strong>AirPlay</strong><br />Mock e-commerce SPA. Wrote the backend Sequelize schema for creating new products, routes for adding and listing all products and front-end component for viewing all products.  <div className="card-space"></div><strong>Technologies</strong><br />React, Redux, Sequelize, Express
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/MAAC-sunshines/Grace-Shopper" target="_blank" rel="noopener noreferrer">Github</a></Button>
            <Button colored><a href="https://airplay1802.herokuapp.com" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

         {/*Project 3*/}
         <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(../calendar-app.png) center/cover'}}>
          </CardTitle>
          <CardText className="card-text">
            <strong>Calendar</strong><br />Web app where user can add, delete and edit events.<div className="card-space"></div><strong>Technologies</strong><br />React, Redux, React-Redux, Sequelize, Express, Postgres
            </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/cilavery/spotify-calendar" target="_blank" rel="noopener noreferrer">Github</a></Button>
            <Button colored><a href="https://calendar-app-cil-avery.herokuapp.com/" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

        {/*Project 4*/}
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(../walking-dead.png) center/cover'}}>
          </CardTitle>
          <CardText className="card-text">
            <strong>Random Quote Generator</strong><br />Read random, popular quotes from the once great TV show, The Walking Dead. Quotes can be tweeted if you like them!<div className="card-space"></div><strong>Technologies</strong><br />Javascript, HTML, CSS
            </CardText>
          <CardActions border>
            <Button colored><a href="https://codepen.io/cilavery/pen/MKYvJp" target="_blank" rel="noopener noreferrer">CodePen</a></Button>
            <Button colored><a href="https://codepen.io/cilavery/full/MKYvJp/" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

        {/*Project 5*/}
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(../markov-poem.png) center/cover'}}>
          </CardTitle>
          <CardText className="card-text">
            <strong>Markov Poem Generator</strong><br />Markov poems created with a click of a button. Poems inspired by e.e. cummings and Craigslist for sale ads.<div className="card-space"></div><strong>Technologies</strong><br />Javascript, HTML, CSS
            </CardText>
          <CardActions border>
            <Button colored><a href="https://codepen.io/cilavery/pen/LeVyxW" target="_blank" rel="noopener noreferrer">CodePen</a></Button>
            <Button colored><a href="https://codepen.io/cilavery/full/LeVyxW/" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

        {/*Project 6*/}
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(../halp.png) center/cover'}}>
          </CardTitle>
          <CardText className="card-text">
            <strong>Halp</strong><br />User can input pro and con points of a decision. Data is then presented graphically to help the user make a decision.<div className="card-space"></div><strong>Technologies</strong><br />React, Sequelize, Express, Postgres, Javascript, HTML, CSS, Victory Data Charting Library for React
            </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/cilavery/HALP" target="_blank" rel="noopener noreferrer">Github</a></Button>
            {/* <Button colored><a href="https://halp-cecilia.herokuapp.com" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button> */}
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>
        </div>
      )
    }

    {//turn off if multiple projects}
    {
    // else if (this.state.activeTab === 1) {
    //   return(
    //     <div className="projects-grid">
    //     {/*project 2*/}
    //     <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
    //       <CardTitle style={{ color: 'black', height: '176px', background: 'url() center/cover'}}>
    //       Calendar App
    //       </CardTitle>
    //       <CardText>
    //         hi
    //       </CardText>
    //       <CardActions border>
    //         <Button colored>Github</Button>
    //         <Button colored>LiveDemo</Button>
    //       </CardActions>
    //       <CardMenu style={{ color: '#fff'}}>

    //       </CardMenu>
    //     </Card>
    //     </div>
    //   )
    // } else if (this.state.activeTab === 2) {
    //   return(
    //     <div className="projects-grid">
    //      {/*project 3*/}
    //      <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
    //      <CardTitle style={{ color: 'black', height: '176px', background: 'url() center/cover'}}>
    //      E-commerce Mock site
    //      </CardTitle>
    //      <CardText>
    //        hi
    //      </CardText>
    //      <CardActions border>
    //        <Button colored>Github</Button>
    //        <Button colored>LiveDemo</Button>
    //      </CardActions>
    //      <CardMenu style={{ color: '#fff'}}>

    //      </CardMenu>
    //    </Card>
    //    </div>
    //   )
    }
     }

  }

  render() {
    return (
      <div className="category-tabs">
        {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Project1</Tab>
          <Tab>Project2</Tab>
          <Tab>Project3</Tab>
        </Tabs> */}

        <section className="projects-grid">
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

        </section>
      </div>
    )
  }
}

export default Projects;
