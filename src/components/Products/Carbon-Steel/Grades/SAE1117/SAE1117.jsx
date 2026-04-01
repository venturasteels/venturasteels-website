import { useNavigate } from "react-router-dom";

export default function CarbonSteel1117() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 1117 / ASTM A108",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">SAE 1117 / ASTM A108</h2>

      <p className="subtitle text-center">
        SAE 1117 / ASTM A108 is a resulfurized free-machining carbon steel known
        for its excellent machinability and good strength. The sulfur content
        improves chip breaking during machining, making this grade suitable for
        high-volume machining operations and precision components.
      </p>

      {/* Standards / Equivalents */}
      <div className="carbon-steel-standards-scroll-wrapper mb-4">
        <div className="carbon-steel-standards-inner-scroll">
          <table className="standards-table">
            <tbody>
              <tr>
                <td>
                  <strong>COUNTRY</strong>
                </td>
                <td>USA</td>
                <td>UK</td>
                <td>Europe</td>
                <td>Japan</td>
              </tr>

              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>SAE / ASTM</td>
                <td>BS</td>
                <td>EN</td>
                <td>JIS</td>
              </tr>

              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>SAE 1117</td>
                <td>230M07</td>
                <td>11SMn30</td>
                <td>SUM22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SAE 1117 is a free machining carbon steel containing increased
            sulfur content to improve machinability. This allows for faster
            machining speeds, better surface finish and reduced tool wear.
          </p>

          <p>
            The grade is widely used for mass-produced components where
            machining efficiency is critical, such as fasteners, fittings,
            shafts and precision mechanical parts.
          </p>
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="carbon-steel-composition">
        <h3 className="mb-4 text-center">Chemical Composition (Typical, %)</h3>

        <div className="table-data d-flex justify-content-center">
          <div className="carbon-steel-chemical-composition carbon-steel-composition-table table-responsive-custom">
            <table>
              <thead>
                <tr>
                  <th>Element</th>
                  <th>C</th>
                  <th>Mn</th>
                  <th>Si</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.14 – 0.20</td>
                  <td>1.00 – 1.30</td>
                  <td>0.15 – 0.30</td>
                  <td>≤ 0.040</td>
                  <td>0.08 – 0.13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mechanical Properties */}
      <section className="steel-properties">
        <h2>Mechanical Properties (Typical)</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Property</th>
              <th>Typical Value / Range</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tensile Strength</td>
              <td>440 – 580 MPa</td>
            </tr>

            <tr>
              <td>Yield Strength</td>
              <td>≈ 300 MPa</td>
            </tr>

            <tr>
              <td>Elongation</td>
              <td>≈ 15%</td>
            </tr>

            <tr>
              <td>Hardness (Annealed)</td>
              <td>≈ 120 – 170 HB</td>
            </tr>

            <tr>
              <td>Hardness (Cold Drawn)</td>
              <td>≈ 170 – 220 HB</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Manufacturing Route</h3>

        <div className="process-flow">
          <div className="step">Melting / Refining (EAF / LF)</div>
          <span className="arrow">→</span>
          <div className="step">Continuous Casting</div>
          <span className="arrow">→</span>
          <div className="step">Hot Rolling</div>
          <span className="arrow">→</span>
          <div className="step">Cold Drawing (Optional)</div>
          <span className="arrow">→</span>
          <div className="step">Straightening & Inspection</div>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>

        <p>
          SAE 1117 / ASTM A108 carbon steel is widely used for precision
          machined components including bolts, nuts, studs, shafts, bushings,
          fittings, automotive parts and general engineering components
          requiring excellent machinability.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>

          <p>
            Ventura Steels supplies SAE 1117 / ASTM A108 carbon steel in hot
            rolled and cold drawn conditions. The grade is available in round
            bars, hex bars and flats with mill test certificates.
          </p>

          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>

            <p>
              We also source forgings as per the required grades, size, and supply specifications. Additionally, we have an in-house cutting facility to meet customized requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-block">
        <button onClick={handleEnquiryClick} className="btn btn-primary mt-3">
          Enquire Now
        </button>

        <span>MOQ: 5 Tonnes</span>
      </div>
    </div>
  );
}
