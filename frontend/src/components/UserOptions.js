import React, { useState } from 'react';
import {
  Popper,
  Fade,
  Paper,
  ClickAwayListener,
  Grid,
} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import '../styles/components/user-options.css';

export default function UserOptions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClose = (event) => {
    if (!event.path || !event.path.includes(anchorEl)) {
      setOpen(false);
    }
  };

  return (
    <Grid item xs={6} className="navMenuRightItem">
      <AccountCircleIcon onClick={handleClick('bottom')} />
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        style={{ zIndex: 2 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={100}>
            <ClickAwayListener onClickAway={handleClose}>
              <Paper className="user-options">
                <div className="user-options-container">
                  <strong>Damassa</strong>
                  <div className="user-options-content">
                    <a href="#">Minha conta</a>
                    <a href="#">Sair</a>
                  </div>
                </div>
              </Paper>
            </ClickAwayListener>
          </Fade>
        )}
      </Popper>
    </Grid>
  );
}
