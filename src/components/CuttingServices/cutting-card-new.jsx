import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./cutting-card-new.css";

const CuttingCardNew = ({ title, img, desc, list, aos }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4" data-aos={aos}>
      <div className="cuttingCard">
        {/* IMAGE */}
        <div className="cuttingCard-imgWrap">
          <img src={img} alt={title} className="cuttingCard-img" />

          {/* Floating Label */}
          <div className="cuttingCard-label">{title}</div>

          {/* Right Glow Line */}
          <div className="cuttingCard-glowLine"></div>

          {/* Arrow */}
          <div className="cuttingCard-arrow">
            <BsArrowRight size={22} />
          </div>
        </div>

        {/* SLIDE-UP PANEL */}
        <div className="cuttingCard-panel">
          <p className="text-justify">{desc}</p>

          <ul>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CuttingCardNew;
