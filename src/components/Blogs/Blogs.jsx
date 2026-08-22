import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const BlogPage = () => {
  return (
    <main className="ventura-blog">

      {/* ================= HERO ================= */}
      <section className="blog-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-8">
              <span className="blog-hero-tag">
                VENTURA INSIGHTS
              </span>

              <h1>
                Steel Knowledge.
                <span> Better Decisions.</span>
              </h1>

              <p>
                Explore practical insights and industry knowledge to help
                you make better decisions when sourcing and selecting
                specialty steel.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FEATURED ARTICLE ================= */}
      <section className="featured-blog">
        <div className="container">

          <div className="section-label">
            FEATURED INSIGHT
          </div>

          <div className="row g-0 featured-wrapper">

            {/* IMAGE */}
            <div className="col-lg-6">

              <div className="featured-image">

                <img
                  src="/images/blog/alloy-steel-stockist.jpg"
                  alt="Alloy steel stockist in India"
                  loading="lazy"
                  decoding="async"
                />

                <div className="featured-badge">
                  FEATURED ARTICLE
                </div>

              </div>

            </div>


            {/* CONTENT */}
            <div className="col-lg-6">

              <div className="featured-content">

                <span className="article-category">
                  STEEL PROCUREMENT
                </span>

                <h2>
                  What Makes a Reliable Alloy Steel Stockist in India?
                </h2>

                <h3>
                  A Buyer’s First Guide
                </h3>

                <p>
                  Every infrastructure milestone, automotive leap and
                  engineering advancement depends on reliable steel.
                  But sourcing specialty steels reliably is no easy feat.
                </p>

                <p>
                  This guide explores what buyers should look for when
                  choosing a reliable alloy steel stockist, including
                  quality documentation, material traceability, inventory,
                  logistics and technical expertise.
                </p>

                <div className="article-meta">
                  <span>August 19, 2026</span>
                  <span className="meta-dot">•</span>
                  <span>8 min read</span>
                </div>

                <Link
                  to="/blog/reliable-alloy-steel-stockist-india"
                  className="read-article-btn"
                >
                  Read Article
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= WHAT YOU WILL LEARN ================= */}
      <section className="learn-section">

        <div className="container">

          <div className="text-center section-heading">

            <span>
              INSIDE THIS GUIDE
            </span>

            <h2>
              What You'll Learn
            </h2>

            <p>
              Understand the key factors that can help you evaluate
              a reliable steel stockist.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <div className="learn-card">

                <div className="learn-number">
                  01
                </div>

                <h3>
                  Quality & Certification
                </h3>

                <p>
                  Understand the importance of MTCs, QAPs and compliance
                  with applicable quality standards.
                </p>

              </div>
            </div>


            <div className="col-lg-3 col-md-6">
              <div className="learn-card">

                <div className="learn-number">
                  02
                </div>

                <h3>
                  Comprehensive Inventory
                </h3>

                <p>
                  Learn why grades, dimensions, forms and ready availability
                  matter during steel procurement.
                </p>

              </div>
            </div>


            <div className="col-lg-3 col-md-6">
              <div className="learn-card">

                <div className="learn-number">
                  03
                </div>

                <h3>
                  Logistics & Delivery
                </h3>

                <p>
                  Discover why dependable logistics and timely dispatch
                  are essential for industrial projects.
                </p>

              </div>
            </div>


            <div className="col-lg-3 col-md-6">
              <div className="learn-card">

                <div className="learn-number">
                  04
                </div>

                <h3>
                  Technical Expertise
                </h3>

                <p>
                  See how technical guidance can support grade selection,
                  heat treatment and application requirements.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= ARTICLE CONTENT PREVIEW ================= */}
      <section className="article-overview">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <span className="overview-label">
                FROM THE ARTICLE
              </span>

              <h2>
                Choosing the Right
                <span> Steel Stockist</span>
              </h2>

              <p>
                The article explains why steel procurement should go beyond
                simply comparing prices. Quality assurance, traceability,
                timely delivery and technical consultation can all influence
                the long-term success of a project.
              </p>

              <Link
                to="/blog/reliable-alloy-steel-stockist-india"
                className="overview-link"
              >
                Explore the Full Guide →
              </Link>

            </div>


            <div className="col-lg-7">

              <div className="article-topics">

                <div className="topic-item">
                  <span>01</span>
                  <div>
                    <h3>
                      The Steel Procurement Landscape
                    </h3>
                    <p>
                      Understanding India's growing demand for
                      engineering-grade steels.
                    </p>
                  </div>
                </div>


                <div className="topic-item">
                  <span>02</span>
                  <div>
                    <h3>
                      Why the Right Stockist Matters
                    </h3>
                    <p>
                      Quality, traceability, delivery and technical
                      consultation.
                    </p>
                  </div>
                </div>


                <div className="topic-item">
                  <span>03</span>
                  <div>
                    <h3>
                      Mistakes to Avoid
                    </h3>
                    <p>
                      Common supplier-selection mistakes buyers should
                      consider before sourcing.
                    </p>
                  </div>
                </div>


                <div className="topic-item">
                  <span>04</span>
                  <div>
                    <h3>
                      Why Ventura Stands Apart
                    </h3>
                    <p>
                      Certifications, inventory, logistics and technical
                      support highlighted in the article.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY VENTURA INSIGHTS ================= */}
      <section className="why-insights">

        <div className="container">

          <div className="row">

            <div className="col-lg-6">

              <span className="section-small-title">
                VENTURA INSIGHTS
              </span>

              <h2>
                Practical Knowledge for
                <span> Industrial Decisions.</span>
              </h2>

              <p>
                Steel selection and procurement involve more than simply
                choosing a grade. The right information can help engineering
                and procurement teams make informed sourcing decisions.
              </p>

            </div>


            <div className="col-lg-6">

              <div className="insight-points">

                <div className="insight-point">
                  <span>✓</span>
                  <p>
                    Understand specialty steel and its applications
                  </p>
                </div>

                <div className="insight-point">
                  <span>✓</span>
                  <p>
                    Make better material selection decisions
                  </p>
                </div>

                <div className="insight-point">
                  <span>✓</span>
                  <p>
                    Understand important procurement considerations
                  </p>
                </div>

                <div className="insight-point">
                  <span>✓</span>
                  <p>
                    Learn about quality and supply reliability
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="blog-cta-section">

        <div className="container">

          <div className="blog-cta">

            <div>
              <span>
                LOOKING FOR THE RIGHT STEEL?
              </span>

              <h2>
                Find the Right Steel for Your Application.
              </h2>

              <p>
                Explore Ventura's specialty steel range or share your
                requirement with our team.
              </p>
            </div>


            <div className="cta-buttons">

              <Link
                to="/products"
                className="cta-primary"
              >
                Explore Products
              </Link>

              <Link
                to="/enquiry"
                className="cta-secondary"
              >
                Send Enquiry
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default BlogPage;