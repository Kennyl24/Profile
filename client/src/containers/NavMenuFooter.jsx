import React from 'react';
import ReactDOM from 'react-dom';

import Icon from '@material-ui/core/Icon';

import IconButton from '@material-ui/core/IconButton';



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
      <div style={{position:'absolute', bottom: '10px', fontSize:'14px', color:'white'}}>
      <IconButton color="secondary"  aria-label="Add an alarm">
        <Icon>linkedin</Icon>
      </IconButton>
      </div>
    );
  }
}

export default NavMenuFooter;