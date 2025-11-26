import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./alloy-steel.css";

const AlloySteel = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/alloy-steel\/(20mncr5|sae4140|sae1020|41cr4|en41b|en24|sae4130|en36c|sae8620)/;
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
                  to="20mncr5"
                  className={
                    location.pathname.includes("20mncr5") ? "active-grade" : ""
                  }
                >
                  20MnCr5 / 16MnCr5
                </Link>
              </li>
              <li>
                <Link
                  to="sae4140"
                  className={
                    location.pathname.includes("sae4140") ? "active-grade" : ""
                  }
                >
                  SAE 4140 / EN 19 / 42CrMo4 / EN18A / EN18A-D
                </Link>
              </li>
              <li>
                <Link
                  to="sae1020"
                  className={
                    location.pathname.includes("sae1020") ? "active-grade" : ""
                  }
                >
                  SAE 1020
                </Link>
              </li>
              <li>
                <Link
                  to="41cr4"
                  className={
                    location.pathname.includes("41cr4") ? "active-grade" : ""
                  }
                >
                  41Cr4 / EN18 / 40Cr4B
                </Link>
              </li>
              <li>
                <Link
                  to="en41b"
                  className={
                    location.pathname.includes("en41b") ? "active-grade" : ""
                  }
                >
                  EN 41B / 41CrV4 / AISI 4340 / 40NiCrMo84
                </Link>
              </li>
              <li>
                <Link
                  to="en24"
                  className={
                    location.pathname.includes("en24") ? "active-grade" : ""
                  }
                >
                  EN 24 / 18CrNiMo6
                </Link>
              </li>
              <li>
                <Link
                  to="sae4130"
                  className={
                    location.pathname.includes("sae4130") ? "active-grade" : ""
                  }
                >
                  SAE4130
                </Link>
              </li>
              <li>
                <Link
                  to="en36c"
                  className={
                    location.pathname.includes("en36c") ? "active-grade" : ""
                  }
                >
                  EN36C
                </Link>
              </li>
              <li>
                <Link
                  to="sae8620"
                  className={
                    location.pathname.includes("sae8620") ? "active-grade" : ""
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
