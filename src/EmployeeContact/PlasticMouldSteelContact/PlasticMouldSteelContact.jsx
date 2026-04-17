import React from "react";
import { Helmet } from "react-helmet-async";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const PlasticMouldSteelContact = () => {
  return (
    <div className="kpf-wrapper">
      <Helmet>
        <title>
          Ventura Plastic Mould Steel | Ventura Alloy and Steels Pvt. Ltd.
        </title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="kpf-container">
        {/* HEADER */}
        <div className="kpf-header">
          <div className="kpf-header-card">
            {/* LEFT - LOGO */}
            <div className="kpf-header-logo">
              <img
                src="https://res.cloudinary.com/dgujwx9r9/image/upload/v1771221504/Ventura_New_Logo_Up_eu2bes.png"
                alt="Ventura Logo"
              />
            </div>

            {/* RIGHT - NAME */}
            <div className="kpf-header-info">
              <h1>Platic Mould Steel</h1>
              <h2>1.2311 / 1.2738 / 1.2316</h2>
            </div>
          </div>
        </div>

        {/* GRADES + TABLE Category */}
        <div className="kpf-section mb-5">
          <div className="kpf-main-card">
            {/* TABLE */}
            <div className="kpf-table-wrapper">
              <table className="kpf-table">
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Type</th>
                    <th>Thickness (MM)</th>
                    <th>Width (MM)</th>
                    <th>MOQ</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>P20 (1.2311)</td>
                    <td>Rolled</td>
                    <td>16 – 250</td>
                    <td>130 – 2270</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>P20 (1.2738)</td>
                    <td>Rolled</td>
                    <td>25 – 150</td>
                    <td>155 – 605</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>P20 (1.2311)</td>
                    <td>Forged</td>
                    <td>205 – 410</td>
                    <td>205 – 2250</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>P20 (1.2738)</td>
                    <td>Forged</td>
                    <td>120 – 600</td>
                    <td>650 – 2250</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>P20 (1.2738)</td>
                    <td>HH</td>
                    <td>20 – 120</td>
                    <td>205 – 1100</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>1.2316</td>
                    <td>-</td>
                    <td>20 – 120</td>
                    <td>205 – 605</td>
                    <td>25 Ton</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="kpf-contact-cold">
          <h3>Contact</h3>
          <h4>NEHA DARJI-SHAIKH / HITESH SOLANKI </h4>
          <h5>1.2311 / 1.2738 / 1.2316</h5>
          <a href="tel:02235034325" className="kpf-contact-details">
            <FaPhone style={{ marginRight: "8px" }} />
            022-3503 4325
          </a>
          <a href="tel:918591313565" className="kpf-contact-details">
            <FaPhone style={{ marginRight: "8px" }} />
            085913 13565
          </a>
          <a
            href="mailto:p20@venturasteels.com"
            className="kpf-contact-details"
          >
            <FaEnvelope style={{ marginRight: "8px" }} />
            p20@venturasteels.com
          </a>

          <div className="kpf-actions">
            <a href="tel:918591313565">Call</a>
            <a href="https://wa.me/918591313565" target="_blank">
              WhatsApp
            </a>
            <a href="mailto:p20@venturasteels.com">Email</a>

            {/* UPDATED BUTTON */}
            <a
              href="https://res.cloudinary.com/dgujwx9r9/raw/upload/v1776403490/neha-hitesh_zf4nju.vcf"
              className="save-contact-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              📥 Save Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlasticMouldSteelContact;
