import React, { useEffect, useRef } from "react";
import "./index.css";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image4 from "../../assets/images/image4.jpg";
import image15 from "../../assets/images/image15.jpg";
import image18 from "../../assets/images/image18.jpg";
import { gsap } from "gsap";

function Collage() {
  const middleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.2,
    });
    tl.fromTo(
      ".hero-element",
      { y: 300 },
      {
        y: 0,
        duration: 1,
        delay: function (index) {
          return 0.2 * index;
        },
      }
    );
  }, []);

  useEffect(() => {
    function intro() {
      const tl = gsap.timeline();

      tl.fromTo(middleRef.current, { y: 200 }, { y: 0, duration: 1 });
      return tl;
    }

    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 1,

        scrollTrigger: {
          trigger: middleRef.current,
          // start: "top top",
          // end: "+=1000",
          end: "+=900",
          pin: true,
          scrub: true,
        },
      });

      // tl.to(middleRef.current, { scale: 1 }, "+=0.1");
      tl.to(
        ".hero-container",
        {
          backgroundColor: "black",
          duration: 0.25,
        },
        "-=0.5"
      );
      return tl;
    }

    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
  }, []);

  return (
    <div className="hero-collage">
      <div className="left-column">
        <div className="hero-element">
          <img
            src={image2}
            alt="Talent Media"
            className="collage-element-left1"
          />
        </div>

        <div className="hero-element">
          <img
            src={image18}
            alt="Talent Media"
            className="collage-element-left2"
          />
        </div>
      </div>

      <div className="hero-element-middle">
        <img
          src={image1}
          alt="Talent Media"
          className="collage-element-middle"
          ref={middleRef}
        />
      </div>

      <div className="right-column">
        <div className="hero-element">
          <img
            src={image15}
            alt="Talent Media"
            className="collage-element-right1"
          />
        </div>

        <div className="hero-element">
          <img
            src={image4}
            alt="Talent Media"
            className="collage-element-right2"
          />
        </div>
      </div>
    </div>
  );
}

export default Collage;
