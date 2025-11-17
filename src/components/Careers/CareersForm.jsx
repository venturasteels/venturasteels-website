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
    if (!validate()) return;

    const form = new FormData();
    form.append("position", formData.position);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
    if (formData.resume) form.append("resume", formData.resume);

    try {
      setSubmitting(true);
      setSubmitMessage("");

      const backendURL = import.meta.env.VITE_BACKEND_URL;

      //Send to backend (save file + MongoDB)
      const response = await axios.post(
        `${backendURL}/api/careers/apply`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        const { position, name, email, phone, message } = formData;
        const resumeLink = response.data.resumeLink;

        //Send Email
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_CAREER_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
          {
            name,
            email,
            phone,
            position,
            message,
            submittedAt: new Date().toLocaleString("en-IN"),
            resume_link: resumeLink,
          },
          import.meta.env.VITE_EMAILJS_CAREER_PUBLIC_KEY
        );

        setSubmitMessage("✅ Application submitted successfully!");
        setFormData({
          position: selectedJob?.title || "",
          name: "",
          email: "",
          phone: "",
          message: "",
          resume: null,
        });
      } else {
        setSubmitMessage("⚠️ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting:", err);
      setSubmitMessage("❌ Failed to submit application. Try again later.");
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
      <Modal.Header closeButton>
        <Modal.Title>Application Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          {/* Position */}
          {!isQuickApply ? (
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={formData.position}
                readOnly
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
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
              <Form.Control.Feedback type="invalid">
                {errors.position}
              </Form.Control.Feedback>
            </Form.Group>
          )}

          {/* Name */}
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Phone */}
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Message */}
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Write a short note (optional)"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Resume */}
          <Form.Group className="mb-3">
            <Form.Label>Resume (Max 2 MB)</Form.Label>
            <Form.Control
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              // isInvalid={!!errors.resume}
              isInvalid={false}
            />
            <Form.Control.Feedback type="invalid">
              {errors.resume}
            </Form.Control.Feedback>
          </Form.Group>

          <Modal.Footer>
            <Button variant="success" type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
