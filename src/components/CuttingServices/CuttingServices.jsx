import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./CuttingServices.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CuttingCard from "./cutting-card";
import CuttingCardNew from "./cutting-card-new";

const CuttingServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const data = [
    {
      title: "Shank Cutting Services",
      img: "/image/Cutting Services Banner Image.png",
      desc: "Engineered for die makers and machining professionals requiring accurate and repeatable precision shank cutting.",
      list: [
        "Smooth, burr-free cutting",
        "High-volume consistency",
        "Fast turnaround for urgent tooling",
        "Ideal for Tool & Die steel",
      ],
      aos: "fade-up",
    },

    {
      title: "Plate Cutting Services",
      img: "/image/Cutting Services Banner Image.png",
      desc: "Advanced plate cutting for all steel grades with accurate, clean cuts even for thick or high-hardness materials.",
      list: [
        "CNC-based cutting for exact size requirements",
        "Handles standard & non-standard plate dimensions",
        "Minimal heat-affected zones",
        "Suitable for mould bases, dies & automotive parts",
      ],
      aos: "fade-up",
    },

    {
      title: "D-Cut Services for Round Bars",
      img: "/image/Cutting Services Banner Image.png",
      desc: "Customized flat-surface D-cuts on round bars for better grip, machining support, and special-fit applications.",
      list: [
        "Precision D-profile creation",
        "Custom depth & width as required",
        "Perfect for tool holders & fixtures",
        "Ideal for machining workshops & die/mould makers",
      ],
      aos: "fade-up",
    },

    {
      title: "Retail Cutting for End Users",
      img: "/image/Cutting Services Banner Image.png",
      desc: "Flexible retail cutting with no minimum order quantity, designed for individual buyers and small-scale needs.",
      list: [
        "Cut-to-size based on customer measurements",
        "Fast service for small orders",
        "Wide range of steel grades in single pieces",
        "Expert assistance for material selection",
      ],
      aos: "fade-up",
    },

    {
      title: "Length Cutting Services",
      img: "/image/Cutting Services Banner Image.png",
      desc: "Accurate length cutting for bars, rods, and sections to match exact production and machining requirements.",
      list: [
        "High-precision length cutting",
        "Ideal for long bars, rounds & flats",
        "Perfect for production batches & stock preparation",
        "Clean, burr-free edges with uniform lengths",
      ],
      aos: "fade-up",
    },
  ];

  return (
    <div className="cutting-premium-page">
      {/* HERO SECTION */}
      <section className="cutting-hero">
        <div className="cutting-overlay"></div>
        <Container className="cuttings-content">
          <Row>
            <Col lg={8}>
              <h1 className="hero-title" data-aos="fade-up">
                Precision Cutting Services
              </h1>
              <p className="hero-sub" data-aos="fade-up" data-aos-delay="150">
                Accuracy, reliability, and consistency — engineered for
                industries that demand perfection.
              </p>
              <Button
                className="hero-btn"
                href="/enquiry"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Request a Quote →
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* INTRO SECTION */}
      <Container className="intro-section">
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <p className="intro-text">
              At <strong>Ventura Alloy and Steel Private Limited</strong>, we
              blend high-grade steel expertise with advanced precision cutting
              to deliver ready-to-use material trusted across tooling,
              engineering, mould manufacturing, and high-performance production
              environments.
            </p>
            <p className="intro-text">
              From bulk orders to retail cutting — every cut is executed with
              tight tolerance control, speed, and consistency.
            </p>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="intro-img"></div>
          </Col>
        </Row>
      </Container>

      {/* HIGHLIGHT METRICS */}
      {/* <section className="metrics">
        <Container>
          <Row className="text-center">
            <Col md={4} data-aos="zoom-in" data-aos-delay="0">
              <h2>±0.5 mm</h2>
              <p>Tolerance Precision</p>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-delay="150">
              <h2>5000+</h2>
              <p>Jobs Delivered Monthly</p>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-delay="300">
              <h2>27+ Grades</h2>
              <p>Compatible Steel Materials</p>
            </Col>
          </Row>
        </Container>
      </section> */}
      <div className="full-dual-line"></div>

      {/* SERVICE SECTIONS */}
      <div className="cutting-services-section">
        <Container className="services-block">
          {[
            {
              title: "Shank Cutting Services",
              desc: "Engineered for die makers and machining professionals requiring accurate, repeatable precision cutting.",
              list: [
                "Smooth, burr-free cutting",
                "High-volume consistency",
                "Fast turnaround for urgent tooling",
                "Ideal for Tool & Die steel",
              ],
              img: "/image/infrastructure-bg.png",
            },
            {
              title: "Plate Cutting Services",
              desc: "CNC cutting for thick, high-hardness material without compromising metallurgical integrity.",
              list: [
                "Non-standard & precision dimension capability",
                "Minimal heat-affected zone",
                "Used in mould bases & fabrication jobs",
              ],
              img: "/image/infrastructure-bg.png",
            },
            {
              title: "D-Cut Services for Round Bars",
              desc: "Customized flat-surface cutting for gripping and machining fixture requirements.",
              list: [
                "Custom width and depth",
                "Ideal for tool holders & fixtures",
                "Consistent machining support",
              ],
              img: "/image/infrastructure-bg.png",
            },
            {
              title: "Retail Cutting Services",
              desc: "No minimum order — flexible cutting for prototypes and maintenance units.",
              list: [
                "Single-piece or small batch cutting",
                "Wide steel grade availability",
                "Instant guidance and support",
              ],
              img: "/image/infrastructure-bg.png",
            },
            {
              title: "Length Cutting Services",
              desc: "Accurate length cutting for rods, bars, and flats used in production and inventory preparation.",
              list: [
                "Clean, square edges",
                "Supports batch and retail orders",
                "Suitable for CNC & fabrication shops",
              ],
              img: "/image/infrastructure-bg.png",
            },
          ].map((service, index) => (
            <div
              className={`service-panel ${index % 2 === 1 ? "reverse" : ""}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div
                className="service-img-panel"
                style={{ backgroundImage: `url(${service.img})` }}
              >
                <div className="service-img-overlay"></div>
              </div>
              <div className="service-content-panel">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-list">
                  {service.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* FINAL CTA */}
      <section className="cta-section text-center" data-aos="fade-up">
        <h2>Need Precision Cut Steel?</h2>
        <p>
          Our team delivers accuracy, industry-grade finishing, and rapid
          turnaround.
        </p>
        <Button
          className="cta-btn"
          href="/enquiry"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Enquire Now
        </Button>
      </section>

      {/* Cutting Services Layout2 */}
      <section className="container py-5">
        <div className="container cutting-services-row">
          <div className="row">
            {data.map((item, index) => (
              <CuttingCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Cutting Services Layout3 */}
      <section className="container py-5">
        <div className="container cutting-services-row">
          <div className="row">
            {data.map((item, index) => (
              <CuttingCardNew key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuttingServices;
