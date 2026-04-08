import { useNavigate } from "react-router-dom";
import "./alloy-steel-grade.css";

export default function AlloySteel20MnCr5() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "20MnCr5 / 16MnCr5",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">20MnCr5 / 16MnCr5</h2>
      <p className="subtitle text-center">
        A low-carbon chromium-manganese alloy steel widely used for case
        hardening applications requiring high surface hardness and a tough core.
      </p>

      {/* Standards / Equivalents */}
      <div className="alloy-steel-standards-scroll-wrapper mb-4">
        <div className="alloy-steel-standards-inner-scroll">
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
                <td>AISI / SAE</td>
                <td>DIN / EN</td>
                <td>AFNOR</td>
                <td>GB</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>AISI 5120</td>
                <td>EN 1.7147 / 20MnCr5</td>
                <td>20MC5</td>
                <td>20CrMnTi (approx)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            20MnCr5 / 16MnCr5 is a case hardening alloy steel containing
            chromium and manganese, designed to achieve a hard wear-resistant
            surface while maintaining a tough and ductile core. It is typically
            carburized, quenched, and tempered to obtain excellent fatigue
            strength, wear resistance, and impact toughness. This steel is
            widely used in automotive and engineering components subjected to
            high surface stress.
          </p>
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="alloy-steel-composition">
        <h3 className="mb-4 text-center">Chemical Composition (Typical, %)</h3>
        <div className="table-data d-flex justify-content-center">
          <div className="alloy-steel-chemical-composition alloy-steel-composition-table table-responsive-custom">
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
                  <td>0.17 – 0.22</td>
                  <td>≤ 0.40</td>
                  <td>1.10 – 1.40</td>
                  <td>1.00 – 1.30</td>
                  <td>≤ 0.025</td>
                  <td>≤ 0.035</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mechanical Properties */}
      <section className="steel-properties">
        <h2>Mechanical Properties (Core – Q&T Condition)</h2>
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
              <td>800 – 1100 MPa</td>
            </tr>
            <tr>
              <td>
                Yield Strength, R<sub>p0.2</sub>
              </td>
              <td>≥ 600 MPa</td>
            </tr>
            <tr>
              <td>
                Elongation, A<sub>5</sub>
              </td>
              <td>≥ 10%</td>
            </tr>
            <tr>
              <td>Impact Strength</td>
              <td>Good toughness (core)</td>
            </tr>
            <tr>
              <td>Surface Hardness (After Carburizing)</td>
              <td>≈ 58 – 62 HRC</td>
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
          <div className="step">Carburizing</div>
          <span className="arrow">→</span>
          <div className="step">Quenching (Oil)</div>
          <span className="arrow">→</span>
          <div className="step">Tempering</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Carburizing Temperature</th>
                <td>880 – 930 °C</td>
              </tr>
              <tr>
                <th>Quenching</th>
                <td>Oil or gas quench</td>
              </tr>
              <tr>
                <th>Tempering Range</th>
                <td>150 – 200 °C</td>
              </tr>
              <tr>
                <th>Surface Hardness</th>
                <td>≈ 58 – 62 HRC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Widely used for gears, pinions, shafts, camshafts, crankshafts,
          automotive transmission parts, heavy-duty machinery components, and
          other parts requiring high wear resistance and fatigue strength with a
          tough core.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>
          <p>
            20MnCr5 / 16MnCr5 alloy steel is available in annealed, normalized,
            or forged condition. Supplied as round bars, flats, billets, and
            forged components with full mill test certification.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              Cutting, machining, carburizing, heat treatment, ultrasonic
              testing, and surface finishing available as per requirement.
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
