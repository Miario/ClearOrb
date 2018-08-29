import React, { Component } from 'react';
import WebsitesModal from '../Modal/Modal';

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
    return (
        <div className="card">
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