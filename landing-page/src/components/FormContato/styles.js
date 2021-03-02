import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  Button: {
    display: "flex",
    justifyContent: "flex-end",
    "& button": {
      background: "none",
      borderRadius: 100,
      border: "1px solid",
      padding: "10px 30px",
      color: "#3F3F3F",
      cursor: "pointer",
      transition: ".2s",
      "&:hover": {
        backgroundColor: "#3F3F3F",
        color: "#FEFEFE",
        transition: ".2s",
      },
    },
  },
}));

export default useStyles;
