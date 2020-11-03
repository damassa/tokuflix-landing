import React from "react";
import Slider from "react-slick";

import SerieCard from "./SerieCard";

import '../styles/components/carousel.css';
import { Hidden } from "@material-ui/core";

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
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
    </Slider>
  );
}

export default Carousel;