import React from 'react';
import { Grid, Button } from '@material-ui/core';

import useStyles from '../styles/components/serieSlider';

import image from '../images/dairanger-big.jpeg';

export default function SliderCard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.sliderCard} justify="space-between">
      <Grid item lg={6} xs={12}>
        <img src={image} alt="A" />
      </Grid>
      <Grid item container lg={6} md={12} className={classes.sliderCardInfo}>
        <Grid item lg={12}>
          <h1>Nome da Série</h1>
        </Grid>
        <Grid item lg={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Grid>
        <Grid item lg={7} xs={12} className={classes.sliderButton}>
          <Grid container className={classes.sliderButtonWrapper}>
            <Grid item md={4} xs={6}>
              <Button fullWidth variant="contained" color="secondary">
                Assistir
              </Button>
            </Grid>
            <Grid item md={5} xs={6}>
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
