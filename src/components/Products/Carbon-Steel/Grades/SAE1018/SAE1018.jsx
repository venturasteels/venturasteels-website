import { useNavigate } from "react-router-dom";

export default function CarbonSteel1018() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 1018 / ASTM A36 / ASTM A29 / SAE 1137 / SAE 1138",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">
        SAE 1018 / ASTM A36 / ASTM A29 / SAE 1137 / SAE 1138
      </h2>

      <p className="subtitle text-center">
        Low to medium carbon engineering steels commonly used for structural,
        machining and general engineering applications requiring good
        weldability, machinability and moderate strength.
      </p>

      {/* Standards / Equivalents */}
      <div className="carbon-steel-standards-scroll-wrapper mb-4">
        <div className="carbon-steel-standards-inner-scroll">
          <table className="standards-table">
            <tbody>
              <tr>
                <td>
                  <strong>COUNTRY</strong>
                </td>
                <td>USA</td>
                <td>Europe</td>
                <td>UK</td>
                <td>China</td>
              </tr>

              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>SAE / ASTM</td>
                <td>EN / DIN</td>
                <td>BS</td>
                <td>GB</td>
              </tr>

              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>SAE 1018 / SAE 1137 / SAE 1138</td>
                <td>C15 / C35</td>
                <td>EN3 / EN8 (approx)</td>
                <td>15# / 35# Steel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SAE 1018, ASTM A36, ASTM A29, SAE 1137 and SAE 1138 are commonly
            used carbon steels in the engineering and manufacturing industry.
            These grades provide a combination of good machinability,
            weldability and moderate strength, making them suitable for a wide
            range of structural and mechanical applications.
          </p>

          <p>
            SAE 1018 is a low-carbon steel known for excellent weldability and
            surface finish, while SAE 1137 and SAE 1138 offer higher strength
            due to increased manganese content. ASTM A36 is widely used in
            structural steel applications, and ASTM A29 covers carbon steel bars
            used in general engineering components.
          </p>
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="carbon-steel-composition">
        <h3 className="mb-4 text-center">Chemical Composition (Typical, %)</h3>

        <div className="table-data d-flex justify-content-center">
          <div className="carbon-steel-chemical-composition carbon-steel-composition-table table-responsive-custom">
            <table>
              <thead>
                <tr>
                  <th>Element</th>
                  <th>C</th>
                  <th>Mn</th>
                  <th>Si</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>SAE 1018</td>
                  <td>0.15 – 0.20</td>
                  <td>0.60 – 0.90</td>
                  <td>≤ 0.30</td>
                  <td>≤ 0.040</td>
                  <td>≤ 0.050</td>
                </tr>

                <tr>
                  <td>SAE 1137</td>
                  <td>0.32 – 0.38</td>
                  <td>1.35 – 1.65</td>
                  <td>≤ 0.30</td>
                  <td>≤ 0.040</td>
                  <td>≤ 0.050</td>
                </tr>

                <tr>
                  <td>SAE 1138</td>
                  <td>0.35 – 0.43</td>
                  <td>1.35 – 1.65</td>
                  <td>≤ 0.30</td>
                  <td>≤ 0.040</td>
                  <td>≤ 0.050</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mechanical Properties */}
      <section className="steel-properties">
        <h2>Mechanical Properties (Typical)</h2>

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
              <td>440 – 670 MPa</td>
            </tr>

            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>250 – 370 MPa</td>
            </tr>

            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>15 – 20%</td>
            </tr>

            <tr>
              <td>Hardness (Annealed)</td>
              <td>120 – 180 HB</td>
            </tr>

            <tr>
              <td>Machinability</td>
              <td>Good</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Heat Treatment */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Heat-Treatment</h3>

        <div className="process-flow">
          <div className="step">Melting / Refining (EAF / LF)</div>
          <span className="arrow">→</span>
          <div className="step">Hot Rolling / Forging</div>
          <span className="arrow">→</span>
          <div className="step">Normalising / Annealing</div>
          <span className="arrow">→</span>
          <div className="step">Optional Heat Treatment</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Normalising Temperature</th>
                <td>870 – 910 °C</td>
              </tr>

              <tr>
                <th>Annealing Temperature</th>
                <td>680 – 720 °C</td>
              </tr>

              <tr>
                <th>Hardening Temperature</th>
                <td>820 – 860 °C</td>
              </tr>

              <tr>
                <th>Cooling</th>
                <td>Air or Oil depending on application</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>

        <p>
          These carbon steels are widely used for shafts, studs, bolts, machine
          components, structural parts, automotive components, forgings and
          general engineering applications where good machinability and
          weldability are required.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>

          <p>
            SAE 1018 / ASTM A36 / SAE 1137 / SAE 1138 carbon steels are
            available in hot rolled, cold drawn, normalized and annealed
            conditions. Ventura Steels supplies these grades in round bars,
            flats, squares and forged blocks with mill test certification.
          </p>

          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>

            <p>
              We also source forgings as per the required grades, size, and
              supply specifications. Additionally, we have an in-house cutting
              facility to meet customized requirements.
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
