import React from "react";
import { Link } from "react-router-dom";

export default function SAE5160() {
  return (
    <div className="grade-details">
      <h2 className="text-center">SAE 5160</h2>
      <p className="subtitle text-center">
        A chromium spring steel with excellent toughness, fatigue strength, and
        shock resistance, ideal for heavy-duty spring applications.
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
                <td>UK / India</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>AISI / SAE</td>
                <td>DIN / EN</td>
                <td>JIS</td>
                <td>GB</td>
                <td>BS / IS</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>SAE 5160</td>
                <td>1.7176 / 60Cr3</td>
                <td>SUP9</td>
                <td>60Cr3 / 60CrMn</td>
                <td>EN43A / IS 1570 60Cr3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SAE 5160 is a high-quality chromium spring steel known for its
            outstanding combination of toughness, strength, and elasticity. It
            contains around 0.6% carbon and 0.8–1.0% chromium, offering superior
            hardenability and fatigue resistance. It is widely used for making
            heavy-duty coil and leaf springs, torsion bars, and other components
            subjected to cyclic stresses and shock loads. It performs well in
            both quenched & tempered and oil-hardened conditions.
          </p>
        </div>
        <div className="db6-img d-flex">
          <img
            src="/image/Spring Steels/Spring Steel Round Bars.png"
            alt="SAE 5160 Spring Steel"
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
                  <th>Cr</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.56 – 0.64</td>
                  <td>0.15 – 0.35</td>
                  <td>0.75 – 1.00</td>
                  <td>0.70 – 0.90</td>
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
              <td>1050 – 1300 MPa</td>
            </tr>
            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>≈ 900 MPa</td>
            </tr>
            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>≥ 8%</td>
            </tr>
            <tr>
              <td>Reduction of Area, Z</td>
              <td>≈ 40%</td>
            </tr>
            <tr>
              <td>Hardness (Annealed State)</td>
              <td>≤ 229 HB</td>
            </tr>
            <tr>
              <td>Hardness (After Heat Treatment)</td>
              <td>≈ 45 – 52 HRC</td>
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
          <div className="step">Oil Quenching</div>
          <span className="arrow">→</span>
          <div className="step">Tempering</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Normalizing Temperature</th>
                <td>840 – 880 °C</td>
              </tr>
              <tr>
                <th>Hardening Temperature</th>
                <td>830 – 870 °C (oil quench)</td>
              </tr>
              <tr>
                <th>Tempering Range</th>
                <td>400 – 550 °C (depending on strength requirement)</td>
              </tr>
              <tr>
                <th>Resulting Hardness</th>
                <td>≈ 45 – 52 HRC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Commonly used for heavy-duty leaf and coil springs, torsion bars,
          spring washers, and other components subjected to repeated dynamic and
          shock loading in automotive, railways, and industrial machinery.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            SAE 5160 / 60Cr3 spring steel is available in annealed or heat
            treated conditions. Supplied as rounds, flats, or forged bars with
            ultrasonic testing and full test certification on request.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Cutting to size, heat treatment, shot peening, surface finishing,
              and hardness testing are available to meet customer
              specifications.
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
