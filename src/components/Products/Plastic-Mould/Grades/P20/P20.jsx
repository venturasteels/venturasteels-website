import { useNavigate } from "react-router-dom";

export default function P20() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "P20 / 1.2311",
        selectedProduct: "Plastic Mould Steel",
      },
    });
  };
  return (
    <div className="grade-details">
      <h2 className="text-center">
        P20 / <strong> 1.2311</strong>
      </h2>
      <p className="subtitle text-center">
        P20 is a pre-hardened mould steel with uniform hardness, great
        weldability, and excellent polishability.
      </p>
      {/* standards  */}
      <div className="hot-work-standards-scroll-wrapper mb-4">
        <div className="hot-work-standards-inner-scroll">
          <table className="standards-table">
            <tbody>
              <tr>
                <td>
                  <strong>COUNTRY </strong>
                </td>
                <td>USA</td>
                <td>Germany</td>
                <td>International</td>
                <td>China</td>
                <td>Japan</td>
              </tr>
              <tr>
                <td>
                  <strong>STANDARDS</strong>
                </td>
                <td>ASTM A681 </td>
                <td>DIN </td>
                <td>ISO</td>
                <td>GB </td>
                <td>JIS </td>
              </tr>
              <tr>
                <td>
                  <strong>EQUIVALENT NAME</strong>
                </td>
                <td>P20</td>
                <td>1.2311</td>
                <td>35CrMo2</td>
                <td> 3Cr2Mo</td>
                <td>SCM4 or PX5 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            P20 steel is the pre hardened plastic mould steel and the hardness
            is distributed uniformly in large cross sections that have fantastic
            weldability with minimum hardness, high polish ability and less
            streak texture making finishing easier.
          </p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Plastic Mould Steels/P 20 Flat bars.png"
            alt="DB6 Image"
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
                  <th>P</th>
                  <th>S</th>
                  <th>Cr</th>
                  <th>Mo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>0.35-0.45</td>
                  <td>0.20-0.40</td>
                  <td>1.30-1.60</td>
                  <td>0.030 max</td>
                  <td>0.030 max</td>
                  <td>1.80-2.10</td>
                  <td>0.15-0.35 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* size range */}
      {/* <section className="size-range">
        <h3>Size Range</h3>
        <table className="size-table">
          <thead>
            <tr>
              <th>Shape</th>
              <th>Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rounds</td>
              <td>Diameter: 102 - 710 mm</td>
            </tr>
            <tr>
              <td>Blocks</td>
              <td>
                Thickness: 125 – 1000 mm
                <br />
                Width: 130 – 1600 mm
              </td>
            </tr>
          </tbody>
        </table>
      </section> */}

      {/* process routes */}
      {/* <section className="process-route mx-auto mt-3">
        <h3>Process Route</h3>
        <div className="process-flow">
          <div className="step">EAF</div>
          <span className="arrow">→</span>
          <div className="step">LF</div>
          <span className="arrow">→</span>
          <div className="step">VD</div>
          <span className="arrow">→</span>
          <div className="step">CONTINUOUS CASTING / INGOT</div>
          <span className="arrow">→</span>
          <div className="step">FORGED / ROLLED</div>
          <span className="arrow">→</span>
          <div className="step">ANNEALED</div>
          <span className="arrow">→</span>
          <div className="step">MACHINED (Rounds / Flats)</div>
          <span className="arrow">→</span>
          <div className="step">PRE-HARDENED (Approx. 28–34 HRC)</div>
          <span className="arrow">→</span>
          <div className="step">FINISH MACHINED / POLISHED</div>
        </div>
      </section> */}

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <ul>
          <li>P20 steel is pre-hardened plastic mould steel</li>
          <li>Hardness is distributed uniformly in large cross sections</li>
          <li>Fantastic weldability</li>
          <li>Size Section accessibility up to 255 mm thickness</li>
          <li>Supply hardness is 240-280 BHN</li>
          <li>Least hardness elevation</li>
          <li>Good mirror polish ability</li>
          <li>Less streak texture making finishing easier</li>
        </ul>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          The P20 steel is an equivalent to DIN 2311 plastic mould steel and
          used for die holders, casting dies, zinc die, bolsters, backers, shoe
          blocks, injection moulds, mould frames for plastic moulds, pressure
          casting moulds, recipient sleeves etc.
        </p>
      </section>

      {/* Thermal properties */}
      <section className="hotwork-thermal-properties">
        <h2 className="thermal-section-title">Thermal Properties</h2>

        <div className="row">
          <div className="col-md-6">
            <div className="property-card mb-3">
              <h4>Coefficient of Thermal Expansion</h4>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Temperature (°C)</th>
                    <th>10¯⁶ m / (m*K)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20-100</td>
                    <td>12.7</td>
                  </tr>
                  <tr>
                    <td>20-150</td>
                    <td>12.8</td>
                  </tr>
                  <tr>
                    <td>20-200</td>
                    <td>13.1</td>
                  </tr>
                  <tr>
                    <td>20-250</td>
                    <td>13.3</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>13.6</td>
                  </tr>
                  <tr>
                    <td>20-350</td>
                    <td>13.7</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>13.8</td>
                  </tr>
                  <tr>
                    <td>20-450</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td> 20-500</td>
                    <td>14.3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-6">
            <div className="property-card mb-3">
              <h4>Thermal Conductivity</h4>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Temperature (°C)</th>
                    <th>W / (m*K)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>23</td>
                    <td>32</td>
                  </tr>
                  <tr>
                    <td>150</td>
                    <td>32.8</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>31.4</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>30.2</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>29.6</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>27.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* heat treatment */}
      <section className="heat-treatment">
        <h2 className="section-title">Heat Treatment</h2>

        <div className="row">
          {/* Basic Heat Treatment Data */}
          <div className="col-md-6">
            <div className="heat-card mb-3">
              <h4>Heat Treatment Steps</h4>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Soft Annealing °C</th>
                    <td>710-740</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td>Furnace</td>
                  </tr>
                  <tr>
                    <th>Hardness HB </th>
                    <td>max. 235</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>850-880</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Oil or Salt Bath 180-220 °C</td>
                  </tr>
                  <tr>
                    <th>Hardness after Quenching HRC</th>
                    <td>51</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tempering Data */}
          <div className="col-md-6">
            <div className="heat-card mb-3">
              <h4>Tempering (°C after quenching)</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Temp (°C)</th>
                    <th>HRC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>100</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>50.5</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>48.5</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>46</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>42</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>36.5</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>28</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* stocking partner */}
      <section className="stocking-partners py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Stocking Partners</h2>
          <p className="lead">
            We keep the materials from <strong>India</strong> and
            <strong> China</strong>.
          </p>
          <div className="partner-flags mt-4">
            <img
              src="/image/india-flag.png"
              alt="India Flag"
              className="flag-img mx-3"
            />
            <img
              src="/image/china-flag.png"
              alt="China"
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
            <strong>Grades in Bold (e.g. 1.2311 )</strong> are kept in stock and
            supplied on a regular basis. <br />
            For other grades, we accept <strong>advance orders</strong> on MOQ
            basis as per size requirements.
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
