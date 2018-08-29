import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="http://www.mypintrips.com" target="none" className="link-colored">MyPintrips</a></li>
          <li><a href="https://calendar-app-cil-avery.herokuapp.com/" target="none" className="link-colored">Calendar App</a></li>
          <li><a href="https://codepen.io/cilavery/full/MKYvJp/" target="none" className="link-colored">Walking Dead Random Quote Generator</a></li>
          <li><a href="https://codepen.io/cilavery/full/LeVyxW/" target="none" className="link-colored">Markov Poem Generator</a></li>

        </ul>
      </div>
    )
  }
}

export default AboutMe;
