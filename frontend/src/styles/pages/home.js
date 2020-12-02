import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homeTitle: {
    height: 120,
    fontSize: '30pt',
    color: '#131313',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      fontSize: '25pt',
    },
  },
  home: {
    marginTop: 15,
  },
}));
export default useStyles;
