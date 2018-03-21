import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
const navButtons = (
  <div>
    <FlatButton label="Home" labelStyle={{ fontSize: '1.3rem'}} style={{paddingLeft:'20px', color:'white'}}/>
    <FlatButton label="About" labelStyle={{ fontSize: '1.3rem'}} style={{paddingLeft:'20px', color:'white'}} />
    <FlatButton label="Work" labelStyle={{ fontSize: '1.3rem'}} style={{paddingLeft:'20px', color:'white'}} />
    <FlatButton label="Contact" labelStyle={{ fontSize: '1.3rem'}} style={{paddingLeft:'20px', color:'white'}}  />
  </div>
);
class LeadBar extends React.Component {
    constructor(props) {
      super(props);
  };
  render(){
    return (
        <div className="nav">
        <AppBar   
        title="Kenneth's Portfolio"
        showMenuIconButton={false}
        iconElementRight={navButtons}
        >
        </AppBar>
    </div>
    );
  }
}
export default LeadBar;