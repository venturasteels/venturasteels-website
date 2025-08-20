import React, { useState } from "react";
import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";
import "./Blogs.css";

const blogs = [
  {
    id: 1,
    title: "The Future of Alloy & Tool Steels",
    date: "Aug 10, 2025",
    category: "Industry Insights",
    image: "/image/quality.jpg",
    short: "Exploring the latest innovations in alloy and tool steel manufacturing.",
    content: "Full detailed blog content here..."
  },
  // {
  //   id: 2,
  //   title: "Why Quality Testing Matters in Steel Production",
  //   date: "Aug 5, 2025",
  //   category: "Quality",
  //   image: "https://via.placeholder.com/900x500",
  //   short: "Quality assurance ensures performance, durability, and reliability.",
  //   content: "Full detailed blog content here..."
  // },
  // {
  //   id: 3,
  //   title: "Sustainability in the Steel Industry",
  //   date: "Jul 30, 2025",
  //   category: "Sustainability",
  //   image: "https://via.placeholder.com/900x500",
  //   short: "How the steel industry is adapting to eco-friendly practices.",
  //   content: "Full detailed blog content here..."
  // },
  // {
  //   id: 4,
  //   title: "Advanced Forging Techniques",
  //   date: "Jul 25, 2025",
  //   category: "Manufacturing",
  //   image: "https://via.placeholder.com/900x500",
  //   short: "Next-gen forging processes to improve durability and cost efficiency.",
  //   content: "Full detailed blog content here..."
  // }
];

export default function BlogPage() {
  const [category, setCategory] = useState("All");
  const [show, setShow] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);

  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  const filteredBlogs =
    category === "All" ? blogs : blogs.filter(b => b.category === category);

  const openBlog = (blog) => {
    setActiveBlog(blog);
    setShow(true);
  };

  return (
    <div className="ventura-blog-page">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${blogs[0].image})` }}
      >
        <div className="hero-overlay">
          <h1>{blogs[0].title}</h1>
          <p>{blogs[0].date} | {blogs[0].category}</p>
          <Button variant="light" onClick={() => openBlog(blogs[0])}>
            Read More
          </Button>
        </div>
      </div>

      <Container>
        {/* Filter Bar */}
        <div className="filter-bar text-center my-4">
          {categories.map((cat, i) => (
            <Button
              key={i}
              variant={category === cat ? "primary" : "outline-primary"}
              className="mx-1"
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <Row className="masonry-grid">
          {filteredBlogs.map((b) => (
            <Col md={6} lg={4} key={b.id} className="mb-4">
              <div
                className="blog-tile"
                style={{ backgroundImage: `url(${b.image})` }}
              >
                <div className="tile-overlay">
                  <h5>{b.title}</h5>
                  <p className="small">{b.date} | {b.category}</p>
                  <p className="short-desc">{b.short}</p>
                  <Button
                    variant="light"
                    size="sm"
                    onClick={() => openBlog(b)}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Side Panel Blog Viewer */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="blog-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{activeBlog?.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img
            src={activeBlog?.image}
            alt={activeBlog?.title}
            className="img-fluid mb-3"
          />
          <p className="text-muted small">
            {activeBlog?.date} | {activeBlog?.category}
          </p>
          <p>{activeBlog?.content}</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
