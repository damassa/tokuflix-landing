import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

const InfoCardLeft = (props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container className={classes.InfoCardLeft}>
          <Grid item lg={4} md={12}>
            <img src={`${props.ContentImage}`} alt="Site" />
          </Grid>
          <Grid item lg={6} md={12}>
            <h1>{props.ContentTitle}</h1>
            {props.ContentText}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCardLeft;
