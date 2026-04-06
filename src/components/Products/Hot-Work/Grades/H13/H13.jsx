import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function H13() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "H13 / AISI H13 / DIN 2344",
        selectedProduct: "Hot Work Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          H13 / AISI H13 / DIN 2344 | Hot Work Tool Steel | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="H13 / AISI H13 / DIN 1.2344 Hot Work Tool Steel known for excellent toughness, thermal fatigue resistance and high red hardness. View chemical composition, heat treatment, hardness, applications and available stock sizes. Ventura Alloy & Steels is a leading supplier of H13 steel in India with ready stock in rounds, flats and blocks."
        />

        <meta
          name="keywords"
          content="H13 steel, AISI H13, DIN 1.2344, H13 tool steel, hot work tool steel, H13 chemical composition, H13 heat treatment, H13 hardness, H13 datasheet, Ventura Alloy and Steels, H13 steel supplier India, 1.2344 hot work steel, die steel H13, H13 round bar, H13 steel stock, H13 price, H13 forging die steel, H13 industrial tool steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/hot-work-steel/h13"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "H13 Hot Work Tool Steel",
  "image": [
    "https://venturasteels.com/image/h13-hot-work-steel.png"
  ],
  "description": "H13 / AISI H13 / DIN 1.2344 hot work tool steel with excellent toughness, thermal fatigue resistance and high temperature strength.",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Hot Work Tool Steel",
  "url": "https://venturasteels.com/products/hot-work-steel/h13",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "H13 / AISI H13 / DIN 1.2344 / SKD61"
    },
    {
      "@type": "PropertyValue",
      "name": "Form",
      "value": "Round, Flat, Block"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/hot-work-steel/h13"
  }
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">
          <strong>H13 </strong> / AISI H13 / DIN 2344
        </h1>
        <p className="subtitle text-center">
          Premium Hot Work Tool Steel with high toughness & wear resistance.
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
                  <td>India</td>
                  <td>USA</td>
                  <td>Europe</td>
                  <td>Germany</td>
                  <td>China</td>
                  <td>Japan</td>
                  <td>Russia</td>
                </tr>
                <tr>
                  <td>
                    <strong>STANDARDS</strong>
                  </td>
                  <td>IS</td>
                  <td>AISI / SAE</td>
                  <td>En</td>
                  <td>DIN, WNr</td>
                  <td>GB</td>
                  <td>JIS</td>
                  <td>GOST</td>
                </tr>
                <tr>
                  <td>
                    <strong>EQUIVALENT NAME</strong>
                  </td>
                  <td>XT35Cr5MoV1</td>
                  <td>H13</td>
                  <td>X40CrMoV5-1</td>
                  <td>X40CrMoV5-1</td>
                  <td>4Cr5MoSiV1</td>
                  <td>SKD61</td>
                  <td>4Ch4VMFS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 ">
          <div className="overview-content">
            <p>
              SAE/AISI H13 is a high-performance tool steel that is comparable
              to DIN 1.2344, GB 4Cr5MoSiV1, and JIS SKD61. It has outstanding
              toughness, heat resistance, and hardenability due to the presence
              of chromium, molybdenum, and vanadium.
            </p>
            <h4>Important attributes:</h4>
            <ul>
              <li>
                High-temperature performance: Prevents thermal fatigue, hot
                cracking, and softening.
              </li>
              <li>
                Durability: combines high wear resistance, abrasion resistance,
                and shock resistance.
              </li>
              <li>
                Machinability and polishability: Easy machining and finishing
                due to uniform structure.
              </li>
              <li>
                ESR grade (H13 ESR): A refined, uniform steel with outstanding
                micro-cleanliness that is perfect for high-temperature and
                aluminum pressure die casting applications.
              </li>
              <li>
                100% ultrasonic testing in accordance with NDT standards ensures
                quality.
              </li>
            </ul>
            <p>
              Applications needing strength, heat resistance, toughness, and
              exact dimensional stability are best suited for H13 steel.
            </p>
          </div>
          <div className="hot-work-img">
            <img
              src="/image/Hot Work Tool Steels/Hot Work Tool Steel H13 Round Bars.png"
              alt="DB6 Image"
              width={300}
            />
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="hot-work-composition">
          <h2 className="mb-4 text-center">
            H13 Chemical Composition (Typical Analysis in %)
          </h2>
          <div className="table-data d-flex justify-content-center">
            <div className="hot-work-chemical-composition hot-work-composition-table table-responsive-custom">
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
                    <th>V</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range</td>
                    <td>0.35-0.45</td>
                    <td>0.90-1.20</td>
                    <td>0.30-0.50</td>
                    <td> 0.03</td>
                    <td>0.004</td>
                    <td>4.90-5.40</td>
                    <td>1.20-1.75</td>
                    <td>0.90-1.20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* size-range */}
        <section className="size-range">
          <h2 className="text-center">H13 Hot Work Steel Size Range</h2>
          <table className="size-table">
            <thead>
              <tr>
                <th>Shape</th>
                <th>Dimensions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rounds </td>
                <td>10 to 500 MM DIA</td>
              </tr>
              <tr>
                <td>Flats </td>
                <td>
                  Thickness: 20 - 400 MM MAX
                  <br />
                  Width: 40 - 700 MM MAX
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* process route */}
        <section className="process-route mx-auto mt-3">
          <h3>Process Route of H13 Hot Work Tool Steel</h3>
          <p className="text-muted text-center">
            Applicable for <strong>H13 / AISI H13 / DIN 2344</strong>
          </p>
          <div className="process-flow">
            <div className="step">EAF</div>
            <span className="arrow">→</span>
            <div className="step">LF</div>
            <span className="arrow">→</span>
            <div className="step">VD</div>
            <span className="arrow">→</span>
            <div className="step">ESR</div>
            <span className="arrow">→</span>
            <div className="step">FORGED</div>
            <span className="arrow">→</span>
            <div className="step">ANNEALED</div>
            <span className="arrow">→</span>
            <div className="step">
              ROUGH TURNED FOR ROUNDS / MILLED FOR FLATS
            </div>
            <span className="arrow">→</span>
            <div className="step">OIL / AIR QUENCHED</div>
            <span className="arrow">→</span>
            <div className="step">DOUBLE TEMPERED</div>
            <span className="arrow">→</span>
            <div className="step">MACHINED TO SIZE</div>
          </div>
        </section>

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>Steel Properties of H13 Hot Work Tool Steel</h2>
          <ul>
            <li>Great toughness</li>
            <li>Thermal conductivity</li>
            <li>High hot-wear resistance</li>
            <li>Hot tensile strength</li>
            <li>Insusceptible for hot cracking (Hot Crack resistant)</li>
            <li>Can be water-cooled to a restricted degree</li>
            <li>High Hardenability</li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>Applications of H13 Hot Work Tool Steel</h2>
          <p>
            This steel is especially used for ejector pins, tool holders and
            shrink work chucks. It is majorly widely utilized for manufacture of
            hot forging die & inserts, hot gripper dies, hot nut tools, hot
            header dies, brass forging and pressing dies, hot forging aluminium
            base dies, aluminium casting and extrusion dies, zinc die casting
            dies, extrusion mandrels, cores, die holder blocks, hot press dies,
            hot work punches, etc.
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
                      <td>10.8</td>
                    </tr>
                    <tr>
                      <td>20-200</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>20-300</td>
                      <td>12.4</td>
                    </tr>
                    <tr>
                      <td>20-400</td>
                      <td>12.7</td>
                    </tr>
                    <tr>
                      <td>20-500</td>
                      <td>13.1</td>
                    </tr>
                    <tr>
                      <td>20-600</td>
                      <td>13.3</td>
                    </tr>
                    <tr>
                      <td>20-700</td>
                      <td>13.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-6">
              <div className="property-card mb-3">
                <h4>Thermal Conductivity</h4>

                <div className="col-md-6">
                  <div className="property-card mb-3">
                    <h4>Thermal Conductivity</h4>

                    <div className="thermal-table-wrapper">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Temperature (°C)</th>
                            <th>W / (m*K) Annealed</th>
                            <th>W / (m*K) Quenched & Tempered</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>20</td>
                            <td>27.1</td>
                            <td>25.4</td>
                          </tr>
                          <tr>
                            <td>350</td>
                            <td>30.4</td>
                            <td>27.7</td>
                          </tr>
                          <tr>
                            <td>700</td>
                            <td>33.2</td>
                            <td>30.4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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
                      <td>760-810</td>
                    </tr>
                    <tr>
                      <th>Cooling</th>
                      <td>Furnace</td>
                    </tr>
                    <tr>
                      <th>Hardness HB</th>
                      <td>max. 240</td>
                    </tr>
                    <tr>
                      <th>Stress-Relief Annealing °C</th>
                      <td>approx. 610-660</td>
                    </tr>
                    <tr>
                      <th>Hardening °C</th>
                      <td>1030-1060</td>
                    </tr>
                    <tr>
                      <th>Quenching</th>
                      <td>Air, Oil, Salt Bath 500-550°C</td>
                    </tr>
                    <tr>
                      <th>Hardness after Quenching HRC</th>
                      <td>55</td>
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
                      <td>54</td>
                    </tr>
                    <tr>
                      <td>210</td>
                      <td>53</td>
                    </tr>
                    <tr>
                      <td>300</td>
                      <td>53</td>
                    </tr>
                    <tr>
                      <td>400</td>
                      <td>55</td>
                    </tr>
                    <tr>
                      <td>500</td>
                      <td>56</td>
                    </tr>
                    <tr>
                      <td>550</td>
                      <td>54</td>
                    </tr>
                    <tr>
                      <td>600</td>
                      <td>51</td>
                    </tr>
                    <tr>
                      <td>650</td>
                      <td>43</td>
                    </tr>
                    <tr>
                      <td>700</td>
                      <td>34</td>
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
              We keep the materials from <strong>India</strong> ,{" "}
              <strong>China</strong> and
              <strong>Europe</strong>.
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
              <img
                src="/image/europe-flag.jpeg"
                alt="Europe Flag"
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
              <strong>Grades in Bold (e.g. H13)</strong> are kept in stock and
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
          {/* <span>MOQ: 200 kg | Price: ₹135/kg*</span> */}
        </div>
      </div>
    </>
  );
}
