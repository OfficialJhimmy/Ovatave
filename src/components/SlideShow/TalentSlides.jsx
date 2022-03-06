import React, { useEffect } from "react";
import "./TalentSlides.css";
import { talents } from "./talentData";
import Button from "../Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";

function TalentSlides() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="slideshow" name="talents">
      <div data-aos="fade-down" data-aos-easing="ease-in-sine">
        <h3>Our Talents</h3>
        <p>
          Swipe to see our catalogue of Amazing Talents ranging from your
          favourite Models, Artistes and Athletes
        </p>
      </div>

      <div className="slideshow__slider">
        {talents.map((item, index) => (
          <div
            key={item.name + index}
            className="slideshow__item"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <p className="slideshow__item-label">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="slideshow__cta">
        <Button title="Meet Them" />
      </div>
    </div>
  );
}

export default TalentSlides;
