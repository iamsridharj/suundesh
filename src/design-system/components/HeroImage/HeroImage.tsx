import React from 'react';
import './HeroImage.css';

interface HeroImageProps {
    url: string;
    altText: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ url, altText }) => {
    return (
        <div className="hero-image-container">
            <img src={url} alt={altText} className="hero-image" />
        </div>
    );
}

export default HeroImage;
