import React, { Component } from 'react';
import About from './About/About';
import Websites from './Websites/Websites';
import Projects from './Projects/Projects';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <main>
            	<About />
                <Websites />
                <Projects />
            </main>
        )        
    }

}

export default Main;