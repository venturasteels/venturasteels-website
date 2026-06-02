import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Helmet } from "react-helmet-async";

export default function SAE52100() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 52100 / 100Cr6 / 1.3505 / SUJ2",
        selectedProduct: "Cold Work Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          SAE 52100 / 100Cr6 / 1.3505 / SUJ2 | Cold Work Tool Steel | Ventura
          Alloy & Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="SAE 52100 / 100Cr6 / 1.3505 / SUJ2 high-carbon chromium bearing steel with excellent wear resistance and rolling fatigue strength. Achieves 60–67 HRC hardness and ensures long service life. Ideal for ball bearings, rollers, shafts and precision components."
        />

        <meta
          name="keywords"
          content="SAE 52100 steel, 100Cr6, 1.3505, SUJ2 bearing steel, high carbon chromium steel, anti-friction bearing steel, ASTM A295 steel, bearing steel supplier India, 52100 chemical composition, 52100 hardness, bearing steel round bar, forged bearing steel, cold work bearing steel, steel balls rollers shafts"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/cold-work-steel/sae-52100"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SAE 52100 / 100Cr6 / 1.3505 / SUJ2 Bearing Steel",

  "image": [
    "https://venturasteels.com/image/sae-52100-bearing-steel.png"
  ],

  "description": "SAE 52100 / 100Cr6 / 1.3505 / SUJ2 is a high-carbon chromium bearing steel known for excellent wear resistance and rolling fatigue strength. It achieves hardness of 60–67 HRC and provides long service life in demanding bearing applications. Suitable for ball bearings, rollers, shafts, gears and precision components.",

  "sku": "52100-VAS",
  "mpn": "1.3505",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Bearing Steel / Cold Work Steel",

  "url": "https://venturasteels.com/products/cold-work-steel/sae-52100",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "SAE 52100 / 100Cr6 / 1.3505 / SUJ2"
    },
    {
      "@type": "PropertyValue",
      "name": "Hardness",
      "value": "60–67 HRC (hardened), 28–34 HRC (quenched & tempered), ≤250 HB (annealed)"
    },
    {
      "@type": "PropertyValue",
      "name": "Process Route",
      "value": "EAF + LF + VD + Forging/Rolling + Annealed + Cold Working + Quenching & Tempering"
    },
    {
      "@type": "PropertyValue",
      "name": "Form",
      "value": "Round, Wire Rod, Forged"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Rounds",
      "value": "Ø 20 to 290 mm, Forged Ø 150 to 600 mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Wire Rod",
      "value": "6 to 32 mm"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/cold-work-steel/sae-52100",

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
    "reviewCount": "25"
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
      "reviewBody": "Reliable bearing steel with excellent wear resistance and long service life in high-load applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">SAE 52100 / 100Cr6 / 1.3505 / SUJ2</h1>
        <p className="subtitle text-center">
          High Carbon Bearing Steel — Exceptional Hardness, Superior Wear
          Resistance & Excellent Fatigue Strength
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
                  <td>ASTM A295</td>
                  <td>BS 970</td>
                  <td>DIN 17230</td>
                  <td>GB/T 1299</td>
                  <td>JIS G4805</td>
                  <td>KS</td>
                  <td>GOST</td>
                </tr>
                <tr>
                  <td>
                    <strong>EQUIVALENT NAME</strong>
                  </td>
                  <td>103Cr1</td>
                  <td>52100</td>
                  <td>535A99 / EN31</td>
                  <td>100Cr6 / 1.3505</td>
                  <td>GCr15</td>
                  <td>SUJ2</td>
                  <td>STB2</td>
                  <td>WX15 / ShKh15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
          <div className="cold-work-img-1">
            <img
              src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1777889870/copy_of_sae_52100_round_bars_-_6_rkwa7d_a58387.jpg"
              alt="D5 grade, Cr12MoV grade image, 1.2601 cold work tool steel grade"
              loading="lazy"
            />
          </div>
          <div className="overview-content">
            <p>
              SAE 52100 is a high-carbon, low-alloy chromium-containing bearing
              steel, widely regarded as the most common grade under the ASTM
              A295 standard for high-carbon anti-friction bearing steels. It is
              a through-hardening steel specifically engineered for superior
              wear resistance and rolling fatigue strength — the two most
              critical properties in bearing applications.
            </p>
            <p>
              With a Rockwell hardness range of 60–67 HRC at room temperature,
              it delivers exceptional surface hardness and long service life. In
              its oil-quenched and tempered condition, hardness is 28–34 HRC,
              while annealed delivery hardness remains below 250 HB. The steel
              operates reliably at continuous service temperatures up to 120°C.
              It is formable by all conventional methods, including cold
              forging, stamping, and hot or cold roll forming.It is a
              cost-effective, versatile grade that can be substituted across
              most bearing applications.
            </p>
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="cold-work-composition">
          <h2 className="mb-4 text-center">
            Chemical Composition (Typical Analysis in %)
          </h2>
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range(%)</td>
                    <td>0.93-1.05</td>
                    <td>0.15-0.35</td>
                    <td>0.25-0.45</td>
                    <td>≤ 0.025</td>
                    <td>≤ 0.025</td>
                    <td>1.35-1.60</td>
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

          <div className="process-flow mb-3">
            {[
              "EAF",
              "LF",
              "VD",
              "FORGING / ROLLING",
              "ANNEALED",
              "COLD WORKING (DRAWING / ROLLING)",
              "QUENCHING & TEMPERING",
            ].map((step, index, arr) => (
              <div key={index} className="process-step">
                <span>{step}</span>
                {index !== arr.length - 1 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
          <div className="process-flow">
            {[
              "EAF / BOF",
              "LF",
              "VD",
              "CCM",
              "ROLLING",
              "NORMALIZING / ANNEALING (IF REQUIRED)",
            ].map((step, index, arr) => (
              <div key={index} className="process-step">
                <span>{step}</span>
                {index !== arr.length - 1 && <div className="arrow">→</div>}
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
                  <td>Ø 20 to 90 MM - Bhushan </td>
                </tr>
                <tr>
                  <td> Peeled & Grinded Round</td>
                  <td> Ø 32 to 290 MM</td>
                </tr>
                <tr>
                  <td>Rolled Rounds </td>
                  <td>Upto Ø 1500 MM</td>
                </tr>
                <tr>
                  <td>Forged Rounds</td>
                  <td>Ø 150 to 600 MM</td>
                </tr>
                <tr>
                  <td>Rolled Wire Rod</td>
                  <td>6 to 32 MM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>STEEL PROPERTIES</h2>
          <ul>
            <li>Annealed delivery hardness makes it machinable.</li>
            <li>
              It exhibits good cold-working characteristics, typically in the
              spheroidized annealed condition to allow for high fatigue
              strength, which is essential for bearing life.
            </li>
            <li>
              Spheroidized annealed and cold-drawn forms have great
              machinability compared to AISI 1212.
            </li>
            <li> High Density and Modulus of Elasticity.</li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <ul>
            <li>
              Anti-friction bearing, i.e., ball bearings and roller
              bearings.{" "}
            </li>
            <li>Aircraft bearings and highly stressed bearing components. </li>
            <li>CV joints and ball screws.</li>
            <li>Valve bodies, pumps, and ﬁttings.</li>
            <li>High-load wheel components and transmission shafts. </li>
            <li>Bolts, double-headed bolts, and gears.</li>
            <li>Internal combustion engine components.</li>
            <li>Electric locomotive and machine tool components</li>
            <li>Railway vehicle and mining machinery components. </li>
            <li>Steel rolling equipment and boring machine parts. </li>
            <li>Gauges, knives, and precision measuring tools.</li>
            <li>Steel balls, rollers, and shaft sleeves.</li>
          </ul>
        </section>

        {/* Thermal properties */}
        <section className="coldwork-thermal-properties">
          <h2 className="thermal-section-title">THERMAL PROPERTIES</h2>

          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="property-card mb-3 ">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>Properties</th>
                      <th>Metric</th>
                      <th>Imperial</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Thermal Expansion</td>
                      <td>11.9 µm/m°C</td>
                      <td>6.61 µin/in°F</td>
                    </tr>
                    <tr>
                      <td>Co-efficient at annealed</td>
                      <td>23-280°C</td>
                      <td>73.4-36°F</td>
                    </tr>
                    <tr>
                      <td>Thermal Conductivity (typical steel)</td>
                      <td>46.6 W/mK</td>
                      <td>323 BTU in/hr.ft².°F</td>
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

          <div className="row d-flex justify-content-center">
            {/* Basic Heat Treatment Data */}
            <div className="col-md-6">
              <div className="heat-card mb-3">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Process</th>
                      <th>Temperature Range</th>
                    </tr>
                    <tr>
                      <td>Soft Annealing °C</td>
                      <td>750 - 795</td>
                    </tr>
                    <tr>
                      <td>Cooling</td>
                      <td>Slow Cooling</td>
                    </tr>
                    <tr>
                      <td>Hardness HB</td>
                      <td>≤ 240</td>
                    </tr>
                    <tr>
                      <td>Stress-Relief Annealing °C</td>
                      <td>approx. 600–700</td>
                    </tr>
                    <tr>
                      <td>Hardening °C</td>
                      <td>815–855</td>
                    </tr>
                    <tr>
                      <td>Quenching</td>
                      <td>Oil / Water</td>
                    </tr>
                    <tr>
                      <td>Hardness after Quenching HRC</td>
                      <td>64</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* stocking partner */}
        {/* <section className="stocking-partners py-5">
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
        </section> */}

        {/* Availability */}
        {/* <section className="availability-info my-4">
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
        </div>
      </div>
    </>
  );
}
