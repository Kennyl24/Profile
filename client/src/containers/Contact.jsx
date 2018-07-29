import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
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
import Arrows from './Arrows.jsx';

const style = {
  height: 500,
  minWidth: 500,
  // margin: 20,
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
    color: 'white'
  },
    underlineStyle: {
      borderColor: 'black',
    },
  tooltip: {
      width: 120,
      fontSize: '22px',
      backgroundColor: 'white',
      fontColor: 'black',
      color: 'rgb(244, 67, 54)',
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
      this.state = {
        name: '', 
        email: '', 
        phoneNumber: '', 
        message: '', 
      }
      this.nameChange = this.nameChange.bind(this);
      this.emailChange = this.emailChange.bind(this);
      this.phoneChange = this.phoneChange.bind(this);
      this.messageChange = this.messageChange.bind(this);
      this.submitData = this.submitData.bind(this);
      this.checkData = this.checkData.bind(this);
      this.clearInputs = this.clearInputs.bind(this);
  };
  emailChange(e){
    this.setState({
      email: e.target.value,
    });
  }
  nameChange(e){
    this.setState({
      name: e.target.value,
    });
  }
  phoneChange(e){
    this.setState({
      phoneNumber: e.target.value,
    });
  }
  messageChange(e){
    this.setState({
      message: e.target.value,
    });
  }
  clearInputs(){
    console.log('clearing');
    this.setState({
        name: '', 
        email: '', 
        phoneNumber: '', 
        message: '', 
    })
  }
  submitData(){
    console.log('dp');
    axios.post('/Email', {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phoneNumber,
      message: this.state.message,
    })
    // axios.post('/ReachOut', {
    //   name: this.state.name,
    //   email: this.state.email,
    //   phone: this.state.phoneNumber,
    //   message: this.state.message,
    // })
    .then( (response) =>  {
      setTimeout(() => {
        this.clearInputs();
      }, 500);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
  checkData(){
    // if submit data good do this,
    if(this.state.message.length < 10){
      window.alert('message too short, please expand')
    }

      if(this.state.email.length < 2){
      window.alert('email too short');
    }
      if(this.state.name.length < 1){
      window.alert('Sorry the name is too short');
    }
    // else do this 
    /\S+@\S+\.\S+/.test(this.state.email) ? this.submitData() : window.alert('working or not idk');
  }
  render(){
    return (
      <MuiThemeProvider>
        <NavMenu/>
    <div className="contact_page">
    <span className="contact_form">
    <Paper style={style} zDepth={4} rounded={true}>
    <div className="heading">
    <span className="contact-header">Connect with me</span>
    </div>
    <FlatButton
      href="https://www.linkedin.com/in/kenneth-laprelle/"
      target="_blank"
      secondary={true}
      backgroundColor="white"
      icon={<img style={{height: '30px', width: '30px'}}src="http://sguru.org/wp-content/uploads/2018/02/linkedin-logo.png"></img>}
    />
    <FlatButton
      href="https://github.com/kennyl24"
      target="_blank"
      secondary={true}
      backgroundColor="white"
      icon={<img style={{height: '30px', width: '30px'}}src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>}
    />
    <FlatButton
      href="mailto:kenny.laprelle@gmail.com"
      target="_blank"
      secondary={true}
      backgroundColor="white"
      icon={<img style={{height: '45px', width: '45px'}}src="http://www.stickpng.com/assets/images/584856b4e0bb315b0f7675ac.png"></img>}
    />
    <div className="heading">
    <span className="contact-header">Want to work together?</span>
    </div>
    <TextField
      required = {true}
      onChange={this.nameChange}
      hintText="Name"
      underlineFocusStyle={styles.underlineStyle}
      value={this.state.name}
    /><br />
     <TextField
      required = {true}
      onChange={this.emailChange}
      hintText="Email"
      underlineFocusStyle={styles.underlineStyle}
      value={this.state.email}
    /><br />
     <TextField
      onChange={this.phoneChange}
      hintText="Phone (optional)"
      underlineFocusStyle={styles.underlineStyle}
      value={this.state.phoneNumber}
    /><br />
     <TextField
      required = {true}
      onChange={this.messageChange}
      underlineFocusStyle={styles.underlineStyle}
      hintText="Message"
      multiLine={true}
      rows={2}
      value={this.state.message}
    />
    <br /> <br />
    <span>
    <RaisedButton style={{backgroundColor:'blue'}} onClick={this.checkData}>SUBMIT</RaisedButton>
    </span>
    </Paper>
    </span>
    </div>
   <Arrows previous={'About'}/>
    
    </MuiThemeProvider>
    );
  }
}
export default Contact;