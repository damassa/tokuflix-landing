import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";
import FormContato from "../FormContato";

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
              <Grid
                id="contato"
                item
                xs={12}
                className={classes.ContatoDividerForm}
              >
                <FormContato />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contato;
