import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./alloy-steel.css";

const AlloySteel = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/alloy-steel\/(20MnCr5|SAE4140|SAE1020|41Cr4|EN41B|EN24|SAE4130|EN36C|SAE8620)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <div className="alloy-steel-container">
      <div className="alloy-steel-hero">
        <h1>Alloy Steels</h1>
        <p>
          Alloy Steel is a derivative of carbon steel where element is added or
          deleted to yield certain properties. Typically these properties
          include machinability, wearability, and strength. An iron-based
          mixture is considered to be an alloy steel when manganese is greater
          than 0.165%, silicon over 0.5%, copper above 0.6%, or other minimum
          quantities of alloying elements such as chromium, nickel, molybdenum,
          or tungsten are present. Basically alloy steel is classified into two
          groups: Low Alloy Steel and High Alloy Steel.
        </p>
      </div>

      <div className={`alloy-steel-main ${isGradeSelected ? "active" : ""}`}>
        <div className="sidebar-wrapper">
          <aside className="plastic-mould-sidebar">
            <h3>Grades</h3>
            <ul>
              <li>
                <Link
                  to="20MnCr5"
                  className={
                    location.pathname.includes("EN47") ? "active-grade" : ""
                  }
                >
                  20MnCr5 / 16MnCr5
                </Link>
              </li>
              <li>
                <Link
                  to="SAE4140"
                  className={
                    location.pathname.includes("SAE4140") ? "active-grade" : ""
                  }
                >
                  SAE 4140 / EN 19 / 42CrMo4 / EN18A / EN18A-D
                </Link>
              </li>
              <li>
                <Link
                  to="SAE1020"
                  className={
                    location.pathname.includes("SAE1020") ? "active-grade" : ""
                  }
                >
                  SAE 1020
                </Link>
              </li>
              <li>
                <Link
                  to="41Cr4"
                  className={
                    location.pathname.includes("41Cr4") ? "active-grade" : ""
                  }
                >
                  41Cr4 / EN18 / 40Cr4B
                </Link>
              </li>
              <li>
                <Link
                  to="EN41B"
                  className={
                    location.pathname.includes("EN41B") ? "active-grade" : ""
                  }
                >
                  EN 41B / 41CrV4 / AISI 4340 / 40NiCrMo84
                </Link>
              </li>
              <li>
                <Link
                  to="EN24"
                  className={
                    location.pathname.includes("EN24") ? "active-grade" : ""
                  }
                >
                  EN 24 / 18CrNiMo6
                </Link>
              </li>
              <li>
                <Link
                  to="SAE4130"
                  className={
                    location.pathname.includes("SAE4130") ? "active-grade" : ""
                  }
                >
                  SAE4130
                </Link>
              </li>
              <li>
                <Link
                  to="EN36C"
                  className={
                    location.pathname.includes("EN36C") ? "active-grade" : ""
                  }
                >
                  EN36C
                </Link>
              </li>
              <li>
                <Link
                  to="SAE8620"
                  className={
                    location.pathname.includes("SAE8620") ? "active-grade" : ""
                  }
                >
                  SAE 8620 / EN353 / SAE 9310
                </Link>
              </li>
            </ul>
          </aside>
        </div>

        <section className="alloy-steel-details">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default AlloySteel;
