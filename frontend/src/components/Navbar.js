import React, { useState } from 'react';
import {
    Popper, 
    Fade,
    Paper,
    Grid,
    Hidden,
    TextField,
    InputAdornment
} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

import '../styles/components/navbar.css';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();


    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return(
        <Grid container className="nav" alignItems="center" justify="space-between">
            <Grid item container xs={12} sm={12} md={6}>
                <Grid item xs={3} sm={3} className="navMenuLeftLogo">LOGO</Grid>
                <Grid item xs={9} sm={9}>
                    <Grid container justify="flex-start">
                        <Grid item xs={4} className="navMenuLeftItem">Séries</Grid>
                        <Grid item xs={4} className="navMenuLeftItem">Favoritos</Grid>
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
                                        <SearchIcon style={{color: '#ffffff'}} />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} className="navMenuRightItem">
                        <AccountCircleIcon onClick={handleClick('bottom')} />
                        <Popper
                            open={open} 
                            anchorEl={anchorEl} 
                            placement={placement} 
                            transition
                        >
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper className="user-options">
                                        <div className="user-options-container">
                                            <strong>Damassa</strong>
                                            <div className="user-options-content">
                                                <a href="#">Minha conta</a>
                                                <a href="#">Sair</a>
                                            </div>
                                        </div>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    );
}