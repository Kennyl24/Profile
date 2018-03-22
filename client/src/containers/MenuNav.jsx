import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';

/**
 * Three controlled examples, the first allowing a single selection, the second multiple selections,
 * the third using internal state.
 */
const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 80,
    height: 80,
    padding: 0,
  },
  menu: {
    backgroundColor: '#e2d7c8'
  }
};
class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSingle: null,
      valueMultiple: null,
      openMenu: false,
    }
    this.handleChangeSingle = this.handleChangeSingle.bind(this)
    this.handleChangeMultiple = this.handleChangeMultiple.bind(this)
    this.handleOpenMenu = this.handleOpenMenu.bind(this)
    this.test = this.test.bind(this)
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
  test () {
    console.log('hello')
  }
  render() {
    return (
      <div className="col">
        <IconMenu
          menuStyle={styles.menu}
          iconButtonElement={<IconButton iconStyle={styles.largeIcon}
          onKeyBoardFocus={this.handleOpenMenu}
          style={styles.large}><MoreVertIcon /></IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Home" />
          <MenuItem value="2" primaryText="About" />
          <MenuItem value="3" primaryText="Projects" />
          <MenuItem value="4" primaryText="Contact" />
        </IconMenu>
      </div>
    );
  }
}

export default MenuNav;