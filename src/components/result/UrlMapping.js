import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UrlMapping extends Component {
  getStyle = () => {
    return {
      borderBottom: '3px #ccc dotted'
    }
  }

  render() {
    const { shortUrl, longUrl } = this.props.mapping;
    return (
      <div style={this.getStyle()}>
        <p>{shortUrl}</p>
        <br />
        <p>links to</p>
        <br />
        <p>{longUrl}</p>
      </div>
    );
  }
}

UrlMapping.propTypes = {
  mapping: PropTypes.object.isRequired
}

export default UrlMapping
