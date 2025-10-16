import React from "react";
import { Link } from "react-router-dom";
import "./EN47.css";

export default function SpringSteelEN47() {
  return (
    <div className="grade-details">
      <h2 className="text-center">
        EN47 / 50CrV4 / 51CrV4 / AISI 6150 / SUP10 / DIN 1.8159
      </h2>
      <p className="subtitle text-center">
        A chromium-vanadium spring steel with high resilience, fatigue strength,
        and shock resistance.
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
                  <strong>STANDARD </strong>
                </td>
                 <td>AISI / SAE</td>
                <td>DIN / EN </td>
                <td>JIS</td>
                <td>GB</td>
                <td>BS</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>AISI 6150</td>
                <td>1.8159 / EN 47 / 50CrV4 / 51CrV4</td>
                <td>SUP 10</td>
                <td>50CrVA / 51CrV4</td>
                <td>735A51 (or 735A50)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            50CrV4 (also known as 51CrV4) is a chromium–vanadium alloy spring
            steel, commonly referred to as EN47 or DIN 1.8159. It offers very
            good hardenability, high fatigue strength, and excellent resilience.
            The vanadium addition refines grain structure and enhances toughness
            and resistance to overheating. This grade is usually oil-quenched
            and tempered to achieve its characteristic strength and durability,
            making it suitable for cyclically stressed components such as
            springs, torsion bars, and shafts.
          </p>
        </div>
        <div className="db6-img d-flex">
          <img
            src="/image/Spring Steels/50CrV4 Round Bars.png"
            alt="50CrV4 Spring Steel"
            width={250}
          />
          <img
            src="/image/Spring Steels/EN 47 Wire Rod.png"
            alt="50CrV4 Spring Steel"
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
                  <th>V</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.47 – 0.55</td>
                  <td>≤ 0.40</td>
                  <td>0.70 – 1.10</td>
                  <td>0.90 – 1.20</td>
                  <td>0.10 – 0.25</td>
                  <td>≤ 0.025</td>
                  <td>≤ 0.025</td>
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
              <td>1350 – 1650 MPa</td>
            </tr>
            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>≈ 1200 MPa (for small cross-sections)</td>
            </tr>
            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>≥ 6%</td>
            </tr>
            <tr>
              <td>Reduction of Area, Z</td>
              <td>≈ 30%</td>
            </tr>
            <tr>
              <td>Hardness (HB) in Annealed State</td>
              <td>≤ 248 HB</td>
            </tr>
            <tr>
              <td>Impact Energy (Notched)</td>
              <td>≈ 8 J (small cross-section)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Heat Treatment / Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Heat Treatment</h3>
        <div className="process-flow">
          <div className="step">Melting / Refining (EAF / LF / ESR)</div>
          <span className="arrow">→</span>
          <div className="step">Forging / Rolling</div>
          <span className="arrow">→</span>
          <div className="step">Normalizing / Annealing</div>
          <span className="arrow">→</span>
          <div className="step">Final Machining</div>
          <span className="arrow">→</span>
          <div className="step">Quenching & Tempering</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Preheat / Normalizing</th>
                <td>830 – 900 °C</td>
              </tr>
              <tr>
                <th>Quenching Temperature</th>
                <td>≈ 850 °C (oil quench)</td>
              </tr>
              <tr>
                <th>Tempering Range</th>
                <td>400 – 500 °C (based on required strength)</td>
              </tr>
              <tr>
                <th>Resulting Hardness</th>
                <td>≈ 38.5 – 52.5 HRC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Commonly used for coil and leaf springs, torsion bars, shafts, pins,
          automobile suspension parts, hand tools, gears, fasteners, and other
          components subject to repeated stress and shock loads.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            EN47 / 50CrV4 is regularly stocked in annealed and quenched &
            tempered conditions. Custom cut sizes, grinding, heat treatment, and
            quality testing are available upon request.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Cutting to length, forging, shot-peening, surface finishing, and
              ultrasonic testing can be provided as per specification.
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
