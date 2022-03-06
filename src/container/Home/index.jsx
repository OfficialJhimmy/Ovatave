import React from "react";
import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Collage/Hero";
import ValueSlides from "../../components/ValueSlides/index";
import TalentSlides from "../../components/SlideShow/TalentSlides";
import Contact from "../../components/GetinTouch/Contact";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div name="home">
      <Banner />
      <Hero />
      <ValueSlides />
      <TalentSlides />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
