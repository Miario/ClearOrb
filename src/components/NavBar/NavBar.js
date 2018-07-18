import React, { Component } from 'react';
import './NavBar.css';
import logo from './clearorb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        const currentState = this.state.active;
        this.setState({active: !currentState});
    }
    render() {
        return (
            <div className="navbar">
                <a href="#home" data-scroll><img className="logo" src={logo} alt="Clear Orb Logo" /></a>
                <nav className={this.state.active ? 'nav-collapse-active' : null}> 
                    <div className="navicon" onClick={this.toggleNav}>
                        <FontAwesomeIcon icon={faBars} size="lg" color="white" />
                    </div>
                    <ul>
                        <li className="active"><a className="" href="#home" data-scroll>Home</a></li>
                        <li><a className="" href="#about" data-scroll>About </a></li>
                        <li><a className="" href="#websites" data-scroll>Websites</a></li>
                        <li><a className="" href="#projects" data-scroll>Projects</a></li>
                        <li><a className="" href="#contact" data-scroll>Contact</a></li>
                    </ul>
                </nav>
            </div>
        )        
    }

}

export default NavBar;