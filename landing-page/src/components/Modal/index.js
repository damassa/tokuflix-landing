import React from "react";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Grid, TextField } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
// import CloseIcon from '@material-ui/icons/Close';

// import * as AppActions from '../../store/modules/app/actions';

const Modal = () => {
  const appStates = useSelector((state) => state.app, []);
  // const dispatch = useDispatch();
  const { errors, register } = useForm();
  const classes = useStyles();

  // const onFormError = (err) => {
  //   const objectErrors = {};
  //   Object.values(err).map((value) => {
  //     objectErrors[value.ref.name] = value.message;
  //     return value;
  //   });
  // };

  return (
    <Dialog className={classes.modalPaper} open={appStates.openModalUser}>
      <Grid container>
        <Grid item xs={12}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.modalPaper}
          >
            <Grid item xs={10}>
              <Grid container spacing={1}>
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
                    error={!!errors.email}
                    helperText={errors.email?.message || false}
                    name="email"
                    label="E-mail"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputRef={register({
                      required: "Este campo é obrigatório",
                    })}
                    variant="outlined"
                    required
                    error={!!errors.name}
                    helperText={errors.name?.message || false}
                    name="name"
                    label="Nome"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputRef={register({
                      required: "Este campo é obrigatório",
                    })}
                    variant="outlined"
                    required
                    error={!!errors.password}
                    helperText={errors.password?.message || false}
                    name="senha"
                    label="Senha"
                    type="password"
                    fullWidth
                  />
                </Grid>
                <Grid
                  container
                  justify="center"
                  spaccing={2}
                  className={classes.buttonsContainer}
                >
                  <Grid item xs={4}>
                    <Button fullWidth>Registrar</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button fullWidth>Cancelar</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Modal;
