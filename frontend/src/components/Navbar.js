import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import '../styles/components/navbar.css';

import { Grid, Hidden, InputAdornment, TextField } from '@material-ui/core';

import { Link } from 'react-router-dom';
import UserOptions from './UserOptions';

const Navbar = () => {
  return (
    <Grid container className="nav" alignItems="center" justify="space-between">
      <Grid item container xs={12} sm={12} md={6}>
        <Grid item xs={3} sm={3} className="navMenuLeftLogo">
          <Link className="navLogo" to="/">
            LOGO
          </Link>
        </Grid>
        <Grid item xs={9} sm={9}>
          <Grid container justify="flex-start">
            <Grid item xs={4} className="navMenuLeftItem">
              Séries
            </Grid>
            {/* <Grid item xs={4} className="navMenuLeftItem">Filmes</Grid> */}
            <Grid item xs={4} className="navMenuLeftItem">
              Favoritos
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item container xs={12} sm={6} md={6} justify="flex-end">
          <Grid item xs={6} className="navMenuRightItem">
            <TextField
              className="navSearchbox"
              color="secondary"
              id="input-with-icon-textfield"
              placeholder="O que estamos procurando?"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: '#ffffff' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <UserOptions />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Navbar;
