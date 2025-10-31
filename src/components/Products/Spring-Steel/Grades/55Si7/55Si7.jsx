import React from "react";
import { Link } from "react-router-dom";

export default function SpringSteel55Si7() {
  return (
    <div className="grade-details">
      <h2 className="text-center">
        55Si7 / 56Si7 / SAE 9255 
      </h2>
      <p className="subtitle text-center">
        Silicon–manganese spring steel with high strength, excellent elasticity,
        and superior fatigue resistance — ideal for heavy-duty spring and
        suspension applications.
      </p>

      {/* Standards */}
      <div className="hot-work-standards-scroll-wrapper mb-4">
        <div className="hot-work-standards-inner-scroll">
          <table className="standards-table">
            <tbody>
              <tr>
                <td>
                  <strong>COUNTRY</strong>
                </td>
                <td>USA</td>
                <td>Germany / Europe</td>
                <td>Japan</td>
                <td>China</td>
                <td>UK / India</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>SAE / AISI</td>
                <td>DIN / EN</td>
                <td>JIS</td>
                <td>GB</td>
                <td>BS / IS</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>SAE 9255</td>
                <td>55Si7 / 56Si7</td>
                <td>SUP9 / SUP9A</td>
                <td>55SiMnVB / 55Si7</td>
                <td>250A53 / IS 4454 Gr.2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            55Si7 (also known as SAE 9255 or 56Si7) is a silicon–manganese
            spring steel widely used for manufacturing heavy-duty coil and leaf
            springs. It offers excellent elasticity, toughness, and resistance
            to fatigue, even under dynamic loads. Silicon increases strength and
            hardenability, while manganese enhances toughness and wear
            resistance. It performs well under cyclic stress in automotive,
            railways, and industrial machinery applications.
          </p>
        </div>
        {/* <div className="db6-img d-flex">
          <img
            src="/image/Spring Steels/55Si7 Round Bars.png"
            alt="55Si7 Round Bars"
            width={250}
          />
          <img
            src="/image/Spring Steels/55Si7 Flat Bars.png"
            alt="55Si7 Flat Bars"
            width={250}
          />
        </div> */}
      </section>

      {/* Chemical Composition */}
      <section className="plastic-composition">
        <h3 className="mb-4 text-center">Chemical Composition (Typical, %)</h3>
        <div className="table-data d-flex justify-content-center mx-auto">
          <div className="plastic-chemical-composition plastic-composition-table table-responsive-custom">
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
                  <td>0.52 – 0.60</td>
                  <td>1.50 – 2.00</td>
                  <td>0.60 – 0.90</td>
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
              <td>
                Tensile Strength, R<sub>m</sub>
              </td>
              <td>1200 – 1500 MPa</td>
            </tr>
            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>≈ 900 – 1100 MPa</td>
            </tr>
            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>≥ 10 %</td>
            </tr>
            <tr>
              <td>Reduction of Area, Z</td>
              <td>≈ 45 %</td>
            </tr>
            <tr>
              <td>Hardness (Annealed)</td>
              <td>≤ 230 HB</td>
            </tr>
            <tr>
              <td>Hardness (Q & T)</td>
              <td>≈ 42 – 48 HRC</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Heat Treatment / Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Heat Treatment</h3>
        <div className="process-flow">
          <div className="step">Melting / Refining (EAF / LF / VD)</div>
          <span className="arrow">→</span>
          <div className="step">Forging / Rolling</div>
          <span className="arrow">→</span>
          <div className="step">Normalising / Annealing</div>
          <span className="arrow">→</span>
          <div className="step">Oil Quenching</div>
          <span className="arrow">→</span>
          <div className="step">Tempering</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Normalising Temperature</th>
                <td>830 – 870 °C</td>
              </tr>
              <tr>
                <th>Hardening Temperature</th>
                <td>850 – 880 °C (oil quench)</td>
              </tr>
              <tr>
                <th>Tempering Range</th>
                <td>400 – 520 °C (as per hardness required)</td>
              </tr>
              <tr>
                <th>Resulting Hardness</th>
                <td>≈ 42 – 48 HRC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Extensively used for automotive and railway springs, suspension coils,
          and industrial spring components subjected to heavy shock loads.
          Suitable for leaf springs, coil springs, torsion bars, and similar
          dynamic parts.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            55Si7 / SAE 9255 spring steel is available in annealed or quenched &
            tempered condition in the form of rounds, flats, and coils. Custom
            sizes and heat treatment options are available upon request.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Saw cutting, hardness testing, ultrasonic inspection, and heat
              treatment services offered as per customer specifications.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-block">
        <Link to="/enquiry" className="btn btn-primary">
          Request an Enquiry
        </Link>
        <span>MOQ: 5 Tonnes</span>
      </div>
    </div>
  );
}
