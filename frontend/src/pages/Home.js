import React from 'react';
import Grid from '@material-ui/core/Grid';

import '../styles/pages/home.css';
import Carousel from '../components/Carousel';

function Home() {
    return(
        <Grid container justify="space-around" className="home">
            <Grid item xs={11} className="homeTitle">
                Texto genérico
            </Grid>
            <Carousel />
            <Grid item xs={11} className="homeTitle">
                Outro texto genérico
            </Grid>
            <Carousel />
        </Grid>        
    );
}

export default Home;