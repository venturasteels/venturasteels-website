import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./plastic-mould.css";

const PlasticMould = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/plastic-mould-steel\/(p20ni|p20-1.2311|1.2316)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Plastic Mould Steel | P20, P20+Ni, 1.2316 | Ventura Alloy & Steels
          Pvt. Ltd.
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore premium Plastic Mould Tool Steels including P20, P20+Ni (1.2738), and 1.2316 — ideal for injection moulds, die casting moulds, and plastic tooling requiring high polishability, durability, and machinability."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Plastic Mould Steels, P20 Steel, P20+Ni Steel, 1.2311, 1.2738, 1.2316, Plastic Mold Tool Steel Supplier India, Ventura Steels, Injection Mould Steel, Mould Steel Grades"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://venturasteels.com/products/plastic-mould-steel"
        />

        {/* Open Graph / Social Metadata */}
        <meta
          property="og:title"
          content="Plastic Mould Tool Steels | P20, P20+Ni, 1.2316 | Ventura Steels"
        />
        <meta
          property="og:description"
          content="High-performance Plastic Mould Steels including P20, P20+Ni (1.2738), and 1.2316 with excellent machinability, polishability, and wear resistance."
        />
        <meta
          property="og:url"
          content="https://venturasteels.com/products/plastic-mould-steel"
        />
        <meta property="og:type" content="website" />

        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is P20 steel used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "P20 steel is widely used in injection moulding, blow moulds, and plastic tooling due to its excellent machinability, durability, and polishability."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between P20 and P20+Ni (1.2738)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "P20+Ni (1.2738) has added Nickel for improved hardness uniformity through thickness, better toughness, and higher polishability compared to standard P20."
          }
        },
        {
          "@type": "Question",
          "name": "What is 1.2316 steel used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1.2316 stainless mould steel is used for high corrosion-resistant plastic moulds such as PVC moulds, transparent moulds, and applications requiring high polish and mirror finish."
          }
        }
      ]
    }
  `}
        </script>
      </Helmet>

      <div className="plastic-mould-container">
        <div className="plastic-mould-hero">
          <h1>Plastic Mould Steels</h1>
          <p>
            P20 Tool Steel is a widely used plastic mould steel designed for
            applications such as injection moulding and zinc die-casting. With a
            carbon content of 0.36–0.40% and alloying elements including
            chromium and nickel, it combines strength, toughness, and excellent
            polishability. These properties make it ideal for producing moulds
            that require a superior surface finish and long-lasting performance.
          </p>
          <p>
            Supplied in a range of pre-hardened conditions, P20 eliminates the
            need for additional heat treatment, reducing processing time and
            cost. Its versatility and durability make it the preferred choice
            for automotive, consumer goods, packaging, and industrial
            mould-making, where precision and consistency are essential.
          </p>
        </div>

        <div
          className={`plastic-mould-main ${isGradeSelected ? "active" : ""}`}
        >
          <div className="sidebar-wrapper">
            <aside className="plastic-mould-sidebar">
              <h3>Grades</h3>
              <ul>
                <li>
                  <Link
                    to="p20ni"
                    className={
                      location.pathname.includes("p20ni") ? "active-grade" : ""
                    }
                  >
                    P20+Ni / 1.2738
                  </Link>
                </li>
                <li>
                  <Link
                    to="p20-1.2311"
                    className={
                      location.pathname.includes("p20-1.2311")
                        ? "active-grade"
                        : ""
                    }
                  >
                    P20 / 1.2311
                  </Link>
                </li>
                <li>
                  <Link
                    to="1.2316"
                    className={
                      location.pathname.includes("1.2316") ? "active-grade" : ""
                    }
                  >
                    1.2316
                  </Link>
                </li>
              </ul>
            </aside>
          </div>

          <section className="plastic-mould-details">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
};

export default PlasticMould;
