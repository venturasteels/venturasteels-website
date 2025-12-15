import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./cutting-card.css";

const CuttingCard = ({ title, img, desc, list, aos }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4" data-aos={aos}>
      <div
        className="cutting-tilt"
        data-tilt
        data-tilt-max="8"
        data-tilt-speed="400"
      >
        <div className="cutting-card-pro">
          {/* Vertical Label */}
          <div className="cutting-pro-label">{title}</div>

          {/* Image */}
          <div className="cutting-pro-img-wrap">
            <img src={img} alt={title} className="cutting-pro-img" />

            {/* Magnetic Arrow */}
            <div className="cutting-pro-arrow magnet-target">
              <BsArrowRight size={22} />
            </div>

            {/* Split Overlay */}
            <div className="cutting-pro-overlay">
              <div className="left-split"></div>
              <div className="right-split"></div>

              <div className="overlay-content">
                <p className="cutting-pro-desc">{desc}</p>

                <ul className="cutting-pro-list">
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuttingCard;
