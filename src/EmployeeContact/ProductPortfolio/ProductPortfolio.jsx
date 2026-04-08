import React from "react";
import { Helmet } from "react-helmet-async";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import GradesTable from "../../components/Products/GradesTable/GradesTable";

const ProductPortfolio = () => {
  return (
    <div className="kpf-wrapper">
      <Helmet>
        <title>
          Ventura ProductPortfolio | Ventura Alloy and Steels Pvt. Ltd.
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
              <h1>Product Portfolio</h1>
              <h3 className="fs-5">
                Hot Work Tool Steel, Cold Work Tool Steel, Plastic Mould Steel,
                Spring Steel, Alloy Steel, Carbon Steel, Boron Steel
              </h3>
            </div>
          </div>
        </div>

        {/* GRADES + TABLE Category */}
        <div className="kpf-section mb-5">
          <div className="kpf-main-card">
            {/* TABLE */}
            <div className="grades-wrapper">
              <GradesTable />
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="kpf-contact-container d-flex g-5">
          <div className="kpf-contact">
            <h3>Contact</h3>
            <h4>ANIL KANAL </h4>
            <h5>All grades (Specially H-series)</h5>
            <a href="tel:02235034307    " className="kpf-contact-details">
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
              <a href="tel:918591313561">Call</a>
              <a href="https://wa.me/918591313561" target="_blank">
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

          <div className="kpf-contact">
            <h3>Contact</h3>
            <h4>PRADNYA PATEL</h4>
            <h5>Boron Steel & all other</h5>
            <a href="tel:02235034323     " className="kpf-contact-details">
              <FaPhone style={{ marginRight: "8px" }} />
              022-3503 4323
            </a>
            <a href="tel:919967839939" className="kpf-contact-details">
              <FaPhone style={{ marginRight: "8px" }} />
              085913 13561
            </a>
            <a
              href="mailto:pradnya@venturasteels.com"
              className="kpf-contact-details"
            >
              <FaEnvelope style={{ marginRight: "8px" }} />
              pradnya@venturasteels.com
            </a>

            <div className="kpf-actions">
              <a href="tel:919967839939">Call</a>
              <a href="https://wa.me/918591313561" target="_blank">
                WhatsApp
              </a>
              <a href="mailto:pradnya@venturasteels.com">Email</a>

              {/* UPDATED BUTTON */}
              <a
                href="https://res.cloudinary.com/dgujwx9r9/raw/upload/v1775649569/EMPLOYEECONTACTDETAILS/pradnya.vcf"
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
            <h4>DEBOPRIYA DEBNATH </h4>
            <h5>All grades</h5>
            <a href="tel:02235034322 " className="kpf-contact-details">
              <FaPhone style={{ marginRight: "8px" }} />
              022-3503 4322
            </a>
            <a href="tel:918655668175" className="kpf-contact-details">
              <FaPhone style={{ marginRight: "8px" }} />
              08655668175
            </a>
            <a
              href="mailto:debopriya@venturasteels.com"
              className="kpf-contact-details"
            >
              <FaEnvelope style={{ marginRight: "8px" }} />
              debopriya@venturasteels.com
            </a>

            <div className="kpf-actions">
              <a href="tel:918591313567">Call</a>
              <a href="https://wa.me/918591313567" target="_blank">
                WhatsApp
              </a>
              <a href="mailto:debopriya@venturasteels.com">Email</a>

              {/* UPDATED BUTTON */}
              <a
                href="https://res.cloudinary.com/dgujwx9r9/raw/upload/v1775649568/EMPLOYEECONTACTDETAILS/debopriya.vcf"
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

export default ProductPortfolio;
