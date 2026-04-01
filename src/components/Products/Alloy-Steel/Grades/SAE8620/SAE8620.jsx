import { useNavigate } from "react-router-dom";
import React from "react";

export default function AlloySteel8620Family() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 8620 / EN353 / SAE 9310",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  const steps = [
    "Melting / Refining (EAF / LF / VD)",
    "Forging / Rolling",
    "Normalising / Annealing",
    "Carburizing (Case Hardening)",
    "Quenching",
    "Tempering / Finishing",
  ];

  return (
    <div className="grade-details">
      <h2 className="text-center">SAE 8620 / EN353 / SAE 9310</h2>

      <p className="subtitle text-center">
        A family of nickel-chromium-molybdenum case hardening steels designed
        for high fatigue strength, excellent wear resistance, and a tough core,
        widely used in critical transmission and gear applications.
      </p>

      {/* Standards */}
      <div className="alloy-steel-standards-scroll-wrapper mb-4">
        <div className="alloy-steel-standards-inner-scroll">
          <table className="standards-table">
            <tbody>
              <tr>
                <td>
                  <strong>GRADE</strong>
                </td>
                <td>SAE 8620</td>
                <td>EN353</td>
                <td>SAE 9310</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>AISI / SAE</td>
                <td>BS 970</td>
                <td>AISI / SAE</td>
              </tr>
              <tr>
                <td>
                  <strong>TYPE</strong>
                </td>
                <td>Ni-Cr-Mo Steel</td>
                <td>Ni-Cr Steel</td>
                <td>High Ni-Cr-Mo Steel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SAE 8620, EN353, and SAE 9310 are widely used case hardening alloy
            steels. They are engineered to develop a hard, wear-resistant case
            after carburizing while maintaining a tough and ductile core. SAE
            8620 is the most commonly used grade, EN353 offers similar
            properties with European standardization, while SAE 9310 provides
            superior fatigue strength due to higher nickel content.
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
                  <th>Grade</th>
                  <th>C</th>
                  <th>Mn</th>
                  <th>Cr</th>
                  <th>Ni</th>
                  <th>Mo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8620</td>
                  <td>0.18–0.23</td>
                  <td>0.70–0.90</td>
                  <td>0.40–0.60</td>
                  <td>0.40–0.70</td>
                  <td>0.15–0.25</td>
                </tr>
                <tr>
                  <td>EN353</td>
                  <td>0.17–0.23</td>
                  <td>0.50–0.80</td>
                  <td>0.90–1.20</td>
                  <td>0.50–0.80</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>9310</td>
                  <td>0.08–0.13</td>
                  <td>0.40–0.70</td>
                  <td>1.00–1.40</td>
                  <td>3.00–3.50</td>
                  <td>0.08–0.15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mechanical Properties */}
      <section className="steel-properties">
        <h2>Mechanical Properties (After Case Hardening)</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Property</th>
              <th>Typical Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Case Hardness</td>
              <td>58 – 62 HRC</td>
            </tr>
            <tr>
              <td>Core Strength</td>
              <td>600 – 900 MPa</td>
            </tr>
            <tr>
              <td>Core Toughness</td>
              <td>High</td>
            </tr>
            <tr>
              <td>Wear Resistance</td>
              <td>Excellent</td>
            </tr>
            <tr>
              <td>Fatigue Strength</td>
              <td>Very High (9310 highest)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Process */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Heat Treatment</h3>

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
                <th>Carburizing</th>
                <td>880 – 950 °C</td>
              </tr>
              <tr>
                <th>Quenching</th>
                <td>Oil / Gas</td>
              </tr>
              <tr>
                <th>Tempering</th>
                <td>150 – 200 °C</td>
              </tr>
              <tr>
                <th>Case Depth</th>
                <td>0.8 – 1.5 mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Widely used in gears, pinions, camshafts, crankshafts, heavy-duty
          transmission components, aerospace gears (9310), and automotive
          driveline parts requiring high fatigue resistance and wear strength.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            Supplied in annealed condition as round bars, billets, and forged
            components. Available with full mill test certification and
            third-party inspection.
          </p>

          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Carburizing, heat treatment, machining, UT testing, and customized
              solutions as per drawing.
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
