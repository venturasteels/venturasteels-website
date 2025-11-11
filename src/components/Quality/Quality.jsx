import React, { useEffect } from "react";
import "./Quality.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Quality = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Quality | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Ventura Alloy & Steels Pvt. Ltd. is ISO 9001:2015 certified, ensuring strict quality control, precision machining, and reliable steel solutions that meet global standards."
          />
          <meta
            name="keywords"
            content="Ventura Steels Quality, ISO 9001:2015 Certified Steel Supplier, Quality Assurance, Steel Testing, Alloy Steel Quality, Tool Steel Standards, Steel Inspection, Reliable Steel Supplier India"
          />
        </Helmet>
      </HelmetProvider>

      <section className="quality-hero ">
        {/* video-banner */}
        <div className="video-banner-quality">
          <video autoPlay loop muted className="bg-video w-100">
            <source src="/videoes/Website Quality Page.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="overlay-quality">
            <h1 className="text-center">
              Delivering Certified Steel with Precision & Quality
            </h1>
          </div>
        </div>
      </section>

      {/* QUALITY HIGHLIGHTS */}
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

      {/* QUALITY PROCESS */}
      <section className="quality-process py-5">
        <div className="container">
          <h2
            className="text-center fw-bold mb-5 section-heading"
            data-aos="zoom-in"
          >
            Our Quality Process
          </h2>
          <div className="row text-center">
            {[
              {
                step: "1",
                title: "Material Sourcing",
                desc: "Procured from trusted & reputed mills.",
              },
              {
                step: "2",
                title: "Testing & Verification",
                desc: "Hardness & micro-structure tests performed in-house.",
              },
              {
                step: "3",
                title: "Certification",
                desc: "QAP approved test reports for every batch.",
              },
              {
                step: "4",
                title: "Final Dispatch",
                desc: "Checked & packed as per client’s requirement.",
              },
            ].map((item, index) => (
              <div
                className="col-md-3"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="process-step">{item.step}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="certificates-gallery py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 section-title" data-aos="zoom-in-up">
            Our Certification
          </h2>
          <div
            className="certificate-wrapper d-flex flex-column flex-md-row align-items-center justify-content-center gap-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="certificate-quality-image position-relative">
              <img
                src="/image/certificates/BSCIC-ISO.png"
                alt="ISO Certificate"
                className="img-fluid shadow-lg rounded-4 certificate-quality-img"
              />
              <div className="certificate-overlay">
                <i className="bi bi-patch-check-fill"></i>
              </div>
            </div>

            <div className="certificate-text text-start">
              <h4 className="fw-semibold mb-3 text-uppercase">
                ISO 9001:2015 Certified
              </h4>
              <p>
                Ventura Alloy & Steels Pvt. Ltd. has been recognized for
                maintaining international quality standards across all
                operations. Our certification reflects our ongoing commitment to
                excellence, reliability, and customer satisfaction in every
                product we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
