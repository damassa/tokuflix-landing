import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Fade, Grid, TextField, Button } from '@material-ui/core';

import useStyles from './styles';

import * as AppActions from '../../store/modules/app/actions';

const ModalUser = () => {
  const classes = useStyles();
  const appStates = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, errors, register } = useForm();

  const Register = (formData) => {
    setLoading(true);
  };

  const onFormError = (err) => {
    const objectErrors = {};
    Object.values(err).map((value) => {
      objectErrors[value.ref.name] = value.message;
      return value;
    });
  };

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
            Registre-se!
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: 'Este campo é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                  message: 'Forneça um e-mail válido',
                },
              })}
              variant="outlined"
              required
              error={!!errors.email}
              helperText={errors.email?.message || false}
              name="email"
              label="E-mail"
              type="text"
              fullWidth
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: 'Este campo é obrigatório',
              })}
              variant="outlined"
              required
              error={!!errors.name}
              helperText={errors.name?.message || false}
              name="name"
              label="Nome"
              type="text"
              fullWidth
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: 'Este campo é obrigatório',
              })}
              variant="outlined"
              required
              error={!!errors.password}
              helperText={errors.password?.message || false}
              name="senha"
              label="Senha"
              type="password"
              fullWidth
              inputProps={{ minlenght: 12 }}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={5}>
                <Button
                  fullWidth
                  disabled={false}
                  onClick={handleSubmit(Register, onFormError)}
                >
                  Cadastrar
                </Button>
              </Grid>
              <Grid item xs={5}>
                <Button
                  fullWidth
                  onClick={() => dispatch(AppActions.closeModalUser())}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default ModalUser;
