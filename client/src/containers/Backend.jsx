import React from 'react';
import Chip from 'material-ui/Chip';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onClick` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
class Backend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Angular'},
      {key: 1, label: 'JQuery'},
      {key: 2, label: 'ReactJS'},
      {key: 3, label: 'HTML'},
      {key: 4, label: 'CSS'},
      {key: 5, label: 'NodeJS/ Express'},
      {key: 6, label: 'MongoDB'},
      {key: 7, label: 'Cassandra'},
      {key: 8, label: 'MySQL'},
    ]};
    this.styles = {
      chip: {
        marginLeft: 30,
        marginBottom: 5,
      },
      wrapper: {
        display: 'flex',
        paddingLeft: '290px',
        flexWrap: 'wrap',
      },
    };
    this.handleRequestDelete = this.handleRequestDelete.bind(this)
  }

  handleRequestDelete(key) {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div className="row">
      <div className="header">Where can I help?</div>
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
      </div>
    );
  }
}
export default Backend; 