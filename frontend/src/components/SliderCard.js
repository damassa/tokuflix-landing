import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from '../styles/components/serieSlider';

import image from '../images/dairanger-big.jpeg';

const SliderCard = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.sliderCard} justify="space-between">
      <Grid item xs={6}>
        <img src={image} alt="A" />
      </Grid>
      <Grid item container xs={6} className={classes.sliderCardInfo}>
        <Grid item xs={12}>
          <h1>Nome da Série</h1>
        </Grid>
        <Grid item xs={12}>
          <p>Um baita texto falando da série.</p>
        </Grid>
        <Grid item xs={12}>
          <button>Assistir</button>
          <button>Adicionar aos favoritos</button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SliderCard;
