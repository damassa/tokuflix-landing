import React from "react";
import { Grid } from "@material-ui/core";
import InfoCardLeft from "../InfoCardLeft";
import InfoCardRight from "../InfoCardRight";

import useStyles from "./styles";

const MainContent = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12} className={classes.MainContentTitle}>
                About
              </Grid>
              <InfoCardLeft />
              <InfoCardRight />
              <InfoCardLeft />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContent;
