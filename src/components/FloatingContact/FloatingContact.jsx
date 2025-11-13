import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaComments,
  FaTimes,
  FaClipboardList,
  FaPhoneAlt,
} from "react-icons/fa";
import "./FloatingContact.css";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="floating-container" data-aos="fade-left">
      <button
        className={`floating-btn main-btn ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Contact Options"
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>

      {/* Floating Menu */}
      <div className={`floating-menu ${open ? "open" : ""}`}>
        {/* Enquiry */}
        <div className="floating-item-wrapper">
          <span className="floating-label">Enquiry</span>
          <a
            href="/enquiry"
            className="floating-item enquiry-f-btn"
            aria-label="Enquiry"
          >
            <FaClipboardList />
          </a>
        </div>

        {/* Contact */}
        <div className="floating-item-wrapper">
          <span className="floating-label">Contact Us</span>
          <a
            href="/contactus"
            className="floating-item contact-btn"
            aria-label="Contact Us"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;
