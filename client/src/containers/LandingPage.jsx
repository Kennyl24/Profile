import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
// main app
import LeadBar from './LeadBar.jsx';
import Portfolio from './Portfolio.jsx';
const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  tooltip: {
    width: 120,
    fontSize: '22px',
    backgroundColor: 'none',
    fontColor: 'black',
    color: 'black',
    rippleBackgroundColor: 'blue'
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

//import Contact from './Contact.jsx';
import Backend from './Backend.jsx';
import MenuNav from './MenuNav.jsx';
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked(){
    console.log('hello')
  }
  render () {
    return (
      <MuiThemeProvider>
      <div>
      <div style={{
    backgroundImage: 'url(http://i68.tinypic.com/2nqy8mh.jpg)',
    width: '100%',
    opacity: '0.80',
    height: '800px'}}>
    <div style={{paddingLeft:'90%'}}>
        <MenuNav/>
    </div>
    <div style={{paddingLeft: '89%', paddingTop:'140px'}}><IconButton 
    onmouseover={this.buttonClicked}
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large}href="/About" tooltip="About Me" onClick={this.buttonClicked}>
      <NavigationArrowForward />
    </IconButton></div>
       <h2>Hi, my name is <h12>&nbsp;Kenneth LaPrelle</h12>.
       <h3>
      As a full stack software engineer, I am someone who has the passion for creatings extraordinary user experiences, while touching across the full stack of the application.
       </h3>
       </h2>
       <div style={{paddingLeft:'44%'}}>
       <br/>
       </div>
    </div>
    </div>
      </MuiThemeProvider>
    );
  };
}

export default LandingPage;