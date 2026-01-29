import React, { useRef, useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function CareerApplicationModal({
  showForm,
  setShowForm,
  selectedJob,
  jobOpenings,
  isQuickApply,
}) {
  const [formData, setFormData] = useState({
    position: selectedJob?.title || "",
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedJob) {
      setFormData((prev) => ({
        ...prev,
        position: selectedJob.title,
      }));
    }
  }, [selectedJob]);

  //Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //Handle Resume Upload (file size limit 2MB)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: "File size must be less than 2MB",
      }));
    } else {
      setErrors((prev) => ({ ...prev, resume: "" }));
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  //Simple Frontend Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    // if (!formData.resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!validate()) return;

    try {
      setSubmitting(true);
      setSubmitMessage("");

      // Execute reCAPTCHA v3
      const recaptchaToken = await grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        { action: "career_apply" },
      );

      //Prepare FormData (multipart)
      const form = new FormData();
      form.append("position", formData.position);
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("message", formData.message);
      form.append("recaptchaToken", recaptchaToken); // 🔑 IMPORTANT

      if (formData.resume) {
        form.append("resume", formData.resume);
      }

      // Send to backend
      const backendURL = import.meta.env.VITE_BACKEND_URL;

      const response = await axios.post(
        `${backendURL}/api/careers/apply`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      // ❌ Backend rejected (reCAPTCHA / server)
      if (!response.data.success) {
        throw new Error(response.data.message || "Submission failed");
      }

      // Send EmailJS (only if backend success)
      const { position, name, email, phone, message } = formData;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_CAREER_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
        {
          name,
          email,
          phone,
          position,
          message,
          resume_link: response.data.resumeLink || "Uploaded",
          submittedAt: new Date().toLocaleString("en-IN"),
        },
        import.meta.env.VITE_EMAILJS_CAREER_PUBLIC_KEY,
      );

      // ✅ SUCCESS
      setSubmitMessage("✅ Application submitted successfully!");

      setFormData({
        position: selectedJob?.title || "",
        name: "",
        email: "",
        phone: "",
        message: "",
        resume: null,
      });

      // Auto-close modal
      setTimeout(() => {
        setShowForm(false);
        setSubmitMessage("");
      }, 1500);
    } catch (err) {
      console.error("Career submit error:", err);

      setSubmitMessage(
        err?.response?.status === 403
          ? "⚠️ Suspicious activity detected. Please try again."
          : "❌ Failed to submit application. Try again later.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      show={showForm}
      onHide={() => setShowForm(false)}
      size="lg"
      centered
      className="apply-form-modal"
    >
      <Modal.Header closeButton className="apply-form-header">
        <Modal.Title>Job Application</Modal.Title>
      </Modal.Header>

      <Modal.Body className="apply-form-body">
        {submitMessage && (
          <Alert
            variant={submitMessage.startsWith("✅") ? "success" : "danger"}
          >
            {submitMessage}
          </Alert>
        )}

        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* SECTION 1 – POSITION */}
          <div className="form-section">
            <h6 className="section-heading">Position Information</h6>

            {!isQuickApply ? (
              <Form.Control
                type="text"
                name="position"
                value={formData.position}
                readOnly
              />
            ) : (
              <Form.Select
                name="position"
                value={formData.position}
                onChange={handleChange}
                isInvalid={!!errors.position}
              >
                <option value="">Select position</option>
                {jobOpenings.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </Form.Select>
            )}
          </div>

          {/* SECTION 2 – CANDIDATE DETAILS */}
          <div className="form-section">
            <h6 className="section-heading">Candidate Details</h6>

            <div className="two-column">
              <Form.Group>
                <Form.Label>Full Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>

          {/* SECTION 3 – MESSAGE */}
          <div className="form-section">
            <h6 className="section-heading">Additional Information</h6>

            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Brief note (optional)"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* SECTION 4 – DOCUMENT */}
          <div className="form-section">
            <h6 className="section-heading">Resume Upload</h6>

            <Form.Control
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            <small className="text-muted">
              Accepted formats: PDF, DOC, DOCX (Max 2 MB)
            </small>
          </div>

          {/* FOOTER */}
          <div className="form-footer">
            <Button
              className="submit-application-btn"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
