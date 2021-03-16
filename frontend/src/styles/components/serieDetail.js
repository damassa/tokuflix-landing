import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  detailWrapper: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    color: '#FFFFFF',
  },
  SerieTitle: {
    marginTop: 150,
    display: 'flex',
    alignItems: 'flex-end',
    '& h1': {
      textTransform: 'uppercase',
      fontSize: '32pt',
      fontWeight: '800',
    },
  },
  SerieYearCategory: {
    display: 'flex',
    padding: '2px 0 40px 0',
    '& strong': {
      marginRight: 10,
    },
  },
  SeriePlot: {
    display: 'flex',
    alignItems: 'flex-start',
    minHeight: 120,
    padding: '0 0 30px 0',
  },
}));

export default useStyles;
