import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <h4>About Me</h4>
        <h6 className='about-me'>I was born and raised in New York City. My parents immigrated to the US from Korea in the late 60's. Although my mother had a nursing degree and my father had an engineering background they worked as small business owners working 6 days a week. To this day my understanding of hardwork is framed by my parent's experience. Happily they are now retired and my dad plays a lot of golf. Currently I live in Brooklyn with my two dynamic kids and husband. Side hobbies include playing in a super fun band with friends called <a href="http://www.blackmayo.com" target="none" className="link-colored" rel="noopener noreferrer">Black Mayonnaise</a>. I play the bass, sometimes I play the drums.
        <div className="card-space"></div>
        I built this site using React, HTML and CSS. You can also visit my <a href="https://medium.com/@ceciliasongavery" target="_blank" rel="noopener noreferrer">blog</a> to read about other things I'm learning and doing.
        </h6>
        </div>
    )
  }
}

export default AboutMe;
