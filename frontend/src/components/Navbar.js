import React, { useState } from 'react';

import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

import '../styles/components/navbar.css';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();

    const classes = useStyles();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return(
        <nav>
            <div className="nav-container">
                <div className="nav-content">
                    <div className="menu-left">
                        <div className="nav-logo">
                            LOGO
                        </div>
                        <div className="nav-items-left">
                            <ul>
                                <li>Séries</li>
                                <li>Favoritos</li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-right">
                        <div className="nav-searchbox">
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield"
                                placeholder="O que estamos procurando?"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon style={{color: '#ffffff'}} />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div> 
                        <div className="nav-user">
                            <AccountCircleIcon onMouseOver={handleClick('bottom-start')} />
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
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}