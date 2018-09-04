import React, { Component } from 'react';
import { WebsiteList } from '../Card/CardList';
import { websiteInfo } from '../Card/cardInfo';

class Websites extends Component {
    render() {
        return (
            <section id="websites">
                <div className="container">
                    <h1>WEBSITES</h1>
                    <div className="header-bar"></div>
                    <WebsiteList websiteInfo={websiteInfo}/>
                </div>
            </section>
        )        
    }

}

export default Websites;