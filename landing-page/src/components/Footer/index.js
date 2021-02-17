import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.Footer}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid
              container
              justify="space-between"
              className={classes.FooterContent}
            >
              <Grid item xs={6}>
                Assista suas séries favoritas.
              </Grid>
              <Grid item xs={2}>
                <button>Registre-se</button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              className={classes.FooterContentBottom}
            >
              <Grid item xs={4}>
                World of Tokusatsu.
              </Grid>
              <Grid className={classes.cu} item xs={3}>
                <a
                  title="Quantum Lab"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/Lab-Quantum"
                >
                  <FiGithub />
                </a>
                <FiInstagram />
                <FiLinkedin />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
