import React, { Component } from 'react';
import history from '../history'

class MessageSent extends Component {

  componentDidMount() {
    setTimeout(() => {
      history.push('/')
    },1500)
  }

  render() {
    return (
      <div className="message">
        <h6>Message was successfully sent!</h6>
      </div>
    )
  }
}

export default MessageSent;
