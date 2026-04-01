import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./boron-steel-grade.css";

export default function BoronSteel10B21() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "10B21",
        selectedProduct: "Boron Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          10B21 Boron Steel Round Bars Supplier in India | Ventura Steels
        </title>

        <meta
          name="description"
          content="10B21 Boron Steel supplier in India. High hardenability steel ideal for automotive fasteners and carburizing applications. Available in round bars and flats."
        />
      </Helmet>

      <div className="grade-details">
        <h2 className="text-center">10B21 Boron Steel</h2>

        <p className="subtitle text-center">
          Low carbon boron alloy steel with excellent hardenability, widely used
          for automotive fasteners, bolts and carburized components.
        </p>

        {/* Standards / Equivalents */}
        <div className="boron-steel-standards-scroll-wrapper mb-4">
          <div className="boron-steel-standards-inner-scroll">
            <table className="standards-table">
              <tbody>
                <tr>
                  <td>
                    <strong>COUNTRY</strong>
                  </td>
                  <td>USA</td>
                  <td>Germany</td>
                  <td>Europe (EN)</td>
                  <td>UK</td>
                  <td>India</td>
                </tr>

                <tr>
                  <td>
                    <strong>STANDARD</strong>
                  </td>
                  <td>SAE / AISI / ASTM A29</td>
                  <td>DIN 17210</td>
                  <td>EN 10083-3</td>
                  <td>BS 970</td>
                  <td>IS</td>
                </tr>

                <tr>
                  <td>
                    <strong>Equivalent Grades</strong>
                  </td>
                  <td>10B21</td>
                  <td>20MnB4 / 1.5525</td>
                  <td>20MnB4</td>
                  <td>530A20B</td>
                  <td>20MnB4
</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="overview-content">
            <p>
              10B21 is a boron-treated low carbon steel designed to provide
              enhanced hardenability compared to conventional carbon steels.
              Even with very small additions of boron, the steel achieves deeper
              hardening during heat treatment.
            </p>

            <p>
              This makes it highly suitable for carburizing and carbonitriding
              applications where a tough core and hard surface are required.
            </p>

            <p>
              It is extensively used in automotive and engineering industries
              for manufacturing high-strength fasteners and precision
              components.
            </p>
          </div>

          <div className="boron-steel-img">
            <img
              src="/image/Boron Steels/10B21 Round Bars 2.png"
              alt="10B21 Boron Steel"
              width={300}
            />
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="boron-steel-composition">
          <h3 className="mb-4 text-center">
            Chemical Composition (Typical, %)
          </h3>

          <div className="table-data d-flex justify-content-center">
            <div className="boron-steel-chemical-composition boron-steel-composition-table table-responsive-custom">
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>C</th>
                    <th>Si</th>
                    <th>Mn</th>
                    <th>P</th>
                    <th>S</th>
                    <th>B</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Range</td>
                    <td>0.18 – 0.23</td>
                    <td>≤ 0.30</td>
                    <td>0.70 – 1.10</td>
                    <td>≤ 0.030</td>
                    <td>≤ 0.035</td>
                    <td>0.0005 – 0.003</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Mechanical Properties */}
        <section className="steel-properties">
          <h2>Mechanical Properties (Typical After Heat Treatment)</h2>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Property</th>
                <th>Typical Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tensile Strength</td>
                <td>600 – 800 MPa</td>
              </tr>

              <tr>
                <td>Yield Strength</td>
                <td>≈ 350 – 500 MPa</td>
              </tr>

              <tr>
                <td>Hardness (Carburized Surface)</td>
                <td>55 – 62 HRC</td>
              </tr>

              <tr>
                <td>Core Hardness</td>
                <td>20 – 30 HRC</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Heat Treatment */}
        <section className="process-route mx-auto mt-3">
          <h3>Process & Heat Treatment</h3>

          <div className="process-flow">
            <div className="step">Melting (EAF / BOF)</div>
            <span className="arrow">→</span>
            <div className="step">Hot Rolling / Forging</div>
            <span className="arrow">→</span>
            <div className="step">Carburizing</div>
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
                  <th>Carburizing Temperature</th>
                  <td>880 – 930 °C</td>
                </tr>

                <tr>
                  <th>Quenching</th>
                  <td>Oil / Polymer</td>
                </tr>

                <tr>
                  <th>Tempering</th>
                  <td>150 – 200 °C</td>
                </tr>

                <tr>
                  <th>Case Depth</th>
                  <td>0.8 – 1.5 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Applications */}
        <section className="applications">
          <h2>Applications</h2>

          <p>
            10B21 boron steel is widely used in automotive fasteners, bolts,
            nuts, screws, seat mechanisms, chassis parts, and other carburized
            components requiring high surface hardness and core strength.
          </p>
        </section>

        {/* Availability */}
        <section className="availability-info my-4">
          <div className="container">
            <h4 className="mb-3">Availability & Supply</h4>

            <p>
              Available in round bars and flats in sizes ranging from 25 mm to
              200 mm. Supplied with full mill test certificates and customized
              processing options.
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

          <span>MOQ: 15 – 30 Tonnes</span>
        </div>
      </div>
    </>
  );
}
