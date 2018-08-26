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
                            <div><img src={ require('./img/smartbrain.png') } /></div>
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
                            <div><img src={ require('./img/pdxautobrokers.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                        <div className="card">
                            <div><img src={ require('./img/pbsteel.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                        <div className="card">
                            <div><img src={ require('./img/pdxautozone.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                        <div className="card">
                            <div><img src={ require('./img/straightcutsbarber.png') } /></div>
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