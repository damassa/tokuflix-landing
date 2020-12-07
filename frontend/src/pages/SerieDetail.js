import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import SerieDetailCard from '../components/SerieDetailCard';

export default function SerieDetail() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data/serieTemplate.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })

      .then((myJson) => {
        setData(myJson);
      })

      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        {data.map((serie) => (
          <SerieDetailCard
            key={serie.id}
            name={serie.name}
            year={serie.year}
            category={serie.category}
            plot={serie.plot}
            imageBG={serie.imageBG}
            duration={serie.duration}
          />
        ))}
      </Grid>
    </Grid>
  );
}
