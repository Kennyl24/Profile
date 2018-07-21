import React from 'react';
import ReactDOM from 'react-dom';


class NavMenuHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleChange (event, value){
    this.setState({ value });
  };

  render() {
    return (
      <div style={{top: '0px', height:'25%', color:'white',backgroundColor:'rgb(67, 66, 66)'}}>
       <img class="nav-image" src="http://i64.tinypic.com/sglcvs.jpg" alt="" height="100px" width='100px'/>
      <p style={{textAlign:'none', position:'absolute', top: '15%'}}>Kenneth LaPrelle <br/> Software Engineer</p>
      </div>
    );
  }
}

export default NavMenuHeader;