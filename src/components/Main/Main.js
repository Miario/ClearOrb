import React, { Component } from 'react';
import About from './About/About';
import Websites from './Websites/Websites';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <main>
            	<About />
                <Websites />
            </main>
        )        
    }

}

export default Main;