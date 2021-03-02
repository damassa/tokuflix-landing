import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-paperScrollPaper": {
      height: "400px !important ",
    },
  },
}));

export default useStyles;
