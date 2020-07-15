import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "30vh",
  },
  media: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
}));

function Banners() {
  const classes = useStyles();

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={classes.banner}>
          <img className={classes.media} src="images/pruebaBanner.png"></img>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Banners;
