import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" className={classes.Footer}>
      <Grid item xs={12} className={classes.FooterContent}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container justify="space-between">
              <Grid item md={6} xs={12}>
                Assista suas séries favoritas.
              </Grid>
              <Grid item md={2} xs={12} className={classes.FooterAlign}>
                <button>Registre-se</button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              className={classes.FooterContentBottom}
            >
              <Grid item md={6} xs={12}>
                World of Tokusatsu. All rights reserved.
              </Grid>
              <Grid item md={3} xs={12}>
                <Grid
                  container
                  justify="flex-end"
                  className={classes.FooterAlign}
                >
                  <Grid item xs={2} md={3} className={classes.FooterAlign}>
                    <a
                      title="Quantum Lab"
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/Lab-Quantum"
                    >
                      <FiGithub />
                    </a>
                  </Grid>
                  <Grid item xs={2} md={3} className={classes.FooterAlign}>
                    <FiInstagram />
                  </Grid>
                  <Grid item xs={2} md={3} className={classes.FooterAlign}>
                    <FiLinkedin />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
