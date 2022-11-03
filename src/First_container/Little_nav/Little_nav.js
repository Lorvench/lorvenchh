import React from "react";
import { useState } from "react";
import "./Style/Style.css";

const Little_nav = () => {
  // const [click, setClick] = useState(true);

  // const handleclick = () => {
  //   setClick(!click);
  // };
  return (
    <div className="Little_nav">
      <h2 className="text">
        LORVENCH TECHNOLOGY{" "}
        {/* <span className="togger">
          <i
            onClick={handleclick}
            className={click ? "bi bi-list" : "bi bi-x-lg"}
          >
            {" "}
          </i>
        </span> */}
      </h2>{" "}
      <div className="container"> </div>
    </div>
  );
};

export default Little_nav;
