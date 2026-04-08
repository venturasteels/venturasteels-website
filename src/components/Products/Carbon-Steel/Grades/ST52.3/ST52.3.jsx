import { useNavigate } from "react-router-dom";

export default function CarbonSteelST523() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "ST 52.3",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">ST 52.3</h2>

      <p className="subtitle text-center">
        ST 52.3 is a high-strength structural carbon steel known for its
        excellent strength, toughness and weldability. It is widely used in
        structural engineering, machinery components and heavy-duty industrial
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
                <td>Germany</td>
                <td>Europe</td>
                <td>USA</td>
                <td>China</td>
              </tr>

              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>DIN</td>
                <td>EN</td>
                <td>ASTM</td>
                <td>GB</td>
              </tr>

              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>ST 52.3</td>
                <td>S355 (Approx.)</td>
                <td>A572 Gr.50 (Approx.)</td>
                <td>Q345B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            ST 52.3 is a structural carbon steel originally defined in the DIN
            standard. It provides higher yield strength compared to mild steel,
            making it suitable for structural frameworks, machinery parts,
            welded constructions and heavy engineering applications.
          </p>

          <p>
            The steel offers a good balance of strength, toughness and
            weldability, allowing it to be widely used in fabrication,
            construction equipment, transport machinery and industrial
            structures.
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
                  <th>Si</th>
                  <th>Mn</th>
                  <th>P</th>
                  <th>S</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Range</td>
                  <td>≤ 0.22</td>
                  <td>≤ 0.55</td>
                  <td>1.00 – 1.60</td>
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
              <td>470 – 630 MPa</td>
            </tr>

            <tr>
              <td>Yield Strength</td>
              <td>≥ 355 MPa</td>
            </tr>

            <tr>
              <td>Elongation</td>
              <td>≥ 20%</td>
            </tr>

            <tr>
              <td>Hardness</td>
              <td>≈ 140 – 180 HB</td>
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
          <div className="step">Normalising</div>
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
                <th>Cooling</th>
                <td>Air Cooling</td>
              </tr>

              <tr>
                <th>Supply Condition</th>
                <td>Usually supplied in normalized condition</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>

        <p>
          ST 52.3 carbon steel is widely used in construction equipment,
          structural frames, bridges, machinery components, shafts, welded
          structures, heavy equipment parts and industrial fabrication where
          higher strength structural steel is required.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>

          <p>
            ST 52.3 carbon steel is available in hot rolled, normalized and
            forged conditions. Ventura Steels supplies this grade in round bars,
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
