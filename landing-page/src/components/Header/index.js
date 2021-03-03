import React from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

import * as AppActions from "../../store/modules/app/actions";

import Image from "../../assets/undraw_monitor_iqpq.svg";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
                    <a href="#contato">Contato</a>
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
              <Grid item lg={5} md={12}>
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
                    <Grid container className={classes.registerButton}>
                      <button
                        onClick={() => dispatch(AppActions.openModalUser())}
                      >
                        Criar conta
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={7} className={classes.HeaderImage}>
                <Hidden mdDown>
                  <img src={Image} alt="TV Series" />
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
