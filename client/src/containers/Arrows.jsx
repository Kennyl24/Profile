import React from 'react';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import IconButton from 'material-ui/IconButton';
import NavMenu from './NavMenu.jsx';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
const styles = {
  largeIcon: {
    width: 60,
    height: 60,
    color: 'white'
  },
  tooltip: {
    width: 120,
    fontSize: '22px',
    backgroundColor: 'white',
    fontColor: 'black',
    color: 'rgb(244, 67, 54)',
    rippleBackgroundColor: 'blue'
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};
const Arrows = (props) => (
  <div>
  {props.next ? <div className="arrowright"><IconButton 
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large}href={`/${props.next}`}tooltip={props.next} >
      <NavigationArrowForward />
    </IconButton></div> : null}
   {props.previous ?  <div className="arrowleft">
    <IconButton 
  tooltipStyles={styles.tooltip}
   iconStyle={styles.largeIcon}
   tooltipPosition="top-right"
   style={styles.large} href={`/${props.previous}`} tooltip={props.previous}>
      <NavigationArrowBack />
    </IconButton>
  </div> : null} 
  </div>
);

export default Arrows;