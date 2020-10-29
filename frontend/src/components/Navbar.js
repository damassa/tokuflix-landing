import React, { useState } from 'react';

import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import arrow from '../images/arrow-down.svg';

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
                            <input type="text" placeholder="O que estamos procurando?"/>
                        </div>
                        <div className="nav-user">
                            <AccountCircleIcon/>
                            <img 
                                src={arrow} 
                                alt="user" 
                                onMouseOver={handleClick('bottom-start')}
                                className="user-arrow"
                            />
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