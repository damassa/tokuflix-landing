import React from "react";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ModalUser from "./components/ModalUser";

import { useDispatch, useSelector } from "react-redux";
import * as AppActions from "./store/modules/app/actions.js";

import { Snackbar, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function App() {
  const dispatch = useDispatch();

  const appStates = useSelector((state) => state.app, []);

  console.log(appStates.snackbar.active);

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Contato />
      <ModalUser />
      <Footer />
      <Snackbar
        open={appStates.snackbar.active}
        autoHideDuration={8000}
        onClose={() => dispatch(AppActions.closeSnackbar())}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          variant="filled"
          severity={appStates.snackbar.severity}
          onClose={() => dispatch(AppActions.closeSnackbar())}
        >
          <Typography>{appStates.snackbar.message}</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
