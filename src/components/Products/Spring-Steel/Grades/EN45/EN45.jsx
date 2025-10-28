import React from "react";
import { Link } from "react-router-dom";

export default function EN45() {
  return (
    <div className="grade-details">
      <h2 className="text-center">
        EN45 / 60Si7 / SAE 9260 / SUP6 / DIN 1.7108
      </h2>
      <p className="subtitle text-center">
        A silicon-manganese spring steel offering excellent resilience, fatigue
        strength, and shock resistance for heavy-duty applications.
      </p>

      {/* Standards / Equivalents */}
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
                <td>UK</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>AISI / SAE</td>
                <td>DIN / EN</td>
                <td>JIS</td>
                <td>GB</td>
                <td>BS</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>SAE 9260</td>
                <td>1.7108 / 60Si7</td>
                <td>SUP6</td>
                <td>60Si2Mn</td>
                <td>EN45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            EN45 (also known as 60Si7 or SAE 9260) is a high-grade
            silicon–manganese spring steel known for its high resilience,
            fatigue strength, and ability to withstand repeated shock loading.
            The addition of silicon improves elasticity and toughness, making it
            particularly suitable for large, dynamically loaded springs. It is
            typically supplied in the oil-quenched and tempered condition and
            performs exceptionally well in automotive and industrial spring
            applications.
          </p>
        </div>
        <div className="db6-img d-flex">
          <img
            src="/image/Spring Steels/Spring Steel Round Bars.png"
            alt="EN45 Spring Steel"
            width={250}
          />
        </div>
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
                  <td>0.55 – 0.65</td>
                  <td>1.50 – 2.00</td>
                  <td>0.80 – 1.00</td>
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
              <td>1100 – 1400 MPa</td>
            </tr>
            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>≈ 950 MPa</td>
            </tr>
            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>≥ 8%</td>
            </tr>
            <tr>
              <td>Reduction of Area, Z</td>
              <td>≈ 35%</td>
            </tr>
            <tr>
              <td>Hardness (HB) in Annealed State</td>
              <td>≤ 229 HB</td>
            </tr>
            <tr>
              <td>Impact Energy (Notched)</td>
              <td>≈ 12 J</td>
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
          <div className="step">Hot Rolling / Forging</div>
          <span className="arrow">→</span>
          <div className="step">Normalizing</div>
          <span className="arrow">→</span>
          <div className="step">Quenching (Oil)</div>
          <span className="arrow">→</span>
          <div className="step">Tempering</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Normalizing Temperature</th>
                <td>830 – 880 °C</td>
              </tr>
              <tr>
                <th>Quenching Temperature</th>
                <td>≈ 870 °C (oil quench)</td>
              </tr>
              <tr>
                <th>Tempering Range</th>
                <td>400 – 520 °C</td>
              </tr>
              <tr>
                <th>Resulting Hardness</th>
                <td>≈ 38 – 48 HRC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Widely used for automotive leaf and coil springs, suspension systems,
          torsion bars, railway springs, hand tools, and other components
          subjected to continuous shock and dynamic stresses.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            EN45 / 60Si7 / SAE 9260 spring steel is available in annealed or
            quenched & tempered conditions. Bars, flats, and coils can be
            supplied in custom dimensions with full test certification.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Cutting to size, shot peening, surface finishing, hardness
              testing, and ultrasonic inspection are available on request.
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
