import React from 'react';
import '../../styles/Styles.css'
import banner from './banner2.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner-img" src={banner} alt="banner" />
        </div>
    );
};

export default Banner;