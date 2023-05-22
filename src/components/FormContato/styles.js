import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Button: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginTop: 15,
    },
    '& button': {
      background: 'none',
      borderRadius: 100,
      border: '1px solid',
      padding: '10px 30px',
      color: '#3F3F3F',
      cursor: 'pointer',
      transition: '.2s',
      '&:hover': {
        backgroundColor: '#33202a',
        color: '#F6F6F6',
        transition: '.2s',
      },
    },
  },
}));

export default useStyles;
