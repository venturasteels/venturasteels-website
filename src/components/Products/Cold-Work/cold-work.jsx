import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./cold-work.css";

const ColdWork = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern = /^\/products\/cold-work\/(D2|D3|D5|A2|O1)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <div className="coldwork-container">
      <div className="coldwork-hero">
        <h1>Cold Work Tool Steels</h1>
        <p>
          Cold work steels fall into five groups: water hardening, oil
          hardening, medium alloy air hardening, high carbon-high chromium and
          shock resisting. As their name implies, these steels are used in low
          to medium temperature applications. Highly wear resistant due to the
          high volume of carbides in the microstructure.
        </p>
        <p>
          The high carbon and chromium content promotes deep hardening.
          Hardenability is accentuated by small amounts of tungsten and
          molybdenum. Dimensional change in hardening is extremely low.
        </p>
        <p>
          Cold work Steel is used in the manufacturing of tools used in cold
          processing of other steels like cast irons and non-ferrous metals. The
          operations are diversified as cutting, bending, forming, coining,
          extrusion, steel wire drawings, wooden work, ceramic pressing, pigment
          grinding, rock drilling, paper cutting and various other applications.
        </p>
        <p>
          We can help you choose the right steel and heat treatment for the
          application. What you gain – lower tooling costs, lower maintenance
          costs and less downtime.
        </p>
      </div>

      <div className={`coldwork-main ${isGradeSelected ? "active" : ""}`}>
        <div className="sidebar-wrapper">
          <aside className="coldwork-sidebar">
            <h3>Grades</h3>
            <ul>
              <li>
                <Link
                  to="D2"
                  className={
                    location.pathname.includes("D2") ? "active-grade" : ""
                  }
                >
                  D2 / 2379 / HCHCR D2
                </Link>
              </li>
              <li>
                <Link
                  to="D3"
                  className={
                    location.pathname.includes("D3") ? "active-grade" : ""
                  }
                >
                  D3 / 2080 / HCHCR D3
                </Link>
              </li>
              <li>
                <Link
                  to="D5"
                  className={
                    location.pathname.includes("D5") ? "active-grade" : ""
                  }
                >
                  D5 / Cr12MoV / 2601    
                </Link>
              </li>
              <li>
                <Link
                  to="A2"
                  className={
                    location.pathname.includes("A2") ? "active-grade" : ""
                  }
                >
                  A2 / 2363
                </Link>
              </li>
              <li>
                <Link
                  to="O1"
                  className={
                    location.pathname.includes("O1") ? "active-grade" : ""
                  }
                >
                  O1 / 2510 / OHNS O1
                </Link>
              </li>
            </ul>
          </aside>
        </div>

        <section className="coldwork-details">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default ColdWork;
