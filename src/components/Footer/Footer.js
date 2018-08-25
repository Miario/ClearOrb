import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <p>&copy; Copyright ClearOrb 2018</p>
                    <div className="social"> 
                        <a href="mailto:clearorbi@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
                        <a href="https://www.linkedin.com/in/mario-indyushkin-25092a153" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        <a href="https://github.com/Miario" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                </div>
            </div>
        )        
    }

}

export default Footer;