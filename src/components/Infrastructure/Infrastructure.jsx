import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Infrastructure.css";

const Infrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="infrastructure-container pb-5">
        {/* Hero Banner with Overlay */}
        <div className="bg-overlay-section">
          <div className="overlay-content text-white">
            <h1 className="display-4 fw-bold mb-4" data-aos="fade-down">
              Infrastructure
            </h1>
            <p className="lead mx-auto fw-bold" style={{ maxWidth: "800px"}} data-aos="fade-up">
              Ventura Alloy & Steels' 12,000 sq. ft. facility is designed for efficiency,
              reliability, and future scalability, ensuring smooth operations and timely deliveries across India.
            </p>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center text-heading mt-5" data-aos="fade-up">
          <h2 className="fw-bold">Infrastructure Highlights</h2>
          <hr />
          <p>Reliable. Scalable. Ready for the Future.</p>
        </div>

        {/* Highlight Cards */}
        <div className="container infra-highlights mt-5">
          {[
            "Stringent Quality Control",
            "Efficient Stock Management",
            "Swift Dispatch Logistics",
            "Custom Batch Segregation",
          ].map((item, idx) => (
            <div className="infra-card" key={idx} data-aos="zoom-in">
              <i className="bi bi-check2-circle"></i>
              <h5 className="fw-bold">{item}</h5>
            </div>
          ))}
        </div>

        {/* Feature List Grid */}
        <div className="container feature-container mt-5">
          {[
            "10,000 tonne storage capacity",
            "Multiple Weighing Scales: 3, 5, 10 Tonnes",
            "MPI Testing Machine",
            "Two EOT Cranes (5T & 25T)",
            "Fully Automatic Bandsaw Machines (250-800mm)",
            "Hardness Testing Machines",
            "Permanent Magnetic Lifters (1–25T)",
            "Dedicated barracks for batch-wise stock segregation",
          ].map((feature, i) => (
            <div className="features" key={i} data-aos="fade-up">
              <i className="bi bi-tools"></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
