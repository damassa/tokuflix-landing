import React from "react";

// import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Fade, Grid, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
// import Dialog from "@material-ui/core/Dialog";
// import Button from "@material-ui/core/Button";
import useStyles from "./styles";
// import CloseIcon from '@material-ui/icons/Close';

import * as AppActions from "../../store/modules/app/actions";

const ModalUser = () => {
  const classes = useStyles();
  const appStates = useSelector((state) => state.app, []);
  const dispatch = useDispatch();
  const { handleSubmit, errors, register } = useForm();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={appStates.openModalUser}
      onClose={() => dispatch(AppActions.closeModalUser())}
      closeAfterTransition
    >
      <Fade in={appStates.openModalUser}>
        <Grid container justify="center" className={classes.paper} spacing={2}>
          <Grid item xs={12} className={classes.titleModal}>
            Title Here
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: "Este campo é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                  message: "Forneça um e-mail válido",
                },
              })}
              variant="outlined"
              required
              // error={!!errors.email}
              // helperText={errors.email?.message || false}
              name="email"
              label="E-mail"
              type="text"
              fullWidth
              // disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: "Este campo é obrigatório",
              })}
              variant="outlined"
              required
              // error={!!errors.name}
              // helperText={errors.name?.message || false}
              name="name"
              label="Nome"
              type="text"
              fullWidth
              // disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: "Este campo é obrigatório",
              })}
              variant="outlined"
              required
              // error={!!errors.password}
              // helperText={errors.password?.message || false}
              name="senha"
              label="Senha"
              type="password"
              fullWidth
              inputProps={{ minLenght: 12 }}
              // disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={5}>
                <Button fullWidth>Cadastrar</Button>
              </Grid>
              <Grid item xs={5}>
                <Button fullWidth>Cancelar</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default ModalUser;
