import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sliderWrapper: {
    width: '95%',
    height: 'fit-content',
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
    flexWrap: 'nowrap',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between !important',
    },
  },
}));

export default useStyles;
