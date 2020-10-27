import React from 'react';
import image from '../images/dairanger.jpg'

import '../styles/components/serie-card.css';

function SerieCard() {
    return(
        <div className="serie-card">
            <div className="serie-image" style={{backgroundImage: `url(${image})`}}></div>
            <h1>Serie</h1>
            <h2>Year</h2>
        </div>
    );
}

export default SerieCard;