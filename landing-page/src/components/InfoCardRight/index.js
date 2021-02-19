import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

const InfoCardRight = (props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.InfoCardRight}
        >
          <Grid item xs={6}>
            <h1>{props.ContentTitle}</h1>
            {props.ContentText}
          </Grid>
          <Grid item xs={4}>
            <img src={`${props.ContentImage}`} alt="Site" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCardRight;
