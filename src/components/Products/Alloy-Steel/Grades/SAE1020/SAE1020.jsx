import { useNavigate } from "react-router-dom";
import React from "react";

export default function SAE1020() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 1020",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  const steps = [
    "Melting / Refining (EAF / LF)",
    "Hot Rolling",
    "Normalising / Annealing",
    "Cold Drawing (Optional)",
    "Finishing & Inspection",
  ];

  return (
    <div className="grade-details">
      <h2 className="text-center">SAE 1020</h2>

      <p className="subtitle text-center">
        A low carbon steel offering good machinability, weldability, and
        moderate strength, widely used for general engineering applications.
      </p>

      {/* Standards */}
      <div className="alloy-steel-standards-scroll-wrapper mb-4">
        <div className="alloy-steel-standards-inner-scroll">
          <table className="standards-table">
            <tbody>
              <tr>
                <td>
                  <strong>COUNTRY</strong>
                </td>
                <td>USA</td>
                <td>Germany</td>
                <td>UK</td>
                <td>Japan</td>
                <td>India</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>AISI / SAE</td>
                <td>DIN</td>
                <td>BS</td>
                <td>JIS</td>
                <td>IS</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>1020</td>
                <td>C22 / 1.0402</td>
                <td>070M20 / EN3B</td>
                <td>S20C</td>
                <td>20C8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SAE 1020 is a plain low-carbon steel known for its excellent
            machinability, weldability, and formability. It is commonly supplied
            in as-rolled, normalized, or cold-drawn conditions. Due to its low
            carbon content, it offers good ductility and toughness, making it
            suitable for components that do not require high strength but need
            good structural integrity.
          </p>
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="alloy-steel-composition">
        <h3 className="mb-4 text-center">Chemical Composition (Typical, %)</h3>
        <div className="table-data d-flex justify-content-center">
          <div className="alloy-steel-chemical-composition alloy-steel-composition-table table-responsive-custom">
            <table>
              <thead>
                <tr>
                  <th>Element</th>
                  <th>C</th>
                  <th>Si</th>
                  <th>Mn</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.18 – 0.23</td>
                  <td>≤ 0.35</td>
                  <td>0.30 – 0.60</td>
                  <td>≤ 0.040</td>
                  <td>≤ 0.050</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mechanical Properties */}
      <section className="steel-properties">
        <h2>Mechanical Properties</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Property</th>
              <th>Typical Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tensile Strength</td>
              <td>350 – 450 MPa</td>
            </tr>
            <tr>
              <td>Yield Strength</td>
              <td>≥ 250 MPa</td>
            </tr>
            <tr>
              <td>Elongation</td>
              <td>25 – 30%</td>
            </tr>
            <tr>
              <td>Hardness</td>
              <td>≈ 120 – 180 HB</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Manufacturing</h3>

        <div className="process-flow">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="step">{step}</div>
              {index !== steps.length - 1 && <span className="arrow">→</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Normalizing</th>
                <td>870 – 910 °C</td>
              </tr>
              <tr>
                <th>Annealing</th>
                <td>800 – 870 °C</td>
              </tr>
              <tr>
                <th>Carburizing (Optional)</th>
                <td>880 – 920 °C</td>
              </tr>
              <tr>
                <th>Hardness After Carburizing</th>
                <td>Up to ~60 HRC (surface)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Used in shafts, pins, mild-duty gears, automotive components, general
          engineering parts, structural applications, and components requiring
          good machinability and weldability.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            Available in as-rolled, normalized, annealed, and cold-drawn
            conditions. Supplied in round bars, flats, and sections with full
            mill test certification.
          </p>

          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Cutting, machining, carburizing, heat treatment, ultrasonic
              testing, and surface finishing available as per customer
              requirement.
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
