// SAME IMPORTS — no change
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GradesTable from "./GradesTable/GradesTable";
import MetalWeightCalculator from "./MetalWeightCalculator/MetalWeightCalculator";
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
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1775472640/ventura-product-image/cold-work-steel/Cr12MoV-round-bars.jpg",
    path: "/products/cold-work-steel",
  },
  {
    title: "Plastic Mould Steel",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1775473164/1.2738-Flat-Bars_wepy8v.jpg",
    path: "/products/plastic-mould-steel",
  },
  {
    title: "Alloy Steel",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1775473371/20MnCr5-Round-Bars_h9tpe5.jpg",
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
  {
    title: "Boron Steel",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764051261/10B35_Boron_Steel_Round_Bars_mzkyft.png",
    path: "/products/boron-steel",
  },
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

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Products | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Explore Ventura Alloy & Steels’ complete range of Tool Steels, Alloy Steels and Engineering Steels with precision processing and reliable supply."
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

          <div className="grades-wrapper">
            <GradesTable />
          </div>
        </div>
      </section>
    </>
  );
}
