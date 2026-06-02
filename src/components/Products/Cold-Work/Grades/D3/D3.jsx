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
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/cold-work-steel/d3"
  }
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">D3 / 1.2080 / HCHCR D3</h1>
        <p className="subtitle text-center">
          High-Carbon, High-Chromium Tool Steel — Superior Wear Resistance
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
                  <td>D3 (per AISI / DIN 1.2080)</td>
                  <td>D3</td>
                  <td>X210Cr12</td>
                  <td>1.2080 </td>
                  <td>Cr12</td>
                  <td>SKD1</td>
                  <td>STD1</td>
                  <td>Х12 (Kh12)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="cold-work-img-1">
            <img
              src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1777874990/D3_Round_Bars_2_j4kkru.jpg"
              alt="D3 grade image, 1.2080 grade, HCHCR D3 cold work tool steel grade"
              loading="lazy"
            />
          </div>
          <div className="overview-content">
            <p>
              D3 alloy steel is heat treatable, a measure of corrosion
              resistance when polished. Unlike other Group D steels (D2, D4, D5,
              D7), D3 does not contain molybdenum and is oil-quenched rather
              than air-hardened, which distinguishes it fundamentally within its
              family.
            </p>
            <p>
              Small sections may alternatively be gas quenched after vacuum
              austenitization. This quenching characteristic makes D3 tools
              comparatively more brittle during hardening, requiring careful
              process control. However, D3 compensates with very high wear
              resistance, good hardenability, and high compressive strength,
              making it well-suited for long production runs involving hard and
              abrasive materials.
            </p>
            <p>
              Ultra-premium quality material outlines a steel manufacturing
              process using EAF, LF (likely LV), VD, forging, and annealing,
              with a minimum forging ratio of 5:1. The chemical composition
              features high carbon and chromium content, ensuring hardness and
              wear resistance, with controlled impurities (P & S ≤ 0.03). The
              material is available in diameters from 100–710 MM, thickness
              32–300 MM, and width 105–1000 MM. It meets quality levels of 5–8,
              with inspection criteria based on size, and supports production
              batches up to 35 MT.
            </p>
          </div>
        </section>

        {/* Chemical Composition */}
        {/* <section className="cold-work-composition">
          <h2 className="mb-4 text-center">
            CHEMICAL COMPOSITION (TYPICAL ANALYSIS %)
          </h2>
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
        </section> */}

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>STEEL PROPERTIES</h2>
          <ul>
            <li>
              A high amount of chromium carbides gives excellent resistance to
              wear and abrasion.
            </li>
            <li>High hardness levels can be achieved at lower temperatures.</li>
            <li>
              Mainly, oil hardening and vacuum heat treatment are used for
              better control.
            </li>
            <li>
              Shows very little distortion or size change during heat treatment.
            </li>
            <li>Difﬁcult to machine, around 25% of mild steel (AISI 1018).</li>
            <li>Moderate to low toughness due to high carbide content.</li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <ul>
            <li>Trimming and blanking dies for paper and plastics.</li>
            <li>
              Cutting tools, Long and round-section shear blades for sheet
              thicknesses.{" "}
            </li>
            <li>
              Complex blanking and forming tools for long production runs.
            </li>
            <li>Ejector pins and cold die punches. </li>
            <li>Drawing dies and deep-drawing tools. </li>
            <li>Woodworking & Stone pressing tools. </li>
            <li>Pressure pads.</li>
            <li>Highly wear-resistant plastic moulds. </li>
            <li>Proﬁle rolls & cold forming rolls.</li>
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

          <div className="row">
            {/* Basic Heat Treatment Data */}
            <div className="col-md-6">
              <div className="heat-card mb-3">
                <h5>HEAT TREATMENT STEPS</h5>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Soft Annealing °C</th>
                      <td>810-850</td>
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
                      <td>approx. 670-720</td>
                    </tr>
                    <tr>
                      <th>Hardening °C (Oil)</th>
                      <td>940-970</td>
                    </tr>
                    <tr>
                      <th>Hardening °C (Air Upto30 mm)</th>
                      <td>950-980</td>
                    </tr>
                    <tr>
                      <th>Quenching</th>
                      <td>Oil / Air (upto 30mm thickness)</td>
                    </tr>
                    <tr>
                      <th>Hardness after quenching HRC</th>
                      <td>64.5</td>
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
                      <td>63.5</td>
                    </tr>
                    <tr>
                      <td>200</td>
                      <td>61.5</td>
                    </tr>
                    <tr>
                      <td>300</td>
                      <td>58</td>
                    </tr>
                    <tr>
                      <td>400</td>
                      <td>57.5</td>
                    </tr>
                    <tr>
                      <td>500</td>
                      <td>55</td>
                    </tr>
                    <tr>
                      <td>600</td>
                      <td>47</td>
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
        {/* <section className="availability-info my-4">
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
