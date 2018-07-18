import React from 'react';
import './Tagline.css';


const Tagline = () => {
    return (
        <section className="tag">
            <h2 className="tagline">Web Designer / Developer</h2>
            <p >
                If you are a business seeking a web presence or an employer looking to 
                hire, don't hesitate to send me an email.
            </p>
            <a className="btn btn-color" href="#contact" data-scroll>Contact Me</a>
        </section>
    )        
}

export default Tagline;