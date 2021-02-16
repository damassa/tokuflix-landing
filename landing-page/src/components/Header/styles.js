import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  Header: {
    backgroundImage:
      "linear-gradient(to right bottom, #0082c1, #2b7cc7, #4b74ca, #686ac9, #845ec2)",
  },
  HeaderNav: {
    padding: "20px 0",
    "& button": {
      padding: "5px 20px",
      borderRadius: 100,
      border: "none",
      cursor: "pointer",
      transition: ".2s",
    },
    "& button:hover": {
      backgroundColor: "#CCCCCC",
      transition: ".2s",
    },
  },
  MenuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "#FEFEFE",
    fontWeight: "bold",
  },
  HeaderContent: {
    padding: "40px 0 50px 0",
    "& h3": {
      color: "#FEFEFE",
      fontSize: 28,
    },
    "& p": {
      color: "#C4C4C4",
    },
    "& button": {
      padding: "10px 30px",
      borderRadius: 100,
      border: "none",
      cursor: "pointer",
      transition: ".2s",
      marginTop: 20,
    },
    "& button:hover": {
      backgroundColor: "#CCCCCC",
      transition: ".2s",
    },
  },
  HeaderImage: {
    display: "flex",
    justifyContent: "flex-end",
    "& img": {
      width: "70%",
    },
  },
}));

export default useStyles;
