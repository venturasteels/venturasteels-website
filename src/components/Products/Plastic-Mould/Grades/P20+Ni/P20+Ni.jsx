import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./P20+Ni.css";

export default function P20Ni() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "P20+Ni / 1.2738",
        selectedProduct: "Plastic Mould Steel",
      },
    });
  };
  return (
    <div className="grade-details">
      <h2 className="text-center">
        P20+Ni / <strong> 1.2738 </strong>
      </h2>
      <p className="subtitle text-center">
        P20+Ni is a high-performance pre-hardened steel for durable, high-finish
        plastic moulds.
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
              </tr>
              <tr>
                <td>
                  <strong>STANDARDS</strong>
                </td>
                <td>AISI </td>
                <td>DIN </td>
                <td>ISO</td>
                <td>GB </td>
              </tr>
              <tr>
                <td>
                  <strong>EQUIVALENT NAME</strong>
                </td>
                <td>P20+Ni</td>
                <td>1.2738</td>
                <td>40CrMnNiMo 8-6-4</td>
                <td> 3Cr2NiMo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            It has excellent hardening penetration and is specially used for
            plastic injection die moulds. The characteristics of a material are
            right sharpening, photo-etching properties with high purity and good
            homogeneity. P20+Ni is an upgraded version of 2311 plastic mould
            steel, which is normally supplied in pre-hardened condition.
            Hardness in as provided condition 280-320 HB with having uniform
            hardness and the extra nickel content of 1% increases through
            hardening. It has great machinability, appropriate for plastic molds
            for medium and huge size, texturing, adequate corrosion resistance,
            fine polish ability, vacuum-degassed steel. It can be subject to a
            nitriding treatment to enhance its wear resistance.
          </p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Plastic Mould Steels/Plastic Mould Steel P20+N1 Flat Bar.png"
            alt="DB6 Image"
            width={250}
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
                  <th>Ni</th>
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
                  <td>1.90-1.20</td>
                  <td>0.15-0.35</td>
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
      <section className="process-route mx-auto mt-3">
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
      </section>

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <ul>
          <li>
            P20+Ni is an upgraded version of 2311 plastic mould steel, which is
            normally supplied in pre-hardened condition
          </li>
          <li>Hardness in as provided condition 280-320 HB</li>
          <li>Additional nickel content of 1% increases through hardening</li>
          <li>P20+Ni can be micro-alloyed</li>
          <li>Good machinability</li>
          <li>Suitable for texturing</li>
          <li>Outstanding Polish ability</li>
          <li>Corrosion resistance</li>
          <li>Vacuum-degassed steel with the following excellent features.</li>
        </ul>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          P20+Ni is an equivalent grade of most popular steel grade of DIN 2738
          which is applicable for large & small plastic mould dies. It is
          utilized for automotive industries, bolster plates for presses, dies
          for domestic goods, die holders and shoe blocks for drop hammers, high
          finishing plastic die, forging dies, press cassettes, up setter
          blocker, different dies and mould for plastic products etc.
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
                    <td>11.2</td>
                  </tr>
                  <tr>
                    <td>20-200</td>
                    <td>12.8</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>13.5</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>13.7</td>
                  </tr>
                  <tr>
                    <td>20-500</td>
                    <td>14.3</td>
                  </tr>
                  <tr>
                    <td>20-600</td>
                    <td>14.7</td>
                  </tr>
                  <tr>
                    <td>20-700</td>
                    <td>14.9</td>
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
                    <td>20</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>33</td>
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
                    <th>Hardness HB</th>
                    <td>max. 235</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>840-870</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Polymer or Oil</td>
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
                    <td>51.5</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>50.2</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>46.2</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>43</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>39</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>29</td>
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
            <strong>Grades in Bold (e.g. 1.2738 )</strong> are kept in stock and
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
