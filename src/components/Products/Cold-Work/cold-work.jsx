import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MetalWeightCalculator from "../MetalWeightCalculator/MetalWeightCalculator";
import { Helmet } from "react-helmet-async";
import "./cold-work.css";

const ColdWork = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    const gradePattern =
      /^\/products\/cold-work-steel\/(d2|d3|d5|sae52100|o1|a2|d6)/;

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
        {/* SEO Title */}
        <title>
          Cold Work Tool Steels | D2, D3, D5, A2, O1 | Ventura Alloy & Steels
          Pvt. Ltd.
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Buy premium Cold Work Tool Steels including D2 (1.2379), D3 (1.2080), D5 (1.2601), A2 (1.2363), and O1 (OHNS / 2510) with high wear resistance and dimensional stability. Available in rounds, flats, and blocks with ready stock. Ventura Alloy & Steels is a leading supplier of cold work die steels in India."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Cold Work Tool Steel, D2 steel, 1.2379, HCHCR D2, D3 steel, 1.2080, HCHCR D3, D5 steel, 1.2601, A2 tool steel, 1.2363, O1 tool steel, OHNS O1, cold work die steel, Ventura Alloy and Steels, cold work tool steel supplier India, D2 round bar supplier, cold work tool steel stock, tool steel grades list"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://venturasteels.com/products/cold-work-steel"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Cold Work Tool Steels | Ventura Steels"
        />
        <meta
          property="og:description"
          content="Explore high-performance Cold Work Tool Steels including D2, D3, D5, A2, and O1 for cutting, shearing, punching and forming applications."
        />
        <meta
          property="og:url"
          content="https://venturasteels.com/products/cold-work-steel"
        />
        <meta property="og:type" content="website" />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which Cold Work Tool Steel grades are available at Ventura Alloy & Steels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ventura offers D2 (1.2379), D3 (1.2080), D5 (1.2601), A2 (1.2363), and O1 (OHNS / 2510) Cold Work Tool Steels in round bars, flats, and block sizes."
          }
        },
        {
          "@type": "Question",
          "name": "Where are Cold Work Steels used?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cold Work Tool Steels are used for punches, blanking dies, shear blades, forming tools, broaches, gauges, and metal stamping applications where high hardness and abrasion resistance are required."
          }
        },
        {
          "@type": "Question",
          "name": "Is D2 better than D3?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both D2 and D3 are high-carbon high-chromium tool steels. D2 offers superior toughness and machinability, while D3 offers higher wear resistance but lower impact strength."
          }
        },
        {
          "@type": "Question",
          "name": "Does Cold Work Steel require heat treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Cold Work steels such as D2, D3, D5, A2, and O1 require hardening and tempering to achieve hardness levels between 56–62 HRC depending on tooling requirements."
          }
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="coldwork-container">
        <div className="coldwork-hero">
          <h1>Cold Work Tool Steels</h1>
          <p>
            Cold work tool steels are high-alloy steels engineered for tooling
            operating at or near ambient temperatures, typically below 200°C,
            where dimensional stability, wear resistance, and high compressive
            strength are paramount. They are deﬁned by their ability to maintain
            hardness and edge retention through heavy cutting, forming, and
            blanking cycles without the thermal demands of hot work
            applications. Chromium, Molybdenum, Vanadium, and Carbon work in
            concert to deliver high hardenability, abrasion resistance, and
            minimal distortion during heat treatment. This category encompasses
            four grades, D2 (DIN 1.2379), D3, Cr12MoV, and SAE 52100, each
            tailored to a distinct performance proﬁle.
          </p>
        </div>

        <div className={`coldwork-main ${isGradeSelected ? "active" : ""}`}>
          <div className="sidebar-wrapper">
            <aside className="coldwork-sidebar">
              <h3>Grades</h3>
              <ul>
                <li>
                  <Link
                    to="d2"
                    className={
                      location.pathname.includes("d2") ? "active-grade" : ""
                    }
                  >
                    D2 / 1.2379 / HCHCR D2
                  </Link>
                </li>
                <li>
                  <Link
                    to="d3"
                    className={
                      location.pathname.includes("d3") ? "active-grade" : ""
                    }
                  >
                    D3 / 1.2080 / HCHCR D3
                  </Link>
                </li>
                <li>
                  <Link
                    to="d5"
                    className={
                      location.pathname.includes("d5") ? "active-grade" : ""
                    }
                  >
                    D5 / Cr12MoV / 1.2601
                  </Link>
                </li>
                <li>
                  <Link
                    to="sae52100"
                    className={
                      location.pathname.includes("sae52100")
                        ? "active-grade"
                        : ""
                    }
                  >
                    SAE 52100 / 100Cr6 / 1.3505 / SUJ2
                  </Link>
                </li>
                <li>
                  <Link
                    to="o1"
                    className={
                      location.pathname.includes("o1") ? "active-grade" : ""
                    }
                  >
                    O1 / 1.2510 / OHNS O1 / 100MnCrW4 / SK53
                  </Link>
                </li>
                <li>
                  <Link
                    to="a2"
                    className={
                      location.pathname.includes("a2") ? "active-grade" : ""
                    }
                  >
                    A2 / 1.2363 / X100CrMoV5-1 / SKD12
                  </Link>
                </li>
                <li>
                  <Link
                    to="d6"
                    className={
                      location.pathname.includes("d6") ? "active-grade" : ""
                    }
                  >
                    D6 / X210CrW 12 / 1.2436
                  </Link>
                </li>
              </ul>
            </aside>
          </div>

          <section className="coldwork-details" ref={detailsRef}>
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

export default ColdWork;
