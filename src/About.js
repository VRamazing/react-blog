import React, { Component } from 'react';
import './About.css';
import Jumbotron from './Jumbotron';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaCodepen  from 'react-icons/lib/fa/codepen';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaGlobe from 'react-icons/lib/fa/globe';

const Message = {
        'title': 'A bit about me...',
        'description': 'My name is Vignesh Ramesh',
        'src' : 'pro2.png'
}

class About extends Component {

  render() {
    return (
      <div>
          <Jumbotron message = {Message}/>
            
	        <p className = "info-container">
				      I am a Full Stack Developer and Entrepreneur from New Delhi,India. I am crazy passionate about Technology and love to constantly 
              explore new domains. My Areas of Interest include Internet of Things, Machine Learning, Data Science, Artificial Intelligence. Just 
              like each cell of our body gets constantly replace to prevent death of a tissue I believe we must too constantly improve our self to
              prevent death of our self. Thus the quote I live by is “ Only the strong survives ”. Everybody has a purpose in life and I believe 
              my purpose is to solve provide IT solutions to complex problems we as a society face everyday. Besides being all too ambitious I am 
              an avid reader and love to sing and play guitar to recreate. Connect with me if you have something interesting on your mind.
	        </p>

          <div className = "profileLinks">
            <a  className = "profile-link"><FaLinkedinSquare /></a>
            <a  className = "profile-link"><FaFacebookSquare /></a>
            <a  className = "profile-link"><FaTwitterSquare /></a>
            <a  className = "profile-link"><FaCodepen /></a>
            <a  className = "profile-link"><FaGithubSquare /></a>
            <a  className = "profile-link"><FaGlobe /></a>
          </div>
	    </div>

    );
  }
}

export default About;