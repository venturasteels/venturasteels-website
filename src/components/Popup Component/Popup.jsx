import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./QuotePopup.css";

const QuotePopup = () => {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [hasClosed, setHasClosed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  // Show after 12 sec
  useEffect(() => {
    if (hasClosed) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasClosed]);

  // Scroll trigger
  useEffect(() => {
    const handleScroll = () => {
      if (hasClosed) return;

      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercent > 20) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasClosed]);

  const handleClose = () => {
    setShow(false);
    setHasClosed(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 Stop if validation fails
    if (!validate()) return;

    setLoading(true);

    try {
      // ❌ If recaptcha not loaded
      if (!window.grecaptcha) {
        alert("reCAPTCHA not loaded. Please refresh the page.");
        setLoading(false);
        return;
      }

      // ✅ Generate reCAPTCHA token safely
      const recaptchaToken = await new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, {
              action: "quick_enquiry",
            })
            .then(resolve)
            .catch(reject);
        });
      });

      // ✅ Prepare payload
      const payload = {
        ...formData,
        createdAt: new Date().toLocaleString(),
        recaptchaToken,
      };

      // ============================
      // 1️⃣ Save to Backend (MongoDB)
      // ============================
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/quick-enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!data.success) {
        alert("❌ " + data.message);
        return;
      }

      // ============================
      // 2️⃣ Send Email via EmailJS
      // ============================
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_CAREER_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_CAREER_PUBLIC_KEY,
      );

      // ============================
      // ✅ SUCCESS
      // ============================
      alert("✅ Enquiry submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: "",
      });

      setErrors({});
      setShow(false);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="custom-popup">
      <Modal.Body>
        {/* ❌ CLOSE BUTTON */}
        <button className="custom-close" onClick={handleClose}>
          ×
        </button>

        {/*  ICON */}
        <div className="popup-icon">📄</div>

        {/*  TITLE */}
        <h3 className="popup-title">Ventura Steels Quick Enquiry</h3>

        {/* 💡 SUBTEXT */}
        <p className="popup-subtext">
          Share your requirement and our team will connect with you with
          detailed specifications and best pricing.
        </p>

        {/* 🧾 FORM */}
        <Form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="row">
            <div className="col-6">
              <Form.Control
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="error-text">{errors.name}</small>
              )}
            </div>

            <div className="col-6">
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Mobile Number *"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="row">
            <div className="col-6">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email ID"
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <Form.Control
                type="text"
                name="company"
                placeholder="Company Name"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message */}
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="mt-2"
          />

          {/* Button */}
          <Button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "SUBMIT ENQUIRY"}
          </Button>

          <p className="privacy-text">
            Have detailed requirements? Fill out our complete enquiry form.
          </p>

          <button className="enquiry-btns" onClick={() => navigate("/enquiry")}>
            Go to Enquiry
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default QuotePopup;
