import React, { Component } from 'react';
import { Textfield, Button } from 'react-mdl';
import history from '../history';
import * as emailjs from 'emailjs-com';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      yourName: '',
      yourEmail: '',
      yourMessage: '',
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEmailChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleMessageChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const templateParams = {
      user_name: this.state.yourName,
      user_email: this.state.yourEmail,
      text: this.state.yourMessage
    }

    this.setState({
      loading: true
    })

    emailjs.send('default_service', 'personal_portolio_website', templateParams, 'user_y9Gpr6VKiWp0BpC5djRDe')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.setState({ loading: false });
        history.push('/message_sent');
      }, function(error) {
          console.log('FAILED...', error);
      })
  }


  render() {

    return (
      <div className="contact-form">
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <Textfield
        name="yourName"
        onChange={(e) => this.handleNameChange(e)}
        label="Your Name..."
        floatingLabel
      />

      <Textfield
        name="yourEmail"
        onChange={(e) => this.handleEmailChange(e)}
        label="Your Email..."
        pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
        error="Please use a valid email address"
        floatingLabel
      />

      <Textfield
        name="yourMessage"
        onChange={(e) => this.handleMessageChange(e)}
        label="Your Message..."
        floatingLabel
        rows={5}
      />

      {
        !this.state.loading ? <Button primary ripple type='submit'>Submit</Button>
        : <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      }
      </form>
      </div>
    )
  }
}

export default Contact;
