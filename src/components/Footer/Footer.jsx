import React from "react";
import SmartEmailLink from "../SmartEmailLink";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* footer-section */}
      <footer className="site-footer text-white pt-5">
        <div className="container">
          <div className="row g-4 footer-container">
            {/* Logo & Description */}
            <div className="col-md-4">
              <img
                src="/image/logo-v.png"
                alt="Ventura Steels"
                className="mb-3 footer-logo rounded"
              />
              <h3>ISO 9001 Certified</h3>
              <p>Strict adherence to ISO 9001:2015 Quality Standards.</p>
              <p>
                Ventura Alloy and Steels Pvt. Ltd. is a leading supplier of
                high-performance steels, offering unmatched quality and service
                for decades.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a
                  href="https://www.facebook.com/VenturaSteels"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Ventura Steels on Facebook"
                  title="Ventura Steels Facebook"
                  className="text-white"
                >
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/venturasteels/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Ventura Steels on LinkedIn"
                  title="Ventura Steels LinkedIn"
                  className="text-white"
                >
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a
                  href="https://www.instagram.com/venturasteels/?__pwa=1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Ventura Steels on Instagram"
                  title="Ventura Steels Instagram"
                  className="text-white"
                >
                  <i className="bi bi-instagram fs-5"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-2">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/quality" className="footer-link">
                    Quality
                  </a>
                </li>
                <li>
                  <a href="/infrastructure" className="footer-link">
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a href="/enquiry" className="footer-link">
                    Enquiry
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link">
                    ContactUs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact - Head Office */}
            <div className="col-md-3">
              <h5 className="mb-3">Head Office</h5>
              <p>
                Unit No. 1201 & 1202, Ghanshyam Enclave P. Co-Op. Soc. Ltd.,
                <br />
                New Link Road, Near Laljipada Police Station,
                <br />
                Kandivali (West), Mumbai – 400067.
              </p>
              <p>
                <span>
                   <i
                    className="bi bi-telephone-fill me-2"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="tel:+912235034301 "
                    className="text-decoration-none text-white px-1"
                    title="Call Ventura Steels Office"
                  >
                    022-35034301-21
                  </a>
                </span>
                /
                <span>
                  <a
                    href="tel:+919324959833"
                    className="text-decoration-none text-white px-1"
                    title="Call Ventura Steels Office"
                  >
                    9324959833
                  </a>
                </span>
              </p>
              <p>
                <i className="bi bi-phone-fill me-2"></i>
                <span>
                  <a
                    href="tel:+919819225666"
                    className="text-decoration-none text-white px-1"
                    title="Call Ventura Steels Office"
                  >
                    +91 9819225666
                  </a>
                </span>
              </p>
            </div>

            {/* Contact - Stocking Centre */}
            <div className="col-md-3">
              <h5 className="mb-3">Stocking & Machining Centre</h5>
              <p>
                Gala No. 6, Building No. 183, Indian Corporation,
                <br />
                Mouje Gundavli (Mankoli – Phata),
                <br />
                Dapoda, Taluka – Bhiwandi – 421302.
              </p>
              <p>
                <span className="d-block mb-1">
                  <i
                    className="bi bi-telephone-fill me-2"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="tel:+917977097655"
                    className="text-decoration-none text-white"
                    title="Call Ventura Steels Office"
                  >
                    +91 7977097655
                  </a>
                </span>
              </p>
              <p>
                <span className="d-block mb-1">
                  <SmartEmailLink
                    email="sales@venturasteels.com"
                    label="sales@venturasteels.com"
                    className="text-white"
                  />
                </span>
              </p>
              <p>
                <span className="d-block mb-1">
                  <SmartEmailLink
                    email="enquiry@venturasteels.com"
                    label="enquiry@venturasteels.com"
                    className="text-white"
                  />
                </span>
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="text-center small pb-3">
            © {new Date().getFullYear()} Ventura Alloy and Steels Pvt. Ltd. All
            Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
