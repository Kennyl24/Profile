import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Skills from './Skills.jsx';
import Description from './Descriptions.jsx';
import ActionHome from 'material-ui/svg-icons/action/home';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import ActionHourglassEmpty from 'material-ui/svg-icons/action/hourglass-empty';
import HardwareDeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import HardwareDevicesOther from 'material-ui/svg-icons/hardware/devices-other';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import NavMenu from './NavMenu.jsx';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  tooltip: {
    width: 120,
    fontSize: '22px',
    backgroundColor: 'white',
    fontColor: 'black',
    color: '#e74a64',
    rippleBackgroundColor: 'blue'
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};
class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
  <MuiThemeProvider>
    <NavMenu/>
  <div className="skillspage">
    <h1>Technical Skills</h1>
  <div>
  <div className="arrowright"><IconButton 
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large}href="/Projects" tooltip="Projects" >
      <NavigationArrowForward />
    </IconButton></div>
    <div className="arrowleft">
    <IconButton 
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large}href="/" tooltip="Home">
      <NavigationArrowBack />
    </IconButton>
  </div>
  <div>
  <p>
    I specialize in front end development and design, with knowledge in system administration and back end development.
  </p>
  <div className="skills">
  <Skills/> 
  </div>
    </div>
      </div>
    </div>
    </MuiThemeProvider>
    );
  };
}
export default AboutPage;