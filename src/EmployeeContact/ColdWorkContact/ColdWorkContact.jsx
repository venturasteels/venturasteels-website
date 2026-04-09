import React from "react";
import { Helmet } from "react-helmet-async";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./ColdWorkContact.css";

const ColdWorkContact = () => {
  return (
    <div className="kpf-wrapper">
      <Helmet>
        <title>
          Ventura Cold Work Steel | Ventura Alloy and Steels Pvt. Ltd.
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
              <h1>Cold Work Tool Steel</h1>
              <h2>D2 / D3 / CR12MOV</h2>
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
                    <th>Size Range (MM)</th>
                    <th>Flat Bar</th>
                    <th>Thickness (MM)</th>
                    <th>Width (MM)</th>
                    <th>MOQ</th>
                  </tr>
                </thead>

                <tbody>
                  {/* 1.2379 */}
                  <tr>
                    <td>1.2379</td>
                    <td>Round Bar</td>
                    <td>20 – 60</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>-</td>
                    <td>5 Tons</td>
                  </tr>
                  <tr>
                    <td>1.2379</td>
                    <td>Round Bar</td>
                    <td>65 – 300</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>-</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>1.2379</td>
                    <td>Round Bar</td>
                    <td>70 – 300</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>-</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>1.2379</td>
                    <td>Round Bar</td>
                    <td>310 – 705</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>-</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>1.2379</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>Flat Bar</td>
                    <td>16 – 40</td>
                    <td>105 – 810</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>1.2379</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>Flat Bar</td>
                    <td>50 – 305</td>
                    <td>105 – 810</td>
                    <td>10 Tons</td>
                  </tr>

                  {/* D3 */}
                  <tr>
                    <td>D3</td>
                    <td>Round Bar</td>
                    <td>70 – 460</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>-</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>D3</td>
                    <td>Round Bar</td>
                    <td>460 – 685</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>-</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>D3</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>Flat Bar</td>
                    <td>16 – 40</td>
                    <td>210 – 810</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>D3</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>Flat Bar</td>
                    <td>50 – 255</td>
                    <td>210 – 710</td>
                    <td>10 Tons</td>
                  </tr>

                  {/* Cr12MoV */}
                  <tr>
                    <td>Cr12MoV</td>
                    <td>Round Bar</td>
                    <td>65 – 460</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>-</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>Cr12MoV</td>
                    <td>Round Bar</td>
                    <td>450 – 685</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>-</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>Cr12MoV</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>Flat Bar</td>
                    <td>20 – 40</td>
                    <td>210 – 810</td>
                    <td>10 Tons</td>
                  </tr>
                  <tr>
                    <td>Cr12MoV</td>
                    <td>NA</td>
                    <td>-</td>
                    <td>Flat Bar</td>
                    <td>50 – 255</td>
                    <td>210 – 710</td>
                    <td>10 Tons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="kpf-contact-cold">
          <h3>Contact</h3>
          <h4>ANIKET GOGAWALE</h4>
          <h5>D2 / D3 / CR12MOV</h5>
          <a href="tel:918591313569" className="kpf-contact-details">
            <FaPhone style={{ marginRight: "8px" }} />
            085913 13569
          </a>
          <a
            href="mailto:marketing@venturasteels.com"
            className="kpf-contact-details"
          >
            <FaEnvelope style={{ marginRight: "8px" }} />
            marketing@venturasteels.com
          </a>

          {/* <div className="kpf-actions">
            <a href="tel:918591313564">Call</a>
            <a href="https://wa.me/918591313564" target="_blank">
              WhatsApp
            </a>
            <a href="mailto:karuna@venturasteels.com">Email</a>
          </div> */}
          <div className="kpf-actions">
            <a href="tel:918591313569">Call</a>
            <a href="https://wa.me/918591313569" target="_blank">
              WhatsApp
            </a>
            <a href="mailto:karuna@venturasteels.com">Email</a>

            {/* UPDATED BUTTON */}
            <a
              href="https://res.cloudinary.com/dgujwx9r9/raw/upload/v1775631059/EMPLOYEECONTACTDETAILS/karuna-sawant.vcf"
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

export default ColdWorkContact;
