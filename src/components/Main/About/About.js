import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import resumeImage from './resume.png';
import resumePDF from './resume.pdf';
import toggleResume from './toggle';
import './About.css';


class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                <h1>About</h1>
                    <p>
                        Hi, I'm Mario Indyushkin. Based in Portland, Oregon I am a web developer passionate 
                        in design and development. My main focus is Front-End development but I have no problem 
                        delving into the Back-End. This portfolio site showcases some of my work and projects. 
                        Whether I'm freelancing or working for a company, I'm a strong believer in having 
                        a great work ethic that reflects in any job. View my work below.
                    </p>
                    <button 
                        onClick={toggleResume} 
                        type="button" 
                        className="btn-resume btn-color"
                        >
                        <FontAwesomeIcon icon={faAngleDown} size="lg" color="white" /> View Resume
                        </button>
                    <div id="resume" className="resume-border">
                        <img src={resumeImage} alt="Resume" />
                        <a href={resumePDF} className="btn-resume btn-download btn-color" download><FontAwesomeIcon icon={faDownload} size="sm" color="white" /> Download</a>
                    </div>
                </div>
            </section>
        )        
    }

}

export default About;