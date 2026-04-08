import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BoronSteel10B35() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "10B35",
        selectedProduct: "Boron Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          10B35 Boron Steel Round Bars Supplier in India | Ventura Steels
        </title>

        <meta
          name="description"
          content="10B35 Boron Steel supplier in India. Medium carbon boron alloy steel with high strength and hardenability used in automotive and heavy engineering applications."
        />
      </Helmet>

      <div className="grade-details">
        <h2 className="text-center">10B35 Boron Steel</h2>

        <p className="subtitle text-center">
          Medium carbon boron alloy steel offering excellent strength,
          hardenability and wear resistance for automotive and heavy-duty
          engineering applications.
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
                  <td>Germany / Europe</td>
                  <td>Japan</td>
                  <td>China</td>
                </tr>

                <tr>
                  <td>
                    <strong>STANDARD</strong>
                  </td>
                  <td>SAE / ASTM</td>
                  <td>DIN / EN</td>
                  <td>JIS</td>
                  <td>GB</td>
                </tr>

                <tr>
                  <td>
                    <strong>Equivalent Grades</strong>
                  </td>
                  <td>SAE 10B35</td>
                  <td>~ 35MnB4 (Comparable)</td>
                  <td>—</td>
                  <td>ML35MnB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="overview-content">
            <p>
              10B35 is a medium carbon boron steel developed to achieve superior
              hardenability and mechanical strength compared to conventional
              carbon steels. The addition of boron enables deeper hardening
              during heat treatment.
            </p>

            <p>
              This grade is highly suitable for quenching and tempering
              processes, delivering improved wear resistance, toughness and load
              bearing capacity.
            </p>

            <p>
              It is widely used in automotive, heavy engineering and structural
              applications where high strength and durability are critical.
            </p>
          </div>

          <div className="boron-steel-img">
            <img
              src="/image/Boron Steels/10B35 Boron Steel Round Bars 3.png"
              alt="10B35 Boron Steel"
              width={260}
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
                    <td>0.32 – 0.38</td>
                    <td>0.10 – 0.30</td>
                    <td>0.60 – 0.90</td>
                    <td>≤ 0.040</td>
                    <td>≤ 0.050</td>
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
                <td>800 – 1000 MPa</td>
              </tr>

              <tr>
                <td>Yield Strength</td>
                <td>≈ 500 – 700 MPa</td>
              </tr>

              <tr>
                <td>Hardness (Quenched & Tempered)</td>
                <td>30 – 40 HRC</td>
              </tr>

              <tr>
                <td>Wear Resistance</td>
                <td>High</td>
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
                  <td>830 – 880 °C</td>
                </tr>

                <tr>
                  <th>Tempering Range</th>
                  <td>450 – 650 °C</td>
                </tr>

                <tr>
                  <th>Resulting Hardness</th>
                  <td>30 – 40 HRC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Applications */}
        <section className="applications">
          <h2>Applications</h2>

          <p>
            10B35 boron steel is widely used in automotive fasteners,
            transmission components, shafts, heavy machinery parts, structural
            components and high-load industrial applications requiring superior
            strength and wear resistance.
          </p>
        </section>

        {/* Availability */}
        <section className="availability-info my-4">
          <div className="container">
            <h4 className="mb-3">Availability & Supply</h4>

            <p>
              Available in round bars and flats from 25 mm to 200 mm. Supplied
              with mill test certificates and value-added processing options.
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

          <span>MOQ: 15 - 30 Tonnes</span>
        </div>
      </div>
    </>
  );
}
