import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "600px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 2),
    borderRadius: 6,
    "& Button": {
      marginTop: 5,
    },
  },
  titleModal: {
    padding: "20px 10px !important",
    color: "#3f3f3f",
    fontSize: 24,
  },
}));

export default useStyles;
