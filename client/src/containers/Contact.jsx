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
  height: 520,
  minWidth: '30%',
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
        nameError: false,
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
    this.setState({
        name: '', 
        email: '', 
        phoneNumber: '', 
        message: '', 
        nameError: false,
        messageError:false,
        emailError: false,
    })
  }
  storeData(){
    axios.post('/ReachOut', {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phoneNumber,
      message: this.state.message,
    })
    .then( (response) =>  {
      window.alert('Thank you for submitting, Ill be in touch shortly')
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
  }
  submitData(){
    axios.post('/Email', {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phoneNumber,
      message: this.state.message,
    })
    .then( (response) =>  {
      setTimeout(() => {
        this.clearInputs();
      }, 500);
    })
    .then(() => {
      this.storeData();
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
  }
  checkData(){
    if(this.state.name.length < 1){
      window.alert('Name is not filled out');
      this.setState({
        nameError: true,
      })
      return;
    }
    if(this.state.message.length < 6){
      window.alert('Message is too short');
      this.setState({
        messageError: true,
      })
      return;
    }

      if(this.state.email.length < 2){
      window.alert('Email too short');
      this.setState({
        emailError: true,
      })
      return;
    }
    /\S+@\S+\.\S+/.test(this.state.email) ? this.submitData() : window.alert('Email is invalid');
  }
  render(){
    return (
      <MuiThemeProvider>
        <NavMenu/>
    <div className="contact_page">
    <span className="contact_form">
    <Paper style={style} zDepth={4} rounded={true}>
    <div className="contact-header">
    <span className='contact-header-text'> Let's stay in touch</span>
      </div>
    <TextField
      required = {true}
      onChange={this.nameChange}
      hintText="Name"
      underlineFocusStyle={styles.underlineStyle}
      value={this.state.name}
      style={{width:'90%'}}
      type='text'
      errorText={this.state.nameError ? 'Name must be at least 3 characters' : ''}
      floatingLabelText="Name"
      floatingLabelStyle={{color:'#999999'}}
      errorStyle={{display:'table'}}
    /><br />
     <TextField
      required = {true}
      onChange={this.emailChange}
      hintText="Email"
      underlineFocusStyle={styles.underlineStyle}
      value={this.state.email}
      style={{width:'90%'}}
      type='email'
      floatingLabelText="Email"
      errorText={this.state.emailError ? 'Cannot validate the email provided' : ''}
      floatingLabelStyle={{color:'#999999'}}
    /><br />
     <TextField
      onChange={this.phoneChange}
      hintText="Phone (optional)"
      underlineFocusStyle={styles.underlineStyle}
      value={this.state.phoneNumber}
      style={{width:'90%'}}
      type='tel'
      floatingLabelText="Phone"
      floatingLabelStyle={{color:'#999999'}}
    /><br />
     <TextField
      required = {true}
      onChange={this.messageChange}
      underlineFocusStyle={styles.underlineStyle}
      hintText="Message"
      multiLine={true}
      rows={2}
      value={this.state.message}
      style={{width:'90%'}}
      errorText={this.state.messageError ? 'Message too short' : ''}
      type='text'
    />
    <br /> <br />
    <div>
    <RaisedButton style={{backgroundColor:'blue', marginBottom:'6%'}} onClick={this.checkData}>SUBMIT</RaisedButton>
    </div>
    <FlatButton
      href="https://www.linkedin.com/in/kenneth-laprelle/"
      target="_blank"
      secondary={true}
      backgroundColor="white"
      icon={<img style={{height: '30px', width: '30px'}}src="https://image.flaticon.com/icons/svg/34/34227.svg"></img>}
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
    </Paper>
    </span>
    </div>
   <Arrows previous={'About'}/>
    
    </MuiThemeProvider>
    );
  }
}
export default Contact;