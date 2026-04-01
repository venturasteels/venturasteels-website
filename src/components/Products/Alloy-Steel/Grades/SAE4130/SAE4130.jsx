import { useNavigate } from "react-router-dom";
import React from "react";

export default function AlloySteelSAE4130() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 4130",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  const steps = [
    "Melting / Refining (EAF / LF / VD)",
    "Hot Rolling / Forging",
    "Normalising / Annealing",
    "Quenching (Optional)",
    "Tempering / Finishing",
  ];

  return (
    <div className="grade-details">
      <h2 className="text-center">SAE 4130</h2>

      <p className="subtitle text-center">
        A low-alloy chromium-molybdenum steel offering good strength,
        weldability, and toughness, widely used in structural and engineering
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
                <td>4130</td>
                <td>EN 1.7218 / 25CrMo4</td>
                <td>EN15</td>
                <td>SCM430</td>
                <td>30CrMo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SAE 4130 is a chromium-molybdenum alloy steel with lower carbon
            content compared to 4140, providing excellent weldability and good
            toughness. It can be easily fabricated and is commonly used in
            normalized or quenched and tempered condition. The steel offers a
            good balance between strength, ductility, and impact resistance.
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
                  <th>Mo</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.28 – 0.33</td>
                  <td>0.15 – 0.35</td>
                  <td>0.40 – 0.60</td>
                  <td>0.80 – 1.10</td>
                  <td>0.15 – 0.25</td>
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
        <h2>Mechanical Properties (Normalized / Q&T)</h2>
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
              <td>560 – 760 MPa</td>
            </tr>
            <tr>
              <td>Yield Strength</td>
              <td>≥ 460 MPa</td>
            </tr>
            <tr>
              <td>Elongation</td>
              <td>18 – 25%</td>
            </tr>
            <tr>
              <td>Reduction of Area</td>
              <td>≥ 50%</td>
            </tr>
            <tr>
              <td>Hardness</td>
              <td>≈ 150 – 220 HB</td>
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
                <th>Normalizing</th>
                <td>870 – 900 °C</td>
              </tr>
              <tr>
                <th>Quenching</th>
                <td>840 – 870 °C (Oil/Water)</td>
              </tr>
              <tr>
                <th>Tempering</th>
                <td>400 – 650 °C</td>
              </tr>
              <tr>
                <th>Resulting Hardness</th>
                <td>20 – 35 HRC (typical)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Widely used in aerospace structures, tubing, roll cages, automotive
          components, oil & gas pipelines, pressure vessels, and structural
          engineering parts requiring good strength and weldability.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            Available in annealed, normalized, and quenched & tempered
            conditions. Supplied in round bars, pipes, tubes, plates, and forged
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
      <div className="cta-block">
        <button onClick={handleEnquiryClick} className="btn btn-primary mt-3">
          Enquire Now
        </button>
        <span>MOQ: 5 Tonnes</span>
      </div>
    </div>
  );
}
