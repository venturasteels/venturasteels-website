import { useNavigate } from "react-router-dom";

export default function CarbonSteel1541() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 1541 / EN 15",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">SAE 1541 / EN 15</h2>

      <p className="subtitle text-center">
        SAE 1541 / EN 15 is a medium carbon manganese steel known for its
        excellent strength, wear resistance and fatigue resistance. It is widely
        used in automotive components, shafts and heavy-duty engineering
        applications.
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
                <td>UK</td>
                <td>Europe</td>
                <td>China</td>
              </tr>

              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>SAE / AISI</td>
                <td>BS</td>
                <td>EN</td>
                <td>GB</td>
              </tr>

              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>SAE 1541</td>
                <td>EN 15</td>
                <td>C40 (Approx)</td>
                <td>40Mn</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SAE 1541 is a medium carbon steel with relatively high manganese
            content which improves hardenability and strength. It provides
            better mechanical properties compared to plain carbon steels and can
            be heat treated to achieve higher hardness and wear resistance.
          </p>

          <p>
            Due to its strength and fatigue resistance, this grade is commonly
            used in automotive components, axles, shafts and heavy engineering
            parts subjected to dynamic loads.
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
                  <td>Range</td>
                  <td>0.38 – 0.44</td>
                  <td>1.35 – 1.65</td>
                  <td>0.15 – 0.35</td>
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
              <td>Tensile Strength</td>
              <td>650 – 800 MPa</td>
            </tr>

            <tr>
              <td>Yield Strength</td>
              <td>≈ 400 MPa</td>
            </tr>

            <tr>
              <td>Elongation</td>
              <td>≈ 14 – 16%</td>
            </tr>

            <tr>
              <td>Hardness (Annealed)</td>
              <td>≈ 180 – 220 HB</td>
            </tr>

            <tr>
              <td>Hardness (Quenched & Tempered)</td>
              <td>≈ 28 – 35 HRC</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Heat Treatment</h3>

        <div className="process-flow">
          <div className="step">Melting / Refining (EAF / LF)</div>
          <span className="arrow">→</span>
          <div className="step">Continuous Casting</div>
          <span className="arrow">→</span>
          <div className="step">Hot Rolling / Forging</div>
          <span className="arrow">→</span>
          <div className="step">Normalising / Annealing</div>
          <span className="arrow">→</span>
          <div className="step">Quenching & Tempering</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Normalising Temperature</th>
                <td>850 – 900 °C</td>
              </tr>

              <tr>
                <th>Hardening Temperature</th>
                <td>830 – 860 °C</td>
              </tr>

              <tr>
                <th>Tempering Temperature</th>
                <td>500 – 650 °C</td>
              </tr>

              <tr>
                <th>Cooling</th>
                <td>Oil or Water depending on section size</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>

        <p>
          SAE 1541 / EN 15 carbon steel is widely used in automotive axles,
          shafts, crankshafts, gears, connecting rods, heavy-duty machine
          components and engineering parts requiring high strength and fatigue
          resistance.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>

          <p>
            SAE 1541 / EN 15 carbon steel is available in hot rolled, forged,
            normalized and quenched & tempered conditions. Ventura Steels
            supplies this grade in round bars, flats, squares and forged blocks
            with mill test certification.
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

      {/* Get Quote CTA */}
      <div className="cta-block d-flex gap-3 align-items-center flex-wrap">
        <button onClick={handleEnquiryClick} className="btn btn-primary">
          Enquire Now
        </button>

        <button
          className=" weight-btn"
          data-bs-toggle="modal"
          data-bs-target="#weightModal"
        >
          Calculate Weight
        </button>

        <span>MOQ: 15 Tonnes</span>
      </div>
    </div>
  );
}
