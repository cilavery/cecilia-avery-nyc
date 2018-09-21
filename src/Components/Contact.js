import React, { Component } from 'react';
import { Textfield, Button } from 'react-mdl';

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
      <div className="contact-form">
      <Textfield
        onChange={() => {}}
        label="Your Name..."
        floatingLabel
        style={{ width: '200px'}}
      />

      <Textfield
        onChange={() => {}}
        label="Your Email..."
        pattern="-?[0-9]*(\.[0-9]+)?"
        error="please enter a valid email address"
        floatingLabel
        style={{ width: '200px'}}
      />

      <Textfield
        onChange={() => {}}
        label="Your Message..."
        floatingLabel
        style={{ width: '400px'}}
      />
      <Button primary ripple>Submit</Button>
      </div>
    )
  }
}

export default Contact;
