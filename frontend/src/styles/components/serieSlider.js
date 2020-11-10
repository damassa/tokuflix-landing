import { makeStyles } from '@material-ui/core/styles';
import image from '../../images/dairanger-big.jpeg';


const useStyles = makeStyles((theme) => ({
    sliderWrapper: {
      width: '95%', 
      height: 'fit-content'
    },
    sliderImage: {
      backgroundImage: `url(${image})`
    }
}));

export default useStyles;