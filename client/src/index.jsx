import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// main app
import AboutPage from './containers/AboutPage.jsx';
import LandingPage from './containers/LandingPage.jsx';
import LeadBar from './containers/LeadBar.jsx';
import Portfolio from './containers/Portfolio.jsx';
import Backend from './containers/Backend.jsx';
import Projects from './containers/Projects.jsx';
import Contact from './containers/Contact.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
      <div>
      <div>
      <LandingPage/>
      </div>
      <div>
      <AboutPage/>
      </div>
      <div>
      <Projects/>
      </div>
      <div>
      <Contact/>
      </div>
    <footer>
        &copy; Copyright 2018, Kenneth Laprelle
       </footer>
    </div>
      </MuiThemeProvider>
    );
  };
}
ReactDOM.render(<App />, document.getElementById('app'))