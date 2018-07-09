import React from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';
import logo from './clearorb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
	return (
		<div className="navbar">
            <a href="#home" className="" data-scroll><img className="logo" src={logo} alt="Clear Orb Logo" /></a>
            <div class="Navbar__Link Navbar__Link-toggle">
      			<FontAwesomeIcon icon={faBars} size="lg" color="white" />
   			</div>
            <nav className="nav-collapse">
                <ul className="">
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

export default NavBar;