import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./hot-work.css";

const HotWork = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    const gradePattern =
      /^\/products\/hot-work-steel\/(db6|h13|h11|h21|h10|h12)/;

    const isGrade = gradePattern.test(location.pathname);
    setIsGradeSelected(isGrade);

    // Scroll only on mobile when grade is selected
    if (isGrade && window.innerWidth <= 768) {
      setTimeout(() => {
        const headerOffset = 80; // Adjust based on your navbar height
        const elementPosition = detailsRef.current.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 150);
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Hot Work Tool Steels | DB6, H13, H11, H21, H10, H12 | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore premium Hot Work Tool Steels including DB6, H13, H11, H21, H10 and H12 designed for high heat resistance, toughness, thermal stability and wear resistance. Ideal for forging dies, die casting tools, extrusion dies, and high-temperature tooling. Ventura Alloy & Steels is a leading supplier of hot work steels in India with ready stock in rounds, flats and blocks."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Hot Work Tool Steel, DB6 steel, H13 steel, H11 tool steel, H21 steel, H10 steel, H12 steel, Hot die steel India, Forging die steel, Die casting steel, Thermal resistance steel, Ventura Alloy and Steels, DIN 2714, AISI H13, DIN 1.2344, Hot work steel supplier India"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://venturasteels.com/products/hot-work-steel"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Hot Work Tool Steels | Ventura Steels"
        />
        <meta
          property="og:description"
          content="High-performance Hot Work Tool Steels including DB6, H13, H11, H21, H10 and H12 engineered for extreme heat resistance and durability."
        />
        <meta
          property="og:url"
          content="https://venturasteels.com/products/hot-work-steel"
        />
        <meta property="og:type" content="website" />

        {/* FAQ Schema – ONLY for Hot Work landing page */}
        {!isGradeSelected && (
          <script type="application/ld+json">
            {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are Hot Work Tool Steels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hot Work Tool Steels are special alloy steels designed to maintain strength, hardness, and wear resistance even when exposed to high temperatures. They offer resistance to thermal fatigue, heat checking, shock loads, and distortion during heat treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Where are Hot Work Tool Steels used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "These steels are used in forging dies, extrusion dies, die casting tools, hot shear blades, mandrels, molds, and other high-temperature tooling applications."
      }
    },
    {
      "@type": "Question",
      "name": "Which hot work steel grades are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ventura Alloy & Steels supplies DB6, H13, H11, H21, H10 and H12 in rounds, flats and blocks."
      }
    }
  ]
}
`}
          </script>
        )}
      </Helmet>

      <div className="hotwork-container">
        <div className="hotwork-hero">
          <h1>Hot Work Tool Steels</h1>
          <p>
            These hot die steels are compatible with heat. They are highly known
            for great wear resistance, heat conductivity, hardness and
            robustness at increased temperatures. These tool steels have
            enhanced features and prove highly useful due to decreased Sulphur
            levels. They are used where operating temperatures of the tool steel
            may reach levels where resistance to softening, heat checking and
            shock is important. It has high heat resistance and medium wear
            resistance, Distortion in hardening is low.
          </p>
        </div>

        <div className={`hotwork-main ${isGradeSelected ? "active" : ""}`}>
          <div className="sidebar-wrapper">
            <aside className="hotwork-sidebar">
              <h3>Grades</h3>
              <ul>
                <li>
                  <Link
                    to="db6"
                    className={
                      location.pathname.includes("db6") ? "active-grade" : ""
                    }
                  >
                    <strong> DB6 / DIN 2714 </strong>/ AISI L6
                  </Link>
                </li>
                <li>
                  <Link
                    to="h13"
                    className={
                      location.pathname.includes("h13") ? "active-grade" : ""
                    }
                  >
                    <strong>H13 </strong> / AISI H 13 / DIN 2344
                  </Link>
                </li>
                <li>
                  <Link
                    to="h11"
                    className={
                      location.pathname.includes("h11") ? "active-grade" : ""
                    }
                  >
                    <strong>H11 </strong> / AISI H 11 / DIN 2343
                  </Link>
                </li>
                <li>
                  <Link
                    to="h21"
                    className={
                      location.pathname.includes("h21") ? "active-grade" : ""
                    }
                  >
                    H21 / AISI H21 / DIN 1.2581
                  </Link>
                </li>
                <li>
                  <Link
                    to="h10"
                    className={
                      location.pathname.includes("h10") ? "active-grade" : ""
                    }
                  >
                    H10 / AISI H10 / DIN 1.2365 / SKD7
                  </Link>
                </li>
                <li>
                  <Link
                    to="h12"
                    className={
                      location.pathname.includes("h12") ? "active-grade" : ""
                    }
                  >
                    H12 / AISI H12 / DIN 1.2606
                  </Link>
                </li>
              </ul>
            </aside>
          </div>

          <section className="hotwork-details" ref={detailsRef}>
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
};

export default HotWork;
