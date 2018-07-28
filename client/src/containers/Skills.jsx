import React from 'react';
import Paper from 'material-ui/Paper';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Draggable from './Draggable.jsx';
import SkillsList from './SkillsList.jsx';

const style = {
  height: 170,
  width: 170,
  margin: 4,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: 'black',
  color:'white'
};
const styleTest = {
  height: 225,
  width: 225,
  margin: 4,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: 'rgb(36, 96, 160)'
};



class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: true,
      style: style,
    }
    this.move = this.move.bind(this);
    this.hoverSkill = this.hoverSkill.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  componentDidMount(){
    console.log(this.props.skill)
  }
  move(e) {
    this.setState(e);
  }
  hoverSkill(){
    this.setState({
      // hovered: !this.state.hovered,
      // style: styleTest,
    })
  }
  mouseLeave(){
    this.setState({
      // hovered: !this.state.hovered,
      // style: style,
    })
  }
  render () {
    return (
      <Paper style={this.state.style} zDepth={5} circle={true} onMouseLeave={this.mouseLeave} onMouseEnter={this.hoverSkill}>
      { this.state.hovered ? 
      <span>
      <img style={{marginTop: '40px', height: '80px'}} src={this.props.skill.image}alt=""/>
      <div style={{marginTop: '20px', textAlign: 'center'}}> 
      {this.props.skill.title}
     </div> 
      </span>
      : <span>
        
      </span>
      }
      </Paper>
  )
  };
}

export default Skills;