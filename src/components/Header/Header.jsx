import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import SearchBar from "../searchBar";
import SmartEmailLink from "../SmartEmailLink";
import "./Header.css";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.location.reload();
    } else {
      navigate(path);
    }
  };

  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = window.innerWidth < 992;

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };
  const handleProductsClick = () => {
    handleToggle();
    handleNavClick("/products");
  };

  // products for search bar
  const productData = [
    {
      id: 1,
      name: "Hot Work Tool Steel",
      path: "/products/hot-work",
      keywords: [
        "hot work tool steel",
        "hot work steel",
        "tool steel hot work",
        "hot-work",
        "die steel",
      ],
    },
    {
      id: 2,
      name: " DB6 / DIN 1.2714 / AISI L6",
      path: "/products/hot-work/DB6",
      keywords: [
        "DB6",
        "DIN 1.2714",
        "1.2714",
        "AISI L6",
        "L6",
        "DB6 steel",
        "DIN 1.2714 steel",
        "AISI L6 tool steel",
        "DB6 tool steel",
        "1.2714 tool steel",
        "L6 tool steel",
        "DB6 die steel",
      ],
    },
    {
      id: 3,
      name: "H13 / AISI H13 / DIN 2344",
      path: "/products/hot-work/H13",
      keywords: [
        "H13",
        "AISI H13",
        "DIN 1.2344",
        "1.2344",
        "H13 steel",
        "AISI H13 steel",
        "DIN 1.2344 steel",
        "H13 tool steel",
        "AISI H13 tool steel",
        "1.2344 tool steel",
        "DIN 1.2344 tool steel",
        "H13 die steel",
        "hot work H13",
      ],
    },
    {
      id: 4,
      name: "H11 / AISI H 11 / DIN 2343",
      path: "/products/hot-work/H11",
      keywords: [
        "H11",
        "AISI H11",
        "DIN 1.2343",
        "1.2343",
        "H11 steel",
        "AISI H11 steel",
        "DIN 1.2343 steel",
        "H11 tool steel",
        "AISI H11 tool steel",
        "1.2343 tool steel",
        "DIN 1.2343 tool steel",
        "H11 die steel",
        "hot work H11",
      ],
    },
    {
      id: 5,
      name: "H21 / AISI H21 / DIN 1.2581",
      path: "/products/hot-work/H21",
      keywords: [
        "H21",
        "AISI H21",
        "DIN 1.2581",
        "1.2581",
        "H21 steel",
        "AISI H21 steel",
        "DIN 1.2581 steel",
        "H21 tool steel",
        "AISI H21 tool steel",
        "1.2581 tool steel",
        "DIN 1.2581 tool steel",
        "H21 die steel",
        "hot work H21",
      ],
    },
    {
      id: 6,
      name: "H10 / AISI H10 / DIN 1.2365 / SKD7",
      path: "/products/hot-work/H10",
      keywords: [
        "H10",
        "AISI H10",
        "DIN 1.2365",
        "1.2365",
        "SKD7",
        "H10 steel",
        "AISI H10 steel",
        "DIN 1.2365 steel",
        "SKD7 steel",
        "H10 tool steel",
        "AISI H10 tool steel",
        "DIN 1.2365 tool steel",
        "SKD7 tool steel",
        "H10 die steel",
        "hot work H10",
      ],
    },
    {
      id: 7,
      name: "H12 / AISI H12 / DIN 1.2606",
      path: "/products/hot-work/H12",
      keywords: [
        "H12",
        "AISI H12",
        "DIN 1.2606",
        "1.2606",
        "H12 steel",
        "AISI H12 steel",
        "DIN 1.2606 steel",
        "H12 tool steel",
        "AISI H12 tool steel",
        "DIN 1.2606 tool steel",
        "H12 die steel",
        "hot work H12",
      ],
    },
    {
      id: 8,
      name: "Cold Work Tool Steel",
      path: "/products/cold-work",
      keywords: [
        "cold work tool steel",
        "cold work steel",
        "tool steel cold work",
        "CWS",
        "cold-work",
        "die steel",
        "high wear resistance steel",
        "cold work die steel",
      ],
    },
    {
      id: 9,
      name: "D2 / 1.2379 / HCHCR D2",
      path: "/products/cold-work/D2",
      keywords: [
        "D2",
        "DIN 1.2379",
        "1.2379",
        "HCHCR D2",
        "D2 steel",
        "DIN 1.2379 steel",
        "HCHCR D2 steel",
        "D2 tool steel",
        "DIN 1.2379 tool steel",
        "HCHCR D2 tool steel",
        "D2 die steel",
        "cold work D2",
        "D2 high carbon high chromium",
        "D2 cold work tool steel",
      ],
    },
    {
      id: 10,
      name: "D3 / 1.2080 / HCHCR D3",
      path: "/products/cold-work/D3",
      keywords: [
        "D3",
        "DIN 1.2080",
        "1.2080",
        "HCHCR D3",
        "D3 steel",
        "DIN 1.2080 steel",
        "HCHCR D3 steel",
        "D3 tool steel",
        "DIN 1.2080 tool steel",
        "HCHCR D3 tool steel",
        "D3 die steel",
        "cold work D3",
        "D3 high carbon high chromium",
        "D3 cold work tool steel",
      ],
    },
    {
      id: 11,
      name: "D5 / Cr12MoV / 1.2601",
      path: "/products/cold-work/D5",
      keywords: [
        "D5",
        "Cr12MoV",
        "1.2601",
        "D5 steel",
        "Cr12MoV steel",
        "1.2601 steel",
        "D5 tool steel",
        "Cr12MoV tool steel",
        "1.2601 tool steel",
        "D5 die steel",
        "cold work D5",
        "D5 high chromium steel",
        "D5 cold work tool steel",
      ],
    },
    {
      id: 12,
      name: "A2 / 1.2363",
      path: "/products/cold-work/A2",
      keywords: [
        "A2",
        "DIN 1.2363",
        "1.2363",
        "A2 steel",
        "DIN 1.2363 steel",
        "A2 tool steel",
        "DIN 1.2363 tool steel",
        "A2 die steel",
        "cold work A2",
        "A2 air hardening steel",
        "A2 cold work tool steel",
      ],
    },
    {
      id: 13,
      name: "O1 / 1.2510 / OHNS 01",
      path: "/products/cold-work/O1",
      keywords: [
        "O1",
        "1.2510",
        "OHNS 01",
        "O1 steel",
        "1.2510 steel",
        "OHNS 01 steel",
        "O1 tool steel",
        "1.2510 tool steel",
        "OHNS 01 tool steel",
        "O1 die steel",
        "cold work O1",
        "O1 oil hardening steel",
        "O1 cold work tool steel",
      ],
    },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    products: false,
    // future dropdowns: services: false, categories: false, etc.
  });

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Top-Contact + Social */}
      <div className={`py-1 bg-social ${hideTopBar ? "hide" : ""}`}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
          <div className="d-flex justify-content-center gap-3 mt-2 mt-md-0">
            <a
              href="https://www.facebook.com/VenturaSteels"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ventura Steels on Facebook"
              title="Ventura Steels Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/venturasteels/?__pwa=1"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ventura Steels on Instagram"
              title="Ventura Steels Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/venturasteels/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ventura Steels on LinkedIn"
              title="Ventura Steels LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <div className="d-flex justify-content-center gap-3 small social-info">
            {/* Sales Email */}
            <span className="d-block mb-1">
              <SmartEmailLink
                email="sales@venturasteels.com"
                label="sales@venturasteels.com"
              />
            </span>

            <span className="d-block mb-1">
              <SmartEmailLink
                email="enquiry@venturasteels.com"
                label="enquiry@venturasteels.com"
              />
            </span>

            {/* Landline */}
            <span className="d-block mb-1">
              <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>
              <a
                href="tel:+912235034301"
                className="contact-link"
                title="Call Ventura Steels Office"
              >
                022-35034301-21
              </a>
            </span>

            {/* Mobile */}
            <span className="d-block">
              <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>
              <a
                href="tel:+919819225666"
                className="contact-link"
                title="Call Ventura Steels Team"
              >
                +91 98192 25666
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-navbar d-lg-none">
        <div className="container d-flex justify-content-between align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand mb-0 h1">
            <img
              src="/image/logo-v.png"
              alt="Ventura logo"
              className="border rounded"
              height={50}
            />
          </span>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay show"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        ref={sidebarRef}
      >
        {/* Header with Logo*/}
        <div className="sidebar-header d-flex justify-content-between align-items-center">
          <img
            src="/image/Semi Circle Logo.jpg"
            alt="Ventura Steels"
            className="sidebar-logo rounded mb-2"
          />
        </div>

        <div
          className={`sidebar ${isSidebarOpen ? "open" : ""}`}
          ref={sidebarRef}
        >
          <div className="sidebar-header d-flex justify-content-between align-items-center">
            <img
              src="/image/Semi Circle Logo.jpg"
              alt="Ventura Steels"
              className="sidebar-logo rounded mb-2"
            />
          </div>

          {/* Scrollable container */}
          <div className="sidebar-scroll">
            <ul className="sidebar-nav">
              {/* SINGLE ITEMS */}
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About Us" },
              ].map(({ to, text }) => (
                <li
                  key={to}
                  className={`sidebar-item ${
                    location.pathname === to ? "active" : ""
                  }`}
                >
                  <button
                    className="sidebar-tile"
                    onClick={() => {
                      handleNavClick(to);
                      setIsSidebarOpen(false);
                    }}
                  >
                    {text}
                  </button>
                </li>
              ))}

              {/* PRODUCTS DROPDOWN */}
              <li className="sidebar-item">
                <button
                  className={`sidebar-tile dropdown-btn ${
                    openDropdowns.products ? "open" : ""
                  }`}
                  onClick={() => toggleDropdown("products")}
                >
                  <span>Products</span>

                  {/* SVG Arrow */}
                  <svg
                    className={`dropdown-arrow ${
                      openDropdowns.products ? "rotate" : ""
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path fill="white" d="M7 10l5 5 5-5z" />
                  </svg>
                </button>

                {/* Animated Dropdown */}
                <ul
                  className="submenu"
                  style={{
                    maxHeight: openDropdowns.products ? "500px" : "0px",
                  }}
                >
                  {[
                    { to: "/products/hot-work-steel", text: "Hot Work Steel" },
                    {
                      to: "/products/cold-work",
                      text: "Cold Work Steel",
                    },
                    {
                      to: "/products/spring-steel",
                      text: "Spring Steel",
                    },
                    { to: "/products/alloy-steel", text: "Alloy Steel" },
                    { to: "/products/carbon-steel", text: "Carbon Steel" },
                    { to: "/products/boron-steel", text: "Boron Steel" },
                  ].map(({ to, text }) => (
                    <li key={to}>
                      <button
                        className={`submenu-item ${
                          location.pathname === to ? "active-sub" : ""
                        }`}
                        onClick={() => {
                          handleNavClick(to);
                          setIsSidebarOpen(false);
                        }}
                      >
                        {text}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

              {/* REMAINING ITEMS */}
              {[
                { to: "/quality", text: "Quality" },
                { to: "/infrastructure", text: "Infrastructure" },
                { to: "/certifications", text: "Certifications" },
                { to: "/enquiry", text: "Enquiry" },
                { to: "/blogs", text: "Blogs" },
                { to: "/careers", text: "Careers" },
                { to: "/contactUs", text: "Contact Us" },
              ].map(({ to, text }) => (
                <li
                  key={to}
                  className={`sidebar-item ${
                    location.pathname === to ? "active" : ""
                  }`}
                >
                  <button
                    className="sidebar-tile"
                    onClick={() => {
                      handleNavClick(to);
                      setIsSidebarOpen(false);
                    }}
                  >
                    {text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="bg-navbar d-none d-lg-block">
        {/* middle logo */}
        <div className="py-3 text-center d-flex align-items-center justify-content-center bg-white ">
          <a href="/">
            <img
              src="/image/ventura-logo.jpg"
              alt="Ventura Logo"
              className=" "
              height={60}
            />
          </a>
        </div>
        <div className="container-fluid d-flex gap-4 py-2 px-4 align-items-center justify-content-center navbar-section">
          <a href="/" className="text-white text-decoration-none nav-link">
            Home
          </a>
          <button
            onClick={() => handleNavClick("/about")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            About Us
          </button>

          <div className="nav-item dropdown position-static">
            <button
              className="nav-link dropdown-toggle text-white"
              onClick={() => handleNavClick("/products")}
            >
              Products
            </button>

            {/* Products dropdown */}
            <div className="dropdown-menu shadow-lg rounded-0 mega-dropdown p-2">
              {/* Hot Work */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/hot-work-steel")}
                  className="dropdown-item"
                >
                  Hot Work Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() =>
                      handleNavClick("/products/hot-work-steel/db6")
                    }
                    className="dropdown-item "
                  >
                    DB6 / DIN 1.2714 / AISI L6
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/hot-work-steel/h13")
                    }
                    className="dropdown-item "
                  >
                    H13 / AISI H13 / DIN 1.2344
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/hot-work-steel/h11")
                    }
                    className="dropdown-item "
                  >
                    H11 / AISI H 11 / DIN 1.2343
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/hot-work-steel/h21")
                    }
                    className="dropdown-item "
                  >
                    H21 / AISI H21 / DIN 1.2581
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/hot-work-steel/h10")
                    }
                    className="dropdown-item "
                  >
                    H10 / AISI H10 / DIN 1.2365 / SKD7
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/hot-work-steel/h12")
                    }
                    className="dropdown-item "
                  >
                    H12 / AISI H12 / DIN 1.2606
                  </button>
                </div>
              </div>

              {/* Cold Work */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/cold-work-steel")}
                  className="dropdown-item"
                >
                  Cold Work Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() => handleNavClick("/products/cold-work-steel/d2")}
                    className="dropdown-item "
                  >
                    D2 / 1.2379 / HCHCR D2
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work-steel/d3")}
                    className="dropdown-item "
                  >
                    D3 / 1.2080 / HCHCR D3
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work-steel/d5")}
                    className="dropdown-item "
                  >
                    D5 / Cr12MoV / 1.2601
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work-steel/a2")}
                    className="dropdown-item "
                  >
                    A2 / 1.2363
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work-steel/o1")}
                    className="dropdown-item "
                  >
                    O1 / 2510 / OHNS O1
                  </button>
                </div>
              </div>

              {/* Plastic Mould Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/plastic-mould-steel")}
                  className="dropdown-item"
                >
                  Plastic Mould Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() =>
                      handleNavClick("/products/plastic-mould-steel/p20ni")
                    }
                    className="dropdown-item "
                  >
                    P20+Ni / 1.2738
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/plastic-mould-steel/p20-1.2311")
                    }
                    className="dropdown-item "
                  >
                    P20 / 1.2311
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/plastic-mould-steel/1.2316")
                    }
                    className="dropdown-item "
                  >
                    1.2316
                  </button>
                </div>
              </div>

              {/* Spring Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/spring-steel")}
                  className="dropdown-item"
                >
                  Spring Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() =>
                      handleNavClick("/products/spring-steel/en47")
                    }
                    className="dropdown-item "
                  >
                    EN 47 / 50CrV4 / 51CrV4 / AISI 6150 / DIN 8159 / SUP 10
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/spring-steel/sup9")
                    }
                    className="dropdown-item "
                  >
                    SUP 9
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/spring-steel/sae9254")
                    }
                    className="dropdown-item "
                  >
                    SAE 9254 / SUP 11A
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/spring-steel/en31")
                    }
                    className="dropdown-item "
                  >
                    EN 31 / SAE 52100 / 100Cr6
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/spring-steel/en45")
                    }
                    className="dropdown-item "
                  >
                    EN45 / SAE 9260 / 60Si7
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/spring-steel/sae5160")
                    }
                    className="dropdown-item "
                  >
                    SAE 5160
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/spring-steel/52crmov4")
                    }
                    className="dropdown-item "
                  >
                    52CrMoV4 / 50Cr4MoV2
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/spring-steel/52crv4")
                    }
                    className="dropdown-item "
                  >
                    52CrV4 / 51CrV4 / AISI 4150
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/spring-steel/55si7")
                    }
                    className="dropdown-item "
                  >
                    55Si7 / 56Si7 / SAE 9255
                  </button>
                </div>
              </div>

              {/* Alloy Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/alloy-steel")}
                  className="dropdown-item"
                >
                  Alloy Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() =>
                      handleNavClick("/products/alloy-steel/20mncr5")
                    }
                    className="dropdown-item "
                  >
                    20MnCr5 / 16MnCr5
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/alloy-steel/sae4140")
                    }
                    className="dropdown-item "
                  >
                    SAE 4140 / EN 19 / 42CrMo4 / EN18A / EN18A-D
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/alloy-steel/sae1020")
                    }
                    className="dropdown-item "
                  >
                    SAE 1020
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/alloy-steel/41cr4")
                    }
                    className="dropdown-item "
                  >
                    41Cr4 / EN18 / 40Cr4B
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/alloy-steel/en41b")
                    }
                    className="dropdown-item "
                  >
                    EN 41B / 41CrV4 / AISI 4340 / 40NiCrMo84
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy-steel/en24")}
                    className="dropdown-item "
                  >
                    EN 24 / 18CrNiMo6
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/alloy-steel/sae4130")
                    }
                    className="dropdown-item "
                  >
                    SAE4130
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/alloy-steel/en36c")
                    }
                    className="dropdown-item "
                  >
                    EN36C
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/alloy-steel/sae8620")
                    }
                    className="dropdown-item "
                  >
                    SAE 8620 / EN353 / SAE 9310
                  </button>
                </div>
              </div>

              {/* Carbon Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/carbon-steel")}
                  className="dropdown-item"
                >
                  Carbon Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() => handleNavClick("/products/carbon-steel/c45")}
                    className="dropdown-item "
                  >
                    C45 / EN9 /EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/carbon-steel/sae1018")
                    }
                    className="dropdown-item "
                  >
                    SAE 1018 / ASTM A36 / ASTM A29 / SAE 1137 / SAE 1138
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/carbon-steel/st52.3")
                    }
                    className="dropdown-item "
                  >
                    ST 52.3
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/carbon-steel/en1a")
                    }
                    className="dropdown-item "
                  >
                    EN 1A / EN 1A_PB / EN 1A_L / 230M07 PB
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/carbon-steel/35c8")
                    }
                    className="dropdown-item "
                  >
                    35C8 / C35 / EN8 / SAE 1035 / 45C8
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/carbon-steel/sae1541")
                    }
                    className="dropdown-item "
                  >
                    SAE 1541 / EN 15
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/carbon-steel/27c15")
                    }
                    className="dropdown-item "
                  >
                    27C15 / SAE 1527
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/carbon-steel/sae1117")
                    }
                    className="dropdown-item "
                  >
                    SAE 1117 / ASTM A108
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/carbon-steel/en43bcr")
                    }
                    className="dropdown-item "
                  >
                    EN43BCr / SAE 1050 / EN43A
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/carbon-steel/sae1141")
                    }
                    className="dropdown-item "
                  >
                    SAE 1141
                  </button>
                </div>
              </div>

              {/* Boron Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/boron-steel")}
                  className="dropdown-item"
                >
                  Boron Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() =>
                      handleNavClick("/products/boron-steel/10b21")
                    }
                    className="dropdown-item "
                  >
                    10B21
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/boron-steel/15b25")
                    }
                    className="dropdown-item"
                  >
                    15B25
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/boron-steel/10b35")
                    }
                    className="dropdown-item "
                  >
                    10B35
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleNavClick("/quality")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Quality
          </button>
          <button
            onClick={() => handleNavClick("/infrastructure")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Infrastructure
          </button>
          <button
            onClick={() => handleNavClick("/certifications")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Certifications
          </button>
          <button
            onClick={() => handleNavClick("/enquiry")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Enquiry
          </button>
          {/* <button
            onClick={() => handleNavClick("/blogs")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Blogs
          </button> */}
          <button
            onClick={() => handleNavClick("/career")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Careers
          </button>
          <button
            onClick={() => handleNavClick("/contact-us")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Contact Us
          </button>

          {/* Search Bar */}
          <div className="header-search d-flex align-items-center">
            {/* Magnify Icon */}
            <FaSearch
              className="search-icon"
              onClick={() => setShowSearch(!showSearch)}
            />

            {/* Search Bar */}
            {showSearch && (
              <div className="search-container">
                <SearchBar data={productData} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
