import React from "react";
import Button from "../../components/Button/Button";
import "./index.css";

function Error404() {
  return (
    <>
      <div className="error404__container">
        <h2>
          Oh No! It seems the page <br />
          you're looking for does not exist
        </h2>
        <p>
          While you're still here, why don't you browse through our rooster.
        </p>
        <a href="/">
          <Button title="Our Rooster" />
        </a>
      </div>
    </>
  );
}

export default Error404;
