import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./cold-work.css";

const ColdWork = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern = /^\/products\/cold-work-steel\/(d2|d3|d5|a2|o1)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <div className="coldwork-container">
      <div className="coldwork-hero">
        <h1>Cold Work Tool Steels</h1>
        <p>
          Cold work steels provide exceptional wear resistance and are intended
          for low to medium temperature applications because of their high
          carbide content. While dimensional changes during hardening are kept
          to a minimum, high levels of carbon and chromium guarantee deep
          hardening, which is further enhanced by trace amounts of tungsten and
          molybdenum.
        </p>
        <p>
          For cold processing of steel, cast iron, and non-ferrous metals, such
          as cutting, bending, forming, coining, extrusion, wire drawing,
          woodworking, ceramic pressing, pigment grinding, rock drilling, paper
          cutting, and more, these steels are perfect.
        </p>
        <p>
          In order to lower tooling costs, minimize maintenance, and minimize
          downtime, we assist you in choosing the appropriate steel and heat
          treatment.
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
                  <strong>D2 / 1.2379 </strong>/ HCHCR D2
                </Link>
              </li>
              <li>
                <Link
                  to="d3"
                  className={
                    location.pathname.includes("d3") ? "active-grade" : ""
                  }
                >
                  <strong>D3 / 1.2080 </strong> / HCHCR D3
                </Link>
              </li>
              <li>
                <Link
                  to="d5"
                  className={
                    location.pathname.includes("d5") ? "active-grade" : ""
                  }
                >
                  D5 / <strong> Cr12MoV </strong> / 1.2601
                </Link>
              </li>
              <li>
                <Link
                  to="a2"
                  className={
                    location.pathname.includes("a2") ? "active-grade" : ""
                  }
                >
                  A2 / 1.2363
                </Link>
              </li>
              <li>
                <Link
                  to="o1"
                  className={
                    location.pathname.includes("o1") ? "active-grade" : ""
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
