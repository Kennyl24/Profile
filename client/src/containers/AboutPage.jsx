import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// main app
import LeadBar from './LeadBar.jsx';
import Backend from './Backend.jsx';
import MenuNav from './MenuNav.jsx';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio.jsx';
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
const iconStyles = {
  paddingTop: '20px',
  transform: 'scale(2.5)',
  marginRight: 250,
};
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
const viewBoxy = '0 0 24 24';
class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
  <MuiThemeProvider>
      <div className="test">
      {/* <div className="flexer5">
      <div className="tester">
        <h1 className="col">Technical Skills</h1>
        </div>
  <MenuNav/>
  <div style={{paddingLeft: '89%', paddingTop:'1px'}}><IconButton 
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large}href="/Projects" tooltip="About Me">
      <NavigationArrowForward />
    </IconButton></div>
     </div> */}
  <div>
  <div>
  <p>
    I specialize in front end development and design, with knowledge in system administration and back end development.
  </p>
  <Skills/> 
    </div>
      </div>
    </div>
    </MuiThemeProvider>
    );
  };
}
export default AboutPage;