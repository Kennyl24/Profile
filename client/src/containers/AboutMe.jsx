
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};
const AboutMe = () => (
  <div>
  <h4 style={{Color:'black', textAlign:'center', fontSize:'28px'}}>Projects</h4>
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
    </GridList>
  </div>
  </div>
);

export default AboutMe;