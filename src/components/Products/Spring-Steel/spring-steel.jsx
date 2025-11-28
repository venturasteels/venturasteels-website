import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./spring-steel.css";

const SpringSteel = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/spring-steel\/(en47|sup9|sae9254|en31|en45|sae5160|52crmov4|52crv4|55si7)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Spring Steel | EN47, SUP9, SAE 5160, EN45, 51CrV4 | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Spring Steel stockist and supplier of EN 47, SUP 9, SAE 5160, EN 45, 51CrV4, EN31, SUP10, and more. Suitable for automotive springs, suspension components, leaf springs, coil springs, and industrial applications requiring high yield strength and elasticity."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Spring Steel, EN47, SUP9, SAE 5160, EN45, 51CrV4, 50CrV4, Spring Steel Supplier India, Leaf Spring Steel, Coil Spring Steel, Ventura Steels, Automotive spring steel, High carbon spring steel, Alloy spring steel"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://venturasteels.com/products/spring-steel"
        />

        {/* Open Graph / Social Sharing */}
        <meta
          property="og:title"
          content="Spring Steel | EN47, SUP9, SAE 5160 | Ventura Steels"
        />
        <meta
          property="og:description"
          content="High-performance Spring Steels including EN47, SUP9, SAE5160, EN45, EN31, and 51CrV4 for automotive and industrial spring applications."
        />
        <meta
          property="og:url"
          content="https://venturasteels.com/products/spring-steel"
        />
        <meta property="og:type" content="website" />

        {/* FAQ Schema Markup for Google Rich Results */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Spring Steel used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Spring Steel is used for manufacturing leaf springs, coil springs, suspension parts, cutting tools, clutch springs, industrial machinery parts, and high-strength elastic components."
          }
        },
        {
          "@type": "Question",
          "name": "Which Spring Steel grade is best for automotive applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SUP9, SAE 5160, EN45, and 51CrV4 are the most commonly used spring steel grades in automotive applications such as leaf springs and suspension components."
          }
        },
        {
          "@type": "Question",
          "name": "Is Spring Steel heat treatable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Spring Steel is heat treatable. The heat treatment process improves elasticity, tensile strength, and hardness, which are essential for spring applications."
          }
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="spring-steel-container">
        <div className="spring-steel-hero">
          <h1>Spring Steels</h1>
          <p>
            Ventura Alloy and Steels supplies and stocks Spring Steel in India
            and abroad. Spring steel is a name given to a wide scope of steels
            utilized in the manufacture of springs, prominently in automotive
            and industrial suspension applications. These steels are commonly
            low-alloy manganese, medium-carbon steel or high-carbon steel with a
            very high yield strength.
          </p>
        </div>

        <div className={`spring-steel-main ${isGradeSelected ? "active" : ""}`}>
          <div className="sidebar-wrapper">
            <aside className="plastic-mould-sidebar">
              <h3>Grades</h3>
              <ul>
                <li>
                  <Link
                    to="en47"
                    className={
                      location.pathname.includes("en47") ? "active-grade" : ""
                    }
                  >
                    EN 47 / 50CrV4 / 51CrV4 / AISI 6150 / DIN 8159 / SUP 10
                  </Link>
                </li>
                <li>
                  <Link
                    to="sup9"
                    className={
                      location.pathname.includes("sup9") ? "active-grade" : ""
                    }
                  >
                    SUP 9
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae9254"
                    className={
                      location.pathname.includes("sae9254")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 9254 / SUP 11A
                  </Link>
                </li>
                <li>
                  <Link
                    to="en31"
                    className={
                      location.pathname.includes("en31") ? "active-grade" : ""
                    }
                  >
                    EN 31 / SAE 52100 / 100Cr6
                  </Link>
                </li>
                <li>
                  <Link
                    to="en45"
                    className={
                      location.pathname.includes("en45") ? "active-grade" : ""
                    }
                  >
                    EN45 / SAE 9260 / 60Si7
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae5160"
                    className={
                      location.pathname.includes("sae5160")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 5160
                  </Link>
                </li>
                <li>
                  <Link
                    to="52crmov4"
                    className={
                      location.pathname.includes("52crmov4")
                        ? "active-grade"
                        : ""
                    }
                  >
                    52CrMoV4 / 50Cr4MoV2
                  </Link>
                </li>
                <li>
                  <Link
                    to="52crv4"
                    className={
                      location.pathname.includes("52crv4") ? "active-grade" : ""
                    }
                  >
                    52CrV4 / 51CrV4 / AISI 4150
                  </Link>
                </li>
                <li>
                  <Link
                    to="55si7"
                    className={
                      location.pathname.includes("55si7") ? "active-grade" : ""
                    }
                  >
                    55Si7 / 56Si7 / SAE 9255
                  </Link>
                </li>
              </ul>
            </aside>
          </div>

          <section className="spring-steel-details">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
};

export default SpringSteel;
