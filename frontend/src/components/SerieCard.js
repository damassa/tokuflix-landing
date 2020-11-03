import { Paper } from '@material-ui/core';

import React from 'react';
import image from '../images/dairanger.jpg'
import otherImage from '../images/flashman.jpg'

import '../styles/components/serie-card.css';

function SerieCard() {
    return(
        <>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${image})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${otherImage})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${otherImage})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${otherImage})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${otherImage})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${otherImage})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${otherImage})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${otherImage})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${otherImage})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
            <Paper elevation={3} className="serie-card">
                <div className="serie-image" style={{backgroundImage: `url(${otherImage})`}}></div>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
        </>
    );
}

export default SerieCard;