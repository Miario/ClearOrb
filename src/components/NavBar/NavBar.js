import React from 'react';
import './NavBar.css';
import logo from './clearorb.png';

const NavBar = () => {
	return (
		<div className="navbar">
            <a href="#home" className="" data-scroll><img className="logo" src={logo} alt="Clear Orb Logo small" /></a>
            <nav className="nav">
                <ul className="">
                    <li className="active"><a className="" href="#home" data-scroll>Home</a></li>
                    <li><a className="" href="#about" data-scroll>About</a></li>
                    <li><a className="" href="#websites" data-scroll>Websites</a></li>
                    <li><a className="" href="#projects" data-scroll>Projects</a></li>
                    <li><a className="" href="#contact" data-scroll>Contact</a></li>
                </ul>
            </nav>
		</div>
	)
}

export default NavBar;