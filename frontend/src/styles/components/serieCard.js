import { makeStyles } from '@material-ui/core/styles';
import image from '../../images/dairanger.jpg';


const useStyles = makeStyles((theme) => ({
    serieCard: {
      width: 200, 
      height: 'fit-content',
      margin: '15px 35px 35px 35px',
      padding: 10,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
        "& h1": {
          width: '100%',
          fontSize: 20,
          color: '#131313'
        },
        "& h2": {
          width: '100%',
          fontSize: 16,
          color: '#161616'
        },
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        justifyContent: 'center'
      }      
    },  
    serieImage: {
      width: '100%',
      height: 300,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      marginBottom: 10
    },  
}));

export default useStyles;