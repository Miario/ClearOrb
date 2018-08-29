import React, { Component } from 'react';
import WebsitesModal from '../Modal/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class Card extends Component {
    render() {
        const { id, title, short_desc, long_desc, slug, modalRequired, alt, url, github } = this.props;
        let cardButton;
        if(modalRequired) {
            cardButton = <WebsitesModal
                        id={id}
                        title={title} 
                        short_desc={short_desc} 
                        long_desc={long_desc} 
                        slug={slug}
                        modalRequired={modalRequired}
                        alt={alt}
                        url={url}
                        github={github}
            />;
        } else if(github !== '') {
            cardButton = 
                <div>
                    <div className="button"><a href={url}>Learn More</a></div>
                    <div className="button button-git"><a href={github}>Git Hub</a></div>
                </div>
        } else {
            cardButton = <div className="button button-standard">Learn More</div>;
        }

        let animate;
        if(id === 3 || id === 6) {
            animate = 'fade-left';
        } else if(id === 1 || id === 4) {
            animate = 'fade-right';
        } else if(id === 2) {
            animate = 'fade-down';
        } else if(id === 5) {
            animate = 'fade-up';
        } else {
            animate = 'flip-up';
        }
        
    return (
        <div data-aos={animate} data-aos-delay="60" className="card">
            <img src={ require(`../Images/${slug}.png`) } alt={alt}/>
            <div className="text">
                <div className="title">{title}</div>
                <p>{short_desc}</p>
            </div>
            {cardButton}
        </div>
        )       
    }
    
}

export default Card;