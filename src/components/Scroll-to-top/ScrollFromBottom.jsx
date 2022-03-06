import { useEffect, useState } from "react";
import ArrowUp from "../../assets/icons/up-arrow.png";
import "./index.css";

export const ScrollFromBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="scroll__container">
        <button
          type="button"
          onClick={scrollToTop}
          className={
            isVisible ? "button-opacity scroll__btn" : "button-normal "
          }
          aria-label="Scroll to the Top"
        >
          <img src={ArrowUp} alt="Arrow up" className="scroll__img" />
        </button>
      </div>
    </>
  );
};
