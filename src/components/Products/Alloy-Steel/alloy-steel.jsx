import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MetalWeightCalculator from "../MetalWeightCalculator/MetalWeightCalculator";
import "./alloy-steel.css";

const AlloySteel = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/alloy-steel\/(20mncr5|sae4140|en24|en36|sae8620|sae4130|41cr4|sae1020|en353)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Alloy Steel | 4140, 20MnCr5, EN19, EN24, EN36C, 8620 | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Alloy Steel supplier and stockist offering grades including SAE 4140, EN19, 20MnCr5, EN24, 8620, EN36C, SAE 4130, 16MnCr5, 40Cr4B and 18CrNiMo6. Ideal for machining, heat treatment, carburizing, induction hardening, automotive, engineering and industrial applications."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Alloy Steel, EN19, 4140, EN24, 8620, 20MnCr5, 16MnCr5, EN36C, SAE 4130, Alloy Steel Supplier India, Ventura Steels, Case Hardening Steel, Engineering Alloy Steel, Heat Treatable Alloy Steel"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://venturasteels.com/products/alloy-steel"
        />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Alloy Steels | Ventura Steels" />
        <meta
          property="og:description"
          content="Explore Alloy Steel grades including 4140, 20MnCr5, EN24, EN36C, and 8620 for engineering and industrial applications."
        />
        <meta
          property="og:url"
          content="https://venturasteels.com/products/alloy-steel"
        />
        <meta property="og:type" content="website" />

        {/* FAQ Schema for Google Rich Results */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Alloy Steel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alloy Steel is carbon steel with added elements such as chromium, nickel, molybdenum, vanadium, or manganese to improve strength, machinability, hardness, toughness, and wear resistance. It is commonly classified as low alloy and high alloy steel."
          }
        },
        {
          "@type": "Question",
          "name": "Which Alloy Steel grade is best for heat treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SAE 4140, EN19, EN24, AISI 4340, and 42CrMo4 are widely used for heat treatment applications such as quenching, tempering, and induction hardening."
          }
        },
        {
          "@type": "Question",
          "name": "What applications use case-hardening alloy steels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Case hardening alloy steel grades like 20MnCr5, 16MnCr5, SAE 8620, and EN36C are used for gears, shafts, pins, bearings, camshafts, and transmission components requiring a tough core and hard surface."
          }
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="alloy-steel-container">
        <div className="alloy-steel-hero">
          <h1>Alloy Steels</h1>
          <p>
            Alloy steels are engineering steels enhanced with deliberate
            additions of alloying elements, Such as Chromium, Molybdenum,
            Nickel, Manganese, and Vanadium, to achieve mechanical properties
            beyond those of plain carbon steels. They are deﬁned by their
            superior strength, toughness, hardenability, and fatigue resistance
            across a wide range of heat-treated conditions. Carbon content and
            alloying system determine the performance tier, from case-hardening
            grades that combine hard surfaces with tough cores to
            through-hardening grades that deliver high tensile strength
            throughout. This category encompasses ﬁve grades: 20MnCr5 / 16MnCr5,
            41Cr4, EN24, SAE 52100, SAE 1020, and SAE 4140, each tailored to a
            distinct performance proﬁle.
          </p>
        </div>

        <div className={`alloy-steel-main ${isGradeSelected ? "active" : ""}`}>
          <div className="sidebar-wrapper">
            <aside className="plastic-mould-sidebar">
              <h3>Grades</h3>
              <ul>
                <li>
                  <Link
                    to="20mncr5"
                    className={
                      location.pathname.includes("20mncr5")
                        ? "active-grade"
                        : ""
                    }
                  >
                    20MnCr5 / 16MnCr5
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae4140"
                    className={
                      location.pathname.includes("sae4140")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 4140 / EN19 / 42CrMo4 / 1.7224 / SCM440
                  </Link>
                </li>
                <li>
                  <Link
                    to="en24"
                    className={
                      location.pathname.includes("en24") ? "active-grade" : ""
                    }
                  >
                    EN24 / SAE 4340 / 34CrNiMo6 / 1.6582
                  </Link>
                </li>
                <li>
                  <Link
                    to="en36"
                    className={
                      location.pathname.includes("en36") ? "active-grade" : ""
                    }
                  >
                    EN36 / 14NiCr14 / 1.5752 / SNCM220
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae8620"
                    className={
                      location.pathname.includes("sae8620")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 8620 / 20NiCrMo2-2
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae4130"
                    className={
                      location.pathname.includes("sae4130")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 4130 / 25CrMo4 / 1.7218 / SCM430
                  </Link>
                </li>
                <li>
                  <Link
                    to="41cr4"
                    className={
                      location.pathname.includes("41cr4") ? "active-grade" : ""
                    }
                  >
                    41Cr4 / 1.7035 / SCr440 / EN18 / 40Cr4B
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae1020"
                    className={
                      location.pathname.includes("sae1020")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 1020 / C22E / 1.1151 / S20C
                  </Link>
                </li>
                <li>
                  <Link
                    to="en353"
                    className={
                      location.pathname.includes("en353") ? "active-grade" : ""
                    }
                  >
                    EN353 / 1.6523
                  </Link>
                </li>
              </ul>
            </aside>
          </div>

          <section className="alloy-steel-details">
            <Outlet />
          </section>
        </div>
      </div>

      {/* metal weight calculator */}
      <div
        className="modal fade"
        id="weightModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content custom-modal">
            <div className="modal-header">
              <h5 className="modal-title">⚙️ Metal Weight Calculator</h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <MetalWeightCalculator />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlloySteel;
