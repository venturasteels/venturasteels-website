import { useNavigate } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function EN353() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: " EN353 / 1.6523",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          EN353 / 1.6523 | Case Hardening Alloy Steel | Ventura Alloy & Steels
          Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="EN353 / 1.6523 case hardening alloy steel with excellent core toughness, wear resistance and fatigue strength. Designed for carburizing applications and ideal for gears, pinions, shafts, camshafts and transmission components."
        />

        <meta
          name="keywords"
          content="EN353 steel, 1.6523 steel, case hardening steel, carburizing steel, EN353 alloy steel, gear steel, shaft steel, camshaft steel, transmission steel, wear resistant steel, alloy steel supplier India, engineering steel, carburized steel, fatigue resistant steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/alloy-steel/en353"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EN353 / 1.6523 Case Hardening Alloy Steel",

  "image": [
    "https://venturasteels.com/image/en353-alloy-steel.png"
  ],

  "description": "EN353 / 1.6523 is a case hardening alloy steel that delivers excellent core toughness with a hard wear-resistant surface after carburizing. It provides high fatigue strength and durability for demanding engineering and transmission applications.",

  "sku": "EN353-VAS",
  "mpn": "1.6523",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Case Hardening Alloy Steel",

  "url": "https://venturasteels.com/products/alloy-steel/en353",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "EN353 / 1.6523"
    },
    {
      "@type": "PropertyValue",
      "name": "Steel Type",
      "value": "Case Hardening Alloy Steel"
    },
    {
      "@type": "PropertyValue",
      "name": "Heat Treatment",
      "value": "Suitable for carburizing and case hardening"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "Excellent core toughness, wear resistance, fatigue strength and durability"
    },
    {
      "@type": "PropertyValue",
      "name": "Surface Properties",
      "value": "Hard wear-resistant case with a tough ductile core"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range",
      "value": "Rounds Ø20–90 mm (Bhushan), Ø95–200 mm (JSW)"
    },
    {
      "@type": "PropertyValue",
      "name": "Applications",
      "value": "Gears, pinions, shafts, camshafts and transmission components"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/alloy-steel/en353",

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
    "reviewCount": "20"
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
      "reviewBody": "Excellent EN353 alloy steel with superior carburizing performance and outstanding toughness for transmission and gear applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">EN353 / 1.6523</h1>

        {/* Overview */}
        <section className=" d-flex w-100 justify-content-center align-items-center gap-5 ">
          <div className="pt-3">
            <p>
              It offers excellent core toughness with a hard wear-resistant
              surface after carburizing, ensuring durability and high fatigue
              strength in demanding applications.
            </p>
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="alloy-steel-composition">
          <h2 className="mb-4 text-center">
            CHEMICAL COMPOSITION (TYPICAL ANALYSIS %)
          </h2>
          <div className="table-data d-flex justify-content-center">
            <div className="alloy-steel-chemical-composition alloy-steel-composition-table table-responsive-custom">
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>C</th>
                    <th>Si</th>
                    <th>Mn</th>
                    <th>P</th>
                    <th>S</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range(%)</td>
                    <td>0.18-0.23</td>
                    <td>≤ 0.35</td>
                    <td>0.30-0.60</td>
                    <td>≤ 0.040</td>
                    <td>≤ 0.050</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/*size range */}
        <div className="process-section">
          {/* SIZE RANGE */}
          <h3 className="section-title">Size Range</h3>

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
                  <td>Rounds</td>
                  <td>Ø 20 to 90 MM - Bhushan </td>
                </tr>

                <tr>
                  <td>Rounds</td>
                  <td>Ø 95 to 200 MM - JSW</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <p>
            Used for gears, pinions, shafts, camshafts, and transmission parts.
          </p>
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
        </div>
      </div>
    </>
  );
}
