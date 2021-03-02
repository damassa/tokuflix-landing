import React from "react";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import { useDispatch, useSelector } from "react-redux";
import * as AppActions from "./store/modules/app/actions.js";

import { Snackbar, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function App() {
  const dispatch = useDispatch();

  const snackbar = useSelector((state) => state.app, []);

  console.log(snackbar.snackbar.active);

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Contato />
      <Footer />
      <Snackbar
        open={snackbar.snackbar.active}
        autoHideDuration={8000}
        onClose={() => dispatch(AppActions.closeSnackbar())}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          variant="filled"
          severity={snackbar.snackbar.severity}
          onClose={() => dispatch(AppActions.closeSnackbar())}
        >
          <Typography>{snackbar.snackbar.message}</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
