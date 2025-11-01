import React from "react";
import "./AboutUs.css";
import { FaHandshake, FaBullseye, FaFlagCheckered } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";

const managementData = [
  {
    name: "Mr. Bharat Dipchand Shah",
    role: "Director : Founder & Mentor",
    image: "/image/director.jpg",
    color: "bg-primary",
    description:
      "A steel industry veteran whose extensive experience informs Ventura's enduring strategy and core values.  ",
  },
  {
    name: "Mr. Aashish Bharat Shah",
    role: "Chairman & Director",
    image: "/image/director.jpg",
    color: "bg-orange",
    description:
      "Guides Ventura's expansion with a contemporary, client-focused vision.",
  },
  {
    name: "Mrs. Poonam Aashish Shah",
    role: "Director",
    image: "/image/director.jpg",
    color: "bg-success",
    description:
      "Oversees marketing initiatives and leads the drive into international markets.",
  },
];

const teamRoles = [
  { title: "Sourcing Agents", icon: "bi bi-person-check", color: "bg-primary" },
  { title: "Technicians", icon: "bi bi-tools", color: "bg-orange" },
  {
    title: "Quality Controller",
    icon: "bi bi-patch-check",
    color: "bg-success",
  },
  { title: "Warehouse Personnel", icon: "bi bi-box-seam", color: "bg-purple" },
  {
    title: "Sales & Marketing Personnel",
    icon: "bi bi-graph-up-arrow",
    color: "bg-secondary",
  },
  {
    title: "IT & Digital Infrastructure",
    icon: "bi bi-laptop",
    color: "bg-info",
  },
];

const AboutUs = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About Us | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Ventura Steels is a trusted special steel supplier in India. We stock alloy steel, tool steel, hot work steel, cold work steel, and plastic mould steel with machining centers in Mumbai and Rajkot, serving automotive, aerospace, oil & gas, and engineering industries."
          />
          <meta
            name="keywords"
            content="About Ventura Steels, About Ventura Alloy And Steels Pvt. Ltd.,  Ventura Steels, Complete steel service center, Special steel supplier India, Alloy steel stockist, Tool steel supplier India, Engineering steel distributor, Die & mould steel supplier, Hot work steel stockist, Cold work steel supplier, Plastic mould steel supplier, Steel machining center Mumbai,  Automotive steel supplier India"
          />
        </Helmet>
      </HelmetProvider>

      <div className="aboutus-section">
        {/* Hero Banner */}
        <section className="about-hero d-flex align-items-center">
          <div className="overlay"></div>
          <div className="container text-center text-white position-relative z-1">
            <h1 className="display-4 fw-bold mb-3" data-aos="fade-down">
              About Us – Ventura Alloy & Steels Pvt. Ltd.
            </h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">
              Building Trust with Quality Steel Solutions Since 2014.
            </p>
          </div>
        </section>

        {/* who we are */}
        <section className="who-we-are py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column - Text */}
              <div className="col-md-6 mb-4 mb-md-0">
                <h2 className="fw-bold mb-4">Who We Are</h2>
                <p className=" text-muted text-justify">
                  Recognised as a brand synonymous with quality and expertise,
                  <strong> Ventura Alloy & Steels Pvt. Ltd. </strong> has been a
                  trusted name in the Tool & Alloy Steels industry since 1965.
                  Founded by <strong> Mr. Bharat Dipchand Shah </strong> and
                  later strengthened under the leadership of
                  <strong> Mr. Aashish Bharat Shah </strong> , the company has
                  grown into a multi-crore enterprise with a strong PAN India
                  presence.
                </p>
                <p className="text-muted text-justify">
                  Over the years, Ventura has built a reputation as a leading
                  Importer, Exporter, Stockist, Distributor, and Supplier of
                  premium Tool & Alloy Steel products. With
                  <strong> ISO 9001:2015 certification </strong> and a
                  commitment to continuous innovation, we deliver solutions that
                  meet the exacting needs of industries such as automotive,
                  engineering, petrochemicals, forging, extrusion, and tooling.
                </p>
                <a href="/infrastructure" className="btn btn-primary mt-3">
                  Explore Our Facilities
                </a>
              </div>

              {/* Right Column - Image */}
              <div className="col-md-6 text-center">
                <img
                  src="/image/about-us-img.jpg"
                  alt="Ventura Steels industrial steel supplier in India – About Us page"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* vision-mission-values */}
        <section className="vision-mission-modern py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">
              Vision, Mission & Values
            </h2>
            <div className="timeline">
              <div className="timeline-item" data-aos="fade-right">
                <div className="timeline-icon">
                  <FaBullseye size={28} />
                </div>
                <div className="timeline-content">
                  <h3 className="fw-semibold">Our Vision</h3>
                  <p className="text-justify">
                    To be a one stop destination for all Tool Steel , Spring
                    Steel and Die Steel product requirements, Pan India and
                    International Markets with Quality, Commitment & best of
                    Service.
                  </p>
                </div>
              </div>

              <div className="timeline-item" data-aos="fade-left">
                <div className="timeline-icon">
                  <FaFlagCheckered size={28} />
                </div>
                <div className="timeline-content">
                  <h3 className="fw-semibold">Our Mission</h3>
                  <ul>
                    <li className="text-justify">
                      To provide world class supply of high-quality steel
                      products.
                    </li>
                    <li className="text-justify">
                      Creating a right fit – client expectations with products
                      supplied.
                    </li>
                    <li className="text-justify">
                      To provide the best value proposition in terms of cost and
                      quality of products and systems.
                    </li>
                    <li className="text-justify">
                      To provide support in terms of consultation, to enable our
                      clients choose what’s best for their needs.
                    </li>
                    <li className="text-justify">
                      To earn the trust and confidence of all stakeholders,
                      exceeding their expectations.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item" data-aos="fade-right">
                <div className="timeline-icon orange">
                  <FaHandshake size={24} />
                </div>
                <div className="timeline-content">
                  <h3 className="fw-semibold">Our Vision</h3>
                  <p className="text-justify">
                    Integrity, Commitment, Customer First, Continuous
                    Improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* management-section */}
        <section className="management-section py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-5">Our Management </h2>
            <div className="row g-4">
              {managementData.map((member, idx) => (
                <div
                  className="col-md-4"
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="card shadow-sm h-100 border-0 position-relative">
                    <div className={`color-bar ${member.color}`}></div>
                    {/* <img
                      src={member.image}
                      alt={member.name}
                      className="card-img-top profile-img"
                    /> */}
                    <div className="card-body text-center">
                      <h5 className="fw-semibold mt-3">{member.name}</h5>
                      <p className="small text-muted">{member.role}</p>
                      <p className="small">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* team-section */}
        <section className="our-team-section py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-4">Our Team</h2>
            <p className="text-center mb-5 pb-5">
              Having a team of efficient people is what helps drive our vision
              to achieve success. Our team members specialize in their core
              areas, enabling us to meet clients’ diverse demands with
              excellence and precision.
            </p>

            <div className="row g-4">
              {teamRoles.map((role, idx) => (
                <div
                  className="col-md-4 mb-5"
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="card role-card h-100 shadow-sm text-center border-0">
                    <div className={`role-icon mx-auto ${role.color}`}>
                      <i className={`${role.icon} text-white`}></i>
                    </div>
                    <div className="card-body">
                      <h5 className="fw-semibold">{role.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
