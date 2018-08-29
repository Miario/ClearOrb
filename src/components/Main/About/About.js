import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faDownload, faDesktop, faClock, faEdit, faBook } from '@fortawesome/free-solid-svg-icons';
import resumeImage from './resume.png';
import resumePDF from './resume.pdf';
import toggleResume from './toggle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

AOS.init();

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <h1>About</h1>
                    <div className="flex-about">
                        <div className="label-wrap">
                            <div className="flex-row">
                                <div className="box flex-rhomb" data-aos='slide-right' data-aos-delay="60">
                                    <div className="rhomb rhomb1">
                                        <FontAwesomeIcon icon={faDesktop} size="lg" color="white" className="label-icon icon-desktop" />
                                    </div>
                                    <div className="rhomb-text">Responsive and mobile friendly.</div>
                                </div>
                                <div className="box flex-rhomb" data-aos='slide-right' data-aos-delay="70">
                                    <div className="rhomb rhomb2">
                                    <FontAwesomeIcon icon={faClock} size="lg" color="white" className="label-icon" />
                                    </div>
                                    <div className="rhomb-text">Fast load times with performance in mind.</div>
                                </div>
                            </div>
                            <div className="flex-row">
                                <div className="box flex-rhomb" data-aos='slide-right' data-aos-delay="80">
                                    <div className="rhomb rhomb3">
                                    <FontAwesomeIcon icon={faEdit} size="lg" color="white" className="label-icon" />
                                    </div>
                                    <div className="rhomb-text">Modern, clean and intuitive design</div>
                                </div>
                                <div className="box flex-rhomb" data-aos='slide-right' data-aos-delay="90">
                                    <div className="rhomb rhomb4">
                                    <FontAwesomeIcon icon={faBook} size="lg" color="white" className="label-icon" />
                                    </div>
                                    <div className="rhomb-text">Bringing ideas to life in the browser.</div>
                                </div>
                            </div>
                        </div>
                        <div className="about-info">
                            <p>
                                Hi, I'm Mario Indyushkin. Based in Portland, Oregon I am a web developer passionate 
                                in design and development. My main focus at the moment is Front-End development but that 
                                doesn't stop me from occasionally delving into the Back-End. This portfolio showcases
                                some of my work and projects. View my work below.
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
                    </div>
                </div>
            </section>
        )        
    }

}

export default About;