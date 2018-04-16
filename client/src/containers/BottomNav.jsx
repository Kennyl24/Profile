import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import ActionHome from 'material-ui/svg-icons/action/home';
class BottomNav extends React.Component {
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
      <BottomNavigation>
        <BottomNavigationAction label="Recents" icon={<ActionHome/>} />
        <BottomNavigationAction label="Favorites" icon={<ActionHome/>} />
        <BottomNavigationAction label="Nearby" icon={<ActionHome/>} />
      </BottomNavigation>
    );
  }
}

export default BottomNav;