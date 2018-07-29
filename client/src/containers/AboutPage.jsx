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
import SkillsList from './SkillsList.jsx'
import SkillsTest from './SkillsTest.jsx'
import Arrows from './Arrows.jsx'
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
  <div className="heading">
    <span className="titles">Technical Skills</span>
    </div>
  <Arrows next={'Contact'} previous={'Projects'}/>
  <div>
  <p>
  As a full stack software engineer, I am someone who has the passion for creatings extraordinary user experiences, while touching across the full stack of the application.
  Here are some of the technologies I have used in the past to complete this. 
  </p>
  <SkillsList/> 
    </div>
      </div>
  
    </MuiThemeProvider>
    );
  };
}
export default AboutPage;