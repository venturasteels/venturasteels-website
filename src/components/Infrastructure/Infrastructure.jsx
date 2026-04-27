import React, { useEffect } from "react";
import AOS from "aos";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "aos/dist/aos.css";
import "./Infrastructure.css";

const Infrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const features = [
    "10,000 Tonnes storage capacity",
    "Weighing Scales – 5 tonnes (4 Nos), 10 tonnes (1 No), plus 2 platform scales of 2 tonnes each",
    "Cranes – 1×5T, 4×10T, 2×25T (total 7 cranes)",
    "7 Bandsaw Fully Automatic Servo Cutting Machines – cutting capacity up to 830 MM",
    "3 Fully Automatic Servo Cutting Machines for precise tonnage and inch cutting",
    "New Wagon Type & Angle Cutting Bandsaw Machines – coming this year",
    "Horizontal Bandsaw Machine Sizes – 300MM (3 Nos), 460MM (3 Nos), 650MM (2 Nos), 650×850MM (1 No), 1000×1500MM (1 No)",
    "Vertical Bandsaw Machine Sizes – 600H×2500W MM (3 Nos, Transversal), 600H×6000L MM (1 No, Longitudinal)",
    "Permanent Magnetic Lifters – 1 to 25 Tonnes lifting capacity",
    "CNC Turning Facility – up to 6M length & 600MM dia",
    "MPI Testing Machine for surface and internal flaw detection",
    "Hardness Testing Machines for material quality assurance",
    "Barracks for batch-wise storage and organized inventory management",
    "Material loading capacity: 50–70 Tonnes per hour",
    "Simultaneous loading capacity for 5–7 vehicles",
  ];

  const highlights = [
    { icon: "bi-building", title: "72,000 Sq. Ft. Facility" },
    {
      icon: "bi-gear-wide-connected",
      title: "Advanced Handling Equipment",
    },
    { icon: "bi-box-seam", title: "High-Capacity Storage" },
    { icon: "bi-hammer", title: "Cutting-edge Machining" },
  ];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Infrastructure | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Explore Ventura Alloy & Steels Pvt. Ltd.’s 72,000 sq. ft. infrastructure facility in Bhiwandi, Mumbai. Equipped with advanced machining, CNC cutting, high-capacity storage, cranes, testing systems, and rapid dispatch capabilities for industrial steel solutions."
          />

          <meta
            name="keywords"
            content="steel infrastructure India, steel warehouse Mumbai, Bhiwandi steel facility, CNC machining facility India, steel storage capacity, industrial steel processing, cutting machines steel, bandsaw machines India, Ventura Steels infrastructure"
          />

          <link
            rel="canonical"
            href="https://venturasteels.com/infrastructure"
          />
        </Helmet>
      </HelmetProvider>

      <section className="infra-page">
        {/* HERO VIDEO */}
        <div className="infra-hero">
          <video autoPlay muted loop className="infra-video">
            <source
              src="https://res.cloudinary.com/dgujwx9r9/video/upload/f_auto,q_auto/v1776663566/Website_Infrastructure_Video_pksvcd.mp4"
              type="video/mp4"
            />
          </video>

          <div className="infra-overlay">
            <div
              className="infra-hero-content text-center"
              data-aos="fade-right"
            >
              <h1>Infrastructure</h1>

              <p className="text-center">
                Our Mumbai – Stocking & Machining Center in Bhiwandi spans
                72,000 sq. ft., equipped with advanced handling, cutting, and
                testing facilities to ensure high precision, efficient
                operations, and rapid dispatches.
              </p>
            </div>
          </div>
        </div>

        {/* HEADING */}
        <div className="infra-heading text-center" data-aos="fade-up">
          <h2>Mumbai – Stocking & Machining Center</h2>
          <span></span>
        </div>

        {/* HIGHLIGHTS */}
        <section className="infra-highlights">
          <div className="container infra-highlight-grid">
            {highlights.map((item, i) => (
              <div
                className="infra-highlight-card"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <div className="card-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h5>{item.title}</h5>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="infra-features">
          <div className="container feature-grid">
            {features.map((feature, i) => (
              <div
                className="feature-item"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 40}
              >
                <i className="bi bi-check-circle-fill"></i>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Infrastructure;
