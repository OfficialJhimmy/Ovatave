import React from "react";
import AnimatedCursor from "react-animated-cursor";

function index() {
  return (
    <div>
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  );
}

export default index;
