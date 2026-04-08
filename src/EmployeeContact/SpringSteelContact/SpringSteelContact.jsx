import React from "react";
import { Helmet } from "react-helmet-async";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./SpringSteelContact.css";

const SpringSteelContact = () => {
  return (
    <div className="kpf-wrapper">
      <Helmet>
        <title>Ventura Spring Steel | Ventura Alloy and Steels Pvt. Ltd.</title>
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
              <h1>Spring Steel</h1>
              <h2>EN47 / 50CRV4 / 51CRV4 / SUP9 / SAE9254 / SAE 52100</h2>
            </div>
          </div>
        </div>

        {/* GRADES + TABLE Category */}
        <div className="kpf-section mb-5">
          <div className="kpf-main-card">
            {/* HEADER */}
            {/* <div className="kpf-card-header">
              <h3>Grade Handled</h3>
              <p>EN47 / 50CRV4 / 51CRV4 / SUP9 / SAE9254 / SAE 52100</p>
            </div> */}

            {/* TABLE */}
            <div className="kpf-table-wrapper">
              <table className="kpf-table">
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Round Bar Size</th>
                    <th>MOQ (Round)</th>
                    <th>Wire Rod Size</th>
                    <th>MOQ (Wire)</th>
                    <th>Availability</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>50CrV4 / EN47</td>
                    <td>16 – 90 MM</td>
                    <td>250–300 kg</td>
                    <td>5.5 – 32 MM</td>
                    <td>2200–3000 kg</td>
                    <td>
                      <span className="stock ready">Ready</span>
                    </td>
                  </tr>

                  <tr>
                    <td>51CrV4 / EN47</td>
                    <td>16 – 90 MM</td>
                    <td>250–300 kg</td>
                    <td>5.5 – 32 MM</td>
                    <td>2200–3000 kg</td>
                    <td>
                      <span className="stock ready">Ready</span>
                    </td>
                  </tr>

                  <tr>
                    <td>SUP 9</td>
                    <td>16 – 90 MM</td>
                    <td>-</td>
                    <td>10 – 30 MM</td>
                    <td>2200–3000 kg</td>
                    <td>
                      <span className="stock ready">Ready</span>
                    </td>
                  </tr>

                  <tr>
                    <td>SAE 9254</td>
                    <td>16 – 90 MM</td>
                    <td>-</td>
                    <td>10 – 30 MM</td>
                    <td>2200–3000 kg</td>
                    <td>
                      <span className="stock ready">Ready</span>
                    </td>
                  </tr>

                  <tr>
                    <td>SAE 52100</td>
                    <td>25 – 90 MM</td>
                    <td>5 Ton</td>
                    <td>5.5 – 32 MM</td>
                    <td>15 Tonnes</td>
                    <td>
                      <span className="stock advance">Advance</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="kpf-contact">
          <h3>Contact</h3>
          <h4>Karuna Sawant</h4>
          <h5>EN47 / 50CRV4 / 51CRV4 / SUP9 / SAE9254 / SAE 52100</h5>
          <a href="tel:02235034328" className="kpf-contact-details">
            <FaPhone style={{ marginRight: "8px" }} />
            022-3503 4328
          </a>
          <a href="tel:918591313564" className="kpf-contact-details">
            <FaPhone style={{ marginRight: "8px" }} />
            085913 13564
          </a>
          <a
            href="mailto:karuna@venturasteels.com"
            className="kpf-contact-details"
          >
            <FaEnvelope style={{ marginRight: "8px" }} />
            karuna@venturasteels.com
          </a>

          <div className="kpf-actions">
            <a href="tel:918591313564">Call</a>
            <a href="https://wa.me/918591313564" target="_blank">
              WhatsApp
            </a>
            <a href="mailto:karuna@venturasteels.com">Email</a>

            {/* UPDATED BUTTON */}
            <a
              href="https://res.cloudinary.com/dgujwx9r9/raw/upload/v1775649569/EMPLOYEECONTACTDETAILS/karuna-sawant.vcf"
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

export default SpringSteelContact;
