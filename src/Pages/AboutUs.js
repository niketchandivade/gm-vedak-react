import React from "react";
import Header from "../Components/Header";
import Grid from "../Components/Grid";
import PageTitle from "../Components/PageTitle";

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <PageTitle title="About Us" />
      <div className="about-trust">
        <div className="about-trust-title">About Trust</div>
        <div className="about-trust-desc">
          Shri. Gopinath Mahadeo Vedak Pratisthan is registered Trust under
          Bombay Trust Act, 1950 with Registration No. E-3094-Pune on 22.06.2000
          having Registration address 30,Laxmi Park , Pune-30.
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default AboutUs;
