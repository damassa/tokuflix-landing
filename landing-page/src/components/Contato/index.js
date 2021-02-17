import React from "react";
import { Grid } from "@material-ui/core";
import Image from "../../assets/undraw_in_progress_ql66.svg";

import useStyles from "./styles";

const Contato = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.ContatoDivider}></Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12} className={classes.ContatoDividerTitle}>
                Entre em contato!
              </Grid>
              <Grid item xs={12} className={classes.ContatoDividerForm}>
                <img src={Image} alt="Form" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contato;
