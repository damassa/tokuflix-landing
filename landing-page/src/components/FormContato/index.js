import React, { useState, useEffect } from "react";
// import axios from 'axios';
import { Grid, TextField } from "@material-ui/core";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { FormikKey } from '../../config/keys';

import useStyles from "./styles";

const formSchema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  message: Yup.string().required("Campo obrigatório"),
});

const FormContato = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const classes = useStyles();
  const [serverState, setServerState] = useState();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState();

  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = (values, actions) => {
    setLoading(true);
    // axios({
    //     method: "POST",
    //     url: `https://formspree.io/f/${FormikKey}`,
    //     data: values
    // })
    //     .then(response => {
    //         actions.setSubmitting(false);
    //         actions.resetForm();
    //         handleServerResponse(true, "Muito obrigado!");
    //         setLoading(false);
    //     })
    //     .catch(error => {
    //         actions.setSubmitting(false);
    //         handleServerResponse(false, error.response.data.error)
    //         setLoading(false);
    //     })
  };
  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="name"
              type="text"
              name="name"
              label="Nome"
              variant="outlined"
              disabled={loading}
              helperText
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="email"
              type="email"
              name="email"
              label="E-mail"
              variant="outlined"
              disabled={loading}
              helperText
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              name="message"
              label="Mensagem"
              variant="outlined"
              disabled={loading}
              helperText
              fullWidth
              multiline
              rows={6}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="flex-end">
          <Grid className={classes.Button} item xs={12}>
            <button type="submit">Submit</button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormContato;
