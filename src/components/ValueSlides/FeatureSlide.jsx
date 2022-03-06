import React, { useRef, useEffect } from "react";
import useOnScreen from "../../utils/useOnScreen";
import Aos from "aos";
import "aos/dist/aos.css";

function FeatureSlide({ title, description, updateActiveImage, index }) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out-sine",
      // once: true,
    });
  }, []);
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);
  return (
    <>
      <div ref={ref} className="feature-slide" data-aos="fade-down">
        <h3 className="feature-slide-title">{title}</h3>
        <p className="feature-slide-description">{description}</p>
      </div>
    </>
  );
}

export default FeatureSlide;
