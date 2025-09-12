import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./plastic-mould.css";

const PlasticMould = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern = /^\/products\/hot-work\/(P20+Ni|P20|1.2316)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <div className="plastic-mould-container">
      <div className="plastic-mould-hero">
        <h1>Plastic Mould Steels</h1>
        <p>
          P20 Tool Steel is a widely used plastic mould steel designed for
          applications such as injection moulding and zinc die-casting. With a
          carbon content of 0.36–0.40% and alloying elements including chromium
          and nickel, it combines strength, toughness, and excellent
          polishability. These properties make it ideal for producing moulds
          that require a superior surface finish and long-lasting performance.
        </p>
        <p>
          Supplied in a range of pre-hardened conditions, P20 eliminates the
          need for additional heat treatment, reducing processing time and cost.
          Its versatility and durability make it the preferred choice for
          automotive, consumer goods, packaging, and industrial mould-making,
          where precision and consistency are essential.
        </p>

        {/* process routes */}
        <section className="process-route mx-auto mt-3">
          <h3>Process Route</h3>
          <div className="process-flow">
            <div className="step">EAF</div>
            <span className="arrow">→</span>
            <div className="step">LF</div>
            <span className="arrow">→</span>
            <div className="step">VD</div>
            <span className="arrow">→</span>
            <div className="step">CONTINUOUS CASTING / INGOT</div>
            <span className="arrow">→</span>
            <div className="step">FORGED / ROLLED</div>
            <span className="arrow">→</span>
            <div className="step">ANNEALED</div>
            <span className="arrow">→</span>
            <div className="step">MACHINED (Rounds / Flats)</div>
            <span className="arrow">→</span>
            <div className="step">PRE-HARDENED (Approx. 28–34 HRC)</div>
            <span className="arrow">→</span>
            <div className="step">FINISH MACHINED / POLISHED</div>
          </div>
        </section>
      </div>

      <div className={`plastic-mould-main ${isGradeSelected ? "active" : ""}`}>
        <div className="sidebar-wrapper">
          <aside className="plastic-mould-sidebar">
            <h3>Grades</h3>
            <ul>
              <li>
                <Link
                  to="DB6"
                  className={
                    location.pathname.includes("P20+Ni") ? "active-grade" : ""
                  }
                >
                  P20+Ni / 1.2738
                </Link>
              </li>
              <li>
                <Link
                  to="H13"
                  className={
                    location.pathname.includes("P20") ? "active-grade" : ""
                  }
                >
                  P20 / 1.2311
                </Link>
              </li>
              <li>
                <Link
                  to="H11"
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
  );
};

export default PlasticMould;
