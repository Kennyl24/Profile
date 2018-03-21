import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
// main app
import LeadBar from './LeadBar.jsx';
import Portfolio from './Portfolio.jsx';
//import Contact from './Contact.jsx';
import Backend from './Backend.jsx';
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
      <div>
      </div>
      <div>
      <div style={{
    backgroundImage: 'url(https://images2.alphacoders.com/698/698137.jpg)',
    width: '100%',
    opacity: '0.80',
    height: '800px'}}>
       <h2>Kenneth Laprelle
       <br/>
       <br/>
       </h2>
       <h3>
       Full Stack Software Engineer
       </h3>
       <div style={{paddingLeft:'44%'}}>
       <RaisedButton label="View my work" primary={true}/>
       </div>
    </div>
    </div>
      </MuiThemeProvider>
    );
  };
}

export default LandingPage;