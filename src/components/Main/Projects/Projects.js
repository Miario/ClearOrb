import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
    render() {
        return (
            <section id="projects">
            <h1>Projects</h1>
                <div className="container">
                    <div id="gallery" className="flex">
                        <div className="card">
                            <div><img src={ require('./img/robofriends.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                        <div className="card">
                            <div><img src={ require('./img/wordbler.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                        <div className="card">
                            <div><img src={ require('./img/patatapclone.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                        <div className="card">
                            <div><img src={ require('./img/cryptocalculator.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                        <div className="card">
                            <div><img src={ require('./img/colorgame.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                        <div className="card">
                            <div><img src={ require('./img/randomusergenerator.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                    </div>
                </div>
            </section>
        )        
    }

}

export default Projects;