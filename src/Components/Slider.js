import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="slider.jpg" />
          <p className="legend">Learning Today, Leading Tomorrow</p>
        </div>
        <div>
          <img src="slider2.jpg" />
          <p className="legend">Beautiful Nature</p>
        </div>
        <div>
          <img src="slider3.jpeg" />
          <p className="legend">World class Infrastructure</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
