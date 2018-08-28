import React, { Component } from 'react';
import WebsitesModal from '../Modal/Modal';
import { websiteInfo } from '../Card/cardInfo';

class Card extends Component {
    render() {
        const { title, description, slug, modalRequired } = this.props;
        let test;
        if(modalRequired) {
            test = <WebsitesModal websiteInfo={websiteInfo}/>;
        } else {
            test = <div className="button">Learn More</div>;
        }
    return (
        <div className="card">
            <img src={ require(`../Images/${slug}.png`) } alt="site"/>
            <div className="text">
                <div className="title">{title}</div>
                <p>{description}</p>
            </div>
            {test}
        </div>
        )       
    }
    
}

export default Card;