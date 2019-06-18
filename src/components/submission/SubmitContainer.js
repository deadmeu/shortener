import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ActionHeader from './ActionHeader';
import SubmitUrl from './SubmitUrl';
import LoadingBar from './LoadingBar';

export class SubmitContainer extends Component {
  render() {
    return (
      <div className="submitContainer">
        <ActionHeader />
        <SubmitUrl shortenUrl={this.props.shortenUrl} />
        {this.props.loading ? <LoadingBar /> : null}
      </div>
    )
  }
}

SubmitContainer.propTypes = {
  shortenUrl: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default SubmitContainer
