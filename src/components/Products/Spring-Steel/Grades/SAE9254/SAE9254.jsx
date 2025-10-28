import React from "react";
import { Link } from "react-router-dom";

export default function SpringSteelSAE9254() {
  return (
    <div className="grade-details">
      <h2 className="text-center">SAE 9254 / SUP 11A</h2>
      <p className="subtitle text-center">
        Premium silicon–chromium alloy spring steel with exceptional fatigue
        strength, resilience, and resistance to sagging under high stress.
      </p>

      {/* Standards / Equivalents */}
      <div className="hot-work-standards-scroll-wrapper mb-4">
        <div className="hot-work-standards-inner-scroll">
          <table className="standards-table">
            <tbody>
              <tr>
                <td>
                  <strong>Country</strong>
                </td>
                <td>USA</td>
                <td>Japan</td>
                <td>Germany / EU</td>
                <td>Germany / EU</td>
                <td>China</td>
                <td>UK</td>
                <td>International</td>
              </tr>
              <tr>
                <td>
                  <strong>Standard</strong>
                </td>
                <td>AISI / SAE</td>
                <td>JIS</td>
                <td>DIN (W.-Nr.)</td>
                <td>DIN / EN</td>
                <td>GB</td>
                <td>BS</td>
                <td>ISO</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grade Name</strong>
                </td>
                <td>SAE 9254</td>
                <td>SUP11A</td>
                <td>1.8159</td>
                <td>55Si7</td>
                <td>55Si7</td>
                <td>527A80</td>
                <td>55Si7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SAE 9254 / SUP11A is a premium-grade silicon–chromium alloy spring
            steel designed for high-performance automotive suspension springs.
            It offers excellent toughness, fatigue resistance, and minimal sag
            tendency, making it ideal for both cold- and hot-formed springs
            under severe working conditions.
          </p>
        </div>
        <div className="db6-img d-flex">
          <img
            src="/image/Spring Steels/Spring Steel Round Bars.png"
            alt="SAE 9254 Spring Steel"
            width={250}
          />
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="plastic-composition">
        <h3 className="mb-4 text-center">
          Chemical Composition (Typical Analysis, %)
        </h3>
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
                  <th>Cr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.51 – 0.59</td>
                  <td>1.20 – 1.60</td>
                  <td>0.60 – 0.80</td>
                  <td>≤ 0.035</td>
                  <td>≤ 0.040</td>
                  <td>0.60 – 0.80</td>
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
              <th>Condition</th>
              <th>Property</th>
              <th>Typical Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3">Annealed / Soft Condition</td>
              <td>Cold Shearability (+S)</td>
              <td>≤ 280 HB</td>
            </tr>
            <tr>
              <td>Soft Annealed (+A)</td>
              <td>≤ 248 HB</td>
            </tr>
            <tr>
              <td>Spheroidized Annealed (+AC)</td>
              <td>≤ 230 HB</td>
            </tr>

            <tr>
              <td rowSpan="5">Hardened & Tempered (+QT)</td>
              <td>0.2% Proof Stress (Rp0.2)</td>
              <td>≥ 1300 MPa</td>
            </tr>
            <tr>
              <td>Tensile Strength (Rm)</td>
              <td>1450 – 2050 MPa</td>
            </tr>
            <tr>
              <td>Fracture Elongation (A5)</td>
              <td>≥ 6%</td>
            </tr>
            <tr>
              <td>Reduction of Area (Z)</td>
              <td>≥ 25%</td>
            </tr>
            <tr>
              <td>Notch Impact Energy (ISO-V)</td>
              <td>≥ 8 J</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Heat Treatment / Hot Forming */}
      <section className="process-route mx-auto mt-3">
        <h3>Hot Forming & Heat Treatment</h3>
        <div className="heat-card mt-4">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Hot Rolling</th>
                <td>1050 – 850 °C</td>
              </tr>
              <tr>
                <th>Hot Forming to Springs</th>
                <td>940 – 840 °C</td>
              </tr>
              <tr>
                <th>Normalising</th>
                <td>850 – 880 °C / Air Cooled</td>
              </tr>
              <tr>
                <th>Soft Annealing</th>
                <td>640 – 680 °C / Furnace Cooled</td>
              </tr>
              <tr>
                <th>Hardening</th>
                <td>≥ 840 °C / Oil Quench</td>
              </tr>
              <tr>
                <th>Tempering</th>
                <td>375 – 500 °C / Air Cool</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Used for manufacturing high-stressed automotive suspension springs,
          coil springs, valve springs, and other components requiring excellent
          fatigue resistance and dimensional stability under cyclic loads.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            SAE 9254 / SUP11A spring steel is available in annealed and
            quenched–tempered conditions, in bars, wire rods, and coils.
            Customized mechanical testing, shot-peening, and coating services
            can be provided on request.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Cutting to size, ultrasonic inspection, heat treatment, and
              certification to ASTM / JIS / EN standards are available for OEM
              and automotive clients.
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
