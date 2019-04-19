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
import axios from 'axios';
import pdf from '../files/Resume.pdf';

const styles = {
  large: {
    height: 48,
    width: 48,
    fill: '#38beb0'
  },
};
class NavMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getResume = this.getResume.bind(this);
  }
  componentDidMount(){
    this.getResume();
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
  getResume(){
    console.log('submitting');
    axios.get('/Resume', {
      console: console.log('getting')
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
         <MenuItem href={'../'}className="menu-item" style={{textAlign:'center', borderBottom: '3px solid', borderBottomColor:'rgb(125,121,121)', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}}>HOME</MenuItem>
          <MenuItem href={'../Projects'}className="menu-item" style={{textAlign:'center', borderBottom: '3px solid', borderBottomColor:'rgb(125,121,121)', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}}>PROJECTS</MenuItem>
          <MenuItem href={'../About'}className="menu-item" style={{textAlign:'center', borderBottom: '3px solid', borderBottomColor:'rgb(125,121,121)', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}}>ABOUT</MenuItem>
          <MenuItem href={'../Contact'}className="menu-item" style={{textAlign:'center', borderBottom: '3px solid', borderBottomColor:'rgb(125,121,121)', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}}>CONTACT</MenuItem>
         <div style={{position:'absolute', bottom:'33px', width:'100%'}}>
          <MenuItem className="menu-item" style={{textAlign:'center', borderTop: '3px solid', borderTopColor: 'rgb(125,121,121)',borderBottom: '3px solid', borderBottomColor:'rgb(125,121,121)', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}} onClick={()=> window.open('https://linkedin.com/in/kenneth-laprelle', '_blank')}>LINKEDIN</MenuItem>
          <MenuItem className="menu-item" style={{textAlign:'center', borderBottom: '3px solid', borderBottomColor:'rgb(125,121,121)', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}} onClick={()=> window.open('https://github.com/kennyl24', '_blank')}>GITHUB</MenuItem>
          {/* <a href={pdf} type="application/pdf" target="_blank"> */}
          <MenuItem href={pdf} type="application/pdf" target="_blank" className="menu-item" style={{textAlign:'center', borderBottom: '3px solid', borderBottomColor:'rgb(125,121,121)', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}}>RESUME</MenuItem>
          {/* </a> */}
       </div>
        </div>
        <NavMenuFooter/>
        </Drawer>
      </div>
    );
  }
}
export default NavMenu;