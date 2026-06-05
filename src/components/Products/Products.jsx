// SAME IMPORTS — no change
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GradesTable from "./GradesTable/GradesTable";
import MetalWeightCalculator from "./MetalWeightCalculator/MetalWeightCalculator";
import { useLocation } from "react-router-dom";
import "./Products.css";

const heroImages = [
  "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1775555620/quality_hzvjli.jpg",
  "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1775555329/products-page/product.jpg",
  "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1775555329/products-page/bg-product-img.jpg",
];

const productCategories = [
  {
    title: "Hot Work Steel",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1775472585/ventura-product-image/hot-work-steel/db6-hot-work-steel.jpg",
    path: "/products/hot-work-steel",
  },
  {
    title: "Cold Work Steel",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1777874996/1.2379_Flat_Bars_nkoszy.jpg",
    path: "/products/cold-work-steel",
  },
  {
    title: "Plastic Mould Steel",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778568672/P20_Flat_Bars_xzt9sa.jpg",
    path: "/products/plastic-mould-steel",
  },
  {
    title: "Alloy Steel",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778582107/SAE_4140_Round_Bars_-_4_acrkfn.jpg",
    path: "/products/alloy-steel",
  },
  {
    title: "Spring Steel",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1775473445/Wire-Rod-bundles-2_hrl2nw.jpg",
    path: "/products/spring-steel",
  },
  {
    title: "Carbon Steel",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1775473472/C45-Round-Bars_aejn7v.jpg",
    path: "/products/carbon-steel",
  },
  // {
  //   title: "Boron Steel",
  //   image:
  //     "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764051261/10B35_Boron_Steel_Round_Bars_mzkyft.png",
  //   path: "/products/boron-steel",
  // },
];

const whyChoose = [
  { icon: "bi-shield-check", title: "Certified Quality" },
  { icon: "bi-clock-history", title: "On-Time Deliveries" },
  { icon: "bi-gear-wide-connected", title: "Modern Infrastructure" },
  { icon: "bi-people", title: "Experienced Team" },
];

export default function ProductLanding() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 80); // delay ensures DOM is loaded
      }
    }
  }, [location]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Products | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Explore Ventura Alloy & Steels’ complete range of Tool Steels, Alloy Steels and Engineering Steels with precision processing and reliable supply."
          />
          <meta
            name="description"
            content="Explore Ventura Alloy & Steels Pvt. Ltd.’s complete range of Tool Steels, Alloy Steels, Carbon Steels, Spring Steels and Plastic Mould Steels. We offer precision machining, reliable stock availability, and fast delivery across India for industrial applications."
          />

          <meta
            name="keywords"
            content="
  Ventura Steels products,
  Ventura steel grades,
  tool steel supplier India,
  alloy steel supplier India,
  alloy steel supplier Mumbai,
  special steel supplier India,
  industrial steel supplier,
  engineering steel supplier,
  steel stockist India,
  steel round bars supplier,
  steel blocks supplier,
  precision steel solutions,

  hot work tool steel,
  cold work tool steel,
  plastic mould steel,
  alloy steel,
  carbon steel,
  spring steel,
  boron steel,
  die steel supplier,
  mould steel supplier,

  H13 steel supplier,
  H11 tool steel,
  DB6 steel supplier,
  D2 steel supplier,
  D3 steel supplier,
  D5 steel supplier,
  O1 steel supplier,
  A2 steel supplier,
  P20 steel supplier,
  P20+Ni steel supplier,

  EN19 steel supplier,
  SAE4140 supplier,
  42CrMo4 supplier,
  SCM440 steel supplier,
  EN24 steel supplier,
  SAE4340 supplier,
  34CrNiMo6 supplier,
  EN36 steel supplier,
  SAE8620 supplier,
  20MnCr5 supplier,
  16MnCr5 supplier,

  EN8 steel supplier,
  CK45 supplier,
  C45 steel supplier,
  SAE1018 supplier,
  EN9 steel supplier,
  S355J2G3 steel supplier,

  EN47 spring steel,
  SUP9 steel supplier,
  SUP11 supplier,
  50CrV4 steel supplier,

  tool steel grades India,
  alloy steel grades India,
  steel grades supplier Mumbai,
  industrial raw material supplier
"
          />

          <link rel="canonical" href="https://venturasteels.com/products" />
        </Helmet>
      </HelmetProvider>

      {/* ===== PREMIUM HERO CAROUSEL ===== */}
      <section className="hero-carousel">
        <Carousel
          fade
          interval={5200}
          indicators
          controls
          pause={false}
          prevIcon={<span className="carousel-nav prev">‹</span>}
          nextIcon={<span className="carousel-nav next">›</span>}
        >
          {heroImages.map((img, index) => (
            <Carousel.Item key={index}>
              <div className="hero-slide">
                <img src={img} alt={`slide-${index}`} />

                {/* Premium Overlay */}
                <div className="hero-overlay-premium">
                  <span className="hero-tag">
                    Ventura - Complete Steel Service Center
                  </span>

                  <h1>Premium Tool & Alloy Steels by Ventura Steels</h1>

                  <p>Stocking · Cutting · Machining · Reliable Supply</p>

                  <div className="hero-cta">
                    <Link to="/enquiry" className="hero-btn-primary">
                      Send Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="product-grid">
        <div className="container">
          <h2 className="text-center" data-aos="fade-up">
            Ventura's Product Categories
          </h2>

          <div className="row-product">
            {productCategories.map((cat, index) => (
              <Link
                key={index}
                to={cat.path}
                className="product-card"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <img src={cat.image} alt={cat.title} />
                <div className="product-card-footer">
                  <h5>{cat.title}</h5>
                  <span>View Grades</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="why-ventura">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Ventura</h2>

          <div className="row g-4 justify-content-center">
            {whyChoose.map((item, idx) => (
              <div className="col-6 col-md-3" key={idx}>
                <div className="why-card">
                  <i className={`bi ${item.icon}`}></i>
                  <h6>{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GRADES ===== */}
      <section className="grades-data">
        <div className="container">
          <div className="grades-header text-center">
            <h2>Available Tool & Alloy Steel Grades at Ventura</h2>
            <p>
              Explore our wide range of Tool Steel and Alloy Steel grades
              available in stock for immediate dispatch.
            </p>
          </div>

          <div id="grades-section" className="grades-wrapper">
            <GradesTable />
          </div>
        </div>
      </section>
    </>
  );
}
