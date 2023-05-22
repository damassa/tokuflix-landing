import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  ContatoDivider: {
    height: 100,
    backgroundImage:
      'linear-gradient(to right bottom, #0a0a0a, #5F5566, #33202A)',
    margin: '50px 0',
  },
  ContatoDividerTitle: {
    textAlign: 'center',
    padding: '30px 0',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#33202a',
  },
  ContatoDividerForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    '& img': {
      width: 350,
    },
  },
}));

export default useStyles;
