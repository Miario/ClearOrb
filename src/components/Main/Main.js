import React, { Component } from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <main>
            	<About />
                <Projects />
            </main>
        )        
    }

}

export default Main;