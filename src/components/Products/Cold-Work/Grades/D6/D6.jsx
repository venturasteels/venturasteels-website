import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet-async";

export default function D6() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "D6 / X210CrW12 / 1.2436 ",
        selectedProduct: "Cold Work Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          D6 / X210CrW12 / 1.2436 | Cold Work Tool Steel | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="D6 / X210CrW12 / 1.2436 high-carbon high-chromium cold work tool steel with tungsten offering excellent wear resistance, compressive strength and dimensional stability. Achieves 62–63 HRC after heat treatment and is ideal for blanking dies, punches and wear-resistant tooling."
        />

        <meta
          name="keywords"
          content="D6 steel, X210CrW12, 1.2436 steel, AISI D6 tool steel, cold work tool steel D6, high chromium tool steel, tungsten tool steel, D6 chemical composition, D6 hardness, D6 applications, blanking die steel, punching die steel, slitting cutter steel, wear resistant tool steel, forged D6 steel, rolled flats and rounds"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/cold-work-steel/d6"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "D6 / X210CrW12 / 1.2436 Cold Work Tool Steel",

  "image": [
    "https://venturasteels.com/image/d6-cold-work-tool-steel.png"
  ],

  "description": "D6 / X210CrW12 / 1.2436 is a high-carbon, high-chromium cold work tool steel with tungsten offering excellent wear resistance, compressive strength and dimensional stability. Supplied annealed (~225 HBW), it achieves 62–63 HRC after heat treatment and is ideal for abrasive and long-run tooling applications.",

  "sku": "D6-VAS",
  "mpn": "1.2436",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Cold Work Tool Steel",

  "url": "https://venturasteels.com/products/cold-work-steel/d6",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "D6 / X210CrW12 / 1.2436"
    },
    {
      "@type": "PropertyValue",
      "name": "Condition",
      "value": "Annealed (~225 HBW)"
    },
    {
      "@type": "PropertyValue",
      "name": "Hardness After Heat Treatment",
      "value": "62–63 HRC"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "Excellent wear resistance, compressive strength and dimensional stability"
    },
    {
      "@type": "PropertyValue",
      "name": "Form",
      "value": "Rolled Rounds, Rolled Flats, Forged Rounds, Forged Flats"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Rolled Rounds",
      "value": "Ø 20 to 65 mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Rolled Flats",
      "value": "Thickness 8 to 65 mm & Width 21 to 1200 mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Forged Rounds",
      "value": "Ø 70 to 450 mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Forged Flats",
      "value": "Thickness 32 to 300 mm & Width 105 to 810 mm"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/cold-work-steel/d6-1-2436",

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
    "reviewCount": "23"
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
      "reviewBody": "Excellent D6 tool steel with outstanding wear resistance and long service life in abrasive tooling applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">D6 / X210CrW12 / 1.2436</h1>
        <p className="subtitle text-center">
          Cold Work Tool Steel — Wear Resistance & Dimensional Stability
        </p>

        {/* Overview */}
        <section className=" d-flex w-100 justify-content-center align-items-center gap-5 ">
          <div className="pt-3">
            <p>
              AISI D6 is a high-carbon, high-chromium cold work tool steel with
              tungsten, offering excellent wear resistance, high compressive
              strength, and dimensional stability. It provides better hardening
              than D3, with medium toughness. Supplied annealed (~225 HBW), it
              reaches 62–63 HRC after heat treatment, ideal for abrasive,
              long-run tooling applications.
            </p>
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="cold-work-composition">
          <h2 className="mb-4 text-center">
            CHEMICAL COMPOSITION (TYPICAL ANALYSIS %)
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
                    <td>2.00-2.20</td>
                    <td>0.20-0.40</td>
                    <td>0.20-0.40</td>
                    <td>≤ 0.030</td>
                    <td>≤ 0.030</td>
                    <td>11.50-12.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/*size range */}
        <div className="process-section">
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
                  <td>Rolled Rounds</td>
                  <td>Ø 20 to 65 MM</td>
                </tr>
                <tr>
                  <td>Rolled Flats</td>
                  <td>Thickness 8 to 65 MM & Width 21 to 1200 MM </td>
                </tr>
                <tr>
                  <td>Forged Rounds</td>
                  <td>Ø 70 to 450 MM</td>
                </tr>
                <tr>
                  <td>Forged Flats</td>
                  <td>Thickness 32 to 300 MM & Width 105 to 810 MM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <p>
            Used for blanking and punching dies, shear blades, slitting cutters,
            and wear-resistant tools. It provides high hardness, excellent wear
            resistance, and good compressive strength for demanding cold work
            applications.
          </p>
        </section>

        {/* Availability */}
        {/* <section className="availability-info my-4">
          <div className="container">
            <h4 className="mb-3">Availability</h4>
            <p>
              All grades of A2 / 1.2363 are available on
              <strong> advance order</strong> basis on <strong>MOQ</strong> as
              per size requirements.
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

          {/* <span>MOQ: 10 Tonnes</span> */}
        </div>
      </div>
    </>
  );
}
