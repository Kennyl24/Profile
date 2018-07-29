import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Description from './Descriptions.jsx';
import NavMenu from './NavMenu.jsx';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import FontIcon from 'material-ui/FontIcon';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Arrows from './Arrows.jsx';
import TileModal from './TileModal.jsx';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 'auto',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    width: '60%',
    height: 550,
    overflowY: 'auto',
    paddingTop: '2%',
  },
  titleStyle: {
    color: 'white',
    fontSize: '28px'
  },
};

const tilesData = [
  {
    img: 'http://i67.tinypic.com/1zfkmbl.jpg',
    title: 'DJ KOLIMA',
  },
  {
    img: 'http://i64.tinypic.com/dzths3.png',
    title: 'Meet.ly',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Evently',
  },
  {
    img: 'http://i64.tinypic.com/sqtx87.png',
    title: 'Napa Valley Transmissions',
  },
];

class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modalOpen: false,
      }
      this.openModal = this.openModal.bind(this);
  }

  openModal(tile){
    console.log('clicking cuh', tile)
    this.setState({
      modalOpen: true,
      currentTitle: tile.title,
    })
  }
  render () {
    return (
  <MuiThemeProvider>
  <div className="projects_page">
  <div className="heading">
  <span className="titles">
  Projects
  </span>
  </div>
  <NavMenu/>
  <Arrows next={'About'} previous={'Home'}/>
    <Description/>
  { this.state.modalOpen ? <TileModal title={this.state.currentTitle}/> : null }
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2}>
      {tilesData.map((tile) => (
        <GridTile
          style={{border:'thick double rgb(99, 99, 90)', height: '120%'}}
          key={tile.img}
          title={tile.title}
          actionIcon={<div onClick={this.openModal.bind(this, tile)}><IconButton ><ActionInfo/></IconButton></div>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
  </GridList>
  </div>
  </div>
  </MuiThemeProvider>
)}
};

export default Projects;