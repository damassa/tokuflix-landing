import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Grid, TextField } from "@material-ui/core";
import { FormikKey } from "../../config/keys";

import useStyles from "./styles";

import { useDispatch } from "react-redux";
import * as AppActions from "../../store/modules/app/actions";

const FormContato = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, errors, register } = useForm();

  const dispatch = useDispatch();

  const sendRequest = (formData) => {
    setLoading(true);
    axios({
      method: "POST",
      url: `https://formspree.io/f/${FormikKey}`,
      data: formData,
    })
      .then(() => {
        dispatch(
          AppActions.openSnackbar("Mensagem enviada com sucesso!", "success")
        );
        setLoading(false);
      })
      .catch(() => {
        dispatch(
          AppActions.openSnackbar("Erro ao enviar a mensagem!", "error")
        );
        setLoading(false);
      });
  };

  const onFormError = (err) => {
    const objectErrors = {};
    Object.values(err).map((value) => {
      objectErrors[value.ref.name] = value.message;
      return value;
    });
  };
  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={6}>
            <TextField
              inputRef={register({
                required: "Este campo é obrigatório",
              })}
              inputProps={{ maxLength: 30 }}
              variant="outlined"
              required
              fullWidth
              disabled={loading}
              error={!!errors.name}
              helperText={errors.name?.message || false}
              name="name"
              label="Nome"
              type="text"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputRef={register({
                required: "Este campo é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                  message: "Forneça um email válido",
                },
              })}
              inputProps={{ maxLength: 150 }}
              variant="outlined"
              required
              fullWidth
              disabled={loading}
              error={!!errors.email}
              helperText={errors.email?.message || false}
              name="email"
              label="E-mail"
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: "Este campo é obrigatório",
              })}
              inputProps={{ maxLength: 150 }}
              variant="outlined"
              required
              fullWidth
              disabled={loading}
              error={!!errors.message}
              helperText={errors.message?.message || false}
              name="message"
              label="Escreva sua mensagem"
              type="text"
              multiline
              rows={6}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="flex-end">
          <Grid className={classes.Button} item xs={12}>
            <button
              type="submit"
              disabled={false}
              onClick={handleSubmit(sendRequest, onFormError)}
            >
              Submit
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormContato;
