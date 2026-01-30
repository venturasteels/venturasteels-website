import React from "react";
import SmartEmailLink from "../SmartEmailLink";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* footer-section */}
      <footer className="site-footer text-white pt-5">
        <div className="footer-cont">
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
                  <a href="/products" className="footer-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/products/hot-work-steel" className="footer-link">
                    Hot Work Steel
                  </a>
                </li>
                <li>
                  <a href="/products/cold-work-steel" className="footer-link">
                    Cold Work Steel
                  </a>
                </li>
                <li>
                  <a
                    href="/products/plastic-mould-steel"
                    className="footer-link"
                  >
                    Plastic Mould Steel
                  </a>
                </li>
                <li>
                  <a href="/products/spring-steel" className="footer-link">
                    Spring Steel
                  </a>
                </li>
                <li>
                  <a href="/products/alloy-steel" className="footer-link">
                    Alloy Steel
                  </a>
                </li>
                <li>
                  <a href="/products/carbon-steel" className="footer-link">
                    Carbon Steel
                  </a>
                </li>
                <li>
                  <a href="/products/boron-steel" className="footer-link">
                    Boron Steel
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact - Head Office */}
            <div className="col-md-3">
              <h5 className="mb-3">Head Office</h5>
              <div className="footer-map mb-3">

                 <div className="map-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4522814447635!2d72.8320894!3d19.2030152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c5f6f3b5db%3A0x165eb9f6f4e0b093!2sVENTURA%20ALLOY%20AND%20STEELS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1690467325220!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ventura Steels Location"
                ></iframe>
              </div>
              </div>

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
                <i className="bi bi-geo-alt-fill"></i>
                Gala no 3-4, Building no 200, Indian Oil Corporation, Mouje,
                Gundavli (Mankoli-Pata), Dapoda Taluk, Bhiwandi-421302
              </p>
              <p>
                Building No. 183, Gala No. 6 | Building No. 183, Gala No. 5 |
                Building No. 181, Gala No. 8, Indian Corporation, Mankoli Naka,
                Bhiwandi – 421302.
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
