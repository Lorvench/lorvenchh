import React from "react";
import Typical from "react-typical";
import "../Changing_text/Changing_text.css";
const Changing_text = () => {
  return (
    <div>
      <h1 className="Changing_text">
        Turning ideas into <span className="span">reality</span>. I
        <Typical
          steps={[1000, "Develope", 1000, "Design", 1000, "Build", 1000]}
          loop={Infinity}
          wrapper="p"
        />{" "}
      </h1>
    </div>
  );
};

export default Changing_text;
