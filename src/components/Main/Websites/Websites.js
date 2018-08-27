import React, { Component } from 'react';
import './websites.css';



class Websites extends Component {
    render() {
        return (
            <section id="websites">
                <div className="container">
                    <h1>Websites</h1>
                    <div id="gallery" className="flex">
                        <div className="card">
                            <div><img src={ require('./img/fishspot.png') } /></div>
                            <div className="text">
                                <div className="title">Title</div>
                                <span>Description</span>
                            </div>
                            <div className="button">Learn More</div>
                        </div>
                        <div className="card">
                            <div><img src={ require('./img/smartbrain.png') } /></div>
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
                            <div><img src={ require('./img/straightcutsbarber.png') } /></div>
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
                            <div><img src={ require('./img/pdxautobrokers.png') } /></div>
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

export default Websites;