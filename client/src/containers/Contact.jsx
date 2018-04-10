import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavMenu from './NavMenu.jsx';
class Contact extends React.Component {
    constructor(props) {
      super(props);
  };
  render(){
    return (
      <MuiThemeProvider>
    <div className="contact">
   <NavMenu/>
        <p3>Have a question or want to work together?</p3>
    </div>
    </MuiThemeProvider>
    );
  }
}
export default Contact;