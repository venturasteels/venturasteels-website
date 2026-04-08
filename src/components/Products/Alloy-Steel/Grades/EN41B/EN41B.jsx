import { useNavigate } from "react-router-dom";
import React from "react";

export default function AlloySteelEN41B() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "EN 41B / 41CrV4 / AISI 4340 / 40NiCrMo8-4",
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
      <h2 className="text-center">EN 41B / 41CrV4 / AISI 4340 / 40NiCrMo8-4</h2>

      <p className="subtitle text-center">
        A high-strength nickel-chromium-molybdenum alloy steel offering
        exceptional toughness, fatigue resistance, and impact strength for
        critical engineering applications.
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
                <td>Japan</td>
                <td>China</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>AISI / SAE</td>
                <td>DIN / EN</td>
                <td>BS</td>
                <td>JIS</td>
                <td>GB</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>AISI 4340</td>
                <td>EN 1.6511 / 40NiCrMo8-4</td>
                <td>EN24 / EN24T</td>
                <td>SNCM439</td>
                <td>40CrNiMoA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            EN 41B / 41CrV4 / AISI 4340 is a premium alloy steel containing
            nickel, chromium, and molybdenum, designed to deliver superior
            strength, toughness, and fatigue resistance. It maintains excellent
            mechanical properties even at higher section thicknesses and is
            widely used in critical load-bearing and high-stress applications.
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
                  <th>V</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.38 – 0.43</td>
                  <td>0.15 – 0.35</td>
                  <td>0.60 – 0.90</td>
                  <td>0.70 – 1.10</td>
                  <td>1.65 – 2.00</td>
                  <td>0.20 – 0.30</td>
                  <td>0.10 – 0.20</td>
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
              <td>900 – 1200 MPa</td>
            </tr>
            <tr>
              <td>Yield Strength</td>
              <td>≥ 750 MPa</td>
            </tr>
            <tr>
              <td>Elongation</td>
              <td>10 – 14%</td>
            </tr>
            <tr>
              <td>Reduction of Area</td>
              <td>≥ 45%</td>
            </tr>
            <tr>
              <td>Hardness (Annealed)</td>
              <td>≈ 200 – 250 HB</td>
            </tr>
            <tr>
              <td>Hardness (Q&T)</td>
              <td>30 – 55 HRC</td>
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
                <td>830 – 870 °C (Oil)</td>
              </tr>
              <tr>
                <th>Tempering</th>
                <td>450 – 650 °C</td>
              </tr>
              <tr>
                <th>Resulting Hardness</th>
                <td>30 – 55 HRC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Used for aircraft components, heavy-duty shafts, gears, crankshafts,
          oil & gas equipment, high-performance automotive parts, and critical
          engineering applications requiring superior strength and toughness.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            Available in annealed, normalized, and quenched & tempered
            conditions. Supplied as round bars, flats, plates, and forged
            components with full mill test certification.
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
