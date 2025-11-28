import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./carbon-steel.css";

const CarbonSteel = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/carbon-steel\/(c45|sae1018|st52.3|en1a|35c8|sae1541|27c15|sae1117|en43bcr|sae1141)/;
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
          "@type":="Question",
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
            Carbon steel is steel that gets most of its character from carbon,
            with just small amounts of other elements like manganese, silicon,
            sulphur, and phosphorus added to tweak its performance. The carbon
            level is what really sets the type: low-carbon, or mild steel, is
            soft, easy to shape, and great for welding; medium-carbon steel
            balances strength and toughness; and high-carbon steel is extremely
            hard and resistant to wear, though it can be brittle and tougher to
            work with. Because of this flexibility, carbon steel has become one
            of the most reliable and affordable materials around. It’s
            everywhere—holding up buildings, running through pipelines, built
            into cars, tools, heavy machines, and mining gear. In many ways,
            it’s the material modern industry is built.
          </p>
        </div>

        <div className={`carbon-steel-main ${isGradeSelected ? "active" : ""}`}>
          <div className="sidebar-wrapper">
            <aside className="plastic-mould-sidebar">
              <h3>Grades</h3>
              <ul>
                <li>
                  <Link
                    to="c45"
                    className={
                      location.pathname.includes("c45") ? "active-grade" : ""
                    }
                  >
                    C45 / EN9 /EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae1018"
                    className={
                      location.pathname.includes("sae1018")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 1018 / ASTM A36 / ASTM A29 / SAE 1137 / SAE 1138
                  </Link>
                </li>
                <li>
                  <Link
                    to="st52.3"
                    className={
                      location.pathname.includes("st52.3") ? "active-grade" : ""
                    }
                  >
                    ST 52.3
                  </Link>
                </li>
                <li>
                  <Link
                    to="en1a"
                    className={
                      location.pathname.includes("en1a") ? "active-grade" : ""
                    }
                  >
                    EN 1A / EN 1A_PB / EN 1A_L / 230M07 PB
                  </Link>
                </li>
                <li>
                  <Link
                    to="35c8"
                    className={
                      location.pathname.includes("35c8") ? "active-grade" : ""
                    }
                  >
                    35C8 / C35 / EN8 / SAE 1035 / 45C8
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae1541"
                    className={
                      location.pathname.includes("sae1541")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 1541 / EN 15
                  </Link>
                </li>
                <li>
                  <Link
                    to="27c15"
                    className={
                      location.pathname.includes("27c15") ? "active-grade" : ""
                    }
                  >
                    27C15 / SAE 1527
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae1117"
                    className={
                      location.pathname.includes("sae1117")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 1117 / ASTM A108
                  </Link>
                </li>
                <li>
                  <Link
                    to="en43bcr"
                    className={
                      location.pathname.includes("en43bcr")
                        ? "active-grade"
                        : ""
                    }
                  >
                    EN43BCr / SAE 1050 / EN43A
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae1141"
                    className={
                      location.pathname.includes("sae1141")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 1141
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
    </>
  );
};

export default CarbonSteel;
