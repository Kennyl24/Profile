import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// main app
import LeadBar from './LeadBar.jsx';
import Backend from './Backend.jsx';
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
const iconStyles = {
  paddingTop: '20px',
  transform: 'scale(2.5)',
  marginRight: 250,
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
      <div>
      <div>
      <LeadBar/>
      </div>
      <div>
  <div className="test">
  <div>
    <Description/>
    </div>
  <Portfolio/>
      </div>
    </div>
    </div>
    </MuiThemeProvider>
    );
  };
}
export default AboutPage;