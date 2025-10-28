import React from "react";
import { Link } from "react-router-dom";

export default function EN31() {
  return (
    <div className="grade-details">
      <h2 className="text-center">
        EN31 / SAE 52100 / 100Cr6 / SUJ2 / DIN 1.3505
      </h2>
      <p className="subtitle text-center">
        High carbon chromium bearing steel known for exceptional hardness, wear
        resistance, and dimensional stability under high stress.
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
                <td>SAE 52100</td>
                <td>1.3505 / 100Cr6</td>
                <td>SUJ2</td>
                <td>GCr15</td>
                <td>EN31</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            EN31 (equivalent to AISI 52100 or 100Cr6) is a high carbon chromium
            steel widely used for anti-friction bearing components. It combines
            very high hardness, excellent wear resistance, and superior fatigue
            life. The fine grain structure achieved after proper heat treatment
            makes it suitable for rolling-contact applications requiring
            precision and high load capacity. It is typically oil-quenched and
            tempered to achieve the desired mechanical properties.
          </p>
        </div>
        <div className="db6-img d-flex">
          <img
            src="/image/Spring Steels/Spring Steel Round Bars.png"
            alt="EN31 Bearing Steel"
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
                  <td>0.95 – 1.10</td>
                  <td>≤ 0.35</td>
                  <td>0.25 – 0.45</td>
                  <td>1.30 – 1.60</td>
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
        <h2>Mechanical Properties (After Hardening & Tempering)</h2>
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
              <td>≈ 750 – 1000 MPa (annealed)</td>
            </tr>
            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>≈ 400 MPa (annealed)</td>
            </tr>
            <tr>
              <td>Hardness (Annealed)</td>
              <td>≤ 229 HB</td>
            </tr>
            <tr>
              <td>Hardness (After Quenching & Tempering)</td>
              <td>≈ 60 – 66 HRC</td>
            </tr>
            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>≈ 8 – 10%</td>
            </tr>
            <tr>
              <td>Impact Strength (Charpy V-Notch)</td>
              <td>≈ 15 J</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Heat Treatment / Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Heat Treatment</h3>
        <div className="process-flow">
          <div className="step">Melting (EAF / LF / VD / ESR)</div>
          <span className="arrow">→</span>
          <div className="step">Hot Rolling / Forging</div>
          <span className="arrow">→</span>
          <div className="step">Annealing / Spheroidizing</div>
          <span className="arrow">→</span>
          <div className="step">Hardening (Oil Quench)</div>
          <span className="arrow">→</span>
          <div className="step">Tempering</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Annealing Temperature</th>
                <td>800 – 840 °C, slow furnace cool</td>
              </tr>
              <tr>
                <th>Hardening Temperature</th>
                <td>830 – 860 °C (oil quench)</td>
              </tr>
              <tr>
                <th>Tempering Range</th>
                <td>150 – 200 °C (to achieve 60–66 HRC)</td>
              </tr>
              <tr>
                <th>Resulting Hardness</th>
                <td>≈ 60 – 66 HRC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          EN31 / SAE 52100 / 100Cr6 steel is used in manufacturing precision
          bearing components such as balls, rollers, and races. It is also used
          for spindles, gauges, dies, punches, shafts, and high-load mechanical
          parts requiring extreme wear resistance and surface finish.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            EN31 / SAE 52100 / 100Cr6 is supplied in annealed or hardened &
            tempered conditions. Bars, rings, and forged blocks are available
            with test certificates and full traceability.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Precision cutting, ultrasonic testing, hardness testing, and
              machining services can be provided upon request.
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
