import React from "react";
import { Grid } from "@material-ui/core";
import Image from "../../assets/undraw_monitor_iqpq.svg";

import useStyles from "./styles";

const InfoCardRight = () => {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla feugiat massa, quis tincidunt elit iaculis vel. Vivamus
            luctus ipsum vel condimentum vulputate. Aliquam condimentum massa
            ex, vitae condimentum urna rutrum id. Maecenas tempus porttitor
            enim, nec molestie nibh ullamcorper a.
          </Grid>
          <Grid item xs={4}>
            <img src={Image} alt="Site" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCardRight;
