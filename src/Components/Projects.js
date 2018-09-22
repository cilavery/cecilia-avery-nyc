import React, { Component } from 'react';
import { Tabs, Tab , Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu } from 'react-mdl';

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
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/) center/cover'}}>
          myPintrips
          </CardTitle>
          <CardText>
            hi
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/acdc-1802/pintrips" target="_blank">Github</a></Button>
            <Button colored><a href="http://www.mypintrips.com" target="_blank">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

        {/*Project 2*/}
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/) center/cover'}}>
          AirPlay
          </CardTitle>
          <CardText>
            hi2
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/MAAC-sunshines/Grace-Shopper" target="_blank">Github</a></Button>
            <Button colored><a href="https://airplay1802.herokuapp.com" target="_blank">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

         {/*Project 3*/}
         <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/) center/cover'}}>
          Calendar App
          </CardTitle>
          <CardText>
            hi2
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/cilavery/spotify-calendar" target="_blank">Github</a></Button>
            <Button colored><a href="https://calendar-app-cil-avery.herokuapp.com/" target="_blank">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

        {/*Project 4*/}
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/) center/cover'}}>
          Random Quote Generator
          </CardTitle>
          <CardText>
            hi2
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

        {/*Project 5*/}
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/) center/cover'}}>
          Markov Poem Generator
          </CardTitle>
          <CardText>
            hi2
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>

        {/*Project 6*/}
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/) center/cover'}}>
          Halp!
          </CardTitle>
          <CardText>
            hi2
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
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
