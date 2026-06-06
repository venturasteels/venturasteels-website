import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MetalWeightCalculator from "../MetalWeightCalculator/MetalWeightCalculator";
import "./carbon-steel.css";

const CarbonSteel = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/carbon-steel\/(sae1018|c45|st52.3|en1a-l-pb|en9)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Carbon Steel | C45, EN8, A36, 1018, ST52.3, EN1A | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Carbon Steel stockist and supplier offering C45, EN8, A36, ST52.3, SAE 1018, EN8D, EN1A, CK45, SAE 1137, SAE 1050, SAE 1541, and more. Ideal for machining, fabrication, automotive, structural applications, shafts, fasteners, and general engineering use."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Carbon Steel, C45, EN8, EN9, ST52.3, SAE 1018, EN1A, ASTM A36, Carbon Steel supplier India, Ventura Steels, Mild Steel, Medium Carbon Steel, High Carbon Steel Stockist, Structural Steel"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://venturasteels.com/products/carbon-steel"
        />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Carbon Steel | Ventura Steels" />
        <meta
          property="og:description"
          content="Explore Carbon Steel grades including C45, EN8, ASTM A36, ST52.3, EN1A and SAE 1018 for industrial and engineering applications."
        />
        <meta
          property="og:url"
          content="https://venturasteels.com/products/carbon-steel"
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
          "name": "What is Carbon Steel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Carbon steel is an iron-carbon alloy where carbon is the primary strengthening element. Depending on the carbon % it can be low-carbon (mild steel), medium-carbon, or high-carbon steel used across construction, automotive, machinery, and manufacturing."
          }
        },
        {
          "@type": "Question",
          "name": "Which Carbon Steel grade is best for machining?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EN1A (Free Cutting Steel), EN1A PB (Lead Added), and SAE 1018 are best suited for machining applications requiring excellent machinability and consistency."
          }
        },
        {
          "@type":"Question",
          "name": "Is Carbon Steel suitable for heat treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Medium and high carbon steels like C45, EN8, EN9, and SAE 1050 can be heat treated for improved hardness, wear resistance, and mechanical strength."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Carbon Steel used?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Carbon steel is widely used in shafts, gears, machinery parts, fasteners, automotive components, construction structures, pipelines, tools, and industrial equipment."
          }
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="carbon-steel-container">
        <div className="carbon-steel-hero">
          <h1>Carbon Steels</h1>
          <p>
            Carbon steels are iron-carbon alloys where carbon content, ranging
            from low to medium, is the primary determinant of mechanical
            properties, with Manganese, Silicon, and trace elements providing
            supplementary strengthening. They are deﬁned by their versatility,
            cost-effectiveness, and broad processability, spanning free-cutting
            grades optimised for high-speed machining, structural grades
            delivering reliable load-bearing performance, and medium-carbon
            grades offering a dependable balance of strength, toughness, and
            heat treatment response. This category encompasses four grades, C45
            (EN8), SAE 1018, ST 52.3, and EN 1A, each tailored to a distinct
            performance proﬁle.
          </p>
        </div>

        <div className={`carbon-steel-main ${isGradeSelected ? "active" : ""}`}>
          <div className="sidebar-wrapper">
            <aside className="carbon-steel-sidebar">
              <h3>Grades</h3>
              <ul>
                <li>
                  <Link
                    to="sae1018"
                    className={
                      location.pathname.includes("sae1018")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 1018 / C18E / 1.0402 / S18C / ASTM A29
                  </Link>
                </li>
                <li>
                  <Link
                    to="c45"
                    className={
                      location.pathname.includes("c45") ? "active-grade" : ""
                    }
                  >
                    C45 / EN8 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI1045 /
                    45C8 / 1.0503
                  </Link>
                </li>
                <li>
                  <Link
                    to="st52.3"
                    className={
                      location.pathname.includes("st52.3") ? "active-grade" : ""
                    }
                  >
                    ST52.3 / S355J2G3 / S355JR / 1.057 / SM490A
                  </Link>
                </li>
                <li>
                  <Link
                    to="en1a-l-pb"
                    className={
                      location.pathname.includes("en1a-l-pb")
                        ? "active-grade"
                        : ""
                    }
                  >
                    EN1A-L&PB / 11SMnPb30 / 1.0718 / SUM22L / 230M07PB
                  </Link>
                </li>
                <li>
                  <Link
                    to="en9"
                    className={
                      location.pathname.includes("en9") ? "active-grade" : ""
                    }
                  >
                    EN9 / 1055 / 1.0535 / S55C
                  </Link>
                </li>
              </ul>
            </aside>
          </div>

          <section className="carbon-steel-details">
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

export default CarbonSteel;
