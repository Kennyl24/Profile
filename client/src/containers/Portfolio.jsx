import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Backend from './Backend.jsx';
import Chip from 'material-ui/Chip';
        // key={data.key}
        // onRequestDelete={() => this.handleRequestDelete(data.key)}
        // style={this.styles.chip}
const Portfolio = () => (
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
);
export default Portfolio;
