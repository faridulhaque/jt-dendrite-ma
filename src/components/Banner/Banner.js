import React from 'react';
import musicBanner from "./musicBanner.jpg"
import '../../styles/Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner-img" src={musicBanner} alt="banner" />
        </div>
    );
};

export default Banner;