import React from "react";
import "./Quality.css";

const Quality = () => {
  return (
    <>
      <section
        className="quality-hero text-white d-flex align-items-center"
        style={{ backgroundImage: "url(/image/ISO-9001-img.jpg)" }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
            Delivering Certified Steel with Precision & Quality
          </h1>
        </div>
      </section>

      <section className="quality-highlights py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <i className="bi bi-shield-check display-4 text-primary"></i>
              <h4 className="fw-semibold mt-3">ISO 9001 Certified</h4>
              <p>Strict adherence to ISO 9001:2015 Quality Standards.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-file-earmark-text display-4 text-success"></i>
              <h4 className="fw-semibold mt-3">Test Certificates</h4>
              <p>Each supply includes detailed chemical & hardness reports.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-tools display-4 text-warning"></i>
              <h4 className="fw-semibold mt-3">Quality Lab</h4>
              <p>
                Advanced testing equipment ensures top-grade steel products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-process py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Quality Process</h2>
          <div className="row text-center">
            <div className="col-md-3">
              <div className="process-step">1</div>
              <h5>Material Sourcing</h5>
              <p>Procured from trusted & reputed mills.</p>
            </div>
            <div className="col-md-3">
              <div className="process-step">2</div>
              <h5>Testing & Verification</h5>
              <p>Hardness & micro-structure tests performed in-house.</p>
            </div>
            <div className="col-md-3">
              <div className="process-step">3</div>
              <h5>Certification</h5>
              <p>QAP approved test reports for every batch.</p>
            </div>
            <div className="col-md-3">
              <div className="process-step">4</div>
              <h5>Final Dispatch</h5>
              <p>Checked & packed as per client’s requirement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="certificates-gallery py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Certification</h2>
          {/* <div className="row g-4">
            {["/image/konsond img.png", "/image/konsond img.png", "/image/konsond img.png", "/image/konsond img.png"].map(
              (img, idx) => (
                <div className="col-md-3" key={idx}>
                  <img
                    src={img}
                    alt="Certificate"
                    className="img-fluid rounded shadow-sm certificate-thumb"
                  />
                </div>
              )
            )}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Quality;
