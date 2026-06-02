import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function SUP9() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SUP9",
        selectedProduct: "Spring Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          SUP9 | Chromium Alloy Spring Steel | Ventura Alloy & Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="SUP9 spring steel is a high-carbon chromium alloy spring steel offering excellent strength, toughness, fatigue resistance and hardenability. Ideal for leaf springs, coil springs, torsion springs, railway, aerospace and heavy-duty industrial applications."
        />

        <meta
          name="keywords"
          content="SUP9 steel, SUP9 spring steel, chromium spring steel, JIS SUP9, alloy spring steel, spring steel supplier India, leaf spring steel, coil spring steel, torsion spring steel, railway spring steel, aerospace spring steel, industrial spring steel, high fatigue spring steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/spring-steel/sup9"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SUP9 Chromium Alloy Spring Steel",

  "image": [
    "https://venturasteels.com/image/sup9-spring-steel.png"
  ],

  "description": "SUP9 is a high-carbon chromium alloy spring steel specified under the Japanese Industrial Standard. It offers excellent strength, toughness, fatigue resistance and hardenability. Compared to conventional manganese spring steels, SUP9 provides superior durability and performance under cyclic and heavy loading conditions.",

  "sku": "SUP9-VAS",
  "mpn": "SUP9",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Chromium Alloy Spring Steel",

  "url": "https://venturasteels.com/products/spring-steel/sup9",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "SUP9"
    },
    {
      "@type": "PropertyValue",
      "name": "Steel Type",
      "value": "High Carbon Chromium Alloy Spring Steel"
    },
    {
      "@type": "PropertyValue",
      "name": "Supply Condition",
      "value": "Oil Quenched and Tempered"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "High strength, improved ductility, excellent toughness, superior fatigue resistance and hardenability"
    },
    {
      "@type": "PropertyValue",
      "name": "Performance",
      "value": "Excellent shock absorption and durability under extreme cyclic loading"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Rounds",
      "value": "16–90 mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Wire Rods",
      "value": "5.5–32 mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Applications",
      "value": "Leaf springs, coil springs, helical springs, torsion springs, railway suspension systems, aerospace components and industrial machinery springs"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/spring-steel/sup9",

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
      "reviewBody": "Excellent chromium alloy spring steel with outstanding fatigue resistance, toughness and durability for heavy-duty automotive, railway and industrial spring applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">SUP9</h1>
        <p className="subtitle text-center">
          Chromium Spring Steel — Engineered for High-Load Automotive &
          Industrial Springs
        </p>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="overview-content-1">
            <p>
              SUP9 is a high-carbon chromium alloy spring steel speciﬁed under
              the Japanese Industrial Standard. It belongs to the high-quality
              cold-work spring steel category and is primarily supplied in the
              oil-quenched and tempered condition. Compared to plain manganese
              spring steels, SUP9 offers notably higher strength, improved
              ductility and toughness, better hardenability, and lower
              overheating sensitivity.
            </p>
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="spring-steel-composition">
          <h2 className="mb-4 text-center">
            CHEMICAL COMPOSITION (TYPICAL ANALYSIS %)
          </h2>
          <div className="table-data d-flex justify-content-center">
            <div className="spring-steel-chemical-composition spring-steel-composition-table table-responsive-custom">
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>C</th>
                    <th>Si</th>
                    <th>Mn</th>
                    <th>P</th>
                    <th>S</th>
                    <td>Cr</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range(%)</td>
                    <td>0.52-0.60</td>
                    <td>0.15-0.35</td>
                    <td>0.65-0.95</td>
                    <td>≤ 0.030</td>
                    <td>≤ 0.035</td>
                    <td>0.65-0.95</td>
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
                  <td>16 to 90 MM - Bhushan </td>
                </tr>
                <tr>
                  <td>Wire Rods</td>
                  <td>5.5 to 32 MM - Bhushan</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Wire rod up to 50 MM can be supplied with a minimum order
                    quantity (MOQ) of 15 MT per size.
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Round bar lengths can be offered up to 15 meters, with MOQ
                    applicable per size.
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
            Used in heavy vehicles, railways, aerospace, and industrial
            machinery, these springs include leaf, coil, helical, and torsion
            types. They provide high strength, fatigue resistance, and shock
            absorption, ensuring durability and reliable performance under
            extreme loads and demanding conditions.
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
