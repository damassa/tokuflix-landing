import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  Footer: {
    backgroundColor: "#1f1f1f",
    height: 200,
  },
  FooterContent: {
    padding: "30px 0 40px 0",
    fontSize: 26,
    color: "#FEFEFE",
    "& button": {
      borderRadius: 100,
      border: "#FEFEFE 1px solid",
      cursor: "pointer",
      padding: "10px 30px",
      background: "none",
      color: "#FEFEFE",
      transition: ".2s",
    },
    "& button:hover": {
      backgroundColor: "#FEFEFE",
      color: "#3F3F3F",
      transition: ".2s",
    },
  },
  FooterContentBottom: {
    padding: "10px 0 20px 0",
    fontSize: 18,
    color: "#FEFEFE",
    "& a": {
      color: "#FEFEFE",
    },
    "& span": {
      fontSize: 12,
    },
  },
  Social: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export default useStyles;
