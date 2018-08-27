import React, { Component } from 'react';
import {WebsiteList} from '../Card/CardList';
import { websiteInfo } from '../Card/cardInfo';
class Websites extends Component {
    render() {
        return (
            <section id="websites">
                <div className="container">
                    <h1>Websites</h1>
                    <WebsiteList websiteInfo={websiteInfo}/>
                </div>
            </section>
        )        
    }

}

export default Websites;