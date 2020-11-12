import React from 'react';
import { Grid, Button } from '@material-ui/core';

import useStyles from '../styles/components/serieSlider';

import image from '../images/dairanger-big.jpeg';

export default function SliderCard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.sliderCard} justify="space-between">
      <Grid item lg={6} md={12}>
        <img src={image} alt="A" />
      </Grid>
      <Grid item container lg={6} md={12} className={classes.sliderCardInfo}>
        <Grid item lg={12}>
          <h1>Nome da Série</h1>
        </Grid>
        <Grid item lg={12}>
          <p>Um baita texto falando da série.</p>
        </Grid>
        <Grid item lg={12} className={classes.sliderButton}>
          <Grid container className={classes.sliderButtonWrapper}>
            <Grid item lg={2} md={6}>
              <Button fullWidth variant="contained" color="secondary">
                Assistir
              </Button>
            </Grid>
            <Grid item lg={5} md={6}>
              <Button fullWidth variant="contained" color="primary">
                Favoritar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
