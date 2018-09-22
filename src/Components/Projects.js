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
          <CardTitle style={{ color: 'black', height: '176px', background: 'url() center/cover'}}>
          myPintrips
          </CardTitle>
          <CardText>
            hi
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff'}}>

          </CardMenu>
        </Card>
        <Card shadow={5} className="project-card">
          <CardTitle style={{ color: 'black', height: '176px', background: 'url() center/cover'}}>
          myPintrips
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
    } else if (this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
        {/*project 2*/}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url() center/cover'}}>
          Calendar App
          </CardTitle>
          <CardText>
            hi
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
    } else if (this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
         {/*project 3*/}
         <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{ color: 'black', height: '176px', background: 'url() center/cover'}}>
         E-commerce Mock site
         </CardTitle>
         <CardText>
           hi
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
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Project1</Tab>
          <Tab>Project2</Tab>
          <Tab>Project3</Tab>
        </Tabs>

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
