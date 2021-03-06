import React, { Component } from 'react';
import AOS from 'aos';
import About from './About/About';
import Websites from './Websites/Websites';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './Main.css';
import 'aos/dist/aos.css';

AOS.init({
    once: true
});
class Main extends Component {
    render() {
        return (
            <main>
            	<About />
                <Websites />
                <Projects />
                <Contact />
            </main>
        )        
    }

}

export default Main;