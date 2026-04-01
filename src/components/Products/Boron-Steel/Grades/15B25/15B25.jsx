import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BoronSteel15B25() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "15B25",
        selectedProduct: "Boron Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          15B25 Boron Steel Round Bars Supplier in India | Ventura Steels
        </title>

        <meta
          name="description"
          content="15B25 Boron Steel supplier in India. Medium carbon boron alloy steel with high hardenability used in automotive fasteners, chassis and suspension components."
        />
      </Helmet>

      <div className="grade-details">
        <h2 className="text-center">15B25 Boron Steel</h2>

        <p className="subtitle text-center">
          Medium carbon boron alloy steel offering superior hardenability,
          strength and wear resistance for automotive and engineering
          applications.
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
                  <td> USA</td>
                  <td>Germany</td>
                  <td>Europe (EN)</td>
                  <td>India</td>
                </tr>

                <tr>
                  <td>
                    <strong>STANDARD</strong>
                  </td>
                  <td>SAE / AISI</td>
                  <td>DIN 17210</td>
                  <td>EN 10083-3</td>
                  <td>IS 1570 (Part 2)</td>
                </tr>

                <tr>
                  <td>
                    <strong>Equivalent Grades</strong>
                  </td>
                  <td>15B25</td>
                  <td>25MnB4 / 1.5530</td>
                  <td>25MnB4</td>
                  <td>25MnB4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="overview-content">
            <p>
              15B25 is a medium carbon boron steel designed to provide improved
              hardenability compared to conventional carbon steels. The addition
              of boron allows deeper hardening even at lower carbon content.
            </p>

            <p>
              This grade is highly suitable for heat treatment processes such as
              quenching and tempering, resulting in high strength, wear
              resistance and durability.
            </p>

            <p>
              It is widely used in automotive and heavy engineering industries
              for manufacturing high-performance components.
            </p>
          </div>

          <div className="boron-steel-img-img">
            <img
              src="/image/Boron Steels/15B25 Round bars.png"
              alt="15B25 Boron Steel"
              width={320}
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
                    <td>0.19 – 0.25</td>
                    <td>0.15 – 0.30</td>
                    <td>1.35 – 1.65</td>
                    <td>≤ 0.035</td>
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
                <td>700 – 900 MPa</td>
              </tr>

              <tr>
                <td>Yield Strength</td>
                <td>≈ 450 – 600 MPa</td>
              </tr>

              <tr>
                <td>Hardness (Quenched & Tempered)</td>
                <td>28 – 38 HRC</td>
              </tr>

              <tr>
                <td>Impact Toughness</td>
                <td>Good</td>
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
            <div className="step">Normalising</div>
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
                  <td>850 – 900 °C</td>
                </tr>

                <tr>
                  <th>Quenching Temperature</th>
                  <td>830 – 870 °C</td>
                </tr>

                <tr>
                  <th>Tempering Range</th>
                  <td>450 – 650 °C</td>
                </tr>

                <tr>
                  <th>Resulting Hardness</th>
                  <td>28 – 38 HRC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Applications */}
        <section className="applications">
          <h2>Applications</h2>

          <p>
            15B25 boron steel is widely used in automotive fasteners, bolts,
            suspension components, chassis parts, high-strength shafts and heavy
            engineering components requiring superior strength and wear
            resistance.
          </p>
        </section>

        {/* Availability */}
        <section className="availability-info my-4">
          <div className="container">
            <h4 className="mb-3">Availability & Supply</h4>

            <p>
              Available in round bars and flats from 25 mm to 200 mm. Supplied
              with mill test certificates and optional processing services.
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
