import React, { Component } from 'react';
import { ProjectList } from '../Card/CardList';
import { projectInfo } from '../Card/cardInfo';

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <div className="container">
                    <h1>PROJECTS</h1>
                    <div className="header-bar" data-aos='slide-right'></div>
                    <ProjectList projectInfo={projectInfo}/>
                </div>
            </section>
        )        
    }
}

export default Projects;