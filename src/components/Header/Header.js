import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import HeaderImage from './HeaderImage/HeaderImage';
import Tagline from './Tagline/Tagline';

class Header extends Component {
    render() {
        return (
            <header>
            	<NavBar />
            	<HeaderImage />
            	<Tagline />
            </header>
        )        
    }

}

export default Header;