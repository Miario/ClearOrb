import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPencilAlt, faWrench } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className="about-info">
      <p data-aos='slide-left' data-aos-delay="80">
        Hi, I'm Mario Indyushkin. Based in Portland, Oregon I am a web developer passionate 
        in design and development. My main focus at the moment is Front-End development but that 
        doesn't stop me from occasionally delving into the Back-End. This portfolio showcases
        some of my work and projects. View my work below.
      </p>
      <div className="flex-skills-row">
        <div className="skills">
          <div className="square" data-aos='flip-right' data-aos-delay="100"><FontAwesomeIcon icon={faPencilAlt} size="2x" color="white" className="icon-center" /></div>
          <h3 className="tite">Design</h3>
          <p className="" data-aos='fade' data-aos-delay="100">Adobe Suite, Gimp, Pen & Paper</p>
        </div>
        <div className="skills">
          <div className="square" data-aos='flip-right' data-aos-delay="150"><FontAwesomeIcon icon={faCode} size="2x" color="white" className="icon-center"/></div>
          <h3 className="tite">Front End Developer</h3>
          <p className="" data-aos='fade' data-aos-delay="150">HTML, CSS, JavaScript, React, Bootstrap, CMS</p>
        </div>
        <div className="skills">
          <div className="square" data-aos='flip-right' data-aos-delay="200"><FontAwesomeIcon icon={faWrench} size="2x" color="white" className="icon-center" /></div>
          <h3 className="tite">Tools</h3>
          <p className="" data-aos='fade' data-aos-delay="200">Git, VS Code</p>
        </div>
      </div>
    </div>
  )        
}

export default Skills;