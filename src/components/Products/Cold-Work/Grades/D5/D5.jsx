import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Helmet } from "react-helmet-async";

export default function D5() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "D5 / Cr12MoV / 1.2601 ",
        selectedProduct: "Cold Work Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          D5 / Cr12MoV / 1.2601 | Cold Work Tool Steel | Ventura Alloy & Steels
          Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="D5 / Cr12MoV / 1.2601 Cold Work Tool Steel known for high wear resistance, toughness and dimensional stability. Suitable for thread rolling, blanking and forming applications. View chemical composition, heat treatment, properties and availability."
        />

        <meta
          name="keywords"
          content="D5 steel, Cr12MoV steel, 1.2601 steel, cold work tool steel D5, high carbon high chromium steel, Cr12MoV composition, D5 heat treatment, D5 hardness, D5 datasheet, D5 steel supplier India, SKD2 equivalent, D5 round bar, D5 flats, cold work die steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/cold-work-steel/d5"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "D5 Cold Work Tool Steel",
  "description": "D5 / Cr12MoV / 1.2601 cold work tool steel with high wear resistance, toughness and dimensional stability, suitable for thread rolling and forming applications.",
  "brand": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },
  "material": "Cold Work Tool Steel",
  "url": "https://venturasteels.com/products/cold-work-steel/d5",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "D5 / Cr12MoV / 1.2601 / SKD2"
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
          D5 / <strong>Cr12MoV </strong> / 1.2601
        </h2>
        <p className="subtitle text-center">
          High-carbon, high-chromium tool steel with good wear resistance,
          toughness, and stability, suitable for thread rolling and cold work
          dies.
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
                  <td>D5</td>
                  <td>1.2601 / X165CrMoV12</td>
                  <td>SKD2</td>
                  <td>Cr12MoV1</td>
                  <td>BD5</td>
                  <td>Z160CDV12-1</td>
                  <td>KNL D2 / D5 (as per AISI / DIN 1.2601)</td>
                  <td>Kh12MF1 (Х12МФ1)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
          <div className="overview-content">
            <p>
              Ventura Alloy and Steels Supplies and Stocks HCHCR D5 steel in
              India and abroad. D5 steel is an air hardening, high-carbon,
              high-chromium tool steel.
            </p>
          </div>
          <div className="cold-work-img">
            <img
              src="/image/Cold Work Tool Steels/Cold Work steel - Cr12Mov.png"
              alt="Cr12MoV"
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
        <section className="process-route">
          <h3>Process Route</h3>
          <div className="process-flow">
            <div className="step">EAF</div>
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

        {/* applications */}
        <section className="applications">
          <h2>Applications</h2>
          <p>
            Applications of D5 steels include thread rolling, blanking or
            forming dies operating at temperatures below 482°C (900°F).
          </p>
        </section>

        {/* heat treatment */}
        <div className="heat-treatment my-4">
          <h3 className="section-title">Heat Treatment Data</h3>
          <Table bordered hover responsive className="text-center align-middle">
            <thead className="custom-header">
              <tr>
                <th>Process</th>
                <th>Temperature Range</th>
                <th>Details / Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Preheating</td>
                <td>815 °C (1500 °F)</td>
                <td>Heat very slowly before raising temperature further</td>
              </tr>
              <tr>
                <td>Hardening (Austenitizing)</td>
                <td>1009 °C (1850 °F)</td>
                <td>
                  Hold for 20–45 minutes, then <strong>air quench</strong>
                </td>
              </tr>
              <tr>
                <td>Forging</td>
                <td>1065 °C (1950 °F) → 926 °C (1700 °F)</td>
                <td>Do not forge below 926 °C (1700 °F)</td>
              </tr>
              <tr>
                <td>Annealing</td>
                <td>886 °C (1627 °F)</td>
                <td>Slow furnace cooling at ≤ 4 °C (40 °F) per hour</td>
              </tr>
              <tr>
                <td>Tempering</td>
                <td>204 °C (400 °F) → 537 °C (1000 °F)</td>
                <td>
                  Rockwell C Hardness: <br />
                  <strong>61 HRC</strong> at 204 °C <br />
                  <strong>54 HRC</strong> at 537 °C
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

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
              <strong>Grades in Bold (e.g. Cr12MoV )</strong> are kept in stock
              and supplied on a regular basis. <br />
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
          <span>MOQ: 200 kg</span>
        </div>
      </div>
    </>
  );
}
