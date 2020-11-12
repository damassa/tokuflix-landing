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
  },
  sliderCardInfo: {
    padding: 15,
    '& h1': {
      color: '#363E48',
      fontWeight: 'bold',
      fontSize: '30pt',
    },
    '& p': {
      color: '#363E48',
      fontSize: 18,
    },
    '& button': {},
  },
}));

export default useStyles;
