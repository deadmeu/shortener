import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class SubmitUrl extends Component {
  state = {
    url: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.shortenUrl(this.state.url);
    this.setState({
      url: ''
    });
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input
          type='text'
          name='url'
          style={{ flex: '10', padding: '5px' }}
          placeholder='Shorten your link'
          value={this.state.url}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: 1 }}
        />
      </form>
    )
  }
}

const formStyle = {
  display: 'flex'
}

SubmitUrl.propTypes = {
  shortenUrl: PropTypes.func.isRequired
}

export default SubmitUrl
