import React from "react";
import "../Skill_set/Skill.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Skill = () => {
  return (
    <div className="skill_main">
      {" "}
      <div className="skill_1">
        <AnimationOnScroll
          initiallyVisible={true}
          delay={2000}
          animateIn="animate__wobble"
        >
          <h1> Design &#128396; </h1>
        </AnimationOnScroll>
        <p>
          I'm probably not the typical designer positioned behind an Illustrator
          artboard adjusting pixels, but I design. Immersed in stylesheets
          tweaking font sizes and contemplating layouts is where you'll find me
          😊. I'm committed to creating fluent user experiences while staying
          fashionable 💎.
        </p>
      </div>
      <div className="skill_2">
        <AnimationOnScroll
          initiallyVisible={true}
          delay={2000}
          animateIn="animate__wobble"
        >
          <h1>Development 🏗</h1>
        </AnimationOnScroll>
        <p>
          I do not only design &#127775;, I’m also a Frontend Web Developer
          skilled in building the Front-end of Websites, Web Applications and
          other related sectors that leads to the success of the overall product
          by giving out the best designs you can think of.
        </p>
      </div>
    
    </div>
  );
};

export default Skill;
