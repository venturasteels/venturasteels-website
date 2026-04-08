import { useNavigate } from "react-router-dom";
import React from "react";

export default function AlloySteelEN36C() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "EN36C",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  const steps = [
    "Melting / Refining (EAF / LF / VD)",
    "Forging / Rolling",
    "Normalising / Annealing",
    "Carburizing (Case Hardening)",
    "Quenching & Tempering",
    "Finishing / Inspection",
  ];

  return (
    <div className="grade-details">
      <h2 className="text-center">EN36C</h2>

      <p className="subtitle text-center">
        A nickel-chromium alloy steel designed for case hardening applications,
        offering a tough core with a hard wear-resistant surface.
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
                <td>UK</td>
                <td>Europe</td>
                <td>USA</td>
                <td>Japan</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>BS 970</td>
                <td>EN / DIN</td>
                <td>AISI</td>
                <td>JIS</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>EN36C</td>
                <td>1.6511 / 36CrNiMo4 (close)</td>
                <td>~ 9310 (approx)</td>
                <td>SNCM220</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            EN36C is a premium case hardening alloy steel containing nickel and
            chromium. It is specifically designed to achieve a hard
            wear-resistant surface through carburizing while maintaining a tough
            and ductile core. This makes it ideal for components subjected to
            high fatigue and shock loads.
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
                  <th>Ni</th>
                  <th>Mo</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.12 – 0.18</td>
                  <td>0.10 – 0.35</td>
                  <td>0.40 – 0.70</td>
                  <td>0.60 – 1.00</td>
                  <td>3.00 – 3.75</td>
                  <td>0.10 – 0.25</td>
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
        <h2>Mechanical Properties (Core - After Heat Treatment)</h2>
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
              <td>850 – 1000 MPa</td>
            </tr>
            <tr>
              <td>Yield Strength</td>
              <td>≥ 650 MPa</td>
            </tr>
            <tr>
              <td>Elongation</td>
              <td>12 – 18%</td>
            </tr>
            <tr>
              <td>Hardness (Core)</td>
              <td>250 – 350 HB</td>
            </tr>
            <tr>
              <td>Case Hardness</td>
              <td>58 – 62 HRC</td>
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
                <th>Carburizing</th>
                <td>900 – 950 °C</td>
              </tr>
              <tr>
                <th>Quenching</th>
                <td>Oil / Gas Quench</td>
              </tr>
              <tr>
                <th>Tempering</th>
                <td>150 – 200 °C</td>
              </tr>
              <tr>
                <th>Case Depth</th>
                <td>0.8 – 1.5 mm (typical)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Used in gears, shafts, pinions, camshafts, heavy-duty transmission
          components, aerospace parts, and high-performance automotive parts
          where a hard surface and tough core are essential.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            Available in forged bars, rounds, and billets in annealed condition.
            Supplied with full traceability and third-party inspection if
            required.
          </p>

          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Carburizing, heat treatment, rough/finish machining, UT testing,
              and customized processing available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-block d-flex gap-3 align-items-center flex-wrap">
        <button onClick={handleEnquiryClick} className="btn btn-primary">
          Enquire Now
        </button>

        <button
          className=" weight-btn"
          data-bs-toggle="modal"
          data-bs-target="#weightModal"
        >
          Calculate Weight
        </button>

        <span>MOQ: 15 Tonnes</span>
      </div>
    </div>
  );
}
