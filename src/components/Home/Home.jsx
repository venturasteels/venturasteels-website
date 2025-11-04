import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaCalendarCheck, FaBoxOpen, FaMedal, FaUsers } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCar,
  FaIndustry,
  FaTools,
  FaGasPump,
  FaPlane,
  FaMicroscope,
} from "react-icons/fa";
import "aos/dist/aos.css";
import IndustriesSection from "../Industries/Industries";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import CountUp from "react-countup";
import "./Home.css";

const Home = () => {
  const stats = [
    {
      icon: <FaCalendarCheck />,
      value: 2014,
      suffix: "",
      label: "Established",
      className: "card-blue",
    },
    {
      icon: <FaBoxOpen />,
      value: 10000,
      suffix: "+ Tonnes",
      label: "Stock Capacity",
      className: "card-dark",
    },
    {
      icon: <FaMedal />,
      value: 27,
      suffix: "+",
      label: "Grades",
      className: "card-orange",
    },
    {
      icon: <FaUsers />,
      value: 1700,
      suffix: "+",
      label: "Customers",
      className: "card-gray",
    },
  ];

  const products = [
    {
      title: "Hot Work Steel",
      desc: "For high-temperature tools and dies.",
      img: "/image/Hot Work Tool Steels/Hot Work Tool Steel 1.2344 Round Bars.png",
      link: "/products/hot-work",
    },
    {
      title: "Cold Work Steel",
      desc: "Perfect for cutting & forming tools.",
      img: "/image/Cold Work Tool Steels/Cold Work - D2.png",
      link: "/products/cold-work",
    },
    {
      title: "Spring Steel",
      desc: "Flexible & strong for industrial use.",
      img: "/image/Spring Steels/EN 31 Rods.png",
      link: "/products/spring-steel",
    },
    {
      title: "Alloy Steel",
      desc: "Enhanced strength and corrosion resistance.",
      img: "/image/Alloy Steels/EN 31 Round Bars.png",
      link: "/products/alloy-steel",
    },
    {
      title: "Plastic Mould Steel",
      desc: "Best suited for mould manufacturing.",
      img: "/image/Plastic Mould Steels/Plastic Mould 2.png",
      link: "/products/plastic-mould",
    },
    {
      title: "Carbon Steel",
      desc: "Durable for metal stamping dies.",
      img: "/image/Carbon Steels/C45 Carbon Steel Round Bars.png",
      link: "/products/carbon-steel",
    },
    {
      title: "Boron Steel",
      desc: "Hard steel for cutting & shaping tools.",
      img: "/image/Boron Steels/10B35 Boron Steel Round Bars.png",
      link: "/products/tool",
    },
  ];

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  });

  const swiperRef = useRef(null);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home | Ventura Alloy and Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Ventura Alloy and Steels Pvt. Ltd. is a leading supplier of high-quality alloy steels, tool steels, and engineering steels for various industries including automotive, aerospace, oil & gas, and construction."
          />
          <meta
            name="keywords"
            content="Alloy Steel, Tool Steel, Ventura Steels, Hot Work Steel, Cold Work Steel, Plastic Mould Steel, Spring Steel, Carbon Steel, Boron Steel, Steel Manufacturer India, Steel Supplier, Die Steel, Engineering Steels"
          />
          <meta name="author" content="Ventura Alloy and Steels Pvt. Ltd." />
          {/* Open Graph for Social Sharing */}
          <meta
            property="og:title"
            content="Ventura Alloy and Steels Pvt. Ltd."
          />
          <meta
            property="og:description"
            content="Premium alloy and tool steel solutions for industries like automotive, aerospace, oil & gas, and construction."
          />
          <meta
            property="og:image"
            content="https://venturasteels.onrender.com/image/ogimage.png"
          />
          {/* Replace with your actual image URL */}
          <meta
            property="og:url"
            content="https://venturasteels.onrender.com/"
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://venturasteels.onrender.com/" />
        </Helmet>
      </HelmetProvider>

      {/* video-banner */}
      <div className="video-banner">
        <video autoPlay loop muted className="bg-video w-100">
          <source src="/videoes/ventura-home-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <h1>Ventura is a complete steel service centre.</h1>
          <p className="text-center">
            Industrial excellence in every grade – strength, precision, and
            reliability you can trust.
          </p>
          <a href="/enquiry" className="btn btn-outline-light overlay-enquiry-btn">
            Enquire Now
          </a>
        </div>
      </div>

      {/* stats - section */}
      <div className="stats-section">
        <div className="stats-container">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`stat-card ${item.className}`}
              data-aos="fade-right"
              data-aos-delay={index * 200}
            >
              <div className="icon">{item.icon}</div>
              <div className="value">
                <CountUp
                  end={item.value}
                  duration={Math.max(2.9, (item.value / 10000) * 3)}
                  separator=","
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                  scrollSpyDelay={100}
                />
              </div>
              <div className="label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries we serve */}
      {/* <IndustriesSection /> */}

      {/* about-ventura */}
      <section className="about-section py-5 bg-light">
        <div className="container about-container">
          <div className="row align-items-center ">
            <div className="col-md-6" data-aos="fade-right">
              <img
                src="/image/about-ventura.png"
                alt="About Ventura"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 about-content" data-aos="fade-left">
              <h2 className="fw-bold mb-3">About Ventura Alloys & Steels</h2>
              <p className="text-muted text-justify">
                Ventura Alloys & Steels, a leading supplier of premium tool
                steel, die steel, and engineering steel, is well-known for its
                large inventory, quick delivery, and unmatched customer service.
                Since 2014, we have provided services to over 1,700 clients
                globally.
              </p>
              <Link to="/about" className="btn btn-color mt-3">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products section */}
      <div className="product-container py-5" ref={productsRef}>
        <h2 className="text-center fw-bold mb-3">Product Types</h2>
        <hr className="mb-5 text-center" />

        {productsInView && (
          <div
            className="product-swiper-wrapper"
            onMouseEnter={() => swiperRef.current?.autoplay.stop()} // ✅ Stop on hover
            onMouseLeave={() => swiperRef.current?.autoplay.start()}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={"auto"}
              spaceBetween={50}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                576: { slidesPerView: 2, spaceBetween: 25 },
                768: { slidesPerView: 2.5, spaceBetween: 30 },
                992: { slidesPerView: 3, spaceBetween: 35 },
                1200: { slidesPerView: 3, spaceBetween: 40 },
                1400: { slidesPerView: 4, spaceBetween: 40 },
              }}
              className="product-swiper"
            >
              {products.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="product-tile" data-aos="zoom-in-down">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="product-image"
                    />
                    <div className="overlay-product">
                      <h5 className="text-center">{item.title}</h5>
                      <p className="text-center">{item.desc}</p>
                      <a
                        href={item.link}
                        className="btn btn-outline-light product-view mt-2"
                      >
                        View Product
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      {/* Quality & Infrastructure */}
      <div className="container-fluid quality-infra ">
        <h2 className="text-center mt-5 pt-5 " data-aos="fade-right">
          Quality & Infrastructure
        </h2>
        <hr className="heading-line mt-3 mb-2" data-aos="fade-right" />
        <h5 className="text-center mt-4 mb-5" data-aos="fade-right">
          At Ventura Alloy, quality is our cornerstone and more than just a
          promise. Only reputable mills provide our steel materials, which are
          fully traceable and certified by third parties (EN, ASTM, DIN
          standards). No matter the size or complexity of your requirement, we
          guarantee smooth logistics, a strong inventory, and timely dispatch
          from our corporate office in Mumbai and a strategically placed
          warehouse in Bhiwandi.
        </h5>

        <div className="quality-infra-cards mb-5 pb-5 row justify-content-center g-4">
          {/* Quality Card */}
          <div className="col-12 col-md-6 col-lg-5 " data-aos="fade-right">
            <div className="card quality-card text-white border-0">
              <div className="card-overlay d-flex flex-column justify-content-center align-items-start p-4">
                <h4 className="fw-semibold fs-2 mb-2">Quality</h4>
                <p className="fs-6">
                  At Ventura Alloy & Steels, every member of our team—from
                  sourcing agents and metallurgists to quality engineers,
                  logistics coordinators.
                </p>
                <Link
                  to="/quality"
                  className="text-white text-decoration-none quality-link p-2"
                >
                  See more
                  <span className="visually-hidden">
                    about our Quality Standards
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Infrastructure Card */}
          <div className="col-12 col-md-6 col-lg-5" data-aos="fade-left">
            <div className="card infras-card text-white border-0">
              <div className="card-overlay d-flex flex-column justify-content-center align-items-start p-4">
                <h4 className="fw-semibold fs-2 mb-2">Infrastructure</h4>
                <p className="fs-6">
                  Our 72,000-square-foot headquarters in Bhiwandi is equipped
                  with 10,000 tons of dedicated storage space, dual EOT cranes
                  (5-ton and 25-ton capacities).
                </p>
                <Link
                  to="/infrastructure"
                  className="text-white text-decoration-none infra-link p-2"
                >
                  See more
                  <span className="visually-hidden">
                    about our Infrastructure
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <section className="why-ventura-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center why-choose">
            <div className="col-lg-6 " data-aos="fade-right">
              <img
                src="/image/why-choose-us.jpg"
                alt="Why Ventura Steels"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="row gy-5">
                <div className="col-12">
                  <h2 className="fw-bold">Why Choose Ventura Steels?</h2>
                </div>
                {[
                  {
                    icon: "bi bi-award",
                    title: "COMMITMENT TO RELIABILITY AND RESULTS",
                  },
                  {
                    icon: "bi bi-shield-check",
                    title: "CUTTING EDGE TECHNOLOGY",
                  },
                  {
                    icon: "bi bi-truck",
                    title: "TRUSTED INDUSTRY EXPERTISE",
                  },
                  {
                    icon: "bi bi-gear-wide-connected",
                    title: "CONSISTENT QUALITY & COMPLIANCE",
                  },
                ].map((item, idx) => (
                  <div className="col-sm-6" key={idx}>
                    <div className="feature-box d-flex align-items-start">
                      <div className="icon-wrapper me-3">
                        <i className={`${item.icon} fs-4 text-white`}></i>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-0">{item.title}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* certified section */}
      <section
        className="py-5 bg-light trusted-certificates"
        data-aos="fade-up"
      >
        <div className="container text-center">
          <h3 className="mb-4 text-dark fw-bold">Trusted & Certified</h3>
          <p className="mb-4 text-muted">
            Our steel meets the highest international standards. Certified for
            quality, reliability, and sustainability.
          </p>
          <div className="row justify-content-center align-items-center g-4 gap-3 mt-4">
            <div className="col-6 col-md-2">
              <img
                src="/image/certificate-logo/BSCIC-icon.png"
                alt="ISO Certified"
                height={90}
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src="/image/certificate-logo/cii-logo.jpeg"
                alt="PED Approved"
                height={90}
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src="/image/certificate-logo/tagma-india-logo.webp"
                alt="MSME Registered"
                height={50}
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src="/image/certificate-logo/images.jpeg"
                alt="Startup India"
                height={90}
              />
            </div>
          </div>
          <div className="mt-5">
            <a href="/certifications" className="btn btn-outline-primary">
              View All Certificates
            </a>
          </div>
        </div>
      </section>

      {/* Suppliers Section */}
      <section className="suppliers-section py-5 bg-light" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Trusted Suppliers</h2>
          <div className="suppliers-flex d-flex flex-wrap justify-content-center gap-4">
            {[
              { logo: "/image/jsw-logo.png", name: "JSW" },
              { logo: "/image/RL steels logo.png", name: "RL Steels" },
              { logo: "/image/dongbe-logo.png", name: "Dongbei" },
              { logo: "/image/logo-bhushan.png", name: "Bhushan" },
              {
                logo: "/image/Jiangsu-Zhuhong-Forging-Co-Ltd-.webp",
                name: "Jiangsu Zhuhong",
              },
              { logo: "/image/taihe.webp", name: "Taihe" },
            ].map((supplier, idx) => (
              <div
                key={idx}
                className="supplier-item d-flex flex-column align-items-center"
              >
                <div className="supplier-card text-center p-3 bg-white rounded-4 shadow-sm border border-light hover-shadow transition">
                  <div
                    className="logo-wrapper mb-2 d-flex align-items-center justify-content-center rounded-circle bg-light"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img
                      src={supplier.logo}
                      alt={supplier.name}
                      className="img-fluid"
                      style={{ maxHeight: "70%", objectFit: "contain" }}
                    />
                  </div>
                  <p className="supplier-name mb-0 text-dark fw-semibold">
                    {supplier.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
