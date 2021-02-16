import React from "react";
import { Grid } from "@material-ui/core";
import Image from "../../assets/undraw_monitor_iqpq.svg";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" className={classes.Header}>
      <Grid item xs={12} className={classes.HeaderNav}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container justify="space-between">
              <Grid item xs={2}>
                World of Tokusatsu
              </Grid>
              <Grid item xs={6}>
                <Grid container justify="flex-end">
                  <Grid item xs={1} className={classes.MenuItem}>
                    Contato
                  </Grid>
                  <Grid item xs={2} className={classes.MenuItem}>
                    <button>Login</button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.HeaderContent}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={5}>
                <Grid container>
                  <Grid item xs={12}>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </Grid>
                  <Grid item xs={12}>
                    <button>Criar conta</button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={7} className={classes.HeaderImage}>
                <img src={Image} alt="TV Series" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
