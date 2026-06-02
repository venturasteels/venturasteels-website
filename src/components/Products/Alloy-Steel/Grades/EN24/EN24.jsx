import { useNavigate } from "react-router-dom";
import UnderConstruction from "../../../../UnderConstruction";
import { Helmet } from "react-helmet-async";

const AlloySteelEN24 = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "EN24 / SAE4340 / 34CrNiMo6 / 1.6582",
        selectedProduct: "Alloy Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          EN24 / SAE 4340 / 34CrNiMo6 / 1.6582 | Alloy Steel | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="EN24 / SAE 4340 / 34CrNiMo6 / 1.6582 medium-carbon nickel chromium molybdenum alloy steel offering high strength, toughness, fatigue resistance and hardenability. Ideal for crankshafts, gears, aerospace, defense and heavy engineering applications."
        />

        <meta
          name="keywords"
          content="EN24 steel, SAE 4340 steel, 34CrNiMo6 steel, 1.6582 steel, nickel chromium molybdenum steel, alloy steel EN24, 4340 alloy steel, EN24 applications, EN24 chemical composition, forged alloy steel, aircraft steel, crankshaft steel, gear steel, high strength engineering steel supplier India"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/alloy-steel/en24"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EN24 / SAE 4340 / 34CrNiMo6 / 1.6582 Alloy Steel",

  "image": [
    "https://venturasteels.com/image/en24-alloy-steel.png"
  ],

  "description": "EN24 / SAE 4340 / 34CrNiMo6 / 1.6582 is a medium-carbon low-alloy nickel-chromium-molybdenum steel designed for high strength and toughness. It provides excellent hardenability, wear resistance and impact strength, making it ideal for heavy-duty engineering and aerospace applications.",

  "sku": "EN24-VAS",
  "mpn": "1.6582",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Nickel Chromium Molybdenum Alloy Steel",

  "url": "https://venturasteels.com/products/alloy-steel/en24",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "EN24 / SAE 4340 / 34CrNiMo6 / 1.6582"
    },
    {
      "@type": "PropertyValue",
      "name": "Steel Type",
      "value": "Medium Carbon Low Alloy Steel"
    },
    {
      "@type": "PropertyValue",
      "name": "International Equivalents",
      "value": "EN24, SAE 4340, 34CrNiMo6, 1.6582, SNCM439, SCM8"
    },
    {
      "@type": "PropertyValue",
      "name": "Manufacturing Process",
      "value": "EAF / BOF + LF + VD + CCM + Rolling + Normalizing/Annealing"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "High tensile strength, toughness, fatigue resistance and excellent hardenability"
    },
    {
      "@type": "PropertyValue",
      "name": "Surface Hardening",
      "value": "Suitable for induction hardening and nitriding"
    },
    {
      "@type": "PropertyValue",
      "name": "Hardness After Tempering",
      "value": "64–66 HRC"
    },
    {
      "@type": "PropertyValue",
      "name": "Heat Treatment",
      "value": "Hardening: 1190–1230°C | Tempering: 530–560°C"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range",
      "value": "Rounds Ø20–200 mm, Rolled Ø32–290 mm, Forged Ø150–1500 mm"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/alloy-steel/en24",

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
    "reviewCount": "27"
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
      "reviewBody": "High-performance EN24 alloy steel with excellent toughness and fatigue strength for heavy-duty engineering applications."
    }
  ]
}
`}
        </script>
      </Helmet>
      <div className="grade-details">
        {/* Title */}
        <h1 className="text-center">EN24 / SAE4340 / 34CrNiMo6 / 1.6582</h1>
        <p className="subtitle text-center">
          Medium Carbon Low Alloy Steel - High Toughness, Strength and Fatigue
          Resistance.
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
                  <td>ASTM A29</td>
                  <td>EN</td>
                  <td>DIN / WNr</td>
                  <td>GB</td>
                  <td>JIS</td>
                  <td>KS</td>
                  <td>GOST</td>
                </tr>
                <tr>
                  <td>
                    <strong>Equivalent Grades</strong>
                  </td>
                  <td>40NiCrMo3</td>
                  <td>4340</td>
                  <td>34CrNiMo6 / 1.6582</td>
                  <td>34CrNiMo6 / 1.6582</td>
                  <td>40CrNiMoA</td>
                  <td>SNCM 439 / SNCM8</td>
                  <td>SNCM 439</td>
                  <td>38XH2MA / 38KhN2MA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="alloy-steel-img-1">
            <img
              src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778582115/EN_24_Round_Bars_-_5_dmg7uu.jpg"
              alt="D3 grade image, 1.2080 grade, HCHCR D3 cold work tool steel grade"
              loading="lazy"
            />
          </div>
          <div className="overview-content">
            <p>
              EN24 is a medium-carbon, low-alloy steel known for toughness and
              strength in demanding engineering applications. Its nickel,
              chromium, and molybdenum content delivers excellent hardenability
              and resistance to wear and impact. Supplied in annealed, hardened
              & tempered conditions with a typical tensile strength. Surface
              hardening by induction or nitriding is also achievable.
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
                    <td>0.38-0.43</td>
                    <td>0.15-0.35</td>
                    <td>0.60-0.80</td>
                    <td>≤ 0.035</td>
                    <td>≤ 0.040</td>
                    <td>0.70-0.90</td>
                    <td>0.20-0.30</td>
                    <td>1.65-2.00</td>
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
              "ROLLING",
              "NORMALIZING / ANNEALING (IF REQUIRED)",
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
                  <td>Ø 95 to 200 MM - JSW </td>
                </tr>
                <tr>
                  <td>Rolled Rounds</td>
                  <td>Ø 32 to 290 MM </td>
                </tr>
                <tr>
                  <td>Forged Rounds</td>
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
            <li>High tensile strength and toughness</li>
            <li>Excellent fatigue and impact resistance.</li>
            <li>Good hardenability through the section.</li>
            <li>Can be induction hardened or nitrided.</li>
            <li>Good machinability in the annealed condition.</li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <ul>
            <li>
              Heavy-duty crankshafts, connecting rods, drive shafts,
              differentials, and gears.
            </li>
            <li>
              Aircraft landing gear, engine mounts, rotor shafts, and structural
              defense components require high toughness.
            </li>
            <li>
              Power transmission gears, hydraulic bolting, mining equipment, and
              large shafts need high wear resistance.
            </li>
            <li>
              Tooling & Molding parts, such as Forging dies, cold-forming tools,
              and plastic molds, demand high surface hardness.
            </li>
            <li>
              High-strength machine components require toughness and shock
              resistance.
            </li>
          </ul>
        </section>

        {/* Thermal properties */}
        <section className="plasticmould-thermal-properties">
          <h2 className="thermal-section-title">THERMAL PROPERTIES</h2>

          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="property-card mb-3">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>Temperature (°C)</th>
                      <th>W / (m*K)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20</td>
                      <td>40.5</td>
                    </tr>
                    <tr>
                      <td>350</td>
                      <td>32.5</td>
                    </tr>
                    <tr>
                      <td>700</td>
                      <td>25.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Heat Treatment */}
        <section className="heat-treatment">
          <h2 className="section-title">Heat Treatment</h2>

          <div className="heat-card mb-3">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Process</th>
                  <th>Temperature Range</th>
                </tr>
                <tr>
                  <td>Soft Annealing °C</td>
                  <td>650 – 700</td>
                </tr>
                <tr>
                  <td>Cooling</td>
                  <td>Slow</td>
                </tr>
                <tr>
                  <td>Hardness HB</td>
                  <td>max. 280</td>
                </tr>
                <tr>
                  <td>Stress Relief °C</td>
                  <td>630 – 650</td>
                </tr>
                <tr>
                  <td>Hardening °C</td>
                  <td>1190 – 1230</td>
                </tr>
                <tr>
                  <td>Quenching</td>
                  <td>Oil / Salt Bath / Air</td>
                </tr>
                <tr>
                  <td>Tempering °C</td>
                  <td>530 – 560</td>
                </tr>
                <tr>
                  <td>Hardness after Tempering</td>
                  <td>64 – 66 HRC</td>
                </tr>
              </tbody>
            </table>
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
};

export default AlloySteelEN24;
