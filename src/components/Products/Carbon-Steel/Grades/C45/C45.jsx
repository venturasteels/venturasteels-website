import { useNavigate } from "react-router-dom";
import "./carbon-steel-grade.css";

export default function CarbonSteelC45() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade:
          "C45 / EN9 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">
        C45 / EN9 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045
      </h2>

      <p className="subtitle text-center">
        Medium carbon engineering steel widely used for shafts, gears, fasteners
        and mechanical components requiring moderate strength, toughness and
        wear resistance.
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
                <td>Germany / Europe</td>
                <td>UK</td>
                <td>China</td>
              </tr>

              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>AISI / SAE</td>
                <td>DIN / EN</td>
                <td>BS</td>
                <td>GB</td>
              </tr>

              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>AISI 1045</td>
                <td>CK45 / C45 (EN 1.0503)</td>
                <td>EN8 / EN8A / EN8D / EN8M / EN8DM</td>
                <td>45 Steel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            C45 (EN8 / AISI 1045) is a medium carbon steel widely used in
            engineering and manufacturing industries due to its good balance of
            strength, toughness and machinability. It can be supplied in
            normalized, annealed or quenched and tempered conditions depending
            on the application requirements.
          </p>

          <p>
            This grade offers good wear resistance after heat treatment and is
            commonly used for mechanical components such as shafts, axles,
            gears, bolts and machine parts where moderate strength and
            durability are required.
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
                  <td>0.42 – 0.50</td>
                  <td>≤ 0.40</td>
                  <td>0.60 – 0.90</td>
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
              <td>570 – 700 MPa</td>
            </tr>

            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>≈ 330 – 400 MPa</td>
            </tr>

            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>≥ 14%</td>
            </tr>

            <tr>
              <td>Reduction of Area, Z</td>
              <td>≈ 35%</td>
            </tr>

            <tr>
              <td>Hardness (Annealed)</td>
              <td>≈ 170 – 210 HB</td>
            </tr>

            <tr>
              <td>Hardness (Quenched & Tempered)</td>
              <td>≈ 28 – 32 HRC</td>
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
          <div className="step">Quenching</div>
          <span className="arrow">→</span>
          <div className="step">Tempering</div>
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
                <th>Quenching Temperature</th>
                <td>820 – 860 °C (water or oil)</td>
              </tr>

              <tr>
                <th>Tempering Range</th>
                <td>550 – 660 °C</td>
              </tr>

              <tr>
                <th>Resulting Hardness</th>
                <td>≈ 28 – 32 HRC (depending on treatment)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>

        <p>
          C45 / EN8 / AISI 1045 carbon steel is widely used for manufacturing
          shafts, axles, bolts, studs, gears, crankshafts, couplings, machinery
          components and structural parts requiring moderate strength and wear
          resistance.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>

          <p>
            C45 / EN8 carbon steel is available in hot rolled, forged,
            normalized, or quenched and tempered conditions. Ventura Steels
            supplies this grade in round bars, flats, squares and forged blocks
            with full mill test certification.
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
