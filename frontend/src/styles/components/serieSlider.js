import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sliderWrapper: {
    width: '95%',
    '& img': {
      width: '100%',
    },
  },
  sliderCard: {
    display: 'flex !important',
    justifyContent: 'center',
  },
  sliderCardInfo: {
    padding: '0 15px',
    '& h1': {
      color: '#131313',
      fontWeight: 'bold',
      fontSize: '30pt',
    },
    '& p': {
      color: '#363E48',
      fontSize: 18,
      textAlign: 'justify',
    },
    [theme.breakpoints.down('md')]: {
      padding: 0,
      marginTop: 20,
    },
  },
  sliderButton: {
    display: 'flex',
    alignItems: 'flex-end',
    '& button': {
      color: '#ffffff',
      fontFamily: 'Overpass, sans-serif',
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  sliderButtonWrapper: {
    display: 'flex !important',
    justifyContent: 'space-between !important',
    flexWrap: 'nowrap',
  },
}));

export default useStyles;
