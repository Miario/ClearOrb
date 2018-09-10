import React, { Component } from 'react';
import InfoPoint from './InfoPoint/InfoPoint';
import Skills from './Skills/Skills';
import Resume from './Resume/Resume';
import './About.css';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <h1>ABOUT</h1>
                    <div className="header-bar" data-aos='slide-right'></div>
                    <div className="flex-about">
                        <InfoPoint />
                        <Skills />
                    </div>
                    <Resume />
                </div>
            </section>
        )        
    }
}

export default About;