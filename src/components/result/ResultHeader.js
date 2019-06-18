import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ResultHeader extends Component {
  getStyle = () => {
    return {
      color: '#f4f4f4',
      textAlign: 'center',
      padding: '10px'
    }
  }

  render() {
    return (
      <header style={this.getStyle()} >
        <h1>{this.props.status}</h1>
      </header>
    )
  }
}

ResultHeader.propTypes = {
  status: PropTypes.string.isRequired
}

export default ResultHeader
