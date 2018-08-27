import React, { Component } from 'react';
import { ProjectList } from '../Card/CardList';
import { projectInfo } from '../Card/cardInfo';

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <div className="container">
                    <h1>Projects</h1>
                    <ProjectList projectInfo={projectInfo}/>
                </div>
            </section>
        )        
    }

}

export default Projects;