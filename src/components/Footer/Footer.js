import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container flex-footer">
                    <p>&copy; Copyright ClearOrb 2018</p>
                    <a href="#home" className="arrow-up"><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
                    <div className="social"> 
                        <a href="mailto:clearorbi@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" className="footer-icon"/></a>
                        <a href="https://www.linkedin.com/in/mario-indyushkin-25092a153" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" className="footer-icon"/></a>
                        <a href="https://github.com/Miario" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" className="footer-icon"/></a>
                    </div>
                </div>
            </div>
        )        
    }

}

export default Footer;