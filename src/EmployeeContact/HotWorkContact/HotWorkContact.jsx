import React from "react";
import { Helmet } from "react-helmet-async";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./HotWorkContact.css";

const HotWorkContact = () => {
  return (
    <div className="kpf-wrapper">
      <Helmet>
        <title>
          Ventura Hot Work Tool Steel | Ventura Alloy and Steels Pvt. Ltd.
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
              <h1>Hot Work Tool Steel</h1>
              <h2>H13 / 1.2344 & H-series</h2>
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
                    <th>Flat Bar (Thickness)</th>
                    <th>Flat Bar (Width)</th>
                    <th>MOQ</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>H13</td>
                    <td>DIA 36.5 – 132</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td>H13</td>
                    <td>DIA 142 – 412</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td>1.2344</td>
                    <td>DIA 142 – 752</td>
                    <td>25 – 150</td>
                    <td>65 – 505</td>
                    <td>10 Ton</td>
                  </tr>

                  <tr>
                    <td>1.2344</td>
                    <td>DIA 142 – 752</td>
                    <td>40 – 300</td>
                    <td>65 – 600</td>
                    <td>10 Ton</td>
                  </tr>

                  <tr>
                    <td>1.2344</td>
                    <td>DIA 142 – 752</td>
                    <td>45 – 500</td>
                    <td>150 – 1000</td>
                    <td>10 Ton</td>
                  </tr>

                  <tr>
                    <td>H11</td>
                    <td>DIA 40 – 412</td>
                    <td>-</td>
                    <td>-</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>1.2343</td>
                    <td>DIA 40 – 412</td>
                    <td>-</td>
                    <td>-</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>H21</td>
                    <td>DIA 40 – 412</td>
                    <td>-</td>
                    <td>-</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>H10</td>
                    <td>DIA 40 – 412</td>
                    <td>-</td>
                    <td>-</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>1.2365</td>
                    <td>DIA 40 – 412</td>
                    <td>-</td>
                    <td>-</td>
                    <td>5 Ton</td>
                  </tr>

                  <tr>
                    <td>H12</td>
                    <td>DIA 40 – 412</td>
                    <td>-</td>
                    <td>-</td>
                    <td>5 Ton</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="kpf-contact-container d-flex g-5">
          <div className="kpf-contact">
            <h3>Contact</h3>
            <h4>SEEMA BANE-NAGVEKAR </h4>
            <h5>H13 / 1.2344 & H-series</h5>
            <a href="tel:02235034303 " className="kpf-contact-details">
              <FaPhone style={{ marginRight: "8px" }} />
              022 3503 4303
            </a>
            <a href="tel:918655668174" className="kpf-contact-details">
              <FaPhone style={{ marginRight: "8px" }} />
              086556 68174
            </a>
            <a
              href="mailto:karuna@venturasteels.com"
              className="kpf-contact-details"
            >
              <FaEnvelope style={{ marginRight: "8px" }} />
              seema@venturasteels.com
            </a>

            <div className="kpf-actions">
              <a href="tel:918655668174">Call</a>
              <a href="https://wa.me/918655668174" target="_blank">
                WhatsApp
              </a>
              <a href="mailto:seema@venturasteels.com">Email</a>

              {/* UPDATED BUTTON */}
              <a
                href="https://res.cloudinary.com/dgujwx9r9/raw/upload/v1775649571/EMPLOYEECONTACTDETAILS/seema.vcf"
                className="save-contact-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                📥 Save Contact
              </a>
            </div>
          </div>

          <div className="kpf-contact">
            <h3>Contact</h3>
            <h4>ANIL KANAL </h4>
            <h5>All grades (Specially H-series)</h5>
            <a href="tel:02235034307 " className="kpf-contact-details">
              <FaPhone style={{ marginRight: "8px" }} />
              022-3503 4307
            </a>
            <a href="tel:918591313561" className="kpf-contact-details">
              <FaPhone style={{ marginRight: "8px" }} />
              085913 13561
            </a>
            <a
              href="mailto:anil@venturasteels.com"
              className="kpf-contact-details"
            >
              <FaEnvelope style={{ marginRight: "8px" }} />
              anil@venturasteels.com
            </a>

            <div className="kpf-actions">
              <a href="tel:918591313564">Call</a>
              <a href="https://wa.me/918591313564" target="_blank">
                WhatsApp
              </a>
              <a href="mailto:anil@venturasteels.com">Email</a>

              {/* UPDATED BUTTON */}
              <a
                href="https://res.cloudinary.com/dgujwx9r9/raw/upload/v1775649569/EMPLOYEECONTACTDETAILS/anil.vcf"
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
    </div>
  );
};

export default HotWorkContact;
