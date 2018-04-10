import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MenuNav from './MenuNav.jsx';
import Description from './Descriptions.jsx';
import NavMenu from './NavMenu.jsx';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import FontIcon from 'material-ui/FontIcon';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    width: '74%',
    height: 550,
    overflowY: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  tooltip: {
    width: 120,
    fontSize: '22px',
    backgroundColor: 'white',
    fontColor: 'black',
    color: 'black',
    rippleBackgroundColor: 'blue'
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

const tilesData = [
  {
    img: '',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://i64.tinypic.com/dzths3.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Camera',
    author: 'Danson67',
  },
];

const Projects = () => (
  <MuiThemeProvider>
  <div>
  <div className="heading">
  Projects
  </div>
  <NavMenu/>
  <div className="arrowright"><IconButton 
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large}href="/Contact" tooltip="Contact" >
      <NavigationArrowForward />
    </IconButton></div>
    <div className="arrowleft">
    <IconButton 
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large3}href="/About" tooltip="About Me">
      <NavigationArrowBack />
    </IconButton>
  </div>
      <Description/>
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
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
);

export default Projects;