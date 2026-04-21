import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./CuttingServices.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCogs,
  FaLayerGroup,
  FaGripHorizontal,
  FaStore,
  FaRulerCombined,
} from "react-icons/fa";

// import CuttingCard from "./cutting-card";
// import CuttingCardNew from "./cutting-card-new";

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
  const servicesData = [
    {
      icon: <FaCogs />,
      title: "Shank Cutting Services",
      desc: "Precision cutting engineered for die makers and high-accuracy machining requirements.",
      list: [
        "Smooth, burr-free cutting",
        "High-volume consistency",
        "Fast turnaround for tooling",
        "Ideal for Tool & Die steel",
      ],
    },
    {
      icon: <FaLayerGroup />,
      title: "Plate Cutting Services",
      desc: "CNC cutting for thick and high-hardness plates without metallurgical compromise.",
      list: [
        "Non-standard dimensions",
        "Minimal heat-affected zone",
        "Used in mould bases",
      ],
    },
    {
      icon: <FaGripHorizontal />,
      title: "D-Cut Services (Round Bars)",
      desc: "Flat-surface cutting for improved gripping and fixture support.",
      list: [
        "Custom width & depth",
        "Ideal for fixtures",
        "Consistent machining support",
      ],
    },
    {
      icon: <FaStore />,
      title: "Retail Cutting Services",
      desc: "Flexible cutting support with no minimum order quantity.",
      list: [
        "Single-piece cutting",
        "Wide steel grade availability",
        "Instant expert guidance",
      ],
    },
    {
      icon: <FaRulerCombined />,
      title: "Length Cutting Services",
      desc: "Accurate cutting for bars, rods, and flats used in production.",
      list: [
        "Clean, square edges",
        "Batch & retail orders",
        "CNC-ready material",
      ],
    },
  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Steel Cutting Services | CNC, Plate & Precision Cutting | Ventura
            Steels
          </title>

          <meta
            name="description"
            content="Ventura Alloy & Steels Pvt. Ltd. offers high-precision steel cutting services including CNC plate cutting, round bar D-cut, shank cutting, and custom cut-to-size solutions with no MOQ. Serving industries across India."
          />

          <meta
            name="keywords"
            content="steel cutting services India, CNC cutting services Mumbai, plate cutting, round bar cutting, D cut steel, tool steel cutting, alloy steel cutting, cut to size steel India, industrial steel processing, Ventura Steels cutting services"
          />

          <link
            rel="canonical"
            href="https://venturasteels.com/cutting-services"
          />
        </Helmet>
      </HelmetProvider>

      <div className="cutting-premium-page">
        <section className="cutting-hero">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1776681789/Cutting/Screenshot_2026-04-20_161133.png"
            className="hero-video"
          >
            <source
              src="https://res.cloudinary.com/dgujwx9r9/video/upload/f_auto,q_auto/v1776663557/Machinery_Cutting_Video_unddhy.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay */}
          <div className="cutting-overlay"></div>

          <Container className="cuttings-content">
            <Row className="align-items-center">
              {/* LEFT CONTENT */}
              <Col lg={7}>
                <h1 className="hero-title" data-aos="fade-up">
                  Precision Cutting Services
                </h1>

                <p className="hero-sub" data-aos="fade-up" data-aos-delay="150">
                  Accuracy, reliability, and consistency — engineered for
                  industries that demand perfection.
                </p>

                <div
                  className="hero-actions"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Button className="hero-btn" href="/enquiry">
                    Request a Quote →
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* INTRO SECTION */}
        <Container className="intro-section">
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={6} data-aos="fade-right">
              <div className="intro-content">
                <span className="intro-tag">About Our Cutting Expertise</span>

                <h2 className="intro-heading">
                  Precision Meets <span>Performance</span>
                </h2>

                <p className="intro-text">
                  At <strong>Ventura Alloy and Steel Private Limited</strong>,
                  we blend high-grade steel expertise with advanced precision
                  cutting to deliver ready-to-use material trusted across
                  tooling, engineering, mould manufacturing, and
                  high-performance production environments.
                </p>

                <p className="intro-text">
                  From bulk orders to retail cutting — every cut is executed
                  with tight tolerance control, speed, and consistency.
                </p>
              </div>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} data-aos="fade-left">
              <div className="intro-image-wrapper">
                <img
                  src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1776667053/cutting-bg-services_yb0ent.jpg"
                  alt="Precision Cutting"
                  className="intro-img"
                />
              </div>
            </Col>
          </Row>
        </Container>

        {/* CUTTING SERVICES – CARD GRID */}
        <div className="cutting-services-section">
          <Container className="services-block">
            {/* HEADER */}
            <div
              className="services-header text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
            >
              <h2 className="services-heading">Advanced Cutting Services</h2>
              <p className="services-sub">
                Engineered precision cutting solutions tailored for industrial
                applications.
              </p>
            </div>

            {/* GRID */}
            <div className="services-grid">
              {servicesData.map((service, index) => (
                <div
                  className="service-card"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* ICON */}
                  <div className="service-icon">{service.icon}</div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>

                  <ul className="service-list">
                    {service.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* FINAL CTA */}
        <section className="cta-section" data-aos="fade-up">
          <div className="cta-overlay"></div>

          <div className="cta-content text-center">
            <h2>Looking for Precision-Cut Steel?</h2>

            <p>
              Partner with Ventura for accurate cutting, consistent quality, and
              dependable turnaround.
            </p>

            <Button className="cta-btn" href="/enquiry" data-aos="zoom-in">
              Enquire Now →
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CuttingServices;
