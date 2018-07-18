import React from 'react';
import './HeaderImage.css';
import HeaderImg from './header-image.jpg';


const HeaderImage = () => {
    return (
        <div>
            <img id="home" className="hero-img" src={HeaderImg} alt="HeaderImage" />
        </div>
    )        
}

export default HeaderImage;