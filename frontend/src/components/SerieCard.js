import { Grid, Paper } from '@material-ui/core';

import React from 'react';
import { useHistory } from 'react-router-dom';

import useStyles from '../styles/components/serieCard';

const SerieCard = () => {
    const classes = useStyles();
    const history = useHistory();

    function handleClickSerieDetail() {
        history.push('/SerieDetail');
    }

    return(
        <Grid container justify="center" onClick={handleClickSerieDetail}>
            <Paper elevation={3} className={classes.serieCard}>
                <div className={classes.serieImage}/>
                <h1>Serie</h1>
                <h2>Year</h2>
            </Paper>
        </Grid>
    );
}

export default SerieCard;