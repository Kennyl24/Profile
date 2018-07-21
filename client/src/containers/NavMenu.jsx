import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

import ActionAndroid from 'material-ui/svg-icons/action/android';
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';

import {Link}  from 'react-router-dom'

import NavMenuFooter from './NavMenuFooter.jsx';
import NavMenuHeader from './NavMenuHeader.jsx';

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
          width={270}
          open={this.state.open}
          openSecondary={true}
          onRequestChange={(open) => this.setState({open})}
        >
        <div style={{backgroundColor:'#696969', height:'100%', zIndex:'9999999'}}>
        <NavMenuHeader/>
         <MenuItem style={{textAlign:'center', borderBottom: '3px solid', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}}onClick={this.handleClose}><Link to="/Projects"style={{color:'white', textDecoration:'none'}}>HOME</Link></MenuItem>
          <MenuItem style={{textAlign:'center', borderBottom: '3px solid', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}}onClick={this.handleClose}><Link to="/Projects"style={{color:'white', textDecoration:'none'}}>PROJECTS</Link></MenuItem>
          <MenuItem style={{textAlign:'center', borderBottom: '3px solid', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}}onClick={this.handleClose}><Link to="/About"style={{color:'white', textDecoration:'none'}}>SKILLS</Link></MenuItem>
          <MenuItem style={{textAlign:'center', borderBottom: '3px solid', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}} onClick={this.handleClose}><Link to="/Contact"style={{color:'white', textDecoration:'none'}}>CONTACT</Link></MenuItem>
          <MenuItem style={{textAlign:'center', borderBottom: '3px solid', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}} onClick={()=> window.open('https://linkedin.com/in/kenneth-laprelle', '_blank')}>LINKEDIN</MenuItem>
          <MenuItem style={{textAlign:'center', borderBottom: '3px solid', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}} onClick={()=> window.open('https://github.com/kennyl24', '_blank')}>GITHUB</MenuItem>
          <MenuItem style={{textAlign:'center', borderBottom: '3px solid', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}} onClick={()=> window.open('https://github.com', '_blank')}>RESUME</MenuItem>
        </div>
        <NavMenuFooter/>
        </Drawer>
      </div>
    );
  }
}
export default NavMenu;