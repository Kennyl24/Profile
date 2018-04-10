import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ReactDOM from 'react-dom';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
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
        <RaisedButton
          backgroundColor="#505050"
          icon={<NavigationMoreHoriz color={fullWhite} />}
          onClick={this.handleToggle}
        />
        <div className="drawer">
        <Drawer
          docked={false}
          style={{backgroundColor: "purple"}}
          width={250}
          open={this.state.open}
          openSecondary={true}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem style={{fontSize:'50px', paddingBottom:'30px'}}onClick={this.handleClose}>Home</MenuItem>
          <MenuItem style={{fontSize:'50px', paddingBottom:'30px'}}onClick={this.handleClose}>Skills</MenuItem>
          <MenuItem style={{fontSize:'50px', paddingBottom:'30px'}}onClick={this.handleClose}>Projects</MenuItem>
          <MenuItem style={{fontSize:'50px', paddingBottom:'30px'}} onClick={this.handleClose}>Contact</MenuItem>
        </Drawer>
      </div>
      </div>
    );
  }
}
export default NavMenu;