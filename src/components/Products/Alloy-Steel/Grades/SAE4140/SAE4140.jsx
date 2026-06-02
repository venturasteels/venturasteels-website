import { useNavigate } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function AlloySteelSAE4140() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 4140 / EN19 / 42CrMo4 / 1.7225 / SCM440",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          SAE 4140 / EN19 / 42CrMo4 / 1.7225 / SCM440 | Alloy Steel | Ventura
          Alloy & Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="SAE 4140 / EN19 / 42CrMo4 / 1.7225 / SCM440 chromium-molybdenum alloy steel with high strength, toughness, fatigue resistance and wear performance. Suitable for shafts, gears, crankshafts, heavy machinery and engineering applications."
        />

        <meta
          name="keywords"
          content="SAE 4140 steel, EN19 steel, 42CrMo4 steel, 1.7225 steel, SCM440 steel, chromium molybdenum alloy steel, EN19 alloy steel, 4140 applications, 42CrMo4 chemical composition, engineering steel supplier India, forged alloy steel, crankshaft steel, shaft steel, gear steel, high tensile alloy steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/alloy-steel/sae4140"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SAE 4140 / EN19 / 42CrMo4 / 1.7225 / SCM440 Alloy Steel",

  "image": [
    "https://venturasteels.com/image/sae-4140-alloy-steel.png"
  ],

  "description": "SAE 4140 / EN19 / 42CrMo4 / 1.7225 / SCM440 is a medium carbon chromium-molybdenum alloy steel delivering an exceptional balance of strength, toughness, wear resistance and fatigue performance. Widely supplied in quenched and tempered condition and suitable for induction or flame hardening.",

  "sku": "4140-VAS",
  "mpn": "1.7225",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Chromium-Molybdenum Alloy Steel",

  "url": "https://venturasteels.com/products/alloy-steel/sae4140",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "SAE 4140 / EN19 / 42CrMo4 / 1.7225 / SCM440"
    },
    {
      "@type": "PropertyValue",
      "name": "Steel Type",
      "value": "Medium Carbon Chromium-Molybdenum Alloy Steel"
    },
    {
      "@type": "PropertyValue",
      "name": "Manufacturing Process",
      "value": "EAF / BOF + LF + VD + Rolling/Forging + Annealing + Quenching/Tempering"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "High strength, toughness, fatigue resistance, wear resistance and hardenability"
    },
    {
      "@type": "PropertyValue",
      "name": "Tensile Strength",
      "value": "850–1100 MPa"
    },
    {
      "@type": "PropertyValue",
      "name": "Yield Strength",
      "value": "≥ 650 MPa"
    },
    {
      "@type": "PropertyValue",
      "name": "Hardness",
      "value": "Annealed: 200–250 HB | Quenched & Tempered: 28–55 HRC"
    },
    {
      "@type": "PropertyValue",
      "name": "Heat Treatment",
      "value": "Quenching: 820–860°C (Oil), Tempering: 400–650°C"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range",
      "value": "Rounds Ø20–200 mm, Imported Rolled Ø32–290 mm, Forged Ø150–1500 mm"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/alloy-steel/sae4140",

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
    "reviewCount": "28"
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
      "reviewBody": "Excellent EN19 / 4140 alloy steel with high fatigue strength and reliable performance in heavy-duty engineering applications."
    }
  ]
}
`}
        </script>
      </Helmet>
      <div className="grade-details">
        <h1 className="text-center">
          SAE 4140 / EN19 / 42CrMo4 / 1.7225 / SCM440
        </h1>

        <p className="subtitle text-center">
          Chromium-Molybdenum Alloy Steel — High Strength, Toughness & Fatigue
          Performance
        </p>

        {/* Standards */}
        <div className="alloy-steel-standards-scroll-wrapper mb-4">
          <div className="alloy-steel-standards-inner-scroll">
            <table className="standards-table">
              <tbody>
                <tr>
                  <td>
                    <strong>COUNTRY</strong>
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
                    <strong>STANDARD</strong>
                  </td>
                  <td>IS</td>
                  <td>AISI / SAE</td>
                  <td>EN </td>
                  <td>DIN</td>
                  <td>GB</td>
                  <td>JIS</td>
                  <td>KS</td>
                  <td>GOST</td>
                </tr>
                <tr>
                  <td>
                    <strong>Equivalent Grades</strong>
                  </td>
                  <td>40Cr4Mo3 / EN19</td>
                  <td>4140</td>
                  <td>42CrMo4 </td>
                  <td>1.7225</td>
                  <td>42CrMo / 42CrMoA</td>
                  <td>SCM440</td>
                  <td>SCM440</td>
                  <td>38KhMo4 / 38Kh2MFA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="alloy-steel-img-1">
            <img
              src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778582107/SAE_4140_Round_Bars_-_4_acrkfn.jpg"
              alt=" SAE 4140 grade of alloy steel, EN19 grade of alloy steel, 42CrMo4 grade of alloy steel, 1.7225 grade of alloy steel, SCM440 grade of alloy steel"
              loading="lazy"
            />
          </div>
          <div className="overview-content">
            <p>
              SAE 4140 / EN19 / 42CrMo4 is a medium carbon chromium-molybdenum
              alloy steel offering an exceptional balance of strength,
              toughness, wear resistance, and fatigue strength. Widely supplied
              in the quenched-and-tempered condition, it can also be surface
              hardened by induction or ﬂame hardening — one of the most
              versatile and reliable alloy steels available.
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range(%)</td>
                    <td>0.38-0.45</td>
                    <td>0.15-0.35</td>
                    <td>0.60-1.00</td>
                    <td>0.90-1.20</td>
                    <td>0.15-0.30</td>
                    <td>≤ 0.035</td>
                    <td>≤ 0.035</td>
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
              "EAF / BOF",
              "LF",
              "VD",
              "CCM",
              "ROLLING ",
              "NORMALIZING / ANNEALING - if required",
            ].map((step, index) => (
              <div key={index} className="process-step">
                <span>{step}</span>
                {index !== 5 && <div className="arrow">→</div>}
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
                  <td>Rounds</td>
                  <td>Ø 20 to 90 MM - Bhushan </td>
                </tr>
                <tr>
                  <td>Rounds</td>
                  <td>Ø 95 to 200 MM - JSW</td>
                </tr>
                <tr>
                  <td>Rolled Rounds Imported</td>
                  <td>Ø 32 to 290 MM </td>
                </tr>
                <tr>
                  <td>Forged Rounds Imported</td>
                  <td>Ø 150 to 1500 MM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>STEEL PROPERTIES</h2>
          <ul>
            <li>
              Medium carbon Cr-Mo alloy steel offering high strength and
              toughness.
            </li>
            <li>
              High hardenability, suitable for quenching & tempering to achieve
              a wide range of mechanical properties.
            </li>
            <li>
              High tensile strength, depending on section size and heat
              treatment.
            </li>
            <li>
              Excellent fatigue strength and impact resistance, making it ideal
              for dynamically loaded components.{" "}
            </li>
            <li>
              Good wear resistance, especially after heat treatment or surface
              hardening.
            </li>
            <li>
              Moderate machinability in annealed condition; reduced
              machinability after hardening; weldability is limited and requires
              preheating.
            </li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <ul>
            <li>
              Drill collars, tool joints, couplings, and high-pressure valves in
              the Oil & Gas Industry
            </li>
            <li>
              Tooling & Fasteners such as High-tensile studs, bolts, jigs,
              ﬁxtures.
            </li>
            <li>
              Heavy-duty axles, crankshafts, gears, steering knuckles, and
              connecting rods, Automotive & Transportation Industry.
            </li>
            <li>
              Landing gear components, structural parts, and drivetrains of
              Aerospace & Defense components.
            </li>
            <li>
              Heavy Machinery & Engineering, such as Pinion gears, shafts,
              spindles, conveyor rollers, and hydraulic piston rods requiring
              high strength and fatigue resistance.
            </li>
          </ul>
        </section>

        {/* Mechanical Properties */}
        <section className="alloysteel-mechanical-properties">
          <h2 className="mechanical-section-title">MECHANICAL PROPERTIES</h2>

          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="property-card mb-3 ">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Typical Value / Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tensile Strength</td>
                      <td>850–1100 MPa</td>
                    </tr>
                    <tr>
                      <td>Yield Strength</td>
                      <td>≥ 650 MPa</td>
                    </tr>
                    <tr>
                      <td>Elongation</td>
                      <td>12–16%</td>
                    </tr>
                    <tr>
                      <td>Reduction of Area</td>
                      <td>≥ 45%</td>
                    </tr>
                    <tr>
                      <td>Hardness (Annealed)</td>
                      <td>200–250 HB</td>
                    </tr>
                    <tr>
                      <td>Hardness (Q&T)</td>
                      <td>28–55 HRC</td>
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
                      <td>Forging Temperature</td>
                      <td>850–1150 °C</td>
                    </tr>
                    <tr>
                      <td>Quenching</td>
                      <td>820–860 °C (Oil)</td>
                    </tr>
                    <tr>
                      <td>Tempering</td>
                      <td>400–650 °C</td>
                    </tr>
                    <tr>
                      <td>Resulting Hardness</td>
                      <td>28–55 HRC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
