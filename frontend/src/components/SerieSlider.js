import { Hidden } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useStyles from '../styles/components/serieSlider';
import SliderCard from './SliderCard';

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <Hidden smDown>
      <ArrowForwardIosIcon
        className={className}
        onClick={onClick}
        style={{ color: '#505050' }}
      />
    </Hidden>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Hidden smDown>
      <ArrowBackIosIcon
        className={className}
        onClick={onClick}
        style={{ color: '#505050' }}
      />
    </Hidden>
  );
}

const SerieSlider = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 2000,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className={classes.sliderWrapper}>
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
    </Slider>
  );
};

export default SerieSlider;

SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
