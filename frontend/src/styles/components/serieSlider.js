import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sliderWrapper: {
    width: '95%',
    height: 'fit-content',
    backgroundColor: 'pink',
    '& img': {
      width: '100%',
    },
  },
  sliderContainer: {
    display: 'flex !important',
  },
}));

export default useStyles;
