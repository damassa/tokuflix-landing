import React from 'react';
import Grid from '@material-ui/core/Grid';

import SerieCard from '../components/SerieCard';

import '../styles/pages/home.css';

function Home() {
    return(
        <Grid container justify="space-around" className="home">
            <Grid item xs={11} className="homeTitle">
                Texto genérico
            </Grid>
            <SerieCard />
        </Grid>        
    );
}

export default Home;