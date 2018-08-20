import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      yourName: '',
      yourMessage: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.handleContact();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Your email</label>
        <input type='text'></input>
        <label>Your Message</label>
        <input type='text'></input>
        <button type='submit'>Send</button>
      </form>
    )
  }
}

export default Contact;
