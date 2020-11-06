import { Grid, Paper } from '@material-ui/core';

import React from 'react';

import useStyles from '../styles/components/serieCard';

function SerieCard() {
    const classes = useStyles();

    return(
        <Grid container justify="center">
            <Paper elevation={3} className={classes.serieCard}>
                <div className={classes.serieImage}/>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
        </Grid>
    );
}

export default SerieCard;