import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 60,
    height: 60,
    padding: 0,
    position: 'fixed',
    top: '10',
    right: '0',
  },
  menu: {
    backgroundColor: '#e2d7c8',
    height: '200px',
    top: 10,
    right: 120,
    position: '',
  }
};
class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      valueSingle: null,
      valueMultiple: null,
      openMenu: false,
    }
    this.handleChangeSingle = this.handleChangeSingle.bind(this)
    this.handleChangeMultiple = this.handleChangeMultiple.bind(this)
    this.handleOpenMenu = this.handleOpenMenu.bind(this)
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.handleOnRequestChange = this.handleOnRequestChange.bind(this)
};

  handleChangeSingle (event, value)  {
    this.setState({
      valueSingle: value,
    });
  };

  handleChangeMultiple  (event, value)  {
    this.setState({
      valueMultiple: value,
    });
  };

  handleOpenMenu  ()  {
    this.setState({
      openMenu: true,
    });
  }

  handleOnRequestChange (value) {
    this.setState({
      openMenu: value,
    });
  }
  mouseEnter () {
    console.log('hello');
    this.setState({
      isHovered: true,
    });
  }
  mouseLeave () {
    console.log('goodbye');
    this.setState({
      isHovered: false,
    });
  }
  render() {
    return (
       <IconMenu onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}
          menuStyle={styles.menu}
          iconButtonElement={<IconButton iconStyle={styles.largeIcon}
    style={styles.large}> {this.state.isHovered ? <NavigationMoreHoriz/> : <MoreVertIcon/> } </IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Home" />
          <MenuItem value="2" primaryText="About" />
          <MenuItem value="3" primaryText="Projects" />
          <MenuItem value="4" primaryText="Contact" />
        </IconMenu>
    );
  }
}

export default MenuNav;