import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./carbon-steel-grade.css";
import "../applications-properties.css";
import "../cta-block.css";
import "../weight-btn.css";

export default function CarbonSteelC45() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade:
          "C45 / EN8 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045 / 45C8 / 1.0503",
        selectedProduct: "Carbon Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          C45 / EN8 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045 / 45C8 /
          1.0503 | Carbon Steel | Ventura Alloy & Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="C45 / EN8 / CK45 / AISI 1045 / 1.0503 medium carbon steel with excellent strength, toughness and machinability. Suitable for shafts, axles, gears, bolts, crankshafts and engineering components requiring wear resistance and durability."
        />

        <meta
          name="keywords"
          content="C45 steel, EN8 steel, EN8A steel, EN8D steel, EN8M steel, EN8DM steel, CK45 steel, AISI 1045 steel, 45C8 steel, 1.0503 steel, medium carbon steel, carbon steel supplier India, engineering steel, shaft steel, gear steel, crankshaft steel, induction hardening steel, forged carbon steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/carbon-steel/c45"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "C45 / EN8 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045 / 45C8 / 1.0503 Carbon Steel",

  "image": [
    "https://venturasteels.com/image/c45-en8-carbon-steel.png"
  ],

  "description": "C45 / EN8 / CK45 / AISI 1045 / 1.0503 is a medium carbon steel widely used in engineering and manufacturing for its excellent balance of strength, toughness and machinability. Supplied in normalized, annealed or quenched and tempered conditions, it provides reliable wear resistance and durability for demanding industrial applications.",

  "sku": "C45-VAS",
  "mpn": "1.0503",

  "brand": {
    "@type": "Brand",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },

  "material": "Medium Carbon Steel",

  "url": "https://venturasteels.com/products/carbon-steel/c45",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "C45 / EN8 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045 / 45C8 / 1.0503"
    },
    {
      "@type": "PropertyValue",
      "name": "Steel Type",
      "value": "Medium Carbon Engineering Steel"
    },
    {
      "@type": "PropertyValue",
      "name": "Supply Condition",
      "value": "Normalized, Annealed or Quenched & Tempered"
    },
    {
      "@type": "PropertyValue",
      "name": "Manufacturing Process",
      "value": "EAF / BOF + LF + VD + CCM + Rolling/Forging + Normalizing/Annealing/QT"
    },
    {
      "@type": "PropertyValue",
      "name": "Key Features",
      "value": "Excellent strength, toughness, machinability and wear resistance"
    },
    {
      "@type": "PropertyValue",
      "name": "Heat Treatment Capability",
      "value": "Suitable for flame hardening and induction hardening"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Rounds",
      "value": "Ø20–290 mm rolled, Ø150–1500 mm forged"
    },
    {
      "@type": "PropertyValue",
      "name": "Size Range - Flats/Plates",
      "value": "Rolled thickness 250–450 mm, Forged thickness 250–1000 mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Applications",
      "value": "Shafts, axles, gears, crankshafts, couplings, bolts, flanges, hydraulic parts and industrial machinery"
    }
  ],

  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://venturasteels.com/products/carbon-steel/c45",

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
      "reviewBody": "Reliable medium carbon steel with excellent machinability, toughness and wear resistance for engineering and industrial applications."
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">
          C45 / EN8 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045 / 45C8 /
          1.0503
        </h1>

        <p className="subtitle text-center">
          Medium Carbon Engineering Steel — Balanced Strength, Good
          Machinability & Reliable Heat Treatment Response
        </p>

        {/* Standards / Equivalents */}
        <div className="carbon-steel-standards-scroll-wrapper mb-4">
          <div className="carbon-steel-standards-inner-scroll">
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
                  <td>EN</td>
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
                  <td>CK45 / C45 / 45C8</td>
                  <td>AISI 1045</td>
                  <td>C45 / C45E</td>
                  <td>1.0503 / C45</td>
                  <td>45# / 45 Steel</td>
                  <td>S45C</td>
                  <td>SM45C</td>
                  <td>45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3 pt-3">
          <div className="carbon-steel-img-1">
            <img
              src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1779343177/C45_Round_Bars_t7o4wu.jpg"
              alt="C45 / EN8 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045 / 45C8 / 1.0503 Carbon Steel Grade"
              loading="lazy"
            />
          </div>
          <div className="overview-content">
            <p>
              C45 is a medium carbon steel widely used in engineering and
              manufacturing for its excellent balance of strength, toughness,
              and machinability. Supplied in normalized, annealed, or quenched
              and tempered conditions.
            </p>
            <p>
              After heat treatment, it delivers reliable wear resistance for
              mechanical components, including shafts, axles, gears, bolts, and
              machine parts requiring moderate strength and durability. These
              grades are widely used in general engineering, automotive parts,
              and industrial machinery, offering a cost-effective alternative to
              alloy steels for many applications.
            </p>
            <p>
              C45 / CK45 / SAE 1045 / EN8 are generally considered equivalent
              grades, with only minor differences in chemical composition across
              standards. They are valued for their good machinability and
              reasonable weldability, making them well-suited for high-volume
              production components. Variants such as EN8D, EN8M, and EN8DM are
              modified versions of standard EN8, developed to provide enhanced
              properties like improved strength, hardness, or machinability,
              depending on the application requirements.
            </p>
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="carbon-steel-composition">
          <h2 className="mb-4 text-center">
            CHEMICAL COMPOSITION (TYPICAL ANALYSIS %)
          </h2>

          <div className="table-data d-flex justify-content-center">
            <div className="carbon-steel-chemical-composition carbon-steel-composition-table table-responsive-custom">
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
                    <td>Range</td>
                    <td>0.42 – 0.50</td>
                    <td>≤ 0.40</td>
                    <td>0.60 – 0.90</td>
                    <td>≤ 0.040</td>
                    <td>≤ 0.050</td>
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
              " EAF / BOF ",
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

          <div className="process-flow mt-2">
            {[
              " EAF / BOF ",
              "LF",
              "VD",
              "CCM",
              "FORGING",
              "QT (IF REQUIRED)",
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
                <tr>
                  <td>Rolled Flats/Plates</td>
                  <td>Thickness 250 to 450 MM & Width 2000 to 2500 MM</td>
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
              A standard medium carbon steel (non-alloyed), typically supplied
              in normalized or as-rolled condition provides better toughness and
              cleaner composition compared to basic C45 grades.
            </li>
            <li>Offers a good balance of machinability and strength.</li>
            <li>
              Certain variants contain higher sulphur to improve machinability,
              with a slight reduction in toughness.
            </li>
            <li>
              Suitable for surface hardening methods such as ﬂame or induction
              hardening.
            </li>
            <li>
              Delivers moderate tensile strength for general engineering use.
            </li>
            <li>
              Exhibits improved hardenability compared to lower carbon steels.
            </li>
            <li>
              Overall, C45 is stronger and harder than mild steel, making it
              suitable for more demanding applications.
            </li>
          </ul>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>APPLICATIONS</h2>
          <ul>
            <li>
              Industrial machinery, agriculture, and vehicles supporting
              components like Shafts, Axles, and Spindles Fasteners and
              Structural Parts like Nut-Bolts, studs, ﬂanges.
            </li>
            <li>
              Automotive Components like steering components, axle beams, Gears,
              crankshafts, and couplings machinery components, and structural
              parts.
            </li>
            <li>
              Hand tools like ha MMers, screwdrivers, drills, dies, jigs, and
              ﬁxtures for cutting or molding piston rods, cylinder guides, and
              plunger shafts for medium-pressure hydraulic systems.
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
                      <td>
                        Tensile Strength, R<sub>m</sub>
                      </td>
                      <td>570–700 MPa</td>
                    </tr>
                    <tr>
                      <td>
                        Yield Strength, R<sub>p0.2</sub>
                      </td>
                      <td>≈ 330–400 MPa</td>
                    </tr>
                    <tr>
                      <td>
                        Elongation, A<sub>5</sub>
                      </td>
                      <td>≥ 14%</td>
                    </tr>
                    <tr>
                      <td>Reduction of Area Z</td>
                      <td>≈ 35%</td>
                    </tr>
                    <tr>
                      <td>Hardness (Annealed)</td>
                      <td>≈ 170–210 HB</td>
                    </tr>
                    <tr>
                      <td>Hardness (Q&T)</td>
                      <td>≈ 28–32 HRC</td>
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
                      <td>Normalising Temperature</td>
                      <td>840–880 °C</td>
                    </tr>
                    <tr>
                      <td>Quenching Temperature</td>
                      <td>820–860 °C (water or oil)</td>
                    </tr>
                    <tr>
                      <td>Tempering Range</td>
                      <td>550–660 °C</td>
                    </tr>
                    <tr>
                      <td>Resulting Hardness</td>
                      <td>≈ 28–32 HRC</td>
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
