import { useNavigate } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function AlloySteelSAE4130() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 4130 / 25CrMo4 / 1.7218 / SCM430",
        selectedProduct: "Alloy Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          SAE 4130 / 25CrMo4 / 1.7218 / SCM430 Alloy Steel Supplier in India |
          Ventura Steels
        </title>

        <meta
          name="description"
          content="Ventura Steels supplies SAE 4130 / 25CrMo4 / 1.7218 / SCM430 alloy steel in round bars and forged condition. SAE 4130 Chromoly steel offers excellent strength, toughness, fatigue resistance, weldability, and heat treatment response for aerospace, automotive, oil & gas, and engineering applications."
        />

        <meta
          name="keywords"
          content="
    SAE 4130,
    25CrMo4,
    1.7218,
    SCM430,
    SAE 4130 alloy steel,
    SAE 4130 supplier India,
    Chromoly steel supplier,
    25CrMo4 round bar,
    SCM430 steel supplier,
    SAE 4130 steel India,
    SAE 4130 forged steel,
    aerospace alloy steel,
    automotive alloy steel,
    oil and gas steel grade,
    engineering steel supplier,
    alloy steel round bars,
    Ventura Steels,
    alloy steel supplier India
    "
        />

        <link
          rel="canonical"
          href="https://www.venturasteels.com/products/alloy-steel/sae4130"
        />

        <meta
          property="og:title"
          content="SAE 4130 / 25CrMo4 / 1.7218 / SCM430 Alloy Steel | Ventura Steels"
        />

        <meta
          property="og:description"
          content="SAE 4130 Chromoly alloy steel with excellent strength, toughness, fatigue resistance, and weldability. Available in round bars and forged condition from Ventura Steels."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.venturasteels.com/products/alloy-steel/sae4130"
        />

        <meta
          property="og:image"
          content="https://www.venturasteels.com/images/grades/sae4130.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="SAE 4130 / 25CrMo4 / 1.7218 / SCM430 Alloy Steel"
        />

        <meta
          name="twitter:description"
          content="SAE 4130 Chromoly alloy steel supplier in India offering excellent strength, weldability, toughness, and heat treatment response."
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">SAE 4130 / 25CrMo4 / 1.7218 / SCM430</h1>

        {/* Overview */}
        <section className=" d-flex w-100 justify-content-center align-items-center gap-5 ">
          <div className="pt-3">
            <p>
              SAE 4130, known as Chromoly, is a low-carbon alloy steel offering
              excellent strength, toughness, fatigue resistance, and
              weldability. Chromium improves hardenability and corrosion
              resistance, while molybdenum enhances high-temperature strength.
              It responds well to heat treatment and is widely used in quenched,
              tempered, or normalized conditions.
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
                    <td>0.28-0.33</td>
                    <td>0.15-0.30</td>
                    <td>0.40-0.60</td>
                    <td>≤ 0.035</td>
                    <td>≤ 0.040</td>
                    <td>0.80-1.10</td>
                    <td>0.15-0.25</td>
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
            Used in aerospace structures, landing gear, and fasteners, as well
            as automotive chassis, suspension, and motorsport frames. Ideal for
            oil and gas tools, pressure vessels, and heavy machinery. Also
            applied in defence, agriculture, and general engineering requiring
            strength, toughness, and weldability.
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
