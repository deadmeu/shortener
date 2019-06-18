import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UrlMapping from './UrlMapping';
import ResultHeader from './ResultHeader';

export class ResultContainer extends Component {

  render() {
    const { shortUrl, longUrl, status } = this.props.result;
    const mapping = {
      shortUrl,
      longUrl
    }

    return (
      <div className="resultContainer">
        <ResultHeader status={status} />
        <UrlMapping mapping={mapping} />
      </div>
    );
  }
}

ResultContainer.propTypes = {
  result: PropTypes.object.isRequired
}

export default ResultContainer
