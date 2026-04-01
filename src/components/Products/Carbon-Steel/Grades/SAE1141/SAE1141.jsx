import { useNavigate } from "react-router-dom";

export default function CarbonSteel1141() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 1141",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">SAE 1141</h2>

      <p className="subtitle text-center">
        SAE 1141 is a resulfurized medium carbon steel known for its excellent
        machinability and good strength. The sulfur content improves chip
        breaking during machining, making this grade ideal for high-speed
        machining and precision engineering components.
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
                <td>UK</td>
                <td>Europe</td>
                <td>Japan</td>
              </tr>

              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>SAE / AISI</td>
                <td>BS</td>
                <td>EN</td>
                <td>JIS</td>
              </tr>

              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>SAE 1141</td>
                <td>080M40 (Approx)</td>
                <td>C40 (Approx)</td>
                <td>S45C (Approx)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            SAE 1141 is a medium carbon steel with added sulfur to enhance
            machinability. It offers a good combination of strength, toughness
            and wear resistance, while maintaining excellent machining
            performance.
          </p>

          <p>
            The grade is widely used in the automotive and engineering
            industries for manufacturing shafts, studs, bolts, couplings and
            precision machined components.
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
                  <td>0.37 – 0.44</td>
                  <td>1.35 – 1.65</td>
                  <td>0.15 – 0.35</td>
                  <td>≤ 0.040</td>
                  <td>0.08 – 0.13</td>
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
              <td>600 – 750 MPa</td>
            </tr>

            <tr>
              <td>Yield Strength</td>
              <td>≈ 350 MPa</td>
            </tr>

            <tr>
              <td>Elongation</td>
              <td>≈ 14 – 16%</td>
            </tr>

            <tr>
              <td>Hardness (Annealed)</td>
              <td>≈ 170 – 220 HB</td>
            </tr>

            <tr>
              <td>Hardness (Quenched & Tempered)</td>
              <td>≈ 28 – 34 HRC</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process & Manufacturing Route</h3>

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
          SAE 1141 carbon steel is widely used in the production of shafts,
          studs, bolts, couplings, machine parts, automotive components and
          precision machined engineering components requiring high machinability
          and strength.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>

          <p>
            Ventura Steels supplies SAE 1141 carbon steel in hot rolled, cold
            drawn and normalized conditions. The grade is available in round
            bars, hex bars, flats and machined components with mill test
            certification.
          </p>

          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>

            <p>
             We also source forgings as per the required grades, size, and supply specifications. Additionally, we have an in-house cutting facility to meet customized requirements.
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
