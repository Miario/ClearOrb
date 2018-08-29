import React from 'react';
import './Tagline.css';

const Tagline = () => {
    return (
        <div className="flex">
            <div className="tag">
                <h2 className="tagline">Web Designer / Developer</h2>
                <p >
                    Looking to for a Developer?
                    Send me an email below
                </p>
                <a className="btn btn-color" href="#contact" data-scroll>Contact Me</a>
            </div>
        </div>
    )        
}

export default Tagline;