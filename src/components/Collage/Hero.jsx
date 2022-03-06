import React from "react";
import Collage from "./Collage";
import CollageFooter from "./CollageFooter";
import CollageHeader from "./CollageHeader";
import CollageUsedBy from "./CollageUsedBy";
import "./index.css";

function Hero() {
  return (
    <div name="what-we-do" className="hero-container">
      <CollageHeader />
      <div className="hero-media">
        <Collage />
      </div>
      <CollageUsedBy />
      <CollageFooter />
    </div>
  );
}

export default Hero;
