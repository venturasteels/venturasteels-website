import { useNavigate } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function SAE1020() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 1020 / C22E / 1.1151 / S20C",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          SAE 1020 / C22E / 1.1151 / S20C | Low Carbon Alloy Steel | Ventura
          Alloy & Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="SAE 1020 / C22E / 1.1151 / S20C low carbon alloy steel with excellent machinability, weldability and formability. Ideal for shafts, gears, structural components, automotive parts and engineering applications requiring toughness and fabrication ease."
        />

        <meta
          name="keywords"
          content="SAE 1020 steel, C22E steel, 1.1151 steel, S20C steel, low carbon steel, alloy steel SAE1020, mild engineering steel, SAE 1020 applications, low carbon structural steel, automotive steel, shaft steel, fabrication steel, machinable steel, engineering steel supplier India"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/alloy-steel/sae1020"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SAE 1020 / C22E / 1.1151 / S20C Alloy Steel",

  "image": [
    "https://venturasteels.com/image/sae-1020-alloy-steel.png"
  ],

  "description": "SAE 1020 / C22E / 1.1151 / S20C is a plain low-carbon steel known for excellent machinability, weldability and formability. Supplied in as-rolled, normalized or cold-drawn conditions, it offers good ductility and toughness for structural and engineering applications.",

  "sku": "1020-VAS",
  "mpn": "1.1151",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Low Carbon Alloy Steel",

  "url": "https://venturasteels.com/products/alloy-steel/sae1020",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "SAE 1020 / C22E / 1.1151 / S20C"
    },
    {
      "@type": "PropertyValue",
      "name": "Steel Type",
      "value": "Plain Low Carbon Steel"
    },
    {
      "@type": "PropertyValue",
      "name": "Condition",
      "value": "As-Rolled, Normalized or Cold-Drawn"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "Excellent machinability, weldability, formability, ductility and toughness"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range",
      "value": "Rounds Ø20–90 mm (Bhushan), Ø95–200 mm (JSW)"
    },
    {
      "@type": "PropertyValue",
      "name": "Availability",
      "value": "MOQ Basis"
    },
    {
      "@type": "PropertyValue",
      "name": "Applications",
      "value": "Gears, pins, ratchets, chassis, shafts, axles, studs and structural components"
    },
    {
      "@type": "PropertyValue",
      "name": "Industries",
      "value": "Automotive, agriculture, fabrication and general engineering"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/alloy-steel/sae1020",

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
    "reviewCount": "19"
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
      "reviewBody": "Reliable SAE 1020 steel with excellent machinability and fabrication properties for structural and engineering applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">SAE 1020 / C22E / 1.1151 / S20C</h1>

        {/* Overview */}
        <section className=" d-flex w-100 justify-content-center align-items-center gap-5 ">
          <div className="pt-3">
            <p>
              SAE 1020 is a plain low-carbon steel known for exceptional
              machinability, weldability, and formability. Commonly supplied in
              as-rolled, normalized, or cold-drawn conditions. Its low carbon
              content provides good ductility and toughness, the right choice
              for components that do not require high strength but need reliable
              structural integrity.
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
            Used for light machinery parts like gears, pins, and ratchets, as
            well as structural components requiring good machinability and
            weldability. Common in automotive and agricultural chassis, shafts,
            axles, mild-duty gears, and studs where ease of fabrication and
            moderate strength are sufﬁcient.
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
