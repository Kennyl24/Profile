import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import IconButton from '@material-ui/core/IconButton';

const theme = createMuiTheme({
  palette: {
    primary: { main: 'rgb(63, 6, 245)' },
    secondary: { main: 'rgb(63, 6, 245)' }
  },
});


class NavMenuFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleChange (event, value){
    this.setState({ value });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div style={{position:'absolute', textAlign:'center', bottom: '0px', left: '20%', fontSize:'14px', color:'white'}}>
      kenny.laprelle@gmail.com <br/>  &copy; Kenneth Laprelle 
      </div>
      </MuiThemeProvider>
    );
  }
}

export default NavMenuFooter;