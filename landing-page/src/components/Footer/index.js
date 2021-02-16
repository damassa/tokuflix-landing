import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.Footer}>
      <Grid item xs={10}>
        <Grid container>
          <Grid item>a</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
