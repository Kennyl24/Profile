import React from 'react';
import ReactDOM from 'react-dom';

class Matrix extends React.Component {
constructor(props) {
  super(props);
  this.state = { char: this.getRandomChar() };
}
componentWillMount() {
  if (this.props.primary || Math.random() > 0.95) {
    this.makeSymbolDynamic();
  }
}
makeSymbolDynamic() {
  setInterval(() => {
    this.setState({ char: this.getRandomChar() });
  }, 500);
}
getRandomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}


render() {
  const { primary, opacity } = this.props;
  return (
      <div className={"symbol " + (primary ? "primary" : "")}
        style={{ opacity }} >
          {this.state.char}
      </div>
  );
}
}