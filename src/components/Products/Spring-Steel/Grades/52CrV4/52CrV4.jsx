import { useNavigate } from "react-router-dom";

export default function SpringSteel52CrV4() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "52CrV4 / 51CrV4 / AISI 4150",
        selectedProduct: "Spring Steel",
      },
    });
  };
  return (
    <div className="grade-details">
      <h2 className="text-center">
        52CrV4 / 51CrV4 / AISI 4150
      </h2>
      <p className="subtitle text-center">
        Chromium–vanadium alloy spring steel known for its excellent toughness,
        resilience, and fatigue strength — ideal for highly stressed spring
        applications.
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
                <td>AISI 4150 / SAE 6150 (approx.)</td>
                <td>EN 1.8159 / 51CrV4 / 52CrV4</td>
                <td>SUP 10</td>
                <td>50CrVA / 51CrV4</td>
                <td>735A51 / IS 51CrV4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            52CrV4 (also known as 51CrV4) is a chromium–vanadium alloy spring
            steel with high resilience, strength, and fatigue resistance. The
            vanadium refines the grain structure, improving toughness and
            resistance to overheating. It is commonly used in the manufacture of
            coil and leaf springs, torsion bars, and other components exposed to
            repeated dynamic loading. When quenched and tempered, it offers a
            very good balance of strength and ductility.
          </p>
        </div>
        {/* <div className="db6-img d-flex">
          <img
            src="/image/Spring Steels/52CrV4 Round Bars.png"
            alt="52CrV4 Spring Steel"
            width={250}
          />
          <img
            src="/image/Spring Steels/51CrV4 Flat Bars.png"
            alt="51CrV4 Spring Steel"
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
              <td>1300 – 1600 MPa</td>
            </tr>
            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>≈ 1100 MPa (for small sections)</td>
            </tr>
            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>≥ 6 %</td>
            </tr>
            <tr>
              <td>Reduction of Area, Z</td>
              <td>≈ 30 %</td>
            </tr>
            <tr>
              <td>Hardness (Annealed)</td>
              <td>≤ 248 HB</td>
            </tr>
            <tr>
              <td>Hardness (Q & T)</td>
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
                <td>830 – 880 °C</td>
              </tr>
              <tr>
                <th>Quenching Temperature</th>
                <td>≈ 850 °C (oil quench)</td>
              </tr>
              <tr>
                <th>Tempering Range</th>
                <td>400 – 520 °C (based on required strength)</td>
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
          Commonly used for coil and leaf springs, torsion bars, anti-roll bars,
          crankshafts, connecting rods, shafts, and other dynamically stressed
          automotive and mechanical components.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            52CrV4 / 51CrV4 spring steel is stocked in annealed and quenched &
            tempered conditions in rounds, flats, and coils. Custom sizes,
            grinding, testing, and mechanical certification are available upon
            request.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Saw cutting, heat treatment, hardness testing, and ultrasonic
              inspection available as per customer requirements.
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
