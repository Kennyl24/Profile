import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavMenu from './NavMenu.jsx';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Description from './Descriptions.jsx';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import FontIcon from 'material-ui/FontIcon';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionInfo from 'material-ui/svg-icons/action/info';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import CommunicationContactMail from 'material-ui/svg-icons/communication/contact-mail';
import CommunicationContactPhone from 'material-ui/svg-icons/communication/contact-phone';
const style = {
  height: 500,
  width: 500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    width: '60%',
    height: 550,
    overflowY: 'auto',
    paddingTop: '2%',
  },
  titleStyle: {
    color: 'white',
    fontSize: '28px',
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
    underlineStyle: {
      borderColor: 'black',
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
class Contact extends React.Component {
    constructor(props) {
      super(props);
  };
  render(){
    return (
      <MuiThemeProvider>
        <NavMenu/>
    <div className="contact_page">
    <span className="contact_form">
    <Paper style={style} zDepth={4} rounded={true}>
    <div className="heading">
    <span className="titles">Connect with me</span>
    </div>
    <FlatButton
      href="https://github.com/kennyl24"
      target="_blank"
      secondary={true}
      backgroundColor="#a4c639"
      icon={<FontIcon className="muidocs-icon-custom-github"GIT />}
    />
    {/* <img style={{height: '100px', width: '100px'}}src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>
    <img style={{height: '100px', width: '100px'}}src="http://sguru.org/wp-content/uploads/2018/02/linkedin-logo.png"></img>
    <img style={{height: '100px', width: '100px'}}src="http://www.stickpng.com/assets/images/584856b4e0bb315b0f7675ac.png"></img> */}
    <div className="heading">
    <span className="titles">Reach out Directly</span>
    </div>
    <TextField
      hintText="Name"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
     <TextField
      hintText="Email"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
     <TextField
      hintText="Phone (optional)"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
     <TextField
      hintText="Message"
      multiLine={true}
      rows={2}
    /><br />
    </Paper>
    </span>
    </div>
    <div className="arrowleft">
    <IconButton 
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large3}href="/Projects" tooltip="About Me">
      <NavigationArrowBack />
    </IconButton>
    </div>
    </MuiThemeProvider>
    );
  }
}
export default Contact;