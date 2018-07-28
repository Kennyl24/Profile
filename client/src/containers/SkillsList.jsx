import React from 'react';
import PropTypes from 'prop-types';
import Skills from './Skills.jsx'

const skillsData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png',
    title: 'CSS',
  },
  {
    image: 'https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png',
    title: 'HTML',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png',
    title: 'JavaScript',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    title: 'React',
  },
  {
    image: 'http://nyesteventuretech.com/images/angular.png',
    title: 'Angular',
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/backbone-icon.svg',
    title: 'Backbone',
  },
  {
    image: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',
    title: 'Node',
  },
  {
    image: 'https://www.drupal.org/files/project-images/rain-drop-hi.png',
    title: 'RESTFUL API',
  },
  {
    image: 'https://cdn.gomix.com/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png',
    title: 'PassportJS',
  },
  {
    image: 'http://cdn.onlinewebfonts.com/svg/img_253306.png',
    title: 'Kafka',
  },
  {
    image: 'https://www.worksonarm.com/wp-content/uploads/2017/03/mongodb-logo-1.png',
    title: 'MongoDB',
  },
  {
    image: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
    title: 'MySQL',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2000px-Postgresql_elephant.svg.png',
    title: 'PostgreSQL',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Apache-cassandra-icon.png',
    title: 'Cassandra',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png',
    title: 'Git',
  },
];

const SkillsList = (props) => (
  <div className="skills">
    {skillsData.map((skill, index) => {
      return <Skills skill={skill} key={index}/>;
    })};
  </div>
);


export default SkillsList;
