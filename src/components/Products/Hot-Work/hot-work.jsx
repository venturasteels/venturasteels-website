import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./hot-work.css";

const HotWork = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern =
      /^\/products\/hot-work-steel\/(db6|h13|h11|h21|h10|h12)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Hot Work Tool Steels | Ventura Alloy & Steels Pvt. Ltd.</title>

        <meta
          name="description"
          content="Explore Hot Work Tool Steels such as DB6, H13, H11, H21, H10, and H12 at Ventura Alloy & Steels Pvt. Ltd. High-performance hot die steels designed for excellent heat resistance, toughness, wear resistance, and hardness at elevated temperatures."
        />

        <meta
          name="keywords"
          content="Hot Work Steels, DB6, H13, H11, H21, H10, H12, Hot Work Tool Steel Supplier India, Ventura Steels"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/hot-work-steel"
        />

        {/* Open Graph for Social Sharing */}
        <meta
          property="og:title"
          content="Hot Work Tool Steels | Ventura Steels"
        />
        <meta
          property="og:description"
          content="Premium Hot Work Tool Steels including DB6, H13, H11, H21, H10, and H12 with high heat resistance and durability."
        />
        <meta
          property="og:url"
          content="https://venturasteels.com/products/hot-work-steel"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="hotwork-container">
        <div className="hotwork-hero">
          <h1>Hot Work Tool Steels</h1>
          <p>
            These hot die steels are compatible with heat. They are highly known
            for great wear resistance, heat conductivity, hardness and
            robustness at increased temperatures. These tool steels have
            enhanced features and prove highly useful due to decreased Sulphur
            levels. They are used where operating temperatures of the tool steel
            may reach levels where resistance to softening, heat checking and
            shock is important. It has high heat resistance and medium wear
            resistance, Distortion in hardening is low.
          </p>
        </div>

        <div className={`hotwork-main ${isGradeSelected ? "active" : ""}`}>
          <div className="sidebar-wrapper">
            <aside className="hotwork-sidebar">
              <h3>Grades</h3>
              <ul>
                <li>
                  <Link
                    to="db6"
                    className={
                      location.pathname.includes("db6") ? "active-grade" : ""
                    }
                  >
                    <strong> DB6 / DIN 2714 </strong>/ AISI L6
                  </Link>
                </li>
                <li>
                  <Link
                    to="h13"
                    className={
                      location.pathname.includes("h13") ? "active-grade" : ""
                    }
                  >
                    <strong>H13 </strong> / AISI H 13 / DIN 2344
                  </Link>
                </li>
                <li>
                  <Link
                    to="h11"
                    className={
                      location.pathname.includes("h11") ? "active-grade" : ""
                    }
                  >
                    <strong>H11 </strong> / AISI H 11 / DIN 2343
                  </Link>
                </li>
                <li>
                  <Link
                    to="h21"
                    className={
                      location.pathname.includes("h21") ? "active-grade" : ""
                    }
                  >
                    H21 / AISI H21 / DIN 1.2581
                  </Link>
                </li>
                <li>
                  <Link
                    to="h10"
                    className={
                      location.pathname.includes("h10") ? "active-grade" : ""
                    }
                  >
                    H10 / AISI H10 / DIN 1.2365 / SKD7
                  </Link>
                </li>
                <li>
                  <Link
                    to="h12"
                    className={
                      location.pathname.includes("h12") ? "active-grade" : ""
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
    </>
  );
};

export default HotWork;
