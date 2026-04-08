import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function D3() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "D3 / 1.2080 / HCHCR D3",
        selectedProduct: "Cold Work Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          D3 / 1.2080 / HCHCR D3 | Cold Work Tool Steel | Ventura Alloy & Steels
          Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="D3 / 1.2080 HCHCR Cold Work Tool Steel known for extremely high wear resistance, high hardness and excellent abrasion resistance. View chemical composition, heat treatment, hardness, applications and stock availability. Ventura Alloy & Steels is a trusted supplier of D3 steel in India."
        />

        <meta
          name="keywords"
          content="D3 steel, 1.2080 steel, HCHCR D3, cold work tool steel D3, high carbon high chromium steel, D3 chemical composition, D3 heat treatment, D3 hardness, D3 datasheet, D3 steel supplier India, SKD1 equivalent, Cr12 steel, D3 round bar, D3 flats, cold work die steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/cold-work-steel/d3"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "D3 Cold Work Tool Steel",
  "description": "D3 / 1.2080 high carbon high chromium cold work tool steel with extremely high wear resistance and hardness, ideal for cutting, blanking and forming applications.",
  "brand": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },
  "material": "Cold Work Tool Steel",
  "url": "https://venturasteels.com/products/cold-work-steel/d3",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "D3 / 1.2080 / SKD1 / Cr12"
    },
    {
      "@type": "PropertyValue",
      "name": "Form",
      "value": "Round, Flat"
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h2 className="text-center">
          <strong>D3 / 1.2080 </strong> / HCHCR D3
        </h2>
        <p className="subtitle text-center">
          High-carbon, high-chromium tool steel with superior wear resistance.
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
                  <td>D3</td>
                  <td>1.2080 / X210Cr12</td>
                  <td>SKD1</td>
                  <td>Cr12</td>
                  <td>BD3</td>
                  <td>Z200C12</td>
                  <td>D3 (as per AISI / DIN 1.2080)</td>
                  <td>Kh12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="overview-content">
            <p>
              Ventura Alloy and Steels Supplies and Stocks HCHCR D3 tool steel
              in India and abroad. D3 Steel have 12% ledeburitic chromium tool
              steel with great wear resistance. Basically it is used as cutting
              tools for sheets up to 4 mm thickness, blanking dies for paper and
              plastics, trimming dies, shear cutting edges and rotational shear
              edges for sheet thicknesses up to 2 mm.
            </p>
          </div>
          <div className="cold-work-img">
            <img
              src="/image/Cold Work Tool Steels/Cold Work - D3.png"
              alt="D3 Image"
              loading="lazy"
              width={300}
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
                    <td>C</td>
                    <td>Si</td>
                    <td>Mn</td>
                    <td>P</td>
                    <td>S</td>
                    <td>Cr</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Range</th>
                    <td>2.00-2.35</td>
                    <td>0.10-0.60</td>
                    <td>0.20-0.60</td>
                    <td>0.030 max</td>
                    <td>0.030 max</td>
                    <td>11.00-13.00</td>
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
                <td>8 - 450 mm | Square : 11 - 155 mm</td>
              </tr>
              <tr>
                <td>Blocks</td>
                <td>
                  Thickness: 6 - 150 mm
                  <br />
                  Width: 20 – 505 mm
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
          <p>
            D3 Steel contains properties of High Carbon 2% and High chromium 12
            % tool steel with high wear resistance ability. Its supply condition
            is typically annealed to easy machining and its prescribed hardness
            is 57-58 HRC after making the dies and tools.
          </p>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>Applications</h2>
          <p>
            HCHCR D3 tool steel is utilized in cold dies and tooling application
            which requires high degree (level) of accuracy in hardening and
            tempering. For example, dies drawing, forming cold rolls, blanking
            dies for paper and plastics, powder metal tooling and blanking &
            trimming dies, shear blades, ejector pins, cold die punches etc.
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
                      <td>10.7</td>
                    </tr>
                    <tr>
                      <td>20-200</td>
                      <td>11.6</td>
                    </tr>
                    <tr>
                      <td>20-300</td>
                      <td>12.3</td>
                    </tr>
                    <tr>
                      <td>20-400</td>
                      <td>12.6</td>
                    </tr>
                    <tr>
                      <td>20-500</td>
                      <td>12.9</td>
                    </tr>
                    <tr>
                      <td>20-600</td>
                      <td>13.2</td>
                    </tr>
                    <tr>
                      <td>20-700</td>
                      <td>13.3</td>
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
                      <td>16.6</td>
                    </tr>
                    <tr>
                      <td>350</td>
                      <td>20.5</td>
                    </tr>
                    <tr>
                      <td>700</td>
                      <td>24.3</td>
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

          <div className="row-center">
            {/* Basic Heat Treatment Data */}
            <div className="col-md-8">
              <div className="heat-card mb-3">
                <h4>Heat Treatment Steps</h4>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Soft Annealing °C</th>
                      <td colSpan="2">810-850</td>
                    </tr>
                    <tr>
                      <th>Cooling</th>
                      <td colSpan="2">Furnace</td>
                    </tr>
                    <tr>
                      <th>Hardness HB</th>
                      <td colSpan="2">max. 250</td>
                    </tr>
                    <tr>
                      <th>Stress-relief Annealing °C</th>
                      <td colSpan="2">approx. 670-720</td>
                    </tr>
                    <tr>
                      <th>Hardening °C</th>
                      <td>940-970</td>
                      <td>950-980</td>
                    </tr>
                    <tr>
                      <th>Quenching</th>
                      <td>Oil</td>
                      <td>Air (upto 30mm thickness)</td>
                    </tr>
                    <tr>
                      <th>Hardness after quenching HRC</th>
                      <td>64.5</td>
                      <td>64.5</td>
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
              We keep the materials from <strong>China</strong> and{" "}
              <strong>India</strong>.
            </p>
            <div className="partner-flags mt-4">
              <img
                src="/image/china-flag.png"
                alt="China"
                className="flag-img mx-3"
              />
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
              <strong>Grades in Bold (e.g. D3 / 1.2080 )</strong> are kept in
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
