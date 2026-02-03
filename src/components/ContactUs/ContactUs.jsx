import React, { useState, useRef, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import SmartEmailLink from "../SmartEmailLink";
import "./ContactUs.css";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setIsSubmitting(true);
      try {
        // Get reCAPTCHA token
        const recaptchaToken = await grecaptcha.execute(
          import.meta.env.VITE_RECAPTCHA_SITE_KEY,
          { action: "contact_submit" },
        );

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            ...formData,
            createdAt: new Date().toLocaleString(),
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );

        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        // backend MongoDB
        const res = await fetch(`${backendUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            recaptchaToken,
          }),
        });

        if (!res.ok) throw new Error("Backend failed");

        //success modal
        setModalType("success");
        setModalMessage(
          "Thank you for reaching out! Our team will contact you shortly.",
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
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    document.body.classList.add("show-recaptcha");
    return () => {
      document.body.classList.remove("show-recaptcha");
    };
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Contact Ventura Alloy & Steels Pvt. Ltd. | Steel Supplier India
          </title>

          <meta
            name="description"
            content="Contact Ventura Alloy & Steels Pvt. Ltd., a trusted alloy and tool steel supplier in India. Reach us for enquiries, quotations, and industrial steel solutions."
          />

          {/* Keywords are optional now, but kept clean for legacy support */}
          <meta
            name="keywords"
            content="Ventura Steels contact, Ventura Alloy & Steels Pvt Ltd, steel supplier India contact, alloy steel enquiry, tool steel supplier contact, industrial steel supplier India, Ventura Steels Mumbai office"
          />

          <link rel="canonical" href="https://venturasteels.com/contact-us" />
        </Helmet>
      </HelmetProvider>

      <section className="contact-section recaptcha-page">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form">
              <h1>Contact Ventura Alloy & Steels Pvt. Ltd.</h1>
              <h5 className="contact-subtitle">
                Get in touch with Ventura Alloy & Steels Pvt. Ltd., a trusted
                alloy and tool steel supplier in India, for enquiries,
                quotations, and support.
              </h5>
              <p className="visually-hidden">
                Contact Ventura Alloy & Steels Pvt. Ltd. for alloy steel, tool
                steel, hot work steel, and cold work steel enquiries. We are a
                leading industrial steel supplier in India serving B2B customers
                nationwide.
              </p>
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
                          disabled={isSubmitting}
                        />
                      ) : (
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          className={errors.message ? "error-input" : ""}
                          disabled={isSubmitting}
                        ></textarea>
                      )}
                      {errors[field] && (
                        <span className="error-text">{errors[field]}</span>
                      )}
                    </div>
                  ),
                )}
                {/* 🌀 Button with loader */}
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <span className="loader"></span> : "Submit"}
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
                    Product Enquiry – Alloy & Tool Steel
                  </a>
                </div>
              </section>
            </div>

            <div className="contact-info">
              <h3>Ventura Steels Head Office – Mumbai, India</h3>
              <p>
                <i className="bi bi-geo-alt-fill"></i>
                Unit No.1201 & 1202, Ghanshyam Enclave P. Co-Op. Soc. Ltd., New
                Link Road, Near Laljipada Police Station, Kandivali (West),
                Mumbai – 400067.
              </p>
              <p>
                <span>
                  <i
                    className="bi bi-telephone-fill me-2"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="tel:+912235034301 "
                    className="text-decoration-none  px-1 text-muted"
                    title="Call Ventura Steels Office"
                  >
                    022-35034301-21
                  </a>
                </span>
                /
                <span>
                  <a
                    href="tel:+919324959833"
                    className="text-decoration-none  px-1 text-muted"
                    title="Call Ventura Steels Office"
                  >
                    9324959833
                  </a>
                </span>
              </p>
              <p>
                <i className="bi bi-phone-fill"></i>
                <span>
                  <a
                    href="tel:+919819225666"
                    className="text-decoration-none text-muted px-1"
                    title="Call Ventura Steels Office"
                  >
                    +91 9819225666
                  </a>
                </span>
              </p>

              <h3 className="mt-4">
                Stocking & Machining Centre – Bhiwandi, India
              </h3>
              <p>
                <i className="bi bi-geo-alt-fill"></i>
                Gala no 3-4, Building no 200, Indian Oil Corporation, Mouje,
                Gunsavli (Mankoli-Pata), Dapoda Taluk, Bhiwandi-421302
              </p>
              <p>
                Building No. 183, Gala No. 6 | Building No. 183, Gala No. 5 |
                Building No. 181, Gala No. 8, Indian Corporation, Mankoli Naka,
                Bhiwandi – 421302.
              </p>
              <p>
                <i className="bi bi-phone-fill"></i>
                <span>
                  <a
                    href="tel:+917977097655"
                    className="text-decoration-none text-muted px-1"
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
                    className="text-muted"
                  />
                </span>
              </p>
              <p>
                <span className="d-block mb-1">
                  <SmartEmailLink
                    email="enquiry@venturasteels.com"
                    label="enquiry@venturasteels.com"
                    className="text-muted"
                  />
                </span>
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
                  fetchpriority="low"
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
