import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/86299-3x3-cube-loader-3.json";

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default Loader;
