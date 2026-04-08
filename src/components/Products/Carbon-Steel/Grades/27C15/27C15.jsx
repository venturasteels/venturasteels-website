import { useNavigate } from "react-router-dom";

export default function CarbonSteel1527() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "27C15 / SAE 1527",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">27C15 / SAE 1527</h2>

      <p className="subtitle text-center">
        27C15 / SAE 1527 is a medium carbon manganese steel offering good
        strength, wear resistance and improved hardenability due to its
        manganese content. It is commonly used in automotive and engineering
        components requiring durability and moderate toughness.
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
                <td>India</td>
                <td>USA</td>
                <td>UK</td>
                <td>Europe</td>
              </tr>

              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>IS</td>
                <td>SAE / AISI</td>
                <td>BS</td>
                <td>EN</td>
              </tr>

              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>27C15</td>
                <td>SAE 1527</td>
                <td>–</td>
                <td>C30 (Approx)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            27C15 is a medium carbon steel containing moderate manganese,
            providing improved strength and hardenability compared to low carbon
            steels. It is suitable for heat treatment to achieve higher hardness
            and wear resistance.
          </p>

          <p>
            The grade is widely used in the automotive and engineering
            industries for manufacturing shafts, axles, gears and other machine
            components that require good fatigue strength and durability.
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
                  <td>0.24 – 0.30</td>
                  <td>1.20 – 1.50</td>
                  <td>0.10 – 0.35</td>
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
              <td>550 – 700 MPa</td>
            </tr>

            <tr>
              <td>Yield Strength</td>
              <td>≈ 320 MPa</td>
            </tr>

            <tr>
              <td>Elongation</td>
              <td>≈ 15 – 18%</td>
            </tr>

            <tr>
              <td>Hardness (Annealed)</td>
              <td>≈ 150 – 200 HB</td>
            </tr>

            <tr>
              <td>Hardness (Quenched & Tempered)</td>
              <td>≈ 25 – 32 HRC</td>
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
                <td>840 – 880 °C</td>
              </tr>

              <tr>
                <th>Hardening Temperature</th>
                <td>820 – 860 °C</td>
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
          27C15 / SAE 1527 carbon steel is commonly used for automotive shafts,
          axles, gears, couplings, machine parts, engineering components and
          structural mechanical elements requiring good strength and fatigue
          resistance.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>

          <p>
            Ventura Steels supplies 27C15 / SAE 1527 carbon steel in hot rolled,
            forged and normalized conditions. The grade is available in round
            bars, squares, flats and forged blocks with complete mill test
            certification.
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

        {/* <span>MOQ: 15 Tonnes</span> */}
      </div>
    </div>
  );
}
