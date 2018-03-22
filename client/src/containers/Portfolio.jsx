import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Backend from './Backend.jsx';
import Chip from 'material-ui/Chip';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
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
        
const Portfolio = () => (
  <div>
  <div style={{paddingLeft: '89%', paddingTop:'1px'}}><IconButton 
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large}href="/Projects" tooltip="About Me">
      <NavigationArrowForward />
    </IconButton></div>
  <div className="flexer">
  <div className="col">
  <img style={{height: '250px', paddingLeft: '38%'}}src="http://i67.tinypic.com/wrm9fn.jpg" alt=""/>
  <div className="description2">Hi, my name is Kenneth. As a full stack software engineer, I am someone who has the passion for creatings extraordinary user experiences, while touching across the full stack of the application.
    <br/>
    <br/>
    <div className="colorfulText">Let's build something spectacular.
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
  </div>
  </div>
    <div className="col">
    <Backend/>
    </div>
  </div>
  </div>
);
export default Portfolio;
