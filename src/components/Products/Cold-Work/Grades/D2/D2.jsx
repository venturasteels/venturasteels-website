import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./cold-work-grade.css";

export default function D2() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "D2 / 1.2379 / HCHCR D2 ",
        selectedProduct: "Cold Work Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          D2 / 1.2379 / HCHCR D2 | Cold Work Tool Steel | Ventura Alloy & Steels
          Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="D2 / 1.2379 HCHCR Cold Work Tool Steel known for high wear resistance, high hardness and excellent abrasion resistance. View chemical composition, heat treatment, hardness, applications and stock availability. Ventura Alloy & Steels is a leading supplier of D2 steel in India."
        />

        <meta
          name="keywords"
          content="D2 steel, 1.2379 steel, HCHCR D2, cold work tool steel D2, high carbon high chromium steel, D2 chemical composition, D2 heat treatment, D2 hardness, D2 datasheet, D2 steel supplier India, SKD11 equivalent, Cr12MoV steel, D2 round bar, D2 flats, cold work die steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/cold-work-steel/d2"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "D2 Cold Work Tool Steel",
  "image": "https://venturasteels.com/image/cold-work-steel/Cr12MoV-round-bars.JPEG",
  "description": "D2 / 1.2379 high carbon high chromium cold work tool steel with high wear resistance, excellent hardness and abrasion resistance, widely used in cutting, stamping and forming tools.",
  
  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Cold Work Tool Steel",
  "category": "Cold Work Tool Steel",

  "url": "https://venturasteels.com/products/cold-work-steel/d2",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "D2 / 1.2379 / SKD11 / Cr12MoV"
    },
    {
      "@type": "PropertyValue",
      "name": "Form",
      "value": "Round, Flat"
    }
  ],

  "offers": {
    "@type": "Offer",
    "url": "https://venturasteels.com/products/cold-work-steel/d2",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
`}
        </script>
      </Helmet>
      <div className="grade-details">
        <h2 className="text-center">
          <strong>D2 / 1.2379 </strong> / HCHCR D2
        </h2>
        <p className="subtitle text-center">
          High-carbon, high-chromium tool steel with wear resistance and
          toughness.
        </p>

        {/* standards  */}
        <div className="cold-work-standards-scroll-wrapper mb-4">
          <div className="cold-work-standards-inner-scroll">
            <table className="standards-table">
              <tbody>
                <tr>
                  <td>
                    <strong>COUNTRY </strong>
                  </td>
                  <td>USA</td>
                  <td>Germany / Europe</td>
                  <td>Japan</td>
                  <td>China</td>
                  <td>UK</td>
                  <td>France</td>
                  <td>India</td>
                  <td>Russia</td>
                </tr>
                <tr>
                  <td>
                    <strong>STANDARDS</strong>
                  </td>
                  <td>ASTM / AISI</td>
                  <td>DIN / EN</td>
                  <td>JIS</td>
                  <td>GB</td>
                  <td>BS</td>
                  <td>AFNOR</td>
                  <td>IS</td>
                  <td>GOST</td>
                </tr>
                <tr>
                  <td>
                    <strong>EQUIVALENT NAME</strong>
                  </td>
                  <td>D2</td>
                  <td>1.2379 / X153CrMoV12</td>
                  <td>SKD11</td>
                  <td>Cr12MoV</td>
                  <td>BD2</td>
                  <td>Z160CDV12</td>
                  <td>D2 (as per AISI / DIN 1.2379)</td>
                  <td>Kh12MF (Х12МФ)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="overview-content">
            <p>
              Ventura Alloy and Steels Supplies and Stocks HCHCR D2 steel in
              India and abroad. D2 steel is an air hardening, high-carbon,
              high-chromium tool steel. It has high wear and abrasion resistant
              properties. It is heat treatable and will offer a hardness in the
              range 55-62 HRC, and is machinable in the annealed condition. It
              tends to be used as threading rolls and dies, icy trimming,
              cutting & stamping tools for sheet thickness up to 6mm, accuracy
              cutting instruments for sheet thicknesses up to 12 mm.
            </p>
          </div>
          <div className="cold-work-img">
            <img
              src="/image/Cold Work Tool Steels/d2.jpeg"
              alt="D2 Image"
              loading="lazy"
              width={250}
            />
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="cold-work-composition">
          <h3 className="mb-4 text-center">
            Chemical Composition (Typical Analysis in %)
          </h3>
          <div className="table-data d-flex justify-content-center">
            <div className="cold-work-chemical-composition cold-work-composition-table table-responsive-custom">
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
                    <th> V</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range</td>
                    <td>1.40-1.60</td>
                    <td>0.10-0.60</td>
                    <td>0.20-0.60</td>
                    <td>0.030 max</td>
                    <td>0.030 max</td>
                    <td>11.00-13.00</td>
                    <td> 0.70-1.00</td>
                    <td>0.80-1.20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* size range */}
        <section className="size-range">
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
                <td>20 to 450 MM | SQUARE – 50 to 155 MM</td>
              </tr>
              <tr>
                <td>Blocks</td>
                <td>
                  Thickness: 20 - 150 mm
                  <br />
                  Width: 40 – 450 mm
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* process routes */}
        <section className="process-route mt-3">
          <h3>Process Route</h3>
          <div className="process-flow">
            <div className="step">EAF </div>
            <span className="arrow">→</span>
            <div className="step">LF</div>
            <span className="arrow">→</span>
            <div className="step">VD / VOD </div>
            <span className="arrow">→</span>
            <div className="step">ESR (Optional – Premium Grades)</div>
            <span className="arrow">→</span>
            <div className="step">FORGING / ROLLING</div>
            <span className="arrow">→</span>
            <div className="step">ANNEALED (Soft Anneal / Spheroidize)</div>
            <span className="arrow">→</span>
            <div className="step">ROUGH TURNED / MILLED</div>
            <span className="arrow">→</span>
            <div className="step">HARDENED (Oil Quench)</div>
            <span className="arrow">→</span>
            <div className="step">DOUBLE / TRIPLE TEMPERED</div>
            <span className="arrow">→</span>
            <div className="step">FINISHED (Ground / Machined / Polished)</div>
          </div>
        </section>

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>Steel Properties</h2>
          <ul>
            <li>High Carbon High Chromium contents.</li>
            <li>
              High wear resistant and toughness due to Vanadium addition of
              0.90%.
            </li>
            <li>
              Supply condition is an Annealed which offer hardness to reach
              57-59 HRC.
            </li>
            <li>Machinable in annealed condition.</li>
            <li>Better than D3 steel due to high alloy properties.</li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>Applications</h2>
          <p>
            HCHCR D2 cold work tool steel can be utilized for cold stamping or
            forming dies, cold forming rolls, slitters, shear blades, tools,
            chipper knives, tyre shredders, punches, trimming, cutting threading
            dies, stamping tools and more.
          </p>
        </section>

        {/* Thermal properties */}
        <section className="coldwork-thermal-properties">
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
                      <td>10.6</td>
                    </tr>
                    <tr>
                      <td>20-200</td>
                      <td>11.5</td>
                    </tr>
                    <tr>
                      <td>20-300</td>
                      <td>11.8</td>
                    </tr>
                    <tr>
                      <td>20-400</td>
                      <td>12.3</td>
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
                      <td>16.7</td>
                    </tr>
                    <tr>
                      <td>350</td>
                      <td>20.5</td>
                    </tr>
                    <tr>
                      <td>700</td>
                      <td>24.2</td>
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
                      <td>840-870</td>
                    </tr>
                    <tr>
                      <th>Cooling</th>
                      <td>Furnace</td>
                    </tr>
                    <tr>
                      <th>Hardness HB</th>
                      <td>max. 250</td>
                    </tr>
                    <tr>
                      <th>Stress-relief Annealing °C</th>
                      <td>approx. 660-710</td>
                    </tr>
                    <tr>
                      <th>Hardening °C</th>
                      <td>1000-1050</td>
                    </tr>
                    <tr>
                      <th>Quenching</th>
                      <td>Air, Oil, Salt Bath 500-550°C</td>
                    </tr>
                    <tr>
                      <th>Hardness after quenching HRC</th>
                      <td>63</td>
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
                      <td>64</td>
                    </tr>
                    <tr>
                      <td>200</td>
                      <td>61.5</td>
                    </tr>
                    <tr>
                      <td>300</td>
                      <td>58.5</td>
                    </tr>
                    <tr>
                      <td>400</td>
                      <td>58.5</td>
                    </tr>
                    <tr>
                      <td>500</td>
                      <td>59</td>
                    </tr>
                    <tr>
                      <td>525</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>550</td>
                      <td>57</td>
                    </tr>
                    <tr>
                      <td>600</td>
                      <td>50</td>
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
              We keep the materials from <strong>China</strong>.
            </p>
            <div className="partner-flags mt-4">
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
              <strong>Grades in Bold (e.g. D2 / 1.2379 )</strong> are kept in
              stock and supplied on a regular basis. <br />
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

          <span>MOQ: 10 Tonnes</span>
        </div>
      </div>
    </>
  );
}
