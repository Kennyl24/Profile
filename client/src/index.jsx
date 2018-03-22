import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './containers/AboutPage.jsx';
import LandingPage from './containers/LandingPage.jsx';
import LandingPageTwo from './containers/LandingPageTwo.jsx';
import LeadBar from './containers/LeadBar.jsx';
import Portfolio from './containers/Portfolio.jsx';
import Backend from './containers/Backend.jsx';
import Projects from './containers/Projects.jsx';
import Contact from './containers/Contact.jsx';
import Footer from './containers/Footer.jsx';
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/About" component={AboutPage} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Projects" component={Projects} />
    </Switch>
  </Router>,
  document.getElementById('app'),
);
