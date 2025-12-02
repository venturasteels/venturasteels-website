import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaCalendarCheck, FaBoxOpen, FaMedal, FaUsers } from "react-icons/fa";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  const stats = [
    {
      icon: <FaCalendarCheck />,
      value: "2014",
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
      value: 1800,
      suffix: "+",
      label: "Customers",
      className: "card-gray",
    },
  ];

  const products = [
    {
      title: "Hot Work Steel",
      desc: "For high-temperature tools and dies.",
      img: "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764051069/Hot_Work_Tool_Steel_1.2344_Round_Bars_iepksj.png",
      link: "/products/hot-work-steel",
    },
    {
      title: "Cold Work Steel",
      desc: "Perfect for cutting & forming tools.",
      img: "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764051164/Cold_Work_-_D2_md1s8f.png",
      link: "/products/cold-work-steel",
    },
    {
      title: "Spring Steel",
      desc: "Flexible & strong for industrial use.",
      img: "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764051209/EN_31_Rods_jmdbdq.png",
      link: "/products/spring-steel",
    },
    {
      title: "Alloy Steel",
      desc: "Enhanced strength and corrosion resistance.",
      img: "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764051248/EN_31_Round_Bars_fd49nw.png",
      link: "/products/alloy-steel",
    },
    {
      title: "Plastic Mould Steel",
      desc: "Best suited for mould manufacturing.",
      img: "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764051192/Plastic_Mould_2_houlpv.png",
      link: "/products/plastic-mould-steel",
    },
    {
      title: "Carbon Steel",
      desc: "Durable for metal stamping dies.",
      img: "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764051224/C45_Carbon_Steel_Round_Bars_zcwh1o.png",
      link: "/products/carbon-steel",
    },
    {
      title: "Boron Steel",
      desc: "Hard steel for cutting & shaping tools.",
      img: "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764051261/10B35_Boron_Steel_Round_Bars_mzkyft.png",
      link: "/products/boron-steel",
    },
  ];

  const certificates = [
    { src: "/image/certificate-logo/BSCIC-icon.png", alt: "BSCIC" },
    { src: "/image/certificate-logo/cii-logo.jpeg", alt: "CII" },
    {
      src: "/image/certificate-logo/tagma-india-logo1.png",
      alt: "TAGMA INDIA",
    },
    { src: "/image/certificate-logo/images.jpeg", alt: "AHK" },
    { src: "/image/certificate-logo/Alucast-logo.png", alt: "ALUCAST" },
    { src: "/image/certificate-logo/DISMA-logo.png", alt: "DISMA" },
    { src: "/image/certificate-logo/MASSMA-logo.png", alt: "MASSMA" },
    { src: "/image/certificate-logo/SUFI-logo.png", alt: "SUFI" },
    { src: "/image/certificate-logo/TSSIA.png", alt: "TSSIA" },
    { src: "/image/certificate-logo/AIFI-logo.png", alt: "AIFI" },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    let scrollAmount = 0;

    const scrollSpeed = 0.8;
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    };
    scroll();

    return () => cancelAnimationFrame(scroll);
  }, []);

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
            content="Ventura Alloy & Steels Pvt. Ltd. is a trusted special steel supplier in India offering alloy steel, tool steel, hot work steel, cold work steel, die steel, and engineering steels. Large ready stock, certified material, and nationwide delivery for automotive, aerospace, oil & gas, and industrial applications."
          />
          <meta
            name="keywords"
            content="special steel supplier India, alloy steel supplier, tool steel supplier, hot work steel, cold work steel, die steel, plastic mould steel, spring steel, engineering steels, Ventura Steels"
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
            content="https://venturasteels.com/image/ogimage.png"
          />
          {/* Replace with your actual image URL */}
          <meta property="og:url" content="https://venturasteels.com/" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://venturasteels.com/" />
        </Helmet>
      </HelmetProvider>

      {/* video-banner */}
      <div className="video-banner">
        <video
          preload="none"
          autoPlay
          loop
          muted
          playsInline
          title="Ventura Steels Quality Standards – Steel Round Bars Manufacturing"
          aria-label="Ventura Steels quality video showcasing steel round bars and manufacturing process"
          poster="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764048075/home-bg_zwi4ic.png"
          className="bg-video w-100"
        >
          <source src="https://res.cloudinary.com/dgujwx9r9/video/upload/f_auto,q_auto,w_1280/Ventura-Home-Bg_ty9rdc.mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <h1
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-easing="ease-out-cubic"
          >
            Ventura is a complete steel service centre.
          </h1>
          <p
            className="text-center "
            data-aos="fade-down"
            data-aos-delay="550"
            data-aos-duration="1200"
            data-aos-easing="ease-out-cubic"
          >
            Industrial excellence in every grade – strength, precision, and
            reliability you can trust.
          </p>
          <a
            href="/enquiry"
            className="btn btn-outline-light overlay-enquiry-btn"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1200"
            data-aos-easing="ease-out-cubic"
          >
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
                  separator={item.label === "Established" ? "" : ","}
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
                src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764048630/about-ventura_vl8wyv.jpg"
                alt="About Ventura"
                className="img-fluid rounded"
                loading="lazy"
              />
            </div>
            <div className="col-md-6 about-content" data-aos="fade-left">
              <h2 className="fw-bold mb-3">About Ventura Alloys & Steels</h2>
              <p className="text-muted text-justify">
                Ventura Alloys & Steels, a leading supplier of premium tool
                steel, die steel, and engineering steel, is well-known for its
                large inventory, quick delivery, and unmatched customer service.
                Since 2014, we have provided services to over 1,800 clients
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
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
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
                      loading="lazy"
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
                src="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764133911/why-choose-us_giknms.jpg"
                alt="Why Ventura Steels"
                className="img-fluid rounded-4 shadow"
                loading="lazy"
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
          <h3 className="mb-3 text-dark fw-bold">Certified & Proud Members</h3>
          <p className="mb-5 text-muted">
            Ventura Steels is recognized by leading industry associations and
            accredited certification bodies. Our memberships and quality
            certifications reflect our commitment to excellence, reliability,
            and international manufacturing standards.
          </p>

          {/* Continuous Carousel */}
          <div className="certificates-carousel-wrapper" ref={carouselRef}>
            <div className="certificates-carousel-track">
              {[...certificates, ...certificates].map((cert, index) => (
                <div key={index} className="certificate-logo-slide text-center">
                  <div className="certificate-logo-card mx-auto">
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="certificate-img mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
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
      <section
        className="suppliers-section py-5 position-relative"
        data-aos="fade-up"
      >
        <div className="text-center">
          <h2 className="fw-bold mb-5 text-uppercase text-dark">
            Trusted Suppliers
          </h2>

          <div className="suppliers-row d-flex justify-content-center align-items-center flex-wrap gap-4">
            {[
              { logo: "/image/jsw-logo.png" },
              { logo: "/image/logo-bhushan.png" },
              { logo: "/image/RL-Logonew.png" },
              { logo: "/image/dongbe-logo.png" },
              { logo: "/image/Jiangsu-Zhuhong-Forging-Co-Ltd-.webp" },
              { logo: "/image/taihe-logo.png" },
              { logo: "/image/machael-logo.png" },
            ].map((supplier, idx) => (
              <div
                key={idx}
                className="supplier-card bg-white border-0 rounded-4 shadow-sm p-3"
              >
                <div className="logo-wrapper d-flex align-items-center justify-content-center rounded-3">
                  <img
                    src={supplier.logo}
                    alt={`Supplier ${idx + 1}`}
                    className="img-fluid"
                    loading="lazy"
                    style={{
                      maxWidth: "70%",
                      maxHeight: "70%",
                      objectFit: "contain",
                      mixBlendMode: "multiply",
                    }}
                  />
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
