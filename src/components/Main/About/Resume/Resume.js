import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import resumeImage from './resume.png';
import resumePDF from './resume.pdf';

class Resume extends Component {
  constructor() {
    super();
    this.state = {
        active: false
    };
    this.toggleResume = this.toggleResume.bind(this);
  }

  toggleResume() {
    const currentState = this.state.active;
    this.setState({active: !currentState});
  }
  
  render() {
    return (
      <div>
        <button 
          onClick={this.toggleResume}
          type="button" 
          className="btn-resume btn-color"
          >
          <FontAwesomeIcon icon={faAngleDown} size="lg" color="white" /> View Full Resume
        </button>
        <div id="resume" className={this.state.active ? 'visible resume-border' : 'hidden'}>
          <img src={resumeImage} alt="Resume" />
          <a href={resumePDF} className="btn-resume btn-download btn-color" download><FontAwesomeIcon icon={faDownload} size="sm" color="white" /> Download</a>
        </div>
      </div>
    )
  }   
}

export default Resume;