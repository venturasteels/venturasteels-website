import React from "react";
import { useNavigate } from "react-router-dom";
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
    "https://venturasteels.com/images/h13-hot-work-steel.jpg"
  ],

  "description": "H13 / AISI H13 / DIN 1.2344 hot work tool steel with excellent toughness, thermal fatigue resistance and high temperature strength.",

  "sku": "H13-VAS",
  "mpn": "1.2344",

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
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/hot-work-steel/h13",

    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "INR"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "IN"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 3,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 2,
          "maxValue": 7,
          "unitCode": "DAY"
        }
      }
    },

    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
      "applicableCountry": "IN"
    }
  },

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "24"
  },

  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Industrial Buyer"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Excellent quality H13 steel with consistent hardness and performance."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">H13 / AISI H13 / DIN 2344</h1>
        <p className="subtitle text-center">
          Premium Hot Work Tool Steel - High Performance Chromium Hot-Work Grade
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
                  <td>R. of Korea</td>
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
                  <td>KS</td>
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
                  <td>STD 61</td>
                  <td>4Ch4VMFS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 ">
          <div className="hot-work-img-2 d-flex">
            <img
              src="/image/hot-work-steel/1.2344 Flat Bars.JPEG"
              alt="H13 tool steel, 1.2344 tool steel"
              width={250}
            />
            <img
              src="/image/hot-work-steel/1.2344 Round Bars - 4.JPG"
              alt="H13 tool steel, 1.2344 tool steel"
              width={250}
            />
          </div>
          <div className="overview-content">
            <p>
              H13 / 1.2344 is a premium Chromium (Cr) - Molybdenum (Mo) -
              Vanadium (V) Hot Work Tool Steel , globally recognised as the most
              widely used grade in hot work tooling applications. It delivers an
              exceptional combination of toughness, heat resistance, thermal
              fatigue resistance, and wear performance, along with excellent
              machinability, polishability, and minimal distortion during
              hardening, making it the benchmark grade.
            </p>
            <p>
              Vanadium and Molybdenum act as strengthening agents while the high
              Chromium content resists softening at elevated temperatures —
              delivering outstanding red hardness, shock and abrasion
              resistance, and the ability to withstand rapid cooling cycles.
            </p>
            <p>
              H13 delivers outstanding high-temperature performance which
              describes a high-quality steel production route using EAF, LF, VD,
              and ESR processes, followed by ingot formation, upsetting,
              forging, annealing, and EFS. It ensures a minimum forging ratio of
              7:1, controlled impurities (low phosphorus ≤0.015), and improved
              durability. The material supports large dimensions up to 2000 mm
              diameter and meets high cleanliness standards (8+, low
              inclusions). Designed for critical applications, it is suitable
              for OEM, aerospace, defence tooling, die casting, and large
              forging dies, with strict inspection and quality targets for
              superior performance.
            </p>
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="hot-work-composition">
          <h2 className="mb-4 text-center">
            CHEMICAL COMPOSITION (TYPICAL ANALYSIS %)
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
                    <td>Range(%)</td>
                    <td>0.39-0.45</td>
                    <td>0.90-1.20</td>
                    <td>0.30-0.50</td>
                    <td>≤ 0.020</td>
                    <td>≤ 0.004</td>
                    <td>5.0-5.40</td>
                    <td>1.20-1.75</td>
                    <td>0.90-1.20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>STEEL PROPERTIES</h2>
          <ul>
            <li>Superior toughness under repeated thermal cycling.</li>
            <li>High thermal conductivity for effective heat management. </li>
            <li>Outstanding hot-wear resistance for extended tool life.</li>
            <li>Excellent hot tensile strength under loading. </li>
            <li>Hot crack-resistant for reliable performance. </li>
            <li>Can be water-cooled to a controlled degree. </li>
            <li>High hardenability across section sizes.</li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <ul>
            <li>Pressure die casting dies for light metals.</li>
            <li>Metal extrusion tools, including Aluminium Extrusion Dies</li>
            <li>Forging dies, including Aluminium and Copper Forging Dies. </li>
            <li>Moulds, screws, and barrels for plastic processing.</li>
            <li>Nitrided ejectors and ejector pins. </li>
            <li>Hot shear blades.</li>
            <li>Tool holders and shrink-ﬁt chucks. </li>
            <li>Extrusion mandrels.</li>
            <li>OEM, aerospace, and defence tooling.</li>
          </ul>
        </section>

        {/* Thermal properties */}
        <section className="hotwork-thermal-properties">
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
                <h5>THERMAL CONDUCTIVITY</h5>

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
                      <td>760-810</td>
                    </tr>
                    <tr>
                      <th>Cooling</th>
                      <td>Furnace</td>
                    </tr>
                    <tr>
                      <th>Hardness HB</th>
                      <td>≤ 240</td>
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

          <span>MOQ: 0.33 Tonnes</span>
        </div>
      </div>
    </>
  );
}
