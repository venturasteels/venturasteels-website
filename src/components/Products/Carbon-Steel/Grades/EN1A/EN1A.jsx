import { useNavigate } from "react-router-dom";

export default function CarbonSteelEN1A() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "EN 1A / EN 1A PB / EN 1A L / 230M07 PB",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <div className="grade-details">
      <h2 className="text-center">EN 1A / EN 1A PB / EN 1A L / 230M07 PB</h2>

      <p className="subtitle text-center">
        Free-cutting low carbon steel designed for excellent machinability and
        high production machining operations. These grades are widely used for
        automatic machining, fasteners and precision turned components.
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
                <td>UK</td>
                <td>Europe</td>
                <td>USA</td>
                <td>Germany</td>
              </tr>

              <tr>
                <td>
                  <strong>STANDARD</strong>
                </td>
                <td>BS</td>
                <td>EN</td>
                <td>AISI</td>
                <td>DIN</td>
              </tr>

              <tr>
                <td>
                  <strong>Equivalent Grades</strong>
                </td>
                <td>EN 1A / 230M07 PB</td>
                <td>11SMn30</td>
                <td>AISI 1215</td>
                <td>1.0715</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            EN 1A is a free-machining low carbon steel specifically developed
            for high-speed automatic machining processes. The addition of sulfur
            and lead (in EN 1A PB and EN 1A L) significantly improves
            machinability, making it ideal for mass-production turned parts.
          </p>

          <p>
            These grades are commonly used where extensive machining is required
            but high mechanical strength is not critical. The material offers
            excellent surface finish and consistent machining performance in
            automatic lathes and CNC machines.
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
                  <th>S</th>
                  <th>P</th>
                  <th>Pb</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Range</td>
                  <td>≤ 0.15</td>
                  <td>0.80 – 1.20</td>
                  <td>0.20 – 0.35</td>
                  <td>≤ 0.060</td>
                  <td>0.15 – 0.35 (Lead grades)</td>
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
              <td>370 – 500 MPa</td>
            </tr>

            <tr>
              <td>Yield Strength</td>
              <td>≈ 240 MPa</td>
            </tr>

            <tr>
              <td>Elongation</td>
              <td>≈ 10 – 15%</td>
            </tr>

            <tr>
              <td>Hardness</td>
              <td>≈ 110 – 160 HB</td>
            </tr>

            <tr>
              <td>Machinability</td>
              <td>Very High (Free Cutting Steel)</td>
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
          <div className="step">Hot Rolling</div>
          <span className="arrow">→</span>
          <div className="step">Cold Drawing / Machining</div>
        </div>

        <div className="heat-card mt-4">
          <h4>Heat Treatment Guidelines</h4>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Annealing Temperature</th>
                <td>680 – 720 °C</td>
              </tr>

              <tr>
                <th>Cooling</th>
                <td>Furnace Cooling</td>
              </tr>

              <tr>
                <th>Typical Supply Condition</th>
                <td>Cold drawn or bright bar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2>Applications</h2>

        <p>
          EN 1A free-cutting carbon steel is commonly used for automatic
          machining components such as bolts, nuts, studs, bushings, precision
          turned parts, fittings, threaded components and high-volume machined
          parts produced on CNC and automatic lathes.
        </p>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability & Supply</h4>

          <p>
            EN 1A / EN 1A PB / EN 1A L carbon steel is typically supplied in
            bright drawn bars, hot rolled bars or cold finished bars. Ventura
            Steels can supply this grade in round bars, flats and precision
            machined bars with mill test certification.
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
      <div className="cta-block">
        <button onClick={handleEnquiryClick} className="btn btn-primary mt-3">
          Enquire Now
        </button>

        <span>MOQ: 5 Tonnes</span>
      </div>
    </div>
  );
}
