import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ReactDOM from 'react-dom';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';

const styles = {
  large: {
    height: 48,
    width: 48,
  },
};
class NavMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle () {
    
  this.setState({
    open: !this.state.open
  })
};

  handleClose  () {
    this.setState({
      open: false
    })
  };

  render() {
    return (
      <div className="nav">
        <IconButton iconStyle={styles.large} onClick={this.handleToggle}>
          <NavigationMoreHoriz color={'white'}/>
        </IconButton>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          openSecondary={true}
          onRequestChange={(open) => this.setState({open})}
        >
        <div style={{backgroundColor:'black', height:'100%', zIndex:'9999999'}}>
        <span>KENNETH'S Portfolio</span>
          <MenuItem style={{fontSize:'50px', color:'white', paddingBottom:'50px', backgroundColor:'black'}}onClick={this.handleClose}>Home</MenuItem>
          <MenuItem style={{fontSize:'50px', color:'white', paddingBottom:'50px', backgroundColor:'black'}}onClick={this.handleClose}>Skills</MenuItem>
          <MenuItem style={{fontSize:'50px', color:'white', paddingBottom:'50px', backgroundColor:'black'}}onClick={this.handleClose}>Projects</MenuItem>
          <MenuItem style={{fontSize:'50px', color:'white', paddingBottom:'50px', backgroundColor:'black'}} onClick={this.handleClose}>Contact</MenuItem>
          </div>
        </Drawer>
      </div>
    );
  }
}
export default NavMenu;