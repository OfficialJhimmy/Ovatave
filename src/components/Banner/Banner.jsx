import React from "react";
import Button from "../Button/Button";
import "./index.css";

function Banner() {
  return (
    <>
      <div className="banner__wrapper">
        <div className="banner__heading">
          <h1>
            Talent Management & Brand <br />
            Development for the next <br />
            generation of <br />
            Singers, Models, Athletes, and <br />
            Digital Entrepreneurs.
          </h1>
        </div>

        <div className="banner__buttons hide-on-mobile">
          <div className="banner__btn-first">
            <Button title="Learn More" />
          </div>

          <div className="button__description">
            <p>BUILDING SOCIAL-FIRST BRANDS.</p>
          </div>

          <div className="banner__btn-second">
            <Button title="Our Talents" />
          </div>
        </div>

        {/* display on mobile*/}
        <div className="banner__buttons-mobile  hide-on-desktop">
          <div className="two-buttons-wrap">
            <div className="banner__btn-first-mobile">
              <Button title="Learn More" />
            </div>

            <div className="banner__btn-second-mobile">
              <Button title="Our Talents" />
            </div>
          </div>

          <div className="button__description-mobile">
            <p>BUILDING SOCIAL-FIRST BRANDS.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
