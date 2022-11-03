import React from "react";
import "../Copyright/Copyright.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Copyright = () => {
  return (
    <div className="copy">
      <div className="joseph">
        {" "}
        <div className="line"></div>
        <AnimationOnScroll
          initiallyVisible={true}
          duration={5}
          animateIn="animate__swing"
        >
          <h2>@ Joseph Salako (LORVENCH)</h2>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Copyright;
