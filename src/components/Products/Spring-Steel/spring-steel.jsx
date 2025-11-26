import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
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
                    location.pathname.includes("sae9254") ? "active-grade" : ""
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
                    location.pathname.includes("sae5160") ? "active-grade" : ""
                  }
                >
                  SAE 5160
                </Link>
              </li>
              <li>
                <Link
                  to="52crmov4"
                  className={
                    location.pathname.includes("52crmov4") ? "active-grade" : ""
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
  );
};

export default SpringSteel;
