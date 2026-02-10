import { useEffect, useRef } from "react";
import "./HeroVideoBanner.css";

const HeroVideoBanner = () => {
  useEffect(() => {
    const hero = document.getElementById("hero");
    const next = document.getElementById("home-about");
    const indicator = document.getElementById("scrollIndicator");

    if (window.innerWidth < 992) return;

    let locked = false;
    let rafId = null;

    const onWheel = (e) => {
      if (locked) return;
      if (!hero || !next) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      // Trigger as soon as hero is still visible (key)
      if (heroBottom > 0 && e.deltaY > 0) {
        e.preventDefault();

        locked = true;
        indicator?.classList.add("hide");

        // ⏳ allow wheel momentum to settle
        rafId = requestAnimationFrame(() => {
          next.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    };

    const onScroll = () => {
      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      // Reset only when hero is clearly back in view
      if (rect.top >= 0 && rect.bottom >= window.innerHeight * 0.9) {
        locked = false;
        indicator?.classList.remove("hide");
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const heroInner = document.querySelector(".hero-inner");
    const video = document.querySelector(".bg-video");

    // Desktop only
    if (window.innerWidth < 992) return;

    const onScrollEffects = () => {
      if (!hero || !heroInner || !video) return;

      const rect = hero.getBoundingClientRect();

      // Stop calculations when hero is out of view
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;

      const height = rect.height;
      const scrolled = Math.min(Math.max(-rect.top, 0), height);
      const progress = scrolled / height;

      /* Fade & lift hero content */
      heroInner.style.opacity = `${1 - progress * 1.1}`;
      heroInner.style.transform = `translateY(${progress * -40}px)`;

      /* Cinematic slow zoom */
      video.style.transform = `scale(${1 + progress * 0.08})`;
    };

    window.addEventListener("scroll", onScrollEffects);

    return () => {
      window.removeEventListener("scroll", onScrollEffects);
    };
  }, []);

  return (
    <>
      <div className="video-banner layout1" id="hero">
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764048075/home-bg_zwi4ic.png"
        >
          <source src=" https://res.cloudinary.com/dgujwx9r9/video/upload/f_auto,q_auto/v1770633815/Home_page_background_dugmla.mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <div className="hero-content hero-inner">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              <span className="hero-brand">Ventura</span> – A Complete Steel
              Service Center.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              Delivering industrial excellence across every grade – precision,
              strength, and reliability you can trust.
            </p>
            <a
              href="/enquiry"
              className="hero-cta-btn"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              Enquire Now →
            </a>
          </div>
        </div>
        <div className="scroll-indicator-modern" id="scrollIndicator">
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-track">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroVideoBanner;
