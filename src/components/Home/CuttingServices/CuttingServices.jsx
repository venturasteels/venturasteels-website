import "./CuttingServices.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CuttingServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="cutting-hero-section mt-4">
      <video
        className="cutting-bg-video"
        src="/videoes/cutting-services-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="cutting-overlay"></div>

      <div className="container cutting-container">
        <div
          className="cutting-panel"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <span className="cutting-tag" data-aos="fade-up" data-aos-delay="250">
            Precision Manufacturing
          </span>

          <h2 className="cutting-title" data-aos="fade-up" data-aos-delay="350">
            High-Precision <br /> Cutting Services
          </h2>

          <p className="cutting-desc" data-aos="fade-up" data-aos-delay="450">
            Delivering accuracy, consistency, and production-ready finish across
            tool steel, alloy steel, mould steel, and high-performance
            industrial materials.
          </p>

          <ul
            className="cutting-points"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <li>CNC Plate Cutting</li>
            <li>Shank & Length Precision Cutting</li>
            <li>Round Bar D-Cut Services</li>
            <li>Retail Cut-to-Size (No MOQ)</li>
          </ul>

          <a
            href="/cutting-services"
            className="cutting-btn"
            data-aos="zoom-in"
            data-aos-delay="650"
          >
            Explore Cutting Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CuttingServices;
