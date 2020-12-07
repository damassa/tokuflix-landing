import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles/pages/home';
import Carousel from '../components/Carousel';
import SerieSlider from '../components/SerieSlider';

function Home() {
  const classes = useStyles();

  return (
    <Grid container justify="space-around" className={classes.home}>
      <SerieSlider />
      <Grid item xs={11} sm={11} className={classes.homeTitle}>
        Texto genérico
      </Grid>
      <Carousel />
      <Grid item xs={11} sm={11} className={classes.homeTitle}>
        Outro texto genérico
      </Grid>
      <Carousel />
    </Grid>
  );
}

export default Home;
