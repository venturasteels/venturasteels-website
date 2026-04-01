// SAME IMPORTS — no change
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GradesTable from "./GradesTable/GradesTable";
import "./Products.css";

const heroImages = [
  "/image/quality.jpg",
  "/image/product.jpeg",
  "/image/bg-product-img.jpg",
];

const productCategories = [
  {
    title: "Hot Work Steel",
    image: "/image/Hot Work Tool Steels/Hot Work Steel DB 6 Block.png",
    path: "/products/hot-work-steel",
  },
  {
    title: "Cold Work Steel",
    image: "/image/Cold Work Tool Steels/D2 Round Bar.png",
    path: "/products/cold-work-steel",
  },
  {
    title: "Plastic Mould Steel",
    image: "/image/Plastic Mould Steels/P 20 Flat bars.png",
    path: "/products/plastic-mould-steel",
  },
  {
    title: "Spring Steel",
    image: "/image/Alloy Steels/EN 31 Rods.png",
    path: "/products/spring-steel",
  },
  {
    title: "Alloy Steel",
    image: "/image/Alloy Steels/41Cr4 Alloy Steel Round Bars.png",
    path: "/products/alloy-steel",
  },
  {
    title: "Carbon Steel",
    image: "/image/Carbon Steels/C45 Carbon Steel Round Bars.png",
    path: "/products/carbon-steel",
  },
  {
    title: "Boron Steel",
    image: "/image/Boron Steels/15B25 Round bars.png",
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
          <h2 className="text-center" data-aos="fade-up">Ventura's Product Categories</h2>

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
