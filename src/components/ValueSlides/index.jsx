import React, { useState, useEffect, useRef } from "react";
import { slidesData } from "./slidesData";
import cn from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureSlide from "./FeatureSlide";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";

function RenderImages({ activeFeatureIndex }) {
  return slidesData.map(({ imageURL }, index) => (
    <img
      src={imageURL}
      alt="Our Values"
      className={cn({ "as-primary": activeFeatureIndex === index })}
      key={imageURL}
    />
  ));
}

function ValueSlides() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);
  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidesRightRef.current,
          start: "top top",
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });

      return tl;
    }
    const master = gsap.timeline();
    master.add(stopTrigger()); //with a gap of 2 seconds
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out-sine",
      // once: true,
    });
  }, []);

  return (
    <>
      <div
        ref={featureSliderRef}
        className="feature-slides-container hide-on-mobile"
        name="why-us"
      >
        <div className="feature-slides-left">
          {slidesData.map((feature, index) => (
            <FeatureSlide
              updateActiveImage={setFeatureIndex}
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
        <div
          ref={featureSlidesRightRef}
          className="feature-slides-right hide-on-mobile"
        >
          <RenderImages activeFeatureIndex={activeFeatureIndex} />
        </div>
      </div>

      {/* Another display on mobile*/}
      <div
        name="why-us"
        className="feature-slides-container-mobile hide-on-desktop"
      >
        <div className="feature-slides-left-mobile">
          {slidesData.map((feature, index) => (
            <>
              <FeatureSlide
                updateActiveImage={setFeatureIndex}
                key={feature.imageURL}
                title={feature.title}
                description={feature.description}
                index={index}
              />
              <div className="features-slides-img">
                <img
                  src={feature.imageURL}
                  alt="Our Values"
                  className="feature-slides__image"
                  key={feature.imageURL}
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default ValueSlides;
