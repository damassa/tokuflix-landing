import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  InfoCardRight: {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 18,
    padding: '25px 0',
    color: '#505050',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column-reverse',
    },
    '& img': {
      width: '60%',
      [theme.breakpoints.down('md')]: {
        width: '20%',
      },
    },
    '& h1': {
      color: '#33202a',
    },
    '& p': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'justify',
      },
    },
  },
}));

export default useStyles;
