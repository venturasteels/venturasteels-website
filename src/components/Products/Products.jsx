import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    path: "/products/hot-work",
  },
  {
    title: "Cold Work Steel",
    image: "/image/Cold Work Tool Steels/D2 Round Bar.png",
    path: "/products/cold-work",
  },
  {
    title: "Plastic Mould Steel",
    image: "/image/Plastic Mould Steels/P 20 Flat bars.png",
    path: "/products/plastic-mould",
  },
  {
    title: "Spring Steel",
    image: "/image/Spring Steels/SAE 52100.png",
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
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Products | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Ventura ia a complete steel service center. Explore Ventura Alloy & Steels' wide range of premium Tool Steels, Alloy Steels, and Engineering Steels. We stock and supply Hot Work Steel, Cold Work Steel, Plastic Mould Steel, and more with cutting-edge machining facilities to meet diverse industrial needs across India."
          />
          <meta
            name="keywords"
            content="Tool Steels, Ventura Steels Products, Hot Work Steels, Cold Work Steels, Plastic Mould Steel, Spring Steel, Alloy Steel, Carbon Steel, Boron Steel, "
          />
        </Helmet>
      </HelmetProvider>

      {/* Hero Section with Carousel */}
      <section className="hero-carousel position-relative">
        <Carousel
          fade
          interval={3000}
          controls={false}
          indicators={false}
          pause={false}
        >
          {heroImages.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={img}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Static Overlay Text */}
        <div className="carousel-overlay text-center position-absolute top-50 start-50 translate-middle">
          <h1 className="display-4 fw-bold text-white">
            Your Trusted Steel Partner
          </h1>
          <p className="text-white">
            Supplying Premium Tool Steels Across Industries
          </p>
          <a href="/enquiry" className="btn btn-outline-light btn-lg px-4 mt-4">
            Enquire Now
          </a>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="product-grid container py-5">
        <h2 className="section-heading">Explore Our Product Categories</h2>
        <div className="row-product d-flex g-4 justify-content-center">
          {productCategories.map((cat, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <Link to={cat.path} className="text-decoration-none">
                <div className="product-card text-center">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="img-fluid mb-3"
                  />
                  <h5>{cat.title}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Ventura */}
      <section className="why-ventura py-5">
        <div className="container">
          <h2 className="section-heading text-center mb-5">
            Why Choose Ventura?
          </h2>
          <div className="row g-4 justify-content-center">
            {whyChoose.map((item, idx) => (
              <div className="col-6 col-md-3 text-center" key={idx}>
                <div className="why-card p-4">
                  <i className={`bi ${item.icon} fs-1 mb-3`}></i>
                  <h6>{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
