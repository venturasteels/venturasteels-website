import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./spring-steel.css";

const SpringSteel = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/spring-steel\/(EN47|SUP9|SAE9254|EN31|EN45|SAE5160|52CrMoV4|52CrV4|55Si7)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <div className="spring-steel-container">
      <div className="spring-steel-hero">
        <h1>Spring Steels</h1>
        <p>
          Ventura Alloy and Steels supplies and stocks Spring Steel in India and
          abroad. Spring steel is a name given to a wide scope of steels
          utilized in the manufacture of springs, prominently in automotive and
          industrial suspension applications. These steels are commonly
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
                  to="EN47"
                  className={
                    location.pathname.includes("EN47") ? "active-grade" : ""
                  }
                >
                  EN 47 / 50CrV4 / 51CrV4 / AISI 6150 / DIN 8159 / SUP 10
                </Link>
              </li>
              <li>
                <Link
                  to="SUP9"
                  className={
                    location.pathname.includes("SUP9") ? "active-grade" : ""
                  }
                >
                  SUP 9
                </Link>
              </li>
              <li>
                <Link
                  to="SAE9254"
                  className={
                    location.pathname.includes("SAE9254") ? "active-grade" : ""
                  }
                >
                  SAE 9254 / SUP 11A
                </Link>
              </li>
              <li>
                <Link
                  to="EN31"
                  className={
                    location.pathname.includes("EN31") ? "active-grade" : ""
                  }
                >
                  EN 31 / SAE 52100 / 100Cr6
                </Link>
              </li>
              <li>
                <Link
                  to="EN45"
                  className={
                    location.pathname.includes("EN45") ? "active-grade" : ""
                  }
                >
                  EN45 / SAE 9260 / 60Si7
                </Link>
              </li>
              <li>
                <Link
                  to="SAE5160"
                  className={
                    location.pathname.includes("SAE5160") ? "active-grade" : ""
                  }
                >
                  SAE 5160
                </Link>
              </li>
              <li>
                <Link
                  to="52CrMoV4"
                  className={
                    location.pathname.includes("52CrMoV4") ? "active-grade" : ""
                  }
                >
                  52CrMoV4 / 50Cr4MoV2
                </Link>
              </li>
              <li>
                <Link
                  to="52CrV4"
                  className={
                    location.pathname.includes("52CrV4") ? "active-grade" : ""
                  }
                >
                  52CrV4 / 51CrV4 / AISI 4150   
                </Link>
              </li>
              <li>
                <Link
                  to="55Si7"
                  className={
                    location.pathname.includes("55Si7") ? "active-grade" : ""
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
  );
};

export default SpringSteel;
