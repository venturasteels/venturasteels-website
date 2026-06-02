import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./cold-work-grade.css";
import "../applications-properties.css";
import "../cta-block.css";
import "../weight-btn.css";

export default function D2() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "D2 / 1.2379 / HCHCR D2",
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
        <h1 className="text-center">D2 / 1.2379 / HCHCR D2</h1>
        <p className="subtitle text-center">
          High-Carbon, High-Chromium Tool Steel — Maximum Wear Resistance &
          Toughness
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
                  <td>India</td>
                  <td>USA</td>
                  <td>Europe</td>
                  <td>Germany</td>
                  <td>China</td>
                  <td>Japan</td>
                  <td>R. of Korea</td>
                  <td>Russia</td>
                </tr>
                <tr>
                  <td>
                    <strong>STANDARDS</strong>
                  </td>
                  <td>IS</td>
                  <td>ASTM / AISI</td>
                  <td>EN</td>
                  <td>DIN</td>
                  <td>GB</td>
                  <td>JIS</td>
                  <td>KS</td>
                  <td>GOST</td>
                </tr>
                <tr>
                  <td>
                    <strong>EQUIVALENT NAME</strong>
                  </td>
                  <td>HCHCR D2</td>
                  <td>D2</td>
                  <td>X153CrMoV12</td>
                  <td>1.2379</td>
                  <td>Cr12MoV</td>
                  <td>SKD11</td>
                  <td>STD11</td>
                  <td>Х12МФ (Kh12MF)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="cold-work-img-2 d-flex">
            <img
              src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1777874983/1.2379_Flat_Bars_ikvsrj.jpg"
              alt="D2 grade image, 1.2379 grade, HCHCR D2 cold work garde image"
              loading="lazy"
            />
            <img
              src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1777874990/1.2379_Round_Bars_hiyhsk.jpg"
              alt="D2 grade image, 1.2379 grade, HCHCR D2 cold work garde image"
              loading="lazy"
            />
          </div>
          <div className="overview-content">
            <p>
              D2, a high-carbon, high-chromium, air-hardening cold work tool
              steel, is also designated as DIN 1.2379. It belongs to the
              ledeburitic 12% chromium steel family and is alloyed with
              molybdenum and vanadium, which together deliver an exceptional
              combination of wear resistance, toughness, dimensional stability,
              and high hardenability.
            </p>
            <p>
              Its high chromium content imparts modest corrosion resistance,
              particularly when polished. D2 also supports supplementary
              nitriding after special heat treatment, further extending surface
              hardness and service life. With a more balanced composition than
              D3, this steel is the preferred choice for demanding, long-run
              tooling over traditional oil-hardening grades.
            </p>
            <p>
              Ventura’s ultra-premium quality material describes a steel
              manufacturing process involving EAF, LF, VD, ESR, upsetting,
              forging, and annealing, with a minimum forging ratio of 5:1. The
              chemical composition includes controlled levels of carbon,
              chromium, molybdenum, and vanadium for strength and durability.
              The material is available in diameters from 70–750 MM, thickness
              32–605 MM, and width 155–1200 MM. It meets quality levels of 6–8,
              with inspection standards based on size, and supports production
              batches of up to 35 MT.
            </p>
          </div>
        </section>

        {/* Chemical Composition */}
        {/* <section className="cold-work-composition">
          <h3 className="mb-4 text-center">
            CHEMICAL COMPOSITION (TYPICAL ANALYSIS %)
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
        </section> */}

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>STEEL PROPERTIES</h2>
          <ul>
            <li>
              High carbon and high chromium composition deliver industry-leading
              wear resistance.
            </li>
            <li>Vanadium addition of 0.90% signiﬁcantly enhances toughness.</li>
            <li>
              Supplied in annealed condition — achieves 57–62 HRC after
              hardening, and annealed hardness ranges between 200–225 HB.
            </li>
            <li>
              Fully machinable in the annealed state for ease of fabrication.
            </li>
            <li>
              Superior alloy composition makes it a reliable upgrade over D3
              steel.
            </li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <ul>
            <li>Cold stamping and forming dies, cold forming rolls.</li>
            <li>Cold extrusion and cold tri MMing tools.</li>
            <li>
              Slitters, shear blades, chipper knives, tyre shredders, punches,
              trimming dies, cutting and threading dies, and stamping tools.
            </li>
            <li>Thread rolling rolls and dies. </li>
            <li>Precision cutting instruments.</li>
            <li>Cold pilger mandrels and circular shear blades. </li>
            <li>Deep-drawing tools and pressure pads.</li>
            <li>Small shearing and cutting moulds. </li>
            <li>Screw rolled and slapper moulds.</li>
            <li>Highly wear-resistant plastic moulds.</li>
            <li>
              ESR (Electro Slag Remelted) high-compression tooling components.
            </li>
          </ul>
        </section>

        {/* Thermal properties */}
        <section className="coldwork-thermal-properties">
          <h2 className="thermal-section-title">THERMAL PROPERTIES</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="property-card mb-3">
                <h5>COEFFICIENT OF THERMAL EXPANSION</h5>
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
                <h5>THERMAL CONDUCTIVITY</h5>
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
                <h5>HEAT TREATMENT STEPS</h5>
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
                      <td>≤ 250</td>
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
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tempering Data */}
            <div className="col-md-6">
              <div className="heat-card mb-3">
                <h5>TEMPERING (°C AFTER QUENCHING)</h5>
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
        {/* <section className="availability-info my-4">
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
        </section> */}

        {/* Get Quote CTA */}
        <div className="cta-block d-flex justify-content-center gap-3 align-items-center flex-wrap">
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
