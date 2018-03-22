import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MenuNav from './MenuNav.jsx';
import Description from './Descriptions.jsx';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    width: '100%',
    height: 550,
    overflowY: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
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
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const Projects = () => (
  <MuiThemeProvider>
  <div>
  <MenuNav/>  
      <Description/>
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={1}>
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
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

  </div>
  </MuiThemeProvider>
);

export default Projects;