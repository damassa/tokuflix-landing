import React from 'react';
import Slider from 'react-slick';

import SerieCard from './SerieCard';

import '../styles/components/carousel.css';
import { Hidden } from '@material-ui/core';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <Hidden smDown>
      <ArrowForwardIosIcon
        className={className}
        onClick={onClick}
        style={{ color: '#505050', width: '35px', height: '35px' }}
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
        style={{ color: '#505050', width: '35px', height: '35px' }}
      />
    </Hidden>
  );
}

const Carousel = () => {
  const settings = {
    className: 'slideStyles',
    dots: false,
    slidesToShow: 10,
    slidesToScroll: 2,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 3840,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 535,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
    </Slider>
  );
};

export default Carousel;
