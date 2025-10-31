import React from "react";
import { Link } from "react-router-dom";

export default function SpringSteel52CrMoV4() {
  return (
    <div className="grade-details">
      <h2 className="text-center">52CrMoV4 / 50Cr4MoV2 </h2>
      <p className="subtitle text-center">
        A chromium-molybdenum-vanadium spring steel designed for high strength,
        excellent fatigue resistance and heavy-duty spring applications.
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
                <td>France</td>
                <td>China</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>SAE / AISI</td>
                <td>DIN / EN</td>
                <td>AFNOR</td>
                <td>GB</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>AISI 4150 / 6150</td>
                <td>EN 1.7701 / 52CrMoV4</td>
                <td>50CVA4 / 50C4V2 / 51CDV4</td>
                <td>50Cr4MoV2 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            52CrMoV4 is a high-performance alloy spring steel including
            chromium, molybdenum and vanadium to provide enhanced hardenability,
            toughness and fatigue strength. It is typically used for demanding
            spring applications (leaf springs, torsion bars, automotive
            heavy-duty springs) where a combination of strength, resilience and
            repeated cyclic loading are required. It is quenched and tempered to
            achieve a high strength state while maintaining good fatigue
            resistance.
          </p>
        </div>
        {/* <div className="db6-img d-flex">
          <img
            src="/image/Spring Steels/52CrMoV4 Round Bar.png"
            alt="52CrMoV4 Spring Steel"
            width={250}
          />
          <img
            src="/image/Spring Steels/50Cr4MoV2 Leaf Spring.png"
            alt="50Cr4MoV2 Spring Steel"
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
                  <th>Cr</th>
                  <th>Mo</th>
                  <th>V</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.48 – 0.56</td>
                  <td>≤ 0.40</td>
                  <td>0.70 – 1.10</td>
                  <td>0.90 – 1.20</td>
                  <td>0.15 – 0.30</td>
                  <td>0.10 – 0.20</td>
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
              <td>1450 – 1750 MPa (typical) </td>
            </tr>
            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>≈ 1300 MPa (minimum) </td>
            </tr>
            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>≥ 6%</td>
            </tr>
            <tr>
              <td>Reduction of Area, Z</td>
              <td>≈ 35% (minimum)</td>
            </tr>
            <tr>
              <td>Hardness (Annealed State)</td>
              <td>≤ 248 HB (soft annealed) </td>
            </tr>
            <tr>
              <td>Core Hardness (Quenched & Tempered)</td>
              <td>≈ 50–57 HRC (depending on section and treatment) </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Heat Treatment / Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Heat-Treatment</h3>
        <div className="process-flow">
          <div className="step">Melting / Refining (EAF / LF / VD)</div>
          <span className="arrow">→</span>
          <div className="step">Hot Rolling / Forging</div>
          <span className="arrow">→</span>
          <div className="step">Normalising / Annealing</div>
          <span className="arrow">→</span>
          <div className="step">Quenching (Oil)</div>
          <span className="arrow">→</span>
          <div classms="step">Tempering</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Quenching Temperature</th>
                <td>≈ 830 – 870 °C (oil quench)</td>
              </tr>
              <tr>
                <th>Tempering Range</th>
                <td>400 – 460 °C (depends on strength requirement)</td>
              </tr>
              <tr>
                <th>Resulting Hardness</th>
                <td>≈ 50 – 57 HRC (for typical section) </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Commonly used for leaf springs, coil springs, torsion bars,
          stabilisers, heavy-duty automotive springs, industrial large springs
          and other components subject to high dynamic stresses, shock loading
          and vibration.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            52CrMoV4 / 50Cr4MoV2 spring steel is available in annealed,
            normalised, or quenched & tempered conditions. Bars, flats, coils
            and forged blanks can be supplied with full test-certification.
            Custom processing (cutting to length, heat-treatment, shot-peening,
            surface finishing) is available on request.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Cutting to size, surface finishing, ultrasonics, hardness &
              tensile testing are available per customer specification.
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
