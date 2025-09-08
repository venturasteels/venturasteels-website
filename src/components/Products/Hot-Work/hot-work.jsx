import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./hot-work.css";

const HotWork = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern = /^\/products\/hot-work\/(DB6|H13|H11|H21|H10|H12)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <div className="hotwork-container">
      <div className="hotwork-hero">
        <h1>Hot Work Tool Steels</h1>
        <p>
          These hot die steels are compatible with heat. They are highly known
          for great wear resistance, heat conductivity, hardness and robustness
          at increased temperatures. These tool steels have enhanced features
          and prove highly useful due to decreased Sulphur levels. They are used
          where operating temperatures of the tool steel may reach levels where
          resistance to softening, heat checking and shock is important. It has
          high heat resistance and medium wear resistance, Distortion in
          hardening is low.
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
            <div className="step">UPSET</div>
            <span className="arrow">→</span>
            <div className="step">FORGED</div>
            <span className="arrow">→</span>
            <div className="step">ANNEALED</div>
            <span className="arrow">→</span>
            <div className="step">ROUGH TURNED FOR ROUNDS/MILLED FOR FLATS</div>
            <span className="arrow">→</span>
            <div className="step">OIL QUENCHED</div>
            <span className="arrow">→</span>
            <div className="step">DOUBLE TEMPERED</div>
            <span className="arrow">→</span>
            <div className="step">ROUGH TURNED FOR ROUNDS/MILLED FOR FLATS</div>
          </div>
        </section>
      </div>

      <div className={`hotwork-main ${isGradeSelected ? "active" : ""}`}>
        <div className="sidebar-wrapper">
          <aside className="hotwork-sidebar">
            <h3>Grades</h3>
            <ul>
              <li>
                <Link
                  to="DB6"
                  className={
                    location.pathname.includes("DB6") ? "active-grade" : ""
                  }
                >
                  DB6 / DIN 2714 / AISI L6
                </Link>
              </li>
              <li>
                <Link
                  to="H13"
                  className={
                    location.pathname.includes("H13") ? "active-grade" : ""
                  }
                >
                  H13 / AISI H 13 / DIN 2344
                </Link>
              </li>
              <li>
                <Link
                  to="H11"
                  className={
                    location.pathname.includes("H11") ? "active-grade" : ""
                  }
                >
                  H11 / AISI H 11 / DIN 2343
                </Link>
              </li>
              <li>
                <Link
                  to="H21"
                  className={
                    location.pathname.includes("H21") ? "active-grade" : ""
                  }
                >
                  H21 / AISI H21 / DIN 1.2581
                </Link>
              </li>
              <li>
                <Link
                  to="H10"
                  className={
                    location.pathname.includes("H10") ? "active-grade" : ""
                  }
                >
                  H10 / AISI H10 / DIN 1.2365 / SKD7
                </Link>
              </li>
              <li>
                <Link
                  to="H12"
                  className={
                    location.pathname.includes("H12") ? "active-grade" : ""
                  }
                >
                  H12 / AISI H12 / DIN 1.2606
                </Link>
              </li>
            </ul>
          </aside>
        </div>

        <section className="hotwork-details">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default HotWork;
