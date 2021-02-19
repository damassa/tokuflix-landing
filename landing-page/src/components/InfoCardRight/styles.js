import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  InfoCardRight: {
    fontSize: 18,
    padding: "25px 0",
    color: "#505050",
    "& img": {
      width: "60%",
    },
    "& h1": {
      color: "#686ac9",
    },
  },
}));

export default useStyles;
