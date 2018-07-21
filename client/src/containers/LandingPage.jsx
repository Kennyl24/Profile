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
import NavMenu from './NavMenu.jsx';

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
    color: 'white'
  },
  tooltip: {
    width: 120,
    fontSize: '22px',
    backgroundColor: 'white',
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

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked(){
    console.log('hello');
  }
  render () {
    return (
      <MuiThemeProvider>
    <div className="landingpage">
    <NavMenu/>
    <div className="arrowright bounce">LEARN MORE<IconButton 
    onMouseOver={this.buttonClicked}
    iconStyle={styles.largeIcon}
    style={styles.large}href="/Projects" onClick={this.buttonClicked}>
      <NavigationArrowForward />
    </IconButton>
    </div>
    <div className="introduction">
       <h2>Hi, my name is <h12>&nbsp;Kenneth LaPrelle</h12>.
       </h2>
       <h3>
        Let's build something <span className="lakers">spectacular.</span>
       </h3>
       </div>
    </div>
      </MuiThemeProvider>
    );
  };
}

export default LandingPage;