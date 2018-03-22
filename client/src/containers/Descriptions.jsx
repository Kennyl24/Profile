import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Backend from './Backend.jsx';
import Chip from 'material-ui/Chip';
import ActionHome from 'material-ui/svg-icons/action/home';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import ActionHourglassEmpty from 'material-ui/svg-icons/action/hourglass-empty';
import HardwareDeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import HardwareDevicesOther from 'material-ui/svg-icons/hardware/devices-other';
        // key={data.key}
        // onRequestDelete={() => this.handleRequestDelete(data.key)}
        // style={this.styles.chip}
const iconStyles = {
          transform: 'scale(2.5)',
          marginLeft: '48%',
          paddingBottom: '10px'
};
const Description = () => (
  <div>
    <div className="flexer">
    <div className="col">
    <ActionHourglassEmpty style={iconStyles} color={red500} />
    <div className="describe">Efficient</div>
    <div className="description">Fast load times and lag free interaction, my highest priority.</div>
    </div>
    <div className="col">
    <HardwareDevicesOther style={iconStyles} color={red500}  />
    <div className="describe">Responsive</div>
    <div className="description">My layouts will work on any device, big or small.</div>
    
    </div>
    <div className="col">
    <HardwareDeviceHub  style={iconStyles} color={red500} />
    <div className="describe">Dynamic</div>
    <div className="description">Websites don't have to be static, I love making pages come to life.</div>
    </div>
    </div>
    </div>
);
export default Description;