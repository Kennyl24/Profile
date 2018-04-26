import React from 'react';
import Paper from 'material-ui/Paper';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
const style = {
  height: 170,
  width: 170,
  margin: 4,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: 'rgb(36, 96, 160)'
};
const styles = {
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
  large3 : {
    top: 200,
    left: 60,
    position: 'absolute',
  },
  large2: {
    top: 180,
    right: 90,
    position: 'absolute',
  },
};
const mouseEnter = () => console.log('hello');
const mouseExit = () => console.log('goodbye');
const skillsData = [
  {
    img: '',
    title: 'CSS',
  },
  {
    img: 'http://i64.tinypic.com/dzths3.png',
    title: 'HTML',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'JavaScript',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'React',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Angular',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Backbone',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Node',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Express',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'PassportJS',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Kafka',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'MongoDB',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'MySQL',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'PostgreSQL',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Cassandra',
  },
  {
    img: 'http://i63.tinypic.com/2usx0kl.png',
    title: 'Git',
  },
];
class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
  <div>
  <div>
    <Paper style={style} zDepth={5} circle={true} onMouseLeave={mouseExit} onMouseEnter={mouseEnter}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      HTML
   </div>
    </Paper>
    <Paper style={style} zDepth={5} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      CSS
   </div>
    </Paper>
    <Paper style={style} zDepth={5} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      JavaScript
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      React
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="http://nyesteventuretech.com/images/angular.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      Angular
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://cdn.worldvectorlogo.com/logos/backbone-icon.svg" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      Backbone
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      Node
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://www.drupal.org/files/project-images/rain-drop-hi.png" alt=""/>
    <div style={{marginTop: '18px', textAlign: 'center'}}> 
      RESTful API
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '70px'}}src="https://cdn.gomix.com/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      PassportJs
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="http://cdn.onlinewebfonts.com/svg/img_253306.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      Kafka
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://www.worksonarm.com/wp-content/uploads/2017/03/mongodb-logo-1.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      MongoDB
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2000px-Postgresql_elephant.svg.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      PostgreSQL
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      MySQL
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Apache-cassandra-icon.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      Cassandra
   </div>
    </Paper>
    <Paper style={style} zDepth={4} circle={true}>
    <img style={{marginTop: '40px', height: '80px'}}src="https://png.icons8.com/metro/1600/github.png" alt=""/>
    <div style={{marginTop: '20px', textAlign: 'center'}}> 
      Git
   </div>
    </Paper>
    </div>
    <div>
  </div>
  </div>
)
  };
}

export default Skills;