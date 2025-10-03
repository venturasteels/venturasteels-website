import React, { useState, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const ContactUs = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState("");

  const validate = (field, value) => {
    let error = "";
    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        else if (!/^[a-zA-Z\s]+$/.test(value))
          error = "Name must be alphabets only.";
        break;
      case "email":
        if (!value.trim()) error = "Email is required.";
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = "Invalid email format.";
        break;
      case "mobile":
        if (!value.trim()) error = "Mobile number is required.";
        else if (!/^[6-9]\d{9}$/.test(value))
          error = "Enter a valid 10-digit mobile number.";
        break;
      case "message":
        if (!value.trim()) error = "Message cannot be empty.";
        else if (value.length < 10)
          error = "Message should be at least 10 characters.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("success"); 
  const [modalMessage, setModalMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validate(field, formData[field]);
      if (error) validationErrors[field] = error;
    });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            ...formData,
            createdAt: new Date().toLocaleString(),
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        // backend MongoDB
        const res = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Backend failed");

        //success modal
        setModalType("success");
        setModalMessage(
          "Thank you for reaching out! Our team will contact you shortly."
        );
        setShowModal(true);

        setFormData({
          name: "",
          email: "",
          mobile: "",
          company: "",
          message: "",
        });
        setErrors({});
        setStatusMsg("");
      } catch (err) {
        console.error("Submission error:", err);

        //error modal
        setModalType("error");
        setModalMessage("Failed to send message ❌ Please try again later.");
        setShowModal(true);
      }
    } else {
      setStatusMsg("");
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact Us | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Get in touch with Ventura Alloy & Steels Pvt. Ltd. for enquiries, product details, and support. Our team is here to provide reliable solutions for all your steel requirements."
          />
          <meta
            name="keywords"
            content="Ventura Steels Contact, Steel Supplier India, Alloy Steel Enquiry, Tool Steel Contact, Engineering Steel Supplier, Steel Stockist Support, Ventura Alloy & Steels Contact Details"
          />
        </Helmet>
      </HelmetProvider>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form">
              <h2>Contact Us</h2>
              <h5 className="contact-subtitle">
                Feel free to reach out to us for any general enquiries or
                assistance.
              </h5>
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                {["name", "email", "mobile", "company", "message"].map(
                  (field) => (
                    <div className="form-group" key={field}>
                      {field !== "message" ? (
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          placeholder={
                            field === "company"
                              ? "Company Name"
                              : `Your ${
                                  field.charAt(0).toUpperCase() + field.slice(1)
                                }`
                          }
                          value={formData[field]}
                          onChange={handleChange}
                          className={errors[field] ? "error-input" : ""}
                        />
                      ) : (
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          className={errors.message ? "error-input" : ""}
                        ></textarea>
                      )}
                      {errors[field] && (
                        <span className="error-text">{errors[field]}</span>
                      )}
                    </div>
                  )
                )}
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                {statusMsg && <p className="success-text">{statusMsg}</p>}
              </form>

              {/* B2B-style success popup */}
              {showModal && (
                <div className="b2b-modal-overlay">
                  <div
                    className="b2b-modal-content"
                    style={{
                      background:
                        modalType === "success" ? "#a6e0a4" : "#f8b4b4",
                      color: "#000",
                    }}
                  >
                    <h3>
                      {modalType === "success"
                        ? "Submission Successful ✅"
                        : "Submission Failed !"}
                    </h3>
                    <p>{modalMessage}</p>
                    <button
                      className="b2b-close-btn"
                      onClick={() => {
                        setShowModal(false);
                        window.location.reload();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              <section className="product-enquiry-banner">
                <div className="container text-center">
                  <h4>Have a query related to our products?</h4>
                  <p>
                    For detailed product enquiries, please use our dedicated
                    enquiry form.
                  </p>
                  <a href="/enquiry" className="enquiry-btn">
                    Go to Product Enquiry
                  </a>
                </div>
              </section>
            </div>

            <div className="contact-info">
              <h3>Head Office</h3>
              <p>
                <i className="bi bi-geo-alt-fill"></i>
                Unit No.1201 & 1202, Ghanshyam Enclave P. Co-Op. Soc. Ltd., New
                Link Road, Near Laljipada Police Station, Kandivali (West),
                Mumbai – 400067.
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> Tel.: +91 22 2869 3824
                / 9324959833
              </p>
              <p>
                <i className="bi bi-phone-fill"></i> Cell: +91 9819225666 /
                9322266999
              </p>

              <h3 className="mt-4">Stocking & Machining Centre</h3>
              <p>
                <i className="bi bi-geo-alt-fill"></i>
                Gala No. 6, Building No. 183, Indian Corporation, Mouje Gundavli
                (Mankoli – Phata), Dapoda, Taluka – Bhiwandi – 421302.
              </p>
              <p>
                <i className="bi bi-phone-fill"></i> Cell: +91 7977097655
              </p>

              <p>
                <i className="bi bi-envelope-fill"></i> sales@venturasteels.com
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i>{" "}
                enquiry@venturasteels.com
              </p>

              <div className="social-icons">
                <a
                  href="https://www.facebook.com/VenturaSteels"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/venturasteels/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>

              <div className="map-container">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
