import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  modalPaper: {
    minHeight: "300px",
    "& .MuiDialog-paperWidthSm": {
      minHeight: "300px",
      paddinng: 50,
    },
  },
  buttonsContainer: {
    marginTop: 20,
  },
}));

export default useStyles;
