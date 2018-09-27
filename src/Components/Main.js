import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import MessageSent from './MessageSent';
import ReactGA from 'react-ga';

export function fireTracking(nextState) {

  const { pathname } = nextState.location // this gives you the next URL

   ReactGA.pageview(pathname)

 }

const Main = () => (
      <Switch>
        <Route exact path="/" onEnter={ fireTracking }component ={LandingPage} />
        <Route path="/aboutme" onEnter={ fireTracking }component ={AboutMe} />
        <Route path="/contact" onEnter={ fireTracking }component ={Contact} />
        <Route path="/projects" onEnter={ fireTracking }component ={Projects} />
        <Route path="/resume" onEnter={ fireTracking }component ={Resume} />
        <Route path="/message_sent" onEnter={ fireTracking }component={MessageSent}/>
      </Switch>
)

export default Main;
