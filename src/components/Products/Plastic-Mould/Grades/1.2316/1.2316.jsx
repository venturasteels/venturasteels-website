import { useNavigate } from "react-router-dom";

export default function PlasticMould2316() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "1.2316",
        selectedProduct: "Plastic Mould Steel",
      },
    });
  };
  return (
    <div className="grade-details">
      <h2 className="text-center">1.2316</h2>
      <p className="subtitle text-center">
        1.2316 is a high-chromium, corrosion-resistant plastic mould steel with
        excellent polishability and wear resistance.
      </p>

      {/* Standards Table */}
      <div className="hot-work-standards-scroll-wrapper mb-4">
        <div className="hot-work-standards-inner-scroll">
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
                  <strong>STANDARDS</strong>
                </td>
                <td>AISI</td>
                <td>DIN / EN</td>
                <td>JIS</td>
                <td>GB</td>
              </tr>
              <tr>
                <td>
                  <strong>EQUIVALENT NAME</strong>
                </td>
                <td>420 ESR</td>
                <td>1.2316 / X38CrMo16</td>
                <td>SUS420J2</td>
                <td>4Cr13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            1.2316 plastic mould steel is a corrosion-resistant stainless tool
            steel containing approximately 16% chromium. It provides excellent
            polishability, good wear resistance, and high toughness. The steel
            is supplied in pre-hardened or hardened and tempered condition, and
            is ideal for use in plastic moulds requiring good surface finish and
            resistance to corrosive polymer gases. It is vacuum-degassed and
            typically ESR refined for superior cleanliness.
          </p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Plastic Mould Steels/Plastic Mould 3.png"
            alt="1.2316 Plastic Mould Steel"
            width={210}
          />
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="plastic-composition">
        <h3 className="mb-4 text-center">
          Chemical Composition (Typical Analysis in %)
        </h3>
        <div className="table-data d-flex justify-content-center mx-auto">
          <div className="plastic-chemical-composition plastic-composition-table table-responsive-custom">
            <table>
              <thead>
                <tr>
                  <th>Element</th>
                  <th>C</th>
                  <th>Si</th>
                  <th>Mn</th>
                  <th>Cr</th>
                  <th>Mo</th>
                  <th>V</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.33–0.45</td>
                  <td>≤1.00</td>
                  <td>≤1.00</td>
                  <td>15.00–17.00</td>
                  <td>1.00–1.20</td>
                  <td>≤0.10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process Route</h3>
        <div className="process-flow">
          <div className="step">EAF</div>
          <span className="arrow">→</span>
          <div className="step">LF</div>
          <span className="arrow">→</span>
          <div className="step">VD / ESR</div>
          <span className="arrow">→</span>
          <div className="step">FORGED / ROLLED</div>
          <span className="arrow">→</span>
          <div className="step">ANNEALED / PRE-HARDENED</div>
          <span className="arrow">→</span>
          <div className="step">MACHINED / POLISHED</div>
        </div>
      </section>

      {/* Steel Properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <ul>
          <li>Excellent corrosion and wear resistance</li>
          <li>Good polishability and mirror finish capability</li>
          <li>Good dimensional stability during hardening</li>
          <li>
            Suitable for moulds processing corrosive plastics (PVC, acetate,
            etc.)
          </li>
          <li>Vacuum-degassed and ESR refined for high purity</li>
          <li>Good toughness and machinability</li>
        </ul>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Used in the manufacture of plastic moulds for corrosive plastics (e.g.
          PVC), transparent moulds requiring high surface polish, medical and
          food-grade components, hot runner systems, and die casting tools.
        </p>
      </section>

      {/* Heat Treatment */}
      <section className="heat-treatment">
        <h2 className="section-title">Heat Treatment</h2>

        <div className="row">
          <div className="col-md-6">
            <div className="heat-card mb-3">
              <h4>Heat Treatment Steps</h4>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Annealing (°C)</th>
                    <td>740–770</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td>Furnace to 600°C, then air</td>
                  </tr>
                  <tr>
                    <th>Hardening (°C)</th>
                    <td>1000–1040</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Oil or air</td>
                  </tr>
                  <tr>
                    <th>Tempering (°C)</th>
                    <td>180–300 (2 hours minimum)</td>
                  </tr>
                  <tr>
                    <th>Typical Hardness</th>
                    <td>48–52 HRC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-6">
            <div className="heat-card mb-3">
              <h4>Tempering Data</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Temp (°C)</th>
                    <th>HRC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>200</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Stocking Partners */}
      <section className="stocking-partners py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Stocking Partners</h2>
          <p className="lead">
            We keep the materials from <strong>India</strong> and
            <strong> Europe</strong>.
          </p>
          <div className="partner-flags mt-4">
            <img
              src="/image/india-flag.png"
              alt="India Flag"
              className="flag-img mx-3"
            />
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability</h4>
          <p>
            <strong>Grades in Bold (e.g. 1.2316)</strong> are kept in stock and
            supplied on a regular basis. <br />
            Other grades are available on <strong>advance order</strong> as per
            size and quantity requirements.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              We provide cutting as per customer requirement, forging sourcing,
              and heat treatment on request for precision mould applications.
            </p>
          </div>
        </div>
      </section>

      {/* Get Quote CTA */}
      <div className="cta-block">
        <button onClick={handleEnquiryClick} className="btn btn-primary mt-3">
          Enquire Now
        </button>
        <span>MOQ: 5 Tonnes</span>
      </div>
    </div>
  );
}
