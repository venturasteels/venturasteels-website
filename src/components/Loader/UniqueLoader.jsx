import React from "react";
import "./UniqueLoader.css";

const UniqueLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-box">
        <img
          src="/image/Ventura New Logo Up.png"
          alt="Ventura Steels"
          className="loader-logo-img"
        />

        <div className="molten-container">
          <div className="molten-line"></div>
        </div>

        <p className="loader-text">Forging Excellence...</p>
      </div>
    </div>
  );
};

export default UniqueLoader;
