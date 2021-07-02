import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Footer: {
    backgroundImage:
      'linear-gradient(to right bottom, #0082c1, #2b7cc7, #4b74ca, #686ac9, #845ec2)',
  },
  FooterContent: {
    padding: '30px 0 40px 0',
    fontSize: 26,
    color: '#FEFEFE',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  FooterContentBottom: {
    display: 'flex',
    padding: '10px 0 20px 0',
    fontSize: 18,
    marginTop: 30,
    color: '#FEFEFE',
    '& a': {
      color: '#FEFEFE',
    },
    '& span': {
      fontSize: 13,
    },
  },
  FooterAlign: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginTop: 30,
      fontSize: 24,
    },
    '& button': {
      borderRadius: 100,
      border: '#FEFEFE 1px solid',
      cursor: 'pointer',
      padding: '10px 30px',
      background: 'none',
      color: '#FEFEFE',
      transition: '.2s',
    },
    '& button:hover': {
      backgroundColor: '#FEFEFE',
      color: '#3F3F3F',
      transition: '.2s',
    },
  },
}));

export default useStyles;
