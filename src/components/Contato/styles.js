import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  ContatoDivider: {
    height: 100,
    backgroundImage:
      "linear-gradient(to right bottom, #0082c1, #2b7cc7, #4b74ca, #686ac9, #845ec2)",
    margin: "50px 0",
  },
  ContatoDividerTitle: {
    textAlign: "center",
    padding: "30px 0",
    fontSize: 28,
    fontWeight: "bold",
    color: "#845ec2",
  },
  ContatoDividerForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    "& img": {
      width: 350,
    },
  },
}));

export default useStyles;
