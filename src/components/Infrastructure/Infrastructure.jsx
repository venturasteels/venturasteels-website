import React, { useEffect } from "react";
import AOS from "aos";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "aos/dist/aos.css";
import "./Infrastructure.css";

const Infrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    "10,000 Tonnes storage capacity",
    "Weighing Scales – 5 tonnes (4 Nos), 10 tonnes (1 No), plus 2 platform scales of 2 tonnes each",
    "7 Cranes – 1×5T, 4×10T, 2×25T",
    "7 Bandsaw Fully Automatic Servo Cutting Machines (250 / 400 / 450 / 600 / 700 / 830 MM capacity)",
    "Permanent Magnetic Lifters – 1 to 25 Tonnes",
    "Cutting facility in Tonnes and Inches – 3 Fully Automatic Servo cutting machines",
    "New Bandsaw Fully Automatic Servo Cutting Machines (Wagon type & Angle cutting) coming this year",
    "Horizontal Bandsaw Machine Sizes – 300MM (3), 460MM (3), 650MM (2), 650×850MM (1), 1000×1500MM (1)",
    "Vertical Bandsaw Machine Sizes – 600H×2500W MM (3, Transversal), 600H×6000L MM (Longitudinal)",
    "CNC Turning Facility up to 6M length & 600MM dia",
    "MPI Testing Machine",
    "Hardness Testing Machines",
    "Barracks for batch-wise storage",
    "Material loading capacity per hour: 50–70 Tonnes",
    "5–7 vehicles can be loaded at a time",
  ];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Infrastructure | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Discover Ventura Alloy & Steels' advanced infrastructure with modern stocking facilities in Mumbai and Rajkot, equipped with machining centers to deliver precision-engineered steel solutions."
          />
          <meta
            name="keywords"
            content="Ventura Steels Infrastructure, Steel Stocking Centers Mumbai, Steel Machining Bhiwandi, Alloy Steel Facilities, Tool Steel Processing, Steel Cutting Services, Steel Distribution India"
          />
        </Helmet>
      </HelmetProvider>

      <section className="infrastructure-container pb-5">
        {/* Video Banner */}
        <div className="video-banner-infrastructure">
          <video autoPlay loop muted className="bg-video w-100">
            <source
              src="/videoes/Website Infrastructure Page.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="overlay-infrastructure">
            <h1 className="text-center">Infrastructure</h1>
            <p className="text-center">
              Our Mumbai – Stocking & Machining Center in Bhiwandi spans 60,000
              sq. ft., equipped with advanced handling, cutting, and testing
              facilities to ensure high precision, efficient operations, and
              rapid dispatches.
            </p>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center text-heading mt-5" data-aos="fade-up">
          <h2 className="fw-bold">Mumbai – Stocking & Machining Center</h2>
          <hr />
          <p></p>
        </div>

        {/* Highlights */}
        <section className="infrReliable. Scalable. Ready for the Future.a-highlights-section py-5">
          <div className="container infra-highlights">
            {[
              { icon: "bi-building", title: "60,000 Sq. Ft. Facility" },
              {
                icon: "bi-gear-wide-connected",
                title: "Advanced Handling Equipment",
              },
              { icon: "bi-box-seam", title: "High-Capacity Storage" },
              { icon: "bi-hammer", title: "Cutting-edge Machining" },
            ].map((item, idx) => (
              <div
                className="infra-card"
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                <i className={`bi ${item.icon}`}></i>
                <h5 className="fw-bold mt-3">{item.title}</h5>
              </div>
            ))}
          </div>
        </section>

        {/* Feature List */}
        <section className="feature-list-section py-5">
          <div className="container feature-container">
            {features.map((feature, i) => (
              <div
                className="features"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <i className="bi bi-check-circle-fill"></i>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Infrastructure;
