import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../process-section.css";

export default function H11() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "H11 / AISI H11 / DIN 1.2343 ",
        selectedProduct: "Hot Work Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          H11 / AISI H11 / DIN 1.2343 | Hot Work Tool Steel | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="H11 / AISI H11 / DIN 1.2343 Hot Work Tool Steel known for high toughness, excellent thermal fatigue resistance and resistance to cracking. View chemical composition, heat treatment, hardness, applications and stock availability. Ventura Alloy & Steels is a leading supplier of H11 steel in India."
        />

        <meta
          name="keywords"
          content="H11 steel, AISI H11, DIN 1.2343, H11 tool steel, hot work tool steel H11, chromium hot work steel, H11 chemical composition, H11 heat treatment, H11 hardness, H11 datasheet, H11 steel supplier India, 1.2343 steel, hot work die steel H11, H11 round bar, H11 flats, H11 blocks, forging die steel H11"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/hot-work-steel/h11"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "H11 Hot Work Tool Steel",

  "image": [
    "https://venturasteels.com//image/h11-hot-work-steel.png"
  ],

  "description": "H11 / AISI H11 / DIN 1.2343 hot work tool steel with high toughness, thermal fatigue resistance and resistance to cracking, suitable for die casting, forging and extrusion applications.",

  "sku": "H11-VAS",
  "mpn": "1.2343",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Hot Work Tool Steel",

  "url": "https://venturasteels.com/products/hot-work-steel/h11",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "H11 / AISI H11 / DIN 1.2343"
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
    "url": "https://venturasteels.com/products/hot-work-steel/h11",

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
    "ratingValue": "4.7",
    "reviewCount": "18"
  },

  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Industrial Client"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Reliable H11 steel with excellent toughness and performance in die casting applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">H11 / AISI H11 / DIN 2343</h1>
        <p className="subtitle text-center">
          Premium Hot Work Tool Steel — Engineered for High Toughness & Superior
          Wear Resistance
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
                  <td>XT35Cr5Mo1V3/</td>
                  <td>H11</td>
                  <td>X37CrMoV5-1</td>
                  <td>1.2343 </td>
                  <td>4Cr5MoSiV1</td>
                  <td>SKD6</td>
                  <td>STD6</td>
                  <td>4Kh5MFS (4Х5МФС)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 ">
          <div className="hot-work-img-1">
            <img
              src="/image/hot-work-steel/2343-hot-work-steel.jpeg"
              alt="H11 tool steel, 1.2343 tool steel"
              loading="lazy"
            />
          </div>
          <div className="overview-content">
            <p>
              H11 is a chromium-based hot work tool steel classiﬁed under the
              "H" family of the AISI classiﬁcation system. It is a widely used
              steel within the H-series, and can be air-hardened depending on
              furnace and quenching control with minimal distortion.
            </p>
            <p>
              Chemically, H11 is a 5% chromium alloy steel (also designated as
              1.2343 under DIN standards). Compared to the closely related H13,
              H11 contains less vanadium , which gives superior toughness at a
              modest trade-off in wear resistance and temper resistance. Its
              balanced alloy composition — delivering high hot tensile strength,
              excellent resistance to thermal fatigue cracking and thermal
              shock, and good thermal conductivity. It can even be water-cooled
              to a limited extent during service, which is rare among hot work
              steels.
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
                    <td>0.33–0.41</td>
                    <td>0.80–1.00</td>
                    <td>0.25–0.50</td>
                    <td>≤ 0.003</td>
                    <td>≤ 0.030</td>
                    <td>4.80–5.50</td>
                    <td>1.10–1.50</td>
                    <td>0.30–0.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* process route and size range */}
        <div className="process-section">
          {/* PROCESS ROUTE */}
          <h3 className="section-title">Process Route</h3>

          <div className="process-flow">
            {[
              "EAF",
              "LF",
              "VD",
              "ESR",
              "UPSET",
              "FORGED",
              "ANNEALED",
              "ROUGH TURNED / MILLED",
              "OIL / AIR QUENCHED",
              "DOUBLE TEMPERED",
            ].map((step, index) => (
              <div key={index} className="process-step">
                <span>{step}</span>
                {index !== 9 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>

          {/* SIZE RANGE */}
          <h3 className="section-title mt-4">Size Range</h3>

          <div className="size-table-wrapper">
            <table className="size-table">
              <thead>
                <tr>
                  <th>Product Type</th>
                  <th>Size Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rolled Rounds</td>
                  <td>Ø 32 – 132 MM</td>
                </tr>
                <tr>
                  <td>Rolled Flats</td>
                  <td>Thickness 16 – 50 MM & Width 100 – 1200 MM</td>
                </tr>
                <tr>
                  <td>Forged Rounds</td>
                  <td>Upto Ø 1500 MM</td>
                </tr>
                <tr>
                  <td>Forged Flats</td>
                  <td>Thickness 150 – 1200 MM & Width 200 – 1500 MM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>STEEL PROPERTIES</h2>
          <ul>
            <li>Deep Hardening & Thermal Resistance.</li>
            <li>Contains 5% Chromium for outstanding hot-work performance. </li>
            <li>Superior strength and toughness under thermal cycling.</li>
            <li>Resistant to hot cracking under sustained loading.</li>
            <li>
              Delivers the fundamental properties required for long tool life in
              press forging.
            </li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <ul>
            <li>Tool & liner holders & bridge-type tools. </li>
            <li>Pressure die casting dies for light metals. </li>
            <li>Metal extrusion tools.</li>
            <li>Forging dies and hot punches.</li>
            <li>Moulds, screws, and barrels for plastic processing.</li>
            <li>Shrink-ﬁt chucks and shrink rings.</li>
            <li>Hot shear blades.</li>
            <li>Ejector pins and tool holders.</li>
            <li>
              Aerospace structural components, such as aircraft landing gear.
            </li>
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
                      <td>11.7</td>
                    </tr>
                    <tr>
                      <td>20-200</td>
                      <td>12.3</td>
                    </tr>
                    <tr>
                      <td>20-300</td>
                      <td>12.5</td>
                    </tr>
                    <tr>
                      <td>20-400</td>
                      <td>12.7</td>
                    </tr>
                    <tr>
                      <td>20-500</td>
                      <td>12.75</td>
                    </tr>
                    <tr>
                      <td>20-600</td>
                      <td>12.9</td>
                    </tr>
                    <tr>
                      <td>20-700</td>
                      <td>12.9</td>
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
                        <td>29.8</td>
                        <td>26.5</td>
                      </tr>
                      <tr>
                        <td>350</td>
                        <td>30</td>
                        <td>27.4</td>
                      </tr>
                      <tr>
                        <td>700</td>
                        <td>35.5</td>
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
                      <td>750-800</td>
                    </tr>
                    <tr>
                      <th>Cooling</th>
                      <td>Furnace</td>
                    </tr>
                    <tr>
                      <th>Hardness HB</th>
                      <td>≤ 230</td>
                    </tr>
                    <tr>
                      <th>Stress-Relief Annealing °C</th>
                      <td>approx. 600-650</td>
                    </tr>
                    <tr>
                      <th>Hardening °C</th>
                      <td>1030-1030</td>
                    </tr>
                    <tr>
                      <th>Quenching</th>
                      <td>Air, Oil, Salt Bath 500-550°C</td>
                    </tr>
                    <tr>
                      <th>Hardness after Quenching HRC</th>
                      <td>54</td>
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
                      <td>52</td>
                    </tr>
                    <tr>
                      <td>210</td>
                      <td>52</td>
                    </tr>
                    <tr>
                      <td>300</td>
                      <td>52</td>
                    </tr>
                    <tr>
                      <td>400</td>
                      <td>52</td>
                    </tr>
                    <tr>
                      <td>500</td>
                      <td>54</td>
                    </tr>
                    <tr>
                      <td>550</td>
                      <td>53</td>
                    </tr>
                    <tr>
                      <td>600</td>
                      <td>48</td>
                    </tr>
                    <tr>
                      <td>650</td>
                      <td>37</td>
                    </tr>
                    <tr>
                      <td>700</td>
                      <td>31</td>
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
              We keep the materials from <strong>India</strong> and{" "}
              <strong>China</strong>.
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
              <strong>Grades in Bold (e.g. H11)</strong> are kept in stock and
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
