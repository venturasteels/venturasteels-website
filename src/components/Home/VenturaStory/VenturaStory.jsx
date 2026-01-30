import "./VenturaStory.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const VenturaStory = ({ stats }) => {

  return (
    <>
      <section className="ventura-story-section my-5 p-2" id="home-about">
        <div className="ventura-overlay p-2">
          <div className="stats-container mb-5">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`stat-card ${item.className}`}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <div className="icon">{item.icon}</div>
                <div className="value">
                  <CountUp
                    end={item.value}
                    duration={2.5}
                    separator={item.label === "Established" ? "" : ","}
                    suffix={item.suffix}
                    enableScrollSpy
                  />
                </div>
                <div className="label">{item.label}</div>
              </div>
            ))}
          </div>

          {/* ===== ABOUT + WHY CHOOSE ===== */}
          <div className="container text-white">
            <div className="row justify-content-center">
              {/* ABOUT */}
              <div className="col-lg-8 text-center mb-5" data-aos="fade-up">
                <h2 className="fw-bold mb-3">About Ventura Alloys & Steels</h2>
                <p className="lead">
                  Ventura Alloys & Steels is a trusted supplier of premium tool
                  steel, die steel, and engineering steel. Since 2014, we have
                  supported over 1,800 customers with certified materials, ready
                  stock, precision cutting, and reliable logistics.
                </p>

                <Link to="/about" className="btn btn-outline-light mt-3">
                  Know More
                </Link>
              </div>

              {/* WHY CHOOSE */}
              <div className="col-lg-10">
                <h3 className="fw-semibold text-center mb-4" data-aos="fade-up">
                  Why Choose Ventura Steels?
                </h3>

                <div className="row g-4">
                  {[
                    "Commitment to Reliability and Results",
                    "Cutting-Edge Technology",
                    "Trusted Industry Expertise",
                    "Consistent Quality & Compliance",
                  ].map((text, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div
                        className="why-point"
                        data-aos="fade-up"
                        data-aos-delay={idx * 250}
                      >
                        <span className="why-dot"></span>
                        <span>{text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VenturaStory;
