import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./plastic-mould-grade.css";
import "../applications-properties.css";
import "../cta-block.css";
import "../weight-btn.css";

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
    <>
      <Helmet>
        <title>
          P20+Ni / 1.2738 | Plastic Mold Tool Steel | Ventura Alloy & Steels
          Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="P20+Ni / 1.2738 pre-hardened plastic mold tool steel with added nickel for superior through-hardening, toughness and polishability. Ideal for large mold components, injection molds, die casting and high-stress tooling applications."
        />

        <meta
          name="keywords"
          content="P20+Ni steel, 1.2738 steel, P20 nickel steel, plastic mold steel, pre hardened mold steel, P20+Ni HH, DIN 1.2738, mold steel supplier India, injection mold steel, die casting mold steel, nitriding steel, chrome plated mold steel, forged mold steel, plastic tooling steel, large section mold steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/plastic-mold-steel/p20-ni-1-2738"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "P20+Ni / 1.2738 Plastic Mold Tool Steel",

  "image": [
    "https://venturasteels.com/image/p20-ni-plastic-mold-tool-steel.png"
  ],

  "description": "P20+Ni / 1.2738 is a pre-hardened plastic mold tool steel enhanced with nickel for superior through-hardening, toughness and uniform hardness in large cross sections. It offers excellent polishability, machinability and photo-engraving properties, making it ideal for injection molds, die casting molds and high-stress tooling applications.",

  "sku": "P20NI-VAS",
  "mpn": "1.2738",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Plastic Mold Tool Steel",

  "url": "https://venturasteels.com/products/plastic-mold-steel/p20-ni-1-2738",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "P20+Ni / 1.2738"
    },
    {
      "@type": "PropertyValue",
      "name": "Condition",
      "value": "Pre-Hardened & Tempered (280–320 HB)"
    },
    {
      "@type": "PropertyValue",
      "name": "High Hardness Variant",
      "value": "P20+Ni HH (380–420 BHN)"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "Excellent through-hardening, toughness, polishability and machinability"
    },
    {
      "@type": "PropertyValue",
      "name": "Surface Treatment Compatibility",
      "value": "Suitable for nitriding, flame hardening, chrome plating and nickel plating"
    },
    {
      "@type": "PropertyValue",
      "name": "Manufacturing Process",
      "value": "EAF + LF + VD + Forging + Quenching & Double Tempering"
    },
    {
      "@type": "PropertyValue",
      "name": "Forging Ratio",
      "value": "7:1"
    },
    {
      "@type": "PropertyValue",
      "name": "Maximum Dimensions",
      "value": "Up to 1500 mm diameter and 2250 mm width"
    },
    {
      "@type": "PropertyValue",
      "name": "Quality Standard",
      "value": "SEP 1921-84 Inspection Criteria, 8+ Quality Standards"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/plastic-mold-steel/p20-ni-1-2738",

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
    "ratingValue": "4.9",
    "reviewCount": "26"
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
      "reviewBody": "Excellent P20+Ni mold steel with uniform hardness, superior polishability and outstanding performance in large mold applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">P20+Ni / 1.2738</h1>
        <p className="subtitle text-center">
          High-Performance Pre-Hardened Steel — Durable, High-Finish Plastic
          Moulds
        </p>

        {/* standards  */}
        <div className="plastic-mould-standards-scroll-wrapper mb-4">
          <div className="plastic-mould-standards-inner-scroll">
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
                  <td>ASTM A681</td>
                  <td>EN 4957</td>
                  <td>DIN ISO </td>
                  <td>GB/T 1299</td>
                  <td>JIS</td>
                  <td>KS</td>
                  <td>GOST</td>
                </tr>
                <tr>
                  <td>
                    <strong>EQUIVALENT NAME</strong>
                  </td>
                  <td>40CrMnNiMo8-6-4</td>
                  <td>P20+Ni</td>
                  <td>40CrMnNiMo 8-6-4</td>
                  <td>1.2738</td>
                  <td>3Cr2NiMo</td>
                  <td>PDS5S</td>
                  <td>DIN 1.2738</td>
                  <td>4Kh2GNM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3 pt-3">
          <div className="plastic-mould-img-1">
            <img
              src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778568676/1.2738_Flat_Bars_-_3_uc3snt.jpg"
              alt="P20+Ni / 1.2738 grade"
              loading="lazy"
            />
          </div>
          <div className="overview-content">
            <p>
              P20+Ni (DIN 1.2738) is an upgraded version of P20 / 1.2311, with
              an additional 1% nickel content that signiﬁcantly improves
              through-hardening, making it especially suited for large mold
              components. It is typically supplied pre-hardened and tempered in
              the 280–320 HB range with uniform hardness throughout the section.
              The nickel, chromium, and molybdenum alloying combination delivers
              excellent toughness, superior polishability, good machinability,
              and strong photo-etching and photo-engraving properties.
            </p>
            <p>
              Surface hardness and wearability can be further enhanced through
              nitriding or ﬂame hardening. A high-hardness variant, P20+Ni HH is
              available at 380–420 BHN for applications demanding extra wear
              life and outstanding polishing. Overall, P20+Ni is the preferred
              choice where large section sizes, high mechanical stress, and
              premium surface ﬁnish are critical.
            </p>
            <p>
              Ultra-premium outlines a high-strength steel produced through EAF,
              LF, VD, and forging, followed by quenching and double tempering
              for superior mechanical properties. It maintains a forging ratio
              of 7:1 and features a balanced alloy composition including
              chromium, molybdenum, and nickel for enhanced toughness, hardness,
              and wear resistance, with low impurity limits. The material is
              available in large sizes up to 1500 mm diameter and 2250 mm width,
              meets 8+ quality standards, and follows SEP 1921-84 inspection
              criteria, with batch capacities of 35 MT and 80 MT.
            </p>
          </div>
        </section>

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>STEEL PROPERTIES</h2>
          <ul>
            <li>
              Uniform hardness distributed throughout large cross sections.
            </li>
            <li>Exceptional weldability for easy repair and modiﬁcation.</li>
            <li>Cross-section accessibility up to 255 mm thickness. </li>
            <li>Minimal hardness variation across the section.</li>
            <li>Superior polishability.</li>
            <li>Reduced streak texture for easier finishing operations</li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <ul>
            <li>
              Plastic injection molds and thermoplastic extrusion with excellent
              surface ﬁnish.
            </li>
            <li>
              Synthetic plastic mold dies, especially highly stressed core
              sections.
            </li>
            <li>Rubber molds and mold carrier frames.</li>
            <li>Machine-cut plastic molds and casting dies, Zinc dies. </li>
            <li>Mould frames for plastic moulds, pressure casting moulds. </li>
            <li>Dies for light alloys with low melting points.</li>
            <li>Bolsters, backers, and shoe blocks. </li>
            <li>Die plates and die boxes.</li>
            <li>Tools requiring nitriding, Hydroforming tools.</li>
            <li>Components requiring chrome or nickel plating. </li>
            <li>Container molds and structural mold components.</li>
          </ul>
        </section>

        {/* Thermal properties */}
        <section className="plasticmould-thermal-properties">
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
                      <td>11.2</td>
                    </tr>
                    <tr>
                      <td>20-150</td>
                      <td>12.8</td>
                    </tr>
                    <tr>
                      <td>20-200</td>
                      <td>13.5</td>
                    </tr>
                    <tr>
                      <td>20-250</td>
                      <td>13.7</td>
                    </tr>
                    <tr>
                      <td>20-300</td>
                      <td>14.3</td>
                    </tr>
                    <tr>
                      <td>20-350</td>
                      <td>14.7</td>
                    </tr>
                    <tr>
                      <td>20-400</td>
                      <td>14.9</td>
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
                      <td>23</td>
                      <td>35</td>
                    </tr>
                    <tr>
                      <td>150</td>
                      <td>34</td>
                    </tr>
                    <tr>
                      <td>300</td>
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
                <h5>HEAT TREATMENT STEPS</h5>
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
                      <td>≤ 235</td>
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
        {/* <section className="stocking-partners py-5">
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
        </section> */}

        {/* Availability */}
        {/* <section className="availability-info my-4">
          <div className="container">
            <h4 className="mb-3">Availability</h4>
            <p>
              <strong>Grades in Bold (e.g. 1.2738 )</strong> are kept in stock
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
