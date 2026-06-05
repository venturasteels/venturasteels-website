import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import "./Enquiry.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBoxOpen,
  FaThList,
  FaCommentDots,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const productOptions = {
  "Hot Work Steel": [
    "DB6 / DIN 2714 / AISI L6",
    "H13 / AISI H13 / DIN 2344",
    "H11 / AISI H11 / DIN 2343",
    "1.2367 / X38CrMoV5-3",
    // "1.8407",
    // url removed
  ],
  "Cold Work Steel": [
    "D2 / 1.2379 / HCHCR D2",
    "D3 / 1.2080 / HCHCR D3",
    "D5 / Cr12MoV / 1.2601",
    "SAE 52100 / 100Cr6 / 1.3505 / SUJ2",
    "O1 / 1.2510 / OHNS O1 / 100MnCrW4 / SK53",
    "A2 / 1.2363 / X100CrMoV5-1 / SKD12",
    "D6 / X210CrW 12 / 1.2436",
  ],
  "Plastic Mould Steel": [
    "P20 / 1.2311",
    "P20+NI / 1.2738",
    "1.2316 / X36CrMo17",
  ],
  "Alloy Steel": [
    "20MnCr5 / 16MnCr5",
    "SAE 4140 / EN19 / 42CrMo4 / 1.7224 / SCM440",
    "EN24 / SAE 4340 / 34CrNiMo6 / 1.6582",
    "EN36 / 14NiCr14 / 1.5752 / SNCM220",
    "SAE 8620 / 20NiCrMo2-2",
    "SAE 4130 / 25CrMo4 / 1.7218 / SCM430",
    "41Cr4 / 1.7035 / SCr440 / EN18 / 40Cr4B",
    "SAE 1020 / C22E / 1.1151 / S20C ",
    "EN353 / 1.6523",
  ],
  "Carbon Steel": [
    "SAE 1018 / C18E / 1.0402 / S18C / ASTM A29",
    "C45 / EN8 / EN8A / EN8D / EN8M / EN8DM /CK45 / AISI 1045 / 45C8 / 1.0503",
    "ST52.3 / S355J2G3 / S355JR / 1.057 / SM490A",
    "EN1A-L & PB / 11SMnPb30 / 1.0718 / SUM22L / 230M07 PB",
    "EN9 / 1055 / 1.0535 / S55C",
  ],
  "Spring Steel": [
    "EN47 / 50CrV4 / 51CrV4 / AISI 6150 / DIN 8159 / SUP10",
    "SAE 9254 / SUP11A / SUP1",
    "52CrMoV4 / 50Cr4MoV2 / 50Cr4MoV4 / 1.770",
    "55Si7 / 56Si7 / SAE 9255 / 1.5026",
    "SUP9",
  ],
  // "Boron Steel": ["10B21", "15B25", "10B35"],
};

export default function EnquiryForm() {
  const [grades, setGrades] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [gradeShapes, setGradeShapes] = useState({});
  const [confirmGrades, setConfirmGrades] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
    companyname: "",
    userType: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData, selectedGrades, gradeShapes, confirmGrades, touchedFields]);
  useEffect(() => {
    if (formData.userType) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.userType;
        return newErrors;
      });
    }
  }, [formData.userType]);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const validateForm = () => {
    let tempErrors = {};

    if (touchedFields.name && !formData.name.trim())
      tempErrors.name = "Name is required.";
    if (touchedFields.email && !validateEmail(formData.email))
      tempErrors.email = "Invalid email format.";
    if (!formData.companyname.trim())
      tempErrors.companyname = "Company name is required.";
    if (touchedFields.phone && !validatePhone(formData.phone))
      tempErrors.phone = "Enter a valid phone number.";
    if ((touchedFields.userType || submitted) && !formData.userType) {
      tempErrors.userType = "Please select your role.";
    }

    if (touchedFields.product && !formData.product)
      tempErrors.product = "Select a product type.";
    if (touchedFields.message && !formData.message.trim())
      tempErrors.message = "Message cannot be empty.";

    if (selectedGrades.length === 0 && touchedFields.grades)
      tempErrors.grades = "Select at least one grade.";

    if (confirmGrades) {
      selectedGrades.forEach((grade) => {
        if (
          !gradeShapes[grade] &&
          (touchedFields[`shape-${grade}`] || submitted)
        ) {
          tempErrors[grade] = `Select shape for ${grade}`;
        }
      });
    }

    setErrors(tempErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouchedFields((prev) => ({ ...prev, [name]: true }));

    if (name === "product") {
      setGrades(productOptions[value] || []);
      setSelectedGrades([]);
      setGradeShapes({});
      setConfirmGrades(false);
    }
  };

  const handleGradeSelect = (e) => {
    const value = e.target.value;
    if (value && !selectedGrades.includes(value)) {
      setSelectedGrades((prev) => [...prev, value]);
    }
    setTouchedFields((prev) => ({ ...prev, grades: true }));
  };

  const removeGrade = (grade) => {
    setSelectedGrades((prev) => prev.filter((g) => g !== grade));
    setGradeShapes((prev) => {
      const updated = { ...prev };
      delete updated[grade];
      return updated;
    });
  };

  const handleConfirmGrades = () => {
    if (selectedGrades.length === 0) {
      toast.error("Select at least one grade");
      return;
    }
    setConfirmGrades(true);
  };

  const handleShapeChange = (grade, shape) => {
    setGradeShapes((prev) => ({
      ...prev,
      [grade]: {
        shape,
        ...(shape === "Round Bar"
          ? { diameter: "", quantity: "" }
          : { thickness: "", width: "", quantity: "" }),
      },
    }));
    setTouchedFields((prev) => ({ ...prev, [`shape-${grade}`]: true }));
  };

  const handleShapeFieldChange = (grade, field, value) => {
    setGradeShapes((prev) => ({
      ...prev,
      [grade]: {
        ...prev[grade],
        [field]: value,
      },
    }));
  };

  const isFormValid = () => {
    const basicFieldsValid =
      formData.name &&
      validateEmail(formData.email) &&
      validatePhone(formData.phone) &&
      formData.companyname &&
      formData.userType &&
      formData.product &&
      formData.message;

    // 🚫 Grades selected but not confirmed
    if (selectedGrades.length > 0 && !confirmGrades) {
      return false;
    }

    // 🚫 Shapes missing after confirmation
    if (
      confirmGrades &&
      !selectedGrades.every((grade) => gradeShapes[grade]?.shape)
    ) {
      return false;
    }

    return basicFieldsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      toast.error("Security check not ready. Please try again.");
      return;
    }

    setSubmitted(true);
    setTouchedFields({
      name: true,
      email: true,
      companyname: true,
      phone: true,
      product: true,
      message: true,
      grades: true,
    });

    validateForm();

    if (!isFormValid()) {
      toast.error("Please correct errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    const gradesWithSpecs = selectedGrades
      .map((grade) => {
        const specs = gradeShapes[grade];
        if (!specs) return grade;
        if (specs.shape === "Round Bar") {
          return `${grade} - Shape: ${specs.shape}, Diameter: ${specs.diameter}, Quantity: ${specs.quantity}`;
        }
        if (specs.shape === "Block") {
          return `${grade} - Shape: ${specs.shape}, Thickness: ${specs.thickness}, Width: ${specs.width}, Quantity: ${specs.quantity}`;
        }
        return grade;
      })
      .join("\n");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      companyname: formData.companyname,
      userType: formData.userType,
      product: formData.product,
      selectedGrades: gradesWithSpecs,
      message: formData.message,
      createdAt: new Date().toLocaleString(),
    };

    try {
      const captchaToken = await executeRecaptcha("enquiry_submit");

      // Send email first
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ENQUIRY_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // Send to backend
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/enquiry`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            ...formData,
            grades: selectedGrades.map((grade) => ({
              gradeName: grade,
              shape: gradeShapes[grade]?.shape || "",
              diameter: gradeShapes[grade]?.diameter || "",
              thickness: gradeShapes[grade]?.thickness || "",
              width: gradeShapes[grade]?.width || "",
              quantity: gradeShapes[grade]?.quantity || "",
            })),
            captchaToken,
          }),
        },
      );

      if (!response.ok) {
        if (response.status === 429) {
          // Rate limit reached
          setModalType("error");
          setModalMessage(
            "You have submitted too many enquiries in a short time. Please try again later.",
          );
          setShowModal(true);
          return; // stop further execution
        } else {
          throw new Error("Failed to save enquiry");
        }
      }

      // Success modal
      setModalType("success");
      setModalMessage(
        `Thank you! Your enquiry has been submitted successfully.\n\nGrades:\n${gradesWithSpecs}`,
      );
      setShowModal(true);

      resetForm();
    } catch (err) {
      console.error(err);
      setModalType("error");
      setModalMessage(
        "Error submitting enquiry. The email may have been sent. Please try again if needed.",
      );
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      message: "",
      companyname: "",
      userType: "",
    });
    setSelectedGrades([]);
    setGradeShapes({});
    setConfirmGrades(false);
    setTouchedFields({});
    setSubmitted(false);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { selectedGrade, selectedProduct } = location.state;

      // Prefill product dropdown and grades
      setFormData((prev) => ({ ...prev, product: selectedProduct }));
      setGrades(productOptions[selectedProduct] || []);
      setSelectedGrades(selectedGrade ? [selectedGrade] : []);
      setConfirmGrades(true);
    }
  }, [location.state]);

  // Auto-scroll to form
  useEffect(() => {
    if (location.state?.selectedGrade) {
      setTimeout(() => {
        const formSection = document.getElementById("enquiry-form-section");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 500);
    }
  }, [location.state]);

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
          <title>Enquiry | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Send us your enquiry for premium Tool Steels, Alloy Steels, and Engineering Steels. Ventura Alloy & Steels Pvt. Ltd. ensures quick responses and customized solutions to meet your industrial needs."
          />
          <meta
            name="keywords"
            content="
  Ventura Steels Enquiry,
  Ventura steel quote request,
  Steel Enquiry Form,
  Contact steel supplier India,
  steel quotation request,
  alloy steel enquiry,
  tool steel enquiry,
  engineering steel quote,
  steel stockist contact,
  industrial steel solutions,

  special steel enquiry India,
  industrial steel supplier India,
  B2B steel supplier India,
  steel sourcing India,
  custom steel requirements,
  steel procurement solutions,

  alloy steel supplier India,
  tool steel supplier India,
  hot work steel supplier,
  cold work steel supplier,
  plastic mould steel supplier,
  spring steel supplier,
  carbon steel supplier,
  boron steel supplier,
  die steel supplier,

  steel grades enquiry,
  steel round bars supplier,
  steel blocks supplier,
  custom steel dimensions,
  steel quantity enquiry,
  technical steel support,
  steel material sourcing,
  industrial raw material supplier,

  request steel quote online,
  bulk steel order India,
  custom steel specifications,
  certified steel inventory,
  urgent steel sourcing
"
          />
          <link rel="canonical" href="https://venturasteels.com/enquiry" />
        </Helmet>
      </HelmetProvider>

      <div className="container enquiry-container py-5 recaptcha-page">
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-3">Let's Discuss Business</h1>
            <hr className="horizontal-heading mb-5 text-center" />
            <p className="text-muted">
              Searching for dependable alloy steel solutions that meet the
              requirements of your project? We at Ventura Alloy and Steels
              Private Limited are here to help by providing you with certified
              materials, knowledgeable advice, and timely service. Whether you
              have a technical question or need a large order, let's get in
              touch and work together to create something solid.
            </p>
            <ul className="list-unstyled text-muted">
              <li>
                ✔ Fast Reaction - It's time for commercial quotes and technical
                assistance.
              </li>
              <li>
                ✔ Availability of Certified Inventory for Hot Work Tool Steel,
                Cold Work Tool Steel, Alloy Steels, Carbon, and Spring Steels
              </li>
              <li>
                ✔ Tailored sourcing options for urgent deliveries and
                non-standard grades
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src="/image/enquiry-card.jpg"
              alt="Steel Enquiry"
              className="img-fluid"
              style={{ maxHeight: "340px" }}
            />
          </div>
        </div>

        <div
          className="card enquiry-form shadow-lg p-4"
          data-aos="fade-up"
          id="enquiry-form-section"
        >
          <h2 className="text-center">Enquiry Form</h2>
          <hr className="line-hr mb-5 text-center" />

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <InputField
                icon={<FaUser className="form-icon" />}
                name="name"
                value={formData.name}
                placeholder="Full Name"
                error={errors.name}
                handleChange={handleChange}
              />
              <InputField
                icon={<FaEnvelope className="form-icon" />}
                name="email"
                value={formData.email}
                placeholder="Email Address"
                error={errors.email}
                handleChange={handleChange}
              />
              <InputField
                icon={<FaUser className="form-icon" />}
                name="companyname"
                value={formData.companyname}
                placeholder="Company Name"
                error={
                  (touchedFields.companyname || submitted) && errors.companyname
                }
                handleChange={handleChange}
              />

              <InputField
                icon={<FaPhone className="form-icon" />}
                name="phone"
                value={formData.phone}
                placeholder="Contact Number"
                error={errors.phone}
                handleChange={handleChange}
              />
              <div className="mb-3">
                <label className="form-label fs-4">I am a</label>
                <div className="btn-group" role="group" aria-label="User Type">
                  {["Broker", "Owner", "End User"].map((type) => (
                    <React.Fragment key={type}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="userType"
                        id={type}
                        value={type}
                        checked={formData.userType === type}
                        onChange={(e) => {
                          handleChange(e);
                          setTouchedFields((prev) => ({
                            ...prev,
                            userType: true,
                          }));
                        }}
                      />
                      <label
                        className={`btn btn-outline-primary ${
                          formData.userType === type ? "active" : ""
                        }`}
                        htmlFor={type}
                      >
                        {type}
                      </label>
                    </React.Fragment>
                  ))}
                </div>
                {(touchedFields.userType || submitted) && errors.userType && (
                  <div className="invalid-feedback d-block">
                    {errors.userType}
                  </div>
                )}
              </div>

              <SelectField
                icon={<FaBoxOpen className="form-icon" />}
                name="product"
                value={formData.product}
                options={Object.keys(productOptions)}
                placeholder="Select Product Type"
                error={errors.product}
                handleChange={handleChange}
              />
              <SelectField
                icon={<FaThList className="form-icon" />}
                name="grade"
                value=""
                options={grades}
                placeholder="Select Grade"
                error={errors.grades}
                handleChange={handleGradeSelect}
                disabled={confirmGrades}
              />

              {selectedGrades.length > 0 && (
                <div className="col-md-12">
                  <div className="selected-grades mt-3">
                    {selectedGrades.map((grade) => (
                      <div
                        key={grade}
                        className="selected-grade-tag d-flex flex-column gap-2 mb-2 fs-2"
                      >
                        <div className="d-flex align-items-center gap-3 flex-wrap">
                          <span className="badge bg-secondary py-3">
                            {grade}
                          </span>
                          {!confirmGrades && (
                            <button
                              type="button"
                              className="btn btn-sm close-btn"
                              onClick={() => removeGrade(grade)}
                            >
                              &times;
                            </button>
                          )}

                          {confirmGrades && (
                            <select
                              className={`select-shape w-auto ${
                                errors[grade] ? "is-invalid" : ""
                              }`}
                              value={gradeShapes[grade]?.shape || ""}
                              onChange={(e) =>
                                handleShapeChange(grade, e.target.value)
                              }
                            >
                              <option value="" className="text-center">
                                Select Shape
                              </option>
                              <option value="Round Bar" className="text-center">
                                Round Bar
                              </option>
                              <option value="Block" className="text-center">
                                Block
                              </option>
                            </select>
                          )}
                          {errors[grade] && (
                            <div className="invalid-feedback">
                              {errors[grade]}
                            </div>
                          )}
                        </div>

                        {/* Dynamic fields */}
                        <ShapeFields
                          grade={grade}
                          data={gradeShapes[grade]}
                          onChange={handleShapeFieldChange}
                        />
                      </div>
                    ))}

                    {!confirmGrades && (
                      <div className="d-flex align-items-center gap-3 mt-2">
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          onClick={handleConfirmGrades}
                        >
                          OK
                        </button>

                        <small className="text-danger fst-italic confirm-hint">
                          Please confirm grade to select shape & size
                        </small>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="col-12 position-relative">
                <FaCommentDots className="form-icon" />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enquiry Message / Quantity / Custom Specs"
                  className={`form-control ps-5 ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>
              <small className="text-muted fst-italic">
                * All fields are mandatory
              </small>
              <small className="text-muted d-block mt-2 text-center">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
                apply.
              </small>

              <div className="col-12 text-end">
                <button
                  type="submit"
                  className="btn px-4 d-flex align-items-center gap-2"
                  disabled={!isFormValid() || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Submitting...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <InfoModal
        show={showModal}
        type={modalType}
        message={modalMessage}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

const ShapeFields = ({ grade, data, onChange }) => {
  if (!data?.shape) return null;

  if (data.shape === "Round Bar") {
    return (
      <div className="row g-2 mt-2">
        <div className="col-md-5">
          <input
            type="number"
            className="form-control text-center"
            placeholder="Diameter (mm)"
            value={data.diameter}
            onChange={(e) => onChange(grade, "diameter", e.target.value)}
            min="1"
            step="1"
          />
        </div>
        <div className="col-md-5">
          <input
            type="number"
            className="form-control text-center"
            placeholder="Quantity"
            value={data.quantity}
            onChange={(e) => onChange(grade, "quantity", e.target.value)}
            min="1"
            step="1"
          />
        </div>
      </div>
    );
  }

  if (data.shape === "Block") {
    return (
      <div className="row g-2 mt-2">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control text-center"
            placeholder="Thickness (mm)"
            value={data.thickness}
            onChange={(e) => onChange(grade, "thickness", e.target.value)}
            min="1"
            step="1"
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control text-center"
            placeholder="Width (mm)"
            value={data.width}
            onChange={(e) => onChange(grade, "width", e.target.value)}
            min="1"
            step="1"
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control text-center"
            placeholder="Quantity"
            value={data.quantity}
            onChange={(e) => onChange(grade, "quantity", e.target.value)}
            min="1"
            step="1"
          />
        </div>
      </div>
    );
  }

  return null;
};

const InputField = ({
  icon,
  name,
  value,
  placeholder,
  error,
  handleChange,
  required = false,
  type = "text",
}) => (
  <div className="col-md-12 position-relative">
    {icon}

    <input
      type={type}
      name={name}
      value={value}
      placeholder={required && !value ? `${placeholder} *` : placeholder}
      className={`form-control ps-5 ${error ? "is-invalid" : ""}`}
      onChange={handleChange}
      required={required}
    />

    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);
const SelectField = ({
  icon,
  name,
  value,
  options,
  placeholder,
  error,
  handleChange,
  disabled,
}) => (
  <div className="col-md-6 position-relative">
    {icon}
    <select
      name={name}
      className={`form-select ps-5 ${error ? "is-invalid" : ""}`}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

const InfoModal = ({ show, type, message, onClose }) => {
  if (!show) return null;

  const isSuccess = type === "success";

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h2 style={{ color: isSuccess ? "#28a745" : "#dc3545" }}>
          {isSuccess ? "Enquiry Submitted!" : "Submission Failed"}
        </h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
        <button className="btn btn-primary mt-3" onClick={onClose}>
          Close
        </button>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .modal-container {
          background: #fff;
          padding: 2rem;
          border-radius: 10px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};
