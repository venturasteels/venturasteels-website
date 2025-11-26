import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./carbon-steel.css";

const CarbonSteel = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/carbon-steel\/(c45|sae1018|st52.3|en1a|35c8|sae1541|27c15|sae1117|en43bcr|sae1141)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <div className="carbon-steel-container">
      <div className="carbon-steel-hero">
        <h1>Carbon Steels</h1>
        <p>
          Carbon steel is steel that gets most of its character from carbon,
          with just small amounts of other elements like manganese, silicon,
          sulphur, and phosphorus added to tweak its performance. The carbon
          level is what really sets the type: low-carbon, or mild steel, is
          soft, easy to shape, and great for welding; medium-carbon steel
          balances strength and toughness; and high-carbon steel is extremely
          hard and resistant to wear, though it can be brittle and tougher to
          work with. Because of this flexibility, carbon steel has become one of
          the most reliable and affordable materials around. It’s
          everywhere—holding up buildings, running through pipelines, built into
          cars, tools, heavy machines, and mining gear. In many ways, it’s the
          material modern industry is built.
        </p>
      </div>

      <div className={`carbon-steel-main ${isGradeSelected ? "active" : ""}`}>
        <div className="sidebar-wrapper">
          <aside className="plastic-mould-sidebar">
            <h3>Grades</h3>
            <ul>
              <li>
                <Link
                  to="c45"
                  className={
                    location.pathname.includes("c45") ? "active-grade" : ""
                  }
                >
                  C45 / EN9 /EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045
                </Link>
              </li>
              <li>
                <Link
                  to="sae1018"
                  className={
                    location.pathname.includes("sae1018") ? "active-grade" : ""
                  }
                >
                  SAE 1018 / ASTM A36 / ASTM A29 / SAE 1137 / SAE 1138
                </Link>
              </li>
              <li>
                <Link
                  to="st52.3"
                  className={
                    location.pathname.includes("st52.3") ? "active-grade" : ""
                  }
                >
                  ST 52.3
                </Link>
              </li>
              <li>
                <Link
                  to="en1a"
                  className={
                    location.pathname.includes("en1a") ? "active-grade" : ""
                  }
                >
                  EN 1A / EN 1A_PB / EN 1A_L / 230M07 PB
                </Link>
              </li>
              <li>
                <Link
                  to="35c8"
                  className={
                    location.pathname.includes("35c8") ? "active-grade" : ""
                  }
                >
                  35C8 / C35 / EN8 / SAE 1035 / 45C8
                </Link>
              </li>
              <li>
                <Link
                  to="sae1541"
                  className={
                    location.pathname.includes("sae1541") ? "active-grade" : ""
                  }
                >
                  SAE 1541 / EN 15
                </Link>
              </li>
              <li>
                <Link
                  to="27c15"
                  className={
                    location.pathname.includes("27c15") ? "active-grade" : ""
                  }
                >
                  27C15 / SAE 1527
                </Link>
              </li>
              <li>
                <Link
                  to="sae1117"
                  className={
                    location.pathname.includes("sae1117") ? "active-grade" : ""
                  }
                >
                  SAE 1117 / ASTM A108
                </Link>
              </li>
              <li>
                <Link
                  to="en43bcr"
                  className={
                    location.pathname.includes("en43bcr") ? "active-grade" : ""
                  }
                >
                  EN43BCr / SAE 1050 / EN43A
                </Link>
              </li>
              <li>
                <Link
                  to="sae1141"
                  className={
                    location.pathname.includes("sae1141") ? "active-grade" : ""
                  }
                >
                  SAE 1141
                </Link>
              </li>
            </ul>
          </aside>
        </div>

        <section className="carbon-steel-details">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default CarbonSteel;
