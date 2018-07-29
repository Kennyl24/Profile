import React from 'react';
import Paper from '@material-ui/core/Paper';
import SkillsList from './SkillsList.jsx';

const style = {
  height: 400,
  width: 290,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const SkillsTest = (props) => (
  <div className="skills">
    <Paper elevation={24} style={style}>
    <span>FRONT END</span>
    </Paper>
    <Paper elevation={24} style={style}>
    <span>FRONT END</span>
    </Paper>
    <Paper elevation={24} style={style}>
    <span>FRONT END</span>
    </Paper>
  </div>
);

export default SkillsTest;