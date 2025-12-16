import { useNavigate } from "react-router-dom";
import UnderConstruction from "../../../../UnderConstruction";

const AlloySteelEN24 = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "EN 24 / 18CrNiMo6",
        selectedProduct: "Alloy Steel",
      },
    });
  };
  return (
    <>
      <div className="grade-details">
        {/* Title */}
        <h2 className="text-center">
          EN 24 / 18CrNiMo6
        </h2>
        <p className="subtitle text-center">
          Medium carbon low alloy steel offering high toughness, strength and
          fatigue resistance.
        </p>

        {/* Standards */}
        <div className="standards-scroll-wrapper mb-4">
          <div className="standards-inner-scroll">
            <table className="standards-table">
              <tbody>
                <tr>
                  <td>
                    <strong>STANDARDS</strong>
                  </td>
                  <td>EN24</td>
                  <td>AISI 4340</td>
                  <td>DIN 1.6511</td>
                  <td>BS 970</td>
                  <td>IS 4432</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="overview-content">
            <p>
              EN24 steel is a medium carbon, low alloy steel known for its
              toughness and strength in general engineering applications. It
              contains nickel, chromium and molybdenum which provide excellent
              hardenability and resistance to wear and impact.
              <br />
              <br />
              EN24 can be supplied in annealed, hardened & tempered conditions.
              Typical tensile strength ranges from <strong>930–1080 MPa</strong>
              . Surface hardening by induction or nitriding is also possible.
            </p>
          </div>

          <div className="d2-img d-flex gap-3">
            <img
              src="/image/Alloy Steels/EN 24 Flat Bars.png"
              alt="EN24 Round Bar"
              width={250}
            />
            <img
              src="/image/Alloy Steels/EN 24 Round Bars.png"
              alt="EN24 Flat Bar"
              width={250}
            />
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="composition">
          <h3 className="mb-4 text-center">
            Chemical Composition (Typical Analysis in %)
          </h3>

          <div className="table-data d-flex justify-content-center">
            <div className="chemical-composition composition-table">
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>C</td>
                    <td>0.38 – 0.43</td>
                  </tr>
                  <tr>
                    <td>Mn</td>
                    <td>0.60 – 0.80</td>
                  </tr>
                  <tr>
                    <td>Si</td>
                    <td>0.15 – 0.35</td>
                  </tr>
                  <tr>
                    <td>P</td>
                    <td>0.035 max</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>0.040 max</td>
                  </tr>
                  <tr>
                    <td>Ni</td>
                    <td>1.65 – 2.00</td>
                  </tr>
                  <tr>
                    <td>Cr</td>
                    <td>0.70 – 0.90</td>
                  </tr>
                  <tr>
                    <td>Mo</td>
                    <td>0.20 – 0.30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Steel Properties */}
        <section className="steel-properties">
          <h2>Steel Properties</h2>
          <ul>
            <li>High tensile strength and toughness</li>
            <li>Excellent fatigue and impact resistance</li>
            <li>Good hardenability through section</li>
            <li>Can be induction hardened or nitrided</li>
            <li>Good machinability in annealed condition</li>
          </ul>
        </section>

        {/* Applications */}
        <section className="applications">
          <h2>Applications</h2>
          <p>
            EN24 steel is widely used for shafts, gears, pinions, crankshafts,
            connecting rods, heavy-duty bolts, studs, and high-strength machine
            components requiring toughness and shock resistance.
          </p>
        </section>

        {/* Thermal Properties */}
        <section className="thermal-properties">
          <h2 className="thermal-section-title">Thermal Properties</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="property-card mb-3">
                <h4>Thermal Conductivity</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Temperature (°C)</th>
                      <th>W / (m·K)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20</td>
                      <td>40.5</td>
                    </tr>
                    <tr>
                      <td>350</td>
                      <td>32.5</td>
                    </tr>
                    <tr>
                      <td>700</td>
                      <td>25.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Heat Treatment */}
        <section className="heat-treatment">
          <h2 className="section-title">Heat Treatment</h2>

          <div className="heat-card mb-3">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Soft Annealing °C</th>
                  <td>650 – 700</td>
                </tr>
                <tr>
                  <th>Cooling</th>
                  <td>Slow</td>
                </tr>
                <tr>
                  <th>Hardness HB</th>
                  <td>max. 280</td>
                </tr>
                <tr>
                  <th>Stress Relief °C</th>
                  <td>630 – 650</td>
                </tr>
                <tr>
                  <th>Hardening °C</th>
                  <td>1190 – 1230</td>
                </tr>
                <tr>
                  <th>Quenching</th>
                  <td>Oil / Salt Bath / Air</td>
                </tr>
                <tr>
                  <th>Tempering °C</th>
                  <td>530 – 560</td>
                </tr>
                <tr>
                  <th>Hardness after Tempering</th>
                  <td>64 – 66 HRC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Size Range */}
        {/* <section className="size-range">
          <h3>Size Range</h3>
          <table className="size-table">
            <tbody>
              <tr>
                <td>Rounds</td>
                <td>6 – 450 mm Dia</td>
              </tr>
              <tr>
                <td>Squares</td>
                <td>32 – 155 mm</td>
              </tr>
              <tr>
                <td>Flats</td>
                <td>Thickness: 15 – 105 mm | Width: 40 – 405 mm</td>
              </tr>
            </tbody>
          </table>
        </section> */}

        {/* Stocking Partners */}
        <section className="stocking-partners py-5">
          <div className="container text-center">
            <h2 className="section-title mb-4">Stocking Partners</h2>
            <p className="lead">
              We keep the material from <strong>China</strong> and{" "}
              <strong>India</strong>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-block">
          <button
            onClick={handleEnquiryClick}
            className="btn btn-enquiry mt-3 mx-auto"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AlloySteelEN24;
