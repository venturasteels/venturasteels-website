import React, { useEffect } from "react";
import { useState } from "react";
import "./Quality.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Quality = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Quality | Ventura Alloy & Steels Pvt. Ltd.</title>
        <meta
          name="description"
          content="Ventura Steels follows strict quality standards with ISO 9001:2015 certification, in-house testing facilities, material verification, inspection processes, and comprehensive quality assurance for reliable steel solutions."
        />
        <meta
          name="keywords"
          content="
  Ventura Steels Quality,
  Ventura Quality Assurance,
  Ventura Steel Certification,
  ISO 9001:2015 Certified Steel Supplier,
  ISO certified steel supplier India,
  quality steel supplier India,
  quality assurance steel industry,
  steel quality standards,
  certified steel supplier,

  steel testing,
  alloy steel quality,
  tool steel standards,
  steel inspection,
  steel quality control,
  steel material testing,
  steel certification process,
  steel testing laboratory,
  in-house testing lab,
  steel hardness testing,
  ultrasonic steel testing,
  spectrometer testing,
  mechanical testing steel,
  chemical testing steel,

  steel traceability,
  quality management system,
  steel quality process,
  steel verification process,
  certified material supplier,
  test certificate steel supplier,
  comprehensive test reports,
  steel quality compliance,
  industrial quality assurance,

  reliable steel supplier India,
  precision steel solutions,
  industrial steel supplier,
  quality approved steel products
"
        />
        <link rel="canonical" href="https://venturasteels.com/quality" />
      </Helmet>

      <section className="quality-hero ">
        {/* video-banner */}
        <div className="video-banner-quality">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="bg-video w-100"
            poster="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1776664529/Screenshot_2026-04-20_111443_cofgvp.png"
          >
            <source
              src="https://res.cloudinary.com/dgujwx9r9/video/upload/f_auto,q_auto/v1776663549/Quality_Page_rnpv40.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="overlay-quality">
            <h1 className="text-center">
              Delivering Certified Steel with Precision & Quality
            </h1>
          </div>
        </div>
      </section>

      {/* QUALITY HIGHLIGHTS - PREMIUM B2B STYLE */}
      <section className="quality-premium-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Text Block */}
            <div className="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
              <h2 className="fw-bold mb-3 text-dark-blue">
                Our <span className="text-orange">Quality Promise</span>
              </h2>
              <p className="text-muted mb-4">
                At Ventura Steels, quality is engineered into every process —
                from material selection to final inspection. Our commitment
                ensures precision, reliability, and global standards.
              </p>
              <div className="divider-line"></div>
              <h5 className="mt-4 fw-semibold text-dark">
                Excellence is not an act — it’s our culture.
              </h5>
            </div>

            {/* Right Highlights Panel */}
            <div className="col-lg-7">
              <div className="quality-grid">
                <div
                  className="quality-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-box">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div>
                    <h5>ISO 9001 Certified</h5>
                    <p>
                      Adherence to ISO 9001:2015 ensures total quality
                      management and process reliability.
                    </p>
                  </div>
                </div>

                <div
                  className="quality-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <div>
                    <h5>Comprehensive Test Reports</h5>
                    <p>
                      Each batch comes with detailed chemical, mechanical, and
                      hardness certificates.
                    </p>
                  </div>
                </div>

                <div
                  className="quality-item"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="icon-box">
                    <i className="bi bi-tools"></i>
                  </div>
                  <div>
                    <h5>In-house Testing Lab</h5>
                    <p>
                      Equipped with spectrometers, hardness testers, and
                      ultrasonic inspection systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY PROCESS - PIPELINE STYLE */}
      <section className="quality-pipeline py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="zoom-in">
            <h2 className="fw-bold text-dark-blue">
              Our <span className="text-orange">Quality Process</span>
            </h2>
            <p className="text-muted mt-2">
              Each phase is executed with precision, traceability, and technical
              excellence.
            </p>
            <div className="underline mx-auto mt-3"></div>
          </div>

          <div className="pipeline-container">
            {[
              {
                icon: "bi-box-seam",
                title: "Material Sourcing",
                desc: "Raw materials sourced from reputed and certified steel mills.",
              },
              {
                icon: "bi-clipboard-check",
                title: "Testing & Verification",
                desc: "Comprehensive mechanical, chemical & microstructure testing in-house.",
              },
              {
                icon: "bi-file-earmark-text",
                title: "Certification",
                desc: "Every batch includes full documentation & QAP-approved reports.",
              },
              {
                icon: "bi-truck",
                title: "Final Dispatch",
                desc: "Packed and shipped under controlled supervision to ensure integrity.",
              },
            ].map((item, index) => (
              <div
                className="pipeline-step"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="pipeline-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="pipeline-content">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="pipeline-arrow">
                    <i className="bi bi-arrow-right-short"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE SECTION - SINGLE CERTIFICATE LAYOUT */}
      <section className="certificates-gallery py-5">
        <div className="container">
          <h2
            className="fw-bold mb-4 text-center section-title"
            data-aos="fade-up"
          >
            Our <span className="highlight-text">Certification</span>
          </h2>

          <div className="row align-items-center justify-content-center">
            {/* LEFT: Certificate Image */}
            <div
              className="col-lg-5 col-md-6 text-center"
              data-aos="fade-right"
            >
              <div
                className="certificate-quality-image position-relative mx-auto"
                onClick={() => setShowModal(true)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src="/image/certificates/BSCIC-ISO.png"
                  alt="BSCIC ISO 9001 Certificate"
                  className="img-fluid certificate-quality-img"
                  loading="lazy"
                />

                <div className="certificate-overlay">
                  <i className="bi bi-zoom-in"></i>
                </div>
              </div>
            </div>

            {showModal && (
              <div
                className="modal fade show d-block"
                tabIndex="-1"
                onClick={() => setShowModal(false)}
                style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
              >
                <div
                  className="modal-dialog modal-dialog-centered modal-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-content border-0 bg-transparent">
                    <button
                      type="button"
                      className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                      onClick={() => setShowModal(false)}
                    ></button>

                    <img
                      src="/image/certificates/BSCIC-ISO.png"
                      alt="BSCIC ISO 9001 Certificate"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* RIGHT: Description */}
            <div
              className="col-lg-6 col-md-6 certificate-text"
              data-aos="fade-left"
            >
              <h4 className="fw-semibold text-uppercase mb-3">
                BSCIC ISO 9001:2015 Certified
              </h4>
              <p>
                Ventura Alloy & Steels Pvt. Ltd. is proud to be certified by
                <strong> BSCIC for ISO 9001:2015,</strong> demonstrating our
                commitment to quality management, process consistency, and
                continuous improvement across all operations.
              </p>

              <ul className="certificate-points mt-3">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Certified for Quality Management System
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Ensuring Product Reliability and Customer Satisfaction
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Audited and Approved by BSCIC
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  to="/certifications"
                  className="btn btn-outline-primary rounded-pill px-4 py-2"
                >
                  View Certificate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
