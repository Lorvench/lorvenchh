import React from "react";
import "./Style/Style.css";
const Social_links = () => {
  return (
    <div className="social_container">
      <span className="social_icon ">
        <a href="https://www.linkedin.com/in/joseph-salako-471aba229">
          <i className="bi bi-linkedin"></i>
        </a>
      </span>
      <span className="social_icon">
        <a href="https://twitter.com/lorvench">
          <i className="bi bi-twitter"></i>
        </a>
      </span>
      <span className="social_icon">
        <a href="https://github.com/Lorvench">
          <i className="bi bi-github"></i>
        </a>
      </span>
      <span className="social_icon">
        <a href="https://www.instagram.com/official_lorvench/ ">
          <i className="bi bi-instagram"></i>
        </a>
      </span>
    </div>
  );
};

export default Social_links;
