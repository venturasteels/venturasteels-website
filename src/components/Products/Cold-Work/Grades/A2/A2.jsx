import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet-async";

export default function A2() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "A2 / 1.2363 / X100CrMoV5-1 / SKD12 ",
        selectedProduct: "Cold Work Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          A2 / 1.2363 / X100CrMoV5-1 / SKD12 | Cold Work Tool Steel | Ventura
          Alloy & Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="A2 / 1.2363 / X100CrMoV5-1 / SKD12 cold work tool steel with excellent dimensional stability, wear resistance and toughness. Ideal for dies, punches, shear blades, gauges and precision cold work tooling applications."
        />

        <meta
          name="keywords"
          content="A2 steel, 1.2363 steel, X100CrMoV5-1, SKD12 tool steel, A2 cold work tool steel, air hardening steel, A2 tool steel supplier India, A2 chemical composition, A2 applications, A2 hardness, shear blade steel, die steel, punch steel, precision tooling steel, forged A2 steel, rolled flats and rounds"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/cold-work-steel/a2-1-2363"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "A2 / 1.2363 / X100CrMoV5-1 / SKD12 Cold Work Tool Steel",

  "image": [
    "https://venturasteels.com/image/a2-cold-work-tool-steel.png"
  ],

  "description": "A2 / 1.2363 / X100CrMoV5-1 / SKD12 is a cold work tool steel offering excellent dimensional stability during heat treatment along with high wear resistance and toughness. Widely used for dies, punches, shear blades, gauges and precision cold work tooling applications.",

  "sku": "A2-VAS",
  "mpn": "1.2363",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Cold Work Tool Steel",

  "url": "https://venturasteels.com/products/cold-work-steel/a2",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "A2 / 1.2363 / X100CrMoV5-1 / SKD12"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "Excellent dimensional stability, wear resistance and toughness"
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
    "url": "https://venturasteels.com/products/cold-work-steel/a2",

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
      "reviewBody": "Excellent A2 tool steel with superior dimensional stability and wear resistance for precision tooling applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">A2 / 1.2363 / X100CrMoV5-1 / SKD12 </h1>
        <p className="subtitle text-center">
          Cold Work Tool Steel — Wear Resistance & Dimensional Stability
        </p>

        {/* Overview */}
        <section className=" d-flex w-100 justify-content-center align-items-center gap-5 ">
          <div className="pt-3">
            <p>
              A2 delivers superior dimensional stability during heat treatment,
              combined with high wear resistance and strength. It is primarily
              used in cutting instruments, shear blades, rolls, cold pilger
              mandrels, cold stamping devices, and plastic processing moulds.
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
                    <th>Mo</th>
                    <th> V</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range</td>
                    <td>0.95-1.05</td>
                    <td>0.10-0.40</td>
                    <td>0.40-0.80</td>
                    <td>≤ 0.030</td>
                    <td>≤ 0.030</td>
                    <td>4.80-5.50</td>
                    <td>0.90-1.20</td>
                    <td>0.15-0.35</td>
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
            Used for dies, punches, shear blades, gauges, and forming tools. It
            offers good wear resistance, toughness, and dimensional stability,
            making it ideal for precision cold work and medium-duty tooling
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
