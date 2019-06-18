import React, { Component } from 'react';
import SubmitContainer from './components/submission/SubmitContainer';

import './App.css';
import ResultContainer from './components/result/ResultContainer';

class App extends Component {
  state = {
    result: {
      shortUrl: 'short123',
      longUrl: 'long345',
      status: null
    },
    loading: false
  }

  shortenUrl = async (url) => {
    this.setState({
      loading: true
    });

    const apiUrl = 'https://g5lo9j4ib7.execute-api.ap-southeast-2.amazonaws.com/dev/shorten';
    const postData = {
      url
    };
    const postParams = {
      method: 'POST',
      // mode: 'cors',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const result = await fetch(apiUrl, postParams);
    console.log(result);
    // TODO set status = 'error'
    // TODO then switch (result.statuscode)
    // TODO if 303, success, if xxx, warning (taken)
    const status = 'success';

    const resultData = await result.json();
    console.log(JSON.stringify(resultData));

    this.setState({
      result: {
        shortUrl: resultData.shortenedUrl,
        longUrl: resultData.originalUrl,
        status
      }
    });

    // TODO improve this
    switch (status) {
      case 'success': document.body.style = 'background: green;'; break;
      case 'warning': document.body.style = 'background: yellow;'; break;
      case 'error': document.body.style = 'background: red;'; break;
      default: break;
    }

    this.setState({
      loading: false
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.result.status
          ? <ResultContainer result={this.state.result} />
          : null}

        <SubmitContainer shortenUrl={this.shortenUrl} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
