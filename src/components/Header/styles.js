import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Header: {
    backgroundImage:
      'linear-gradient(to right bottom, #0a0a0a, #5F5566, #33202A)',
  },
  HeaderNav: {
    padding: '20px 0',
    '& button': {
      padding: '5px 20px',
      borderRadius: 100,
      cursor: 'pointer',
      transition: '.3s',
      background: 'none',
      color: '#F6F6F6',
      border: '1px solid #F6F6F6',
    },
    '& button:hover': {
      backgroundColor: '#F6F6F6',
      transition: '.3s',
      color: '#33202a',
      border: '1px solid #F6F6F6 transparent',
    },
  },
  MenuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: '#F6F6F6',
    fontWeight: 'bold',
    '& a': {
      color: '#F6F6F6',
      textDecoration: 'none',
    },
  },
  IconLink: {
    fontSize: 24,
  },
  HeaderContent: {
    padding: '40px 0 50px 0',
    '& h3': {
      color: '#F6F6F6',
      fontSize: 28,
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: 'justify',
      },
    },
    '& p': {
      color: '#C4C4C4',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: 'justify',
      },
    },
    '& button': {
      padding: '10px 30px',
      borderRadius: 100,
      border: 'none',
      cursor: 'pointer',
      transition: '.2s',
      marginTop: 20,
    },
    '& button:hover': {
      backgroundColor: '#33202a',
      transition: '.2s',
      color: '#f6f6f6',
    },
  },
  registerButton: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  HeaderImage: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& img': {
      width: '70%',
    },
  },
}));

export default useStyles;
