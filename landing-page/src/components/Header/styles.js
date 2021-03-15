import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Header: {
    backgroundImage:
      "linear-gradient(to right bottom, #0082c1, #2b7cc7, #4b74ca, #686ac9, #845ec2)",
  },
  HeaderNav: {
    padding: "20px 0",
    "& button": {
      padding: "5px 20px",
      borderRadius: 100,
      cursor: "pointer",
      transition: ".3s",
      background: "none",
      color: "#FEFEFE",
      border: "1px solid #FEFEFE",
    },
    "& button:hover": {
      backgroundColor: "#FEFEFE",
      transition: ".3s",
      color: "#505050",
      border: "1px solid #FEFEFE transparent",
    },
  },
  MenuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "#FEFEFE",
    fontWeight: "bold",
    "& a": {
      color: "#FEFEFE",
      textDecoration: "none",
    },
  },
  IconLink: {
    fontSize: 24,
  },
  HeaderContent: {
    padding: "40px 0 50px 0",
    "& h3": {
      color: "#FEFEFE",
      fontSize: 28,
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "justify",
      },
    },
    "& p": {
      color: "#C4C4C4",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "justify",
      },
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
  registerButton: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
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
