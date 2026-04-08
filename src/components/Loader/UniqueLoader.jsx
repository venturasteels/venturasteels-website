import React from "react";
import "./UniqueLoader.css";

const UniqueLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-box">
        <img
          src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1771221504/Ventura_New_Logo_Up_eu2bes.png"
          alt="Ventura Steels Logo"
          className="loader-logo-img"
          loading="lazy"
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
