import { useNavigate } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function AlloySteel8620Family() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 8620 / 20NiCrMo2-2",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          SAE 8620 / 20NiCrMo2-2 | Case Hardening Alloy Steel | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="SAE 8620 / 20NiCrMo2-2 nickel chromium molybdenum case hardening alloy steel with excellent hardenability, toughness and wear resistance. Achieves ~62 HRC case hardness and is ideal for gears, shafts, crankshafts and automotive components."
        />

        <meta
          name="keywords"
          content="SAE 8620 steel, 20NiCrMo2-2 steel, case hardening steel, carburising steel, alloy steel SAE8620, nickel chromium molybdenum steel, gear steel, crankshaft steel, shaft steel, forged alloy steel, automotive alloy steel, engineering steel supplier India, wear resistant steel, carburized steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/alloy-steel/sae8620"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SAE 8620 / 20NiCrMo2-2 Case Hardening Alloy Steel",

  "image": [
    "https://venturasteels.com/image/sae-8620-alloy-steel.png"
  ],

  "description": "SAE 8620 / 20NiCrMo2-2 is a low-alloy nickel-chromium-molybdenum case hardening steel designed for carburising applications. It offers excellent hardenability, machinability and cost efficiency while delivering a hard wear-resistant case with a strong and ductile core.",

  "sku": "8620-VAS",
  "mpn": "8620",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Case Hardening Alloy Steel",

  "url": "https://venturasteels.com/products/alloy-steel/sae8620",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "SAE 8620 / 20NiCrMo2-2"
    },
    {
      "@type": "PropertyValue",
      "name": "Steel Type",
      "value": "Nickel Chromium Molybdenum Case Hardening Steel"
    },
    {
      "@type": "PropertyValue",
      "name": "Case Hardness",
      "value": "Approx. 62 HRC"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "Excellent hardenability, machinability, toughness and wear resistance"
    },
    {
      "@type": "PropertyValue",
      "name": "Heat Treatment",
      "value": "Suitable for carburising and case hardening"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range",
      "value": "Rounds Ø20–90 mm (Bhushan), Ø95–200 mm (JSW)"
    },
    {
      "@type": "PropertyValue",
      "name": "Special Supply Option",
      "value": "OD/ID forged condition available subject to MOQ and approved drawings/specifications"
    },
    {
      "@type": "PropertyValue",
      "name": "Applications",
      "value": "Automotive gears, shafts, crankshafts, camshafts, bearings and mining equipment"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/alloy-steel/sae8620",

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
    "reviewCount": "21"
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
      "reviewBody": "Excellent SAE 8620 alloy steel with reliable case hardening performance and outstanding toughness for automotive and industrial applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">SAE 8620 / EN353 / SAE 9310</h1>

        {/* Overview */}
        <section className=" d-flex w-100 justify-content-center align-items-center gap-5 ">
          <div className="pt-3">
            <p>
              SAE 8620 is low-alloy nickel-chromium-molybdenum case-hardening
              steels, widely used for carburising. They offer excellent
              hardenability, machinability, and cost efﬁciency. Nickel improves
              toughness, chromium enhances surface hardness, and molybdenum
              strengthens the core. After heat treatment, they achieve ~62 HRC
              case hardness with a tough, ductile core.
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
                    <th>Cr</th>
                    <th>Mo</th>
                    <th>Ni</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range(%)</td>
                    <td>0.18-0.23</td>
                    <td>0.15-0.35</td>
                    <td>0.70-0.90</td>
                    <td>≤ 0.035</td>
                    <td>≤ 0.040</td>
                    <td>0.40-0.60</td>
                    <td>0.15-0.25</td>
                    <td>0.40-0.70</td>
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
                  <td>Ø 20 to 90 MM - Bhushan</td>
                </tr>

                <tr>
                  <td>Rounds</td>
                  <td>Ø 95 to 200 MM - JSW</td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <strong>
                      We can supply material in OD/ID form for SAE 8620 in the
                      forged condition, subject to minimum order quantity (MOQ)
                      and approved drawings/specifications.
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <p>
            Used in automotive gears, shafts, crankshafts, camshafts, and
            bearings requiring wear resistance. Ideal for steering components,
            fasteners, chain parts, oil drilling tools, and agricultural or
            mining equipment. Also suited for general engineering and hand tools
            needing toughness, durability, and surface hardness.
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
