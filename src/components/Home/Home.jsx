import React from "react";
import { Link } from "react-router-dom";

import { FaCalendarCheck, FaBoxOpen, FaMedal, FaUsers } from "react-icons/fa";

import "./Home.css";

const Home = () => {
  const stats = [
    {
      icon: <FaCalendarCheck />,
      value: "2,014",
      label: "Established",
      className: "card-blue",
    },
    {
      icon: <FaBoxOpen />,
      value: "10,000+ Tonnes",
      label: "Stock Capacity",
      className: "card-dark",
    },
    {
      icon: <FaMedal />,
      value: "70+",
      label: "Grades",
      className: "card-orange",
    },
    {
      icon: <FaUsers />,
      value: "1,700+",
      label: "Customers",
      className: "card-gray",
    },
  ];

  const categories = [
    {
      title: "Hot Work Steel",
      description:
        "These hot die steels are compatible with heat. They are highly known for great wear resistance, heat conductivity, hardness and robustness at increased temperatures. These tool steels have enhanced features and prove highly useful due to decreased Sulphur levels. They are used where operating temperatures of the tool steel may reach levels where resistance to softening, heat checking and shock is important. It has high heat resistance and medium wear resistance, Distortion in hardening is low.",
      image: "/image/products/hot-work.png",
      link: "/products/hot-work",
    },
    {
      title: "Cold Work Steel",
      description:
        "Cold work steels fall into five groups: water hardening, oil hardening, medium alloy air hardening, high carbon-high chromium and shock resisting. As their name implies, these steels are used in low to medium temperature applications. Highly wear resistant due to the high volume of carbides in the microstructure.",
      image: "/image/products/cold-work.png",
      link: "/products/cold-work",
    },
    {
      title: "Plastic Mould Steel",
      description:
        "Ventura Alloy and Steels supplies and stocks Spring Steel in India and abroad. Spring steel is a name given to a wide scope of steels utilized in the manufacture of springs, prominently in automotive and industrial suspension applications. These steels are commonly low-alloy manganese, medium-carbon steel or high-carbon steel with a very high yield strength.",
      image: "/image/products/plastic-mould.png",
      link: "/products/plastic-mould",
    },
    {
      title: "Spring Steel",
      description:
        "Alloy Steel is a derivative of carbon steel where element is added or deleted to yield certain properties. Typically these properties include machinability, wearability, and strength. An iron-based mixture is considered to be an alloy steel when manganese is greater than 0.165%, silicon over 0.5%, copper above 0.6%, or other minimum quantities of alloying elements such as chromium, nickel, molybdenum, or tungsten are present. Basically alloy steel is classified into two groups: Low Alloy Steel and High Alloy Steel.",
      image: "/image/products/spring-steel.png",
      link: "/products/spring-steel",
    },
    {
      title: "Alloy Steel",
      description:
        "Ventura Alloy and Steels is one of the leading P20 tool steel suppliers in India. This is a P-Type steel which is used for zinc die casting in plastic injection moulding process. Plastic Mould Steel typically have lower carbon content 0.36 to 0.40% & Chromium and Nickel are the main alloy elements. These characteristics allow these materials to be polished to an extremely high finish.",
      image: "/image/products/alloy-steel.png",
      link: "/products/alloy-steel",
    },
    {
      title: "Carbon Steel",
      description:
        "Ventura Alloy and Steels is one of the leading P20 tool steel suppliers in India. This is a P-Type steel which is used for zinc die casting in plastic injection moulding process. Plastic Mould Steel typically have lower carbon content 0.36 to 0.40% & Chromium and Nickel are the main alloy elements. These characteristics allow these materials to be polished to an extremely high finish.",
      image: "/image/products/carbon-steel.png",
      link: "/products/carbon-steel",
    },
    {
      title: "Boron Steel",
      description:
        "Ventura Alloy and Steels is one of the leading P20 tool steel suppliers in India. This is a P-Type steel which is used for zinc die casting in plastic injection moulding process. Plastic Mould Steel typically have lower carbon content 0.36 to 0.40% & Chromium and Nickel are the main alloy elements. These characteristics allow these materials to be polished to an extremely high finish.",
      image: "/image/Plastic Mould Steels/P 20 Flat bars.png",
      link: "/products/boron-steel",
    },
  ];

  return (
    <>
      {/* video-banner */}
      <div className="video-banner">
        <video autoPlay loop muted className="bg-video w-100">
          <source src="/videoes/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <h1>Explore Our Premium Steel Product Range</h1>
          <p>
            From Hot Work to Spring Steel – built for industrial excellence and
            reliability.
          </p>
          <a href="/enquiry" className="btn btn-outline-light">
            Enquire Now
          </a>
        </div>
      </div>

      {/* stats - section */}
      <div className="stats-section">
        <div className="stats-container">
          {stats.map((item, index) => (
            <div key={index} className={`stat-card ${item.className}`}>
              <div className="icon">{item.icon}</div>
              <div className="value">{item.value}</div>
              <div className="label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* about-ventura */}
      <section className="about-section py-5 bg-light">
        <div className="container about-container">
          <div className="row align-items-center ">
            <div className="col-md-6" data-aos="fade-right">
              <img
                src="/image/konsond img.png"
                alt="About Ventura"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold mb-3">About Ventura Alloys & Steels</h2>
              <p className="text-muted">
                Ventura Alloys & Steels is a leading supplier of quality tool
                steel, die steel, and engineering steel, known for its vast
                stock, timely delivery, and unmatched customer service. Since
                2014, we’ve catered to over 1,700 customers globally.
              </p>
              <Link to="/about" className="btn btn-color mt-3">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* product categories */}
      <section className="product-showcase py-5">
        <div className="container">
          <h2 className="section-heading text-center mb-5" data-aos="fade-up">
            Our Product Categories
          </h2>

          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`row align-items-center mb-5 gap-5 justify-content-center ${
                idx % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="col-md-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="img-fluid rounded shadow-sm product-img"
                  width={400}
                />
              </div>
              <div className="col-md-6">
                <h3 className="fw-bold text-dark mb-3">{category.title}</h3>
                <p className="text-muted text-justify">
                  {category.description}
                </p>
                <Link to={category.link} className="btn btn-primary mt-3">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      {/* Suppliers Section */}
      <section className="suppliers-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5 ">Trusted Suppliers</h2>
          <div className="row justify-content-center g-4">
            {[
              "/image/jsw-logo.png",
              "/image/RL steels logo.png",
              "/image/sail.png",
              "/image/bhushan-logo.png",
              "/image/superforgings logo.png",
            ].map((logo, idx) => (
              <div className="col-6 col-sm-4 col-md-2" key={idx}>
                <div className="supplier-card shadow-sm p-3 bg-white rounded-3">
                  <img
                    src={logo}
                    alt={`Supplier ${idx}`}
                    className="img-fluid d-block supplier-logo"
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
