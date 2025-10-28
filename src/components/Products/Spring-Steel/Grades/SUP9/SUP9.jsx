import React from "react";
import { Link } from "react-router-dom";

export default function SUP9() {
  return (
    <div className="grade-details">
      <h2 className="text-center">SUP9</h2>
      <p className="subtitle text-center">
        Durable chromium spring steel engineered for high-load automotive and
        industrial springs.
      </p>

      {/* Standards*/}
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
                <td>China</td>
                <td>Japan</td>
                <td>France</td>
                <td>UK</td>
                <td>ISO</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>AISI / SAE</td>
                <td>DIN / WNr</td>
                <td>GB</td>
                <td>JIS</td>
                <td>AFNOR</td>
                <td>BS</td>
                <td>ISO</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>5155 / G51550</td>
                <td>55Cr3 / 1.7176</td>
                <td>55CrMnA</td>
                <td>SUP9</td>
                <td>55C3</td>
                <td>~527A60</td>
                <td>55Cr3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SUP9 Spring Steel is a high-quality cold work alloy steel belonging
            to the high-carbon chromium spring steel family. It is known for its
            excellent hardenability, toughness, and resistance to fatigue and
            decarburization. Commonly supplied in annealed or quenched and
            tempered conditions (28–34 HRC), it is widely used for heavy vehicle
            and industrial springs requiring durability under high load.
          </p>
        </div>
        <div className="db6-img d-flex">
          <img
            src="/image/Spring Steels/SUP 9 Springs.png"
            alt="SUP9 Spring Steel Round Bar"
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
                  <td>0.52 – 0.60</td>
                  <td>0.15 – 0.35</td>
                  <td>0.65 – 0.95</td>
                  <td>≤ 0.030</td>
                  <td>≤ 0.035</td>
                  <td>0.65 – 0.95</td>
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
              <th>Property</th>
              <th>Typical Value / Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tensile Strength (MPa)</td>
              <td>≥ 1225 (Approx. 125 kgf/mm²)</td>
            </tr>
            <tr>
              <td>Yield Strength (MPa)</td>
              <td>≥ 1080 (Approx. 110 kgf/mm²)</td>
            </tr>
            <tr>
              <td>Elongation (δ5)</td>
              <td>≥ 9%</td>
            </tr>
            <tr>
              <td>Reduction of Area (Ψ)</td>
              <td>≥ 20%</td>
            </tr>
            <tr>
              <td>Hardness (Hot Rolled)</td>
              <td>≤ 321 HB</td>
            </tr>
            <tr>
              <td>Annealed Hardness</td>
              <td>≤ 250 HB</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Heat Treatment */}
      <section className="process-route mx-auto mt-3">
        <h3>Heat Treatment</h3>

        <div className="heat-card mt-4">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Annealing</th>
                <td>
                  Heat to 740–770°C, hold until fully heated, and cool slowly in
                  the furnace. Hardness after annealing: ~250 HB.
                </td>
              </tr>
              <tr>
                <th>Hardening</th>
                <td>
                  Heat uniformly to 830–860°C (1526–1580°F) and quench in oil.
                  Allow 30 min per 25 mm of section thickness.
                </td>
              </tr>
              <tr>
                <th>Tempering</th>
                <td>
                  Temper at 460–510°C for one hour per 25 mm of thickness.
                  Provides 28–34 HRC depending on tempering temperature.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Used in manufacturing large leaf springs, coil springs, helical
          springs, and other load-bearing suspension parts for automobiles,
          tractors, railways, and heavy industrial machinery where high strength
          and fatigue resistance are required.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            SUP9 Spring Steel is supplied in annealed or quenched and tempered
            condition. Available in rounds, flats, and plates. Custom heat
            treatment, surface finishing, and mechanical testing can be provided
            on request.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Cutting, straightening, shot peening, ultrasonic testing, and
              certification (EN / ASTM / IS) can be arranged for OEM
              requirements.
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
