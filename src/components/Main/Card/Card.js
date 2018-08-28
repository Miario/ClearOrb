import React, { Component } from 'react';
import WebsitesModal from '../Modal/Modal';

class Card extends Component {
    render() {
        const { id, title, description, slug, modalRequired, alt, url } = this.props;
        let modalButton;
        if(modalRequired) {
            modalButton = <WebsitesModal
                        id={id}
                        title={title} 
                        description={description} 
                        slug={slug}
                        modalRequired={modalRequired}
                        alt={alt}
                        url={url}
                    />;
        } else {
            modalButton = <div className="button">Learn More</div>;
        }
    return (
        <div className="card">
            <img src={ require(`../Images/${slug}.png`) } alt={alt}/>
            <div className="text">
                <div className="title">{title}</div>
                <p>{description}</p>
            </div>
            {modalButton}
        </div>
        )       
    }
    
}

export default Card;