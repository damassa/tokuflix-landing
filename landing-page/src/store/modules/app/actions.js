export const openSnackbar = (message, severity) => {
  return { type: "@app/OPEN_SNACKBAR", message, severity };
};

export const closeSnackbar = () => {
  return { type: "@app/CLOSE_SNACKBAR" };
};
