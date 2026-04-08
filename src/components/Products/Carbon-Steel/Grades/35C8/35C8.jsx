import { useNavigate } from "react-router-dom";

export default function CarbonSteel35C8() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "35C8 / C35 / EN8 / SAE 1035 / 45C8",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">35C8 / C35 / EN8 / SAE 1035 / 45C8</h2>

      <p className="subtitle text-center">
        Medium carbon engineering steel offering good strength, toughness and
        wear resistance. These grades are widely used for shafts, automotive
        components and general engineering applications where moderate strength
        and durability are required.
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
                <td>Europe</td>
                <td>UK</td>
                <td>USA</td>
              </tr>

              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>IS</td>
                <td>EN / DIN</td>
                <td>BS</td>
                <td>SAE / AISI</td>
              </tr>

              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>35C8 / 45C8</td>
                <td>C35 / CK35</td>
                <td>EN8</td>
                <td>SAE 1035</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            35C8 / C35 / EN8 / SAE 1035 are medium carbon steels widely used in
            mechanical engineering applications. These steels provide a good
            balance of strength, toughness and machinability, making them
            suitable for various machine components.
          </p>

          <p>
            After heat treatment such as quenching and tempering, these grades
            can achieve improved mechanical properties and wear resistance. They
            are commonly used in the automotive, machinery and equipment
            manufacturing industries.
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
                  <td>0.32 – 0.40</td>
                  <td>0.15 – 0.35</td>
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
              <td>Tensile Strength</td>
              <td>600 – 750 MPa</td>
            </tr>

            <tr>
              <td>Yield Strength</td>
              <td>≈ 350 MPa</td>
            </tr>

            <tr>
              <td>Elongation</td>
              <td>≈ 16%</td>
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
                <td>850 – 880 °C</td>
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
          These carbon steels are widely used for manufacturing shafts, axles,
          gears, bolts, studs, automotive components, crankshafts, machine parts
          and general engineering components where moderate strength and
          toughness are required.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>

          <p>
            35C8 / C35 / EN8 / SAE 1035 carbon steel is available in hot rolled,
            forged, normalized and quenched & tempered conditions. Ventura
            Steels supplies this grade in round bars, flats, squares and forged
            blocks with mill test certification.
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
