import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Footer: {
    backgroundImage:
      'linear-gradient(to right bottom, #0a0a0a, #5F5566, #33202A)',
  },
  FooterContent: {
    padding: '30px 0 40px 0',
    fontSize: 26,
    color: '#F6F6F6',
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
    color: '#F6F6F6',
    '& a': {
      color: '#F6F6F6',
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
      border: '#F6F6F6 1px solid',
      cursor: 'pointer',
      padding: '10px 30px',
      background: 'none',
      color: '#F6F6F6',
      transition: '.2s',
    },
    '& button:hover': {
      backgroundColor: '#F6F6F6',
      color: '#3F3F3F',
      transition: '.2s',
    },
  },
}));

export default useStyles;
