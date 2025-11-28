import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./boron-steel.css";

const Boron = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern = /^\/products\/boron-steel\/(10b21|15b25|10b35)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Boron Steel | 10B21, 15B25, 10B35 | Ventura Alloy & Steels Pvt. Ltd.
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Premium Boron Steels including 10B21, 15B25, and 10B35 with high hardenability, wear resistance and strength. Suitable for automotive parts, agricultural machinery, construction equipment and engineering applications. Ventura Alloy & Steels — trusted supplier of boron steel in India."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Boron Steel, 10B21 steel, 15B25 steel, 10B35 steel, Boron steel supplier India, Ventura Steels, Hardenable steel, Automotive steel grade, Heat treatable steel, Boron alloy steel"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://venturasteels.com/products/boron-steel"
        />

        {/* Open Graph for Social Media Sharing */}
        <meta property="og:title" content="Boron Steels | Ventura Steels" />
        <meta
          property="og:description"
          content="Explore boron steel grades including 10B21, 15B25 and 10B35 designed for high wear resistance and high-strength applications."
        />
        <meta
          property="og:url"
          content="https://venturasteels.com/products/boron-steel"
        />
        <meta property="og:type" content="website" />

        {/* FAQ Schema for SEO Rich Snippet */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Boron Steel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Boron steel is a carbon or alloy steel enhanced with a small percentage of boron, typically less than 1%. Even this small addition significantly increases hardenability, strength, and wear resistance, especially after heat treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Where is boron steel used?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Boron steel is commonly used in automotive components, agricultural machinery, high-strength fasteners, construction equipment, springs, wear parts, and engineering applications requiring strong, lightweight and durable steel."
          }
        },
        {
          "@type": "Question",
          "name": "Is boron steel heat treatable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, boron steels can be heat treated to achieve extremely high hardness and wear resistance. The presence of boron improves hardenability, making it ideal for quenching and tempering processes."
          }
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="boron-container">
        <div className="boron-hero">
          <h1>Boron Steels</h1>
          <p>
            Boron steel refers to steel alloyed with a small amount of boron,
            usually less than 1%. The addition of boron to steel greatly
            increases the hardenability of the resulting alloy.
          </p>
          <p>
            Boron is used in many different applications. Boron steels are
            commonly used in other industries as well, such as in agricultural
            machinery, construction equipment, and various engineering
            applications where high-strength materials are necessary to
            withstand heavy loads and stress.
          </p>
        </div>

        <div className={`boron-main ${isGradeSelected ? "active" : ""}`}>
          <div className="sidebar-wrapper">
            <aside className="boron-sidebar">
              <h3>Grades</h3>
              <ul>
                <li>
                  <Link
                    to="10b21"
                    className={
                      location.pathname.includes("10b21") ? "active-grade" : ""
                    }
                  >
                    10B21
                  </Link>
                </li>
                <li>
                  <Link
                    to="15b25"
                    className={
                      location.pathname.includes("15b25") ? "active-grade" : ""
                    }
                  >
                    15B25
                  </Link>
                </li>
                <li>
                  <Link
                    to="10b35"
                    className={
                      location.pathname.includes("10b35") ? "active-grade" : ""
                    }
                  >
                    10B35
                  </Link>
                </li>
              </ul>
            </aside>
          </div>

          <section className="boron-details">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
};

export default Boron;
