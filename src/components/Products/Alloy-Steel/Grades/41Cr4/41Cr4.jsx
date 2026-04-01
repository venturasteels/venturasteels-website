import { useNavigate } from "react-router-dom";
import React from "react";

export default function AlloySteel41Cr4() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "41Cr4 / EN18 / 40Cr4B",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  const steps = [
    "Melting / Refining (EAF / LF / VD)",
    "Hot Rolling / Forging",
    "Normalising / Annealing",
    "Quenching (Oil)",
    "Tempering",
  ];

  return (
    <div className="grade-details">
      <h2 className="text-center">41Cr4 / EN18 / 40Cr4B</h2>

      <p className="subtitle text-center">
        A medium carbon chromium alloy steel offering good strength, hardness,
        and wear resistance, widely used for engineering and automotive
        applications.
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
                <td>Germany / Europe</td>
                <td>UK</td>
                <td>India</td>
                <td>China</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>AISI / SAE</td>
                <td>DIN / EN</td>
                <td>BS</td>
                <td>IS</td>
                <td>GB</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>AISI 5140</td>
                <td>EN 1.7035 / 41Cr4</td>
                <td>EN18</td>
                <td>40Cr4B</td>
                <td>40Cr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            41Cr4 / EN18 is a chromium alloy steel with medium carbon content,
            offering a good balance of strength, toughness, and wear resistance.
            It responds well to heat treatment and can be hardened to achieve
            higher mechanical properties. It is commonly used where moderate
            strength and good fatigue resistance are required.
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
                  <th>Cr</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.38 – 0.45</td>
                  <td>≤ 0.40</td>
                  <td>0.50 – 0.80</td>
                  <td>0.90 – 1.20</td>
                  <td>≤ 0.035</td>
                  <td>≤ 0.035</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mechanical Properties */}
      <section className="steel-properties">
        <h2>Mechanical Properties (Quenched & Tempered)</h2>
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
              <td>800 – 1000 MPa</td>
            </tr>
            <tr>
              <td>Yield Strength</td>
              <td>≥ 600 MPa</td>
            </tr>
            <tr>
              <td>Elongation</td>
              <td>12 – 16%</td>
            </tr>
            <tr>
              <td>Reduction of Area</td>
              <td>≥ 40%</td>
            </tr>
            <tr>
              <td>Hardness (Annealed)</td>
              <td>≈ 200 – 240 HB</td>
            </tr>
            <tr>
              <td>Hardness (Q&T)</td>
              <td>28 – 50 HRC</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Heat-Treatment</h3>

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
                <th>Forging Temperature</th>
                <td>850 – 1150 °C</td>
              </tr>
              <tr>
                <th>Quenching</th>
                <td>820 – 860 °C (Oil)</td>
              </tr>
              <tr>
                <th>Tempering</th>
                <td>400 – 650 °C</td>
              </tr>
              <tr>
                <th>Resulting Hardness</th>
                <td>28 – 50 HRC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Used for shafts, axles, gears, bolts, studs, crankshafts, automotive
          components, and general engineering parts requiring moderate strength
          and wear resistance.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            Available in annealed, normalized, and quenched & tempered
            conditions. Supplied as round bars, flats, and forged components
            with full test certification.
          </p>

          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Cutting, machining, heat treatment, ultrasonic testing, and
              surface finishing available as per customer requirements.
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
