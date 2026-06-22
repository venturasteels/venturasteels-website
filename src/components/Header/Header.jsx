import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaTimes, FaPaperPlane } from "react-icons/fa";
import SearchBar from "../searchBar";
import SmartEmailLink from "../SmartEmailLink";
import "./Header.css";
import "./sidebar.css";
import "./navbar.css";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [activeRegion, setActiveRegion] = useState("india");
  // Hover highlight state
  const [hoveredGrade, setHoveredGrade] = useState(null);
  // hovered region (for highlight)
  const [hoveredRegion, setHoveredRegion] = useState(null);
  // search bar
  const [openSearch, setOpenSearch] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowSearchModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Region tab state (if already present, don’t duplicate)
  // const [activeRegion, setActiveRegion] = useState("india");

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
      path: "/products/hot-work-steel",
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
      name: "DB6 / DIN 1.2714 / AISI L6",
      path: "/products/hot-work-steel/db6",
      keywords: [
        "DB6",
        "DIN 1.2714",
        "1.2714",
        "AISI L6",
        "L6",
        "DB6 steel",
        "DIN 1.2714 steel",
        "AISI L6 steel",
        "DB6 tool steel",
        "1.2714 tool steel",
        "L6 tool steel",
        "DB6 die steel",
      ],
    },
    {
      id: 3,
      name: "H13 / AISI H13 / DIN 1.2344",
      path: "/products/hot-work-steel/h13",
      keywords: [
        "H13",
        "AISI H13",
        "DIN 1.2344",
        "1.2344",
        "H13 steel",
        "AISI H13 steel",
        "DIN 1.2344 steel",
        "H13 tool steel",
        "1.2344 tool steel",
        "H13 die steel",
        "hot work H13",
      ],
    },
    {
      id: 4,
      name: "H11 / AISI H11 / DIN 1.2343",
      path: "/products/hot-work-steel/h11",
      keywords: [
        "H11",
        "AISI H11",
        "DIN 1.2343",
        "1.2343",
        "H11 steel",
        "AISI H11 steel",
        "DIN 1.2343 steel",
        "H11 tool steel",
        "1.2343 tool steel",
        "H11 die steel",
        "hot work H11",
      ],
    },
    {
      id: 5,
      name: "1.2367 / X38CrMoV5-3",
      path: "/products/hot-work-steel/1-2367",
      keywords: [
        "1.2367",
        "X38CrMoV5-3",
        "1.2367 steel",
        "X38CrMoV5-3 steel",
        "1.2367 tool steel",
        "X38CrMoV5-3 tool steel",
        "hot work 1.2367",
        "hot work steel 1.2367",
        "die steel 1.2367",
      ],
    },
    {
      id: 6,
      name: "Cold Work Tool Steel",
      path: "/products/cold-work-steel",
      keywords: [
        "cold work tool steel",
        "cold work steel",
        "tool steel cold work",
        "cold-work",
        "die steel",
        "high wear resistance steel",
        "cold work die steel",
      ],
    },
    {
      id: 7,
      name: "D2 / 1.2379 / HCHCR D2",
      path: "/products/cold-work-steel/d2",
      keywords: [
        "D2",
        "1.2379",
        "DIN 1.2379",
        "HCHCR D2",
        "D2 steel",
        "D2 tool steel",
        "D2 die steel",
        "cold work D2",
        "high carbon high chromium steel",
      ],
    },
    {
      id: 8,
      name: "D3 / 1.2080 / HCHCR D3",
      path: "/products/cold-work-steel/d3",
      keywords: [
        "D3",
        "1.2080",
        "DIN 1.2080",
        "HCHCR D3",
        "D3 steel",
        "D3 tool steel",
        "D3 die steel",
        "cold work D3",
        "high carbon high chromium steel",
      ],
    },
    {
      id: 9,
      name: "D5 / Cr12MoV / 1.2601",
      path: "/products/cold-work-steel/d5",
      keywords: [
        "D5",
        "Cr12MoV",
        "1.2601",
        "D5 steel",
        "Cr12MoV steel",
        "D5 tool steel",
        "D5 die steel",
        "cold work D5",
        "high chromium steel",
      ],
    },
    {
      id: 10,
      name: "SAE 52100 / 100Cr6 / 1.3505 / SUJ2",
      path: "/products/cold-work-steel/sae52100",
      keywords: [
        "SAE52100",
        "SAE 52100",
        "100Cr6",
        "1.3505",
        "SUJ2",
        "bearing steel",
        "52100 steel",
        "100Cr6 steel",
        "SUJ2 steel",
        "52100 tool steel",
        "cold work SAE52100",
      ],
    },
    {
      id: 11,
      name: "O1 / 1.2510 / OHNS O1 / 100MnCrW4 / SKS3",
      path: "/products/cold-work-steel/o1",
      keywords: [
        "O1",
        "1.2510",
        "OHNS O1",
        "100MnCrW4",
        "SKS3",
        "O1 steel",
        "OHNS steel",
        "O1 tool steel",
        "oil hardening steel",
        "100MnCrW4 steel",
        "SKS3 steel",
        "cold work O1",
      ],
    },
    {
      id: 12,
      name: "A2 / 1.2363 / X100CrMoV5-1 / SKD12",
      path: "/products/cold-work-steel/a2",
      keywords: [
        "A2",
        "1.2363",
        "X100CrMoV5-1",
        "SKD12",
        "A2 steel",
        "A2 tool steel",
        "air hardening steel",
        "SKD12 steel",
        "X100CrMoV5-1 steel",
        "cold work A2",
      ],
    },
    {
      id: 13,
      name: "D6 / X210CrW12 / 1.2436",
      path: "/products/cold-work-steel/d6",
      keywords: [
        "D6",
        "X210CrW12",
        "1.2436",
        "D6 steel",
        "D6 tool steel",
        "X210CrW12 steel",
        "1.2436 steel",
        "cold work D6",
        "high wear resistance steel",
        "die steel D6",
      ],
    },
    {
      id: 14,
      name: "Plastic Mould Steel",
      path: "/products/plastic-mould-steel",
      keywords: [
        "plastic mould steel",
        "plastic mold steel",
        "plastic mould tool steel",
        "plastic mold tool steel",
        "mould steel",
        "mold steel",
        "plastic injection mould steel",
        "plastic moulding steel",
      ],
    },
    {
      id: 15,
      name: "P20 / DIN 1.2311",
      path: "/products/plastic-mould-steel/p20-1.2311",
      keywords: [
        "P20",
        "DIN 1.2311",
        "1.2311",
        "P20 steel",
        "1.2311 steel",
        "P20 mould steel",
        "P20 mold steel",
        "plastic mould steel P20",
        "plastic mold steel P20",
        "tool steel P20",
        "P20 pre hardened steel",
      ],
    },
    {
      id: 16,
      name: "P20+Ni / DIN 1.2738",
      path: "/products/plastic-mould-steel/p20ni",
      keywords: [
        "P20+Ni",
        "P20 Ni",
        "DIN 1.2738",
        "1.2738",
        "P20+Ni steel",
        "P20 Ni steel",
        "1.2738 steel",
        "P20+Ni mould steel",
        "P20+Ni mold steel",
        "plastic mould steel 1.2738",
        "plastic mold steel 1.2738",
        "nickel alloy mould steel",
        "pre hardened mould steel",
      ],
    },
    {
      id: 17,
      name: "1.2316 / X36CrMo17",
      path: "/products/plastic-mould-steel/1-2316",
      keywords: [
        "1.2316",
        "X36CrMo17",
        "DIN 1.2316",
        "1.2316 steel",
        "X36CrMo17 steel",
        "1.2316 mould steel",
        "1.2316 mold steel",
        "plastic mould steel 1.2316",
        "plastic mold steel 1.2316",
        "stainless mould steel",
        "corrosion resistant mould steel",
        "tool steel 1.2316",
      ],
    },
    {
      id: 18,
      name: "Alloy Steel",
      path: "/products/alloy-steel",
      keywords: [
        "alloy steel",
        "engineering steel",
        "alloy engineering steel",
        "alloy steel grades",
        "low alloy steel",
        "high strength alloy steel",
      ],
    },
    {
      id: 19,
      name: "20MnCr5 / 16MnCr5",
      path: "/products/alloy-steel/20mncr5",
      keywords: [
        "20MnCr5",
        "16MnCr5",
        "20MnCr5 steel",
        "16MnCr5 steel",
        "case hardening steel",
        "carburizing steel",
        "alloy steel 20MnCr5",
        "alloy steel 16MnCr5",
        "gear steel",
      ],
    },
    {
      id: 20,
      name: "SAE 4140 / EN19 / 42CrMo4 / 1.7225 / SCM440",
      path: "/products/alloy-steel/sae4140",
      keywords: [
        "SAE4140",
        "SAE 4140",
        "EN19",
        "42CrMo4",
        "1.7225",
        "SCM440",
        "4140 steel",
        "EN19 steel",
        "42CrMo4 steel",
        "SCM440 steel",
        "alloy steel EN19",
        "chromium molybdenum steel",
      ],
    },
    {
      id: 21,
      name: "EN24 / SAE 4340 / 34CrNiMo6 / 1.6582",
      path: "/products/alloy-steel/en24",
      keywords: [
        "EN24",
        "SAE4340",
        "SAE 4340",
        "34CrNiMo6",
        "1.6582",
        "4340 steel",
        "EN24 steel",
        "34CrNiMo6 steel",
        "alloy steel EN24",
        "nickel chromium molybdenum steel",
        "high tensile steel",
      ],
    },
    {
      id: 22,
      name: "EN36 / 14NiCr14 / 1.5752 / SNCM220",
      path: "/products/alloy-steel/en36",
      keywords: [
        "EN36",
        "14NiCr14",
        "1.5752",
        "SNCM220",
        "EN36 steel",
        "14NiCr14 steel",
        "SNCM220 steel",
        "case hardening steel",
        "alloy steel EN36",
        "gear steel",
      ],
    },
    {
      id: 23,
      name: "SAE 8620 / 20NiCrMo2-2",
      path: "/products/alloy-steel/sae8620",
      keywords: [
        "SAE8620",
        "SAE 8620",
        "20NiCrMo2-2",
        "8620 steel",
        "20NiCrMo2-2 steel",
        "alloy steel 8620",
        "case hardening steel",
        "carburizing steel",
        "gear steel",
      ],
    },
    {
      id: 24,
      name: "SAE 4130 / 25CrMo4 / 1.7218 / SCM430",
      path: "/products/alloy-steel/sae4130",
      keywords: [
        "SAE4130",
        "SAE 4130",
        "25CrMo4",
        "1.7218",
        "SCM430",
        "4130 steel",
        "25CrMo4 steel",
        "SCM430 steel",
        "chromoly steel",
        "alloy steel 4130",
      ],
    },
    {
      id: 25,
      name: "41Cr4 / 1.7035 / SCr440 / EN18 / 40Cr4B",
      path: "/products/alloy-steel/41cr4",
      keywords: [
        "41Cr4",
        "1.7035",
        "SCr440",
        "EN18",
        "40Cr4B",
        "41Cr4 steel",
        "EN18 steel",
        "SCr440 steel",
        "alloy steel 41Cr4",
        "chromium steel",
      ],
    },
    {
      id: 26,
      name: "SAE 1020 / C22E / 1.1151 / S20C",
      path: "/products/alloy-steel/sae1020",
      keywords: [
        "SAE1020",
        "SAE 1020",
        "C22E",
        "1.1151",
        "S20C",
        "1020 steel",
        "C22E steel",
        "S20C steel",
        "engineering steel",
        "machining steel",
      ],
    },
    {
      id: 27,
      name: "EN353 / 1.6523",
      path: "/products/alloy-steel/en353",
      keywords: [
        "EN353",
        "1.6523",
        "EN353 steel",
        "1.6523 steel",
        "case hardening steel",
        "gear steel",
        "alloy steel EN353",
        "carburizing steel",
      ],
    },
    {
      id: 28,
      name: "Carbon Steel",
      path: "/products/carbon-steel",
      keywords: [
        "carbon steel",
        "engineering carbon steel",
        "medium carbon steel",
        "low carbon steel",
        "high carbon steel",
        "carbon steel grades",
      ],
    },
    {
      id: 29,
      name: "SAE 1018 / C18E / 1.0402 / S18C / ASTM A29",
      path: "/products/carbon-steel/sae1018",
      keywords: [
        "SAE1018",
        "SAE 1018",
        "C18E",
        "1.0402",
        "S18C",
        "ASTM A29",
        "1018 steel",
        "C18E steel",
        "S18C steel",
        "low carbon steel",
        "mild steel",
        "engineering steel",
      ],
    },
    {
      id: 30,
      name: "C45 / EN8 / EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045 / 45C8 / 1.0503",
      path: "/products/carbon-steel/c45",
      keywords: [
        "C45",
        "EN8",
        "EN8A",
        "EN8D",
        "EN8M",
        "EN8DM",
        "CK45",
        "AISI1045",
        "AISI 1045",
        "45C8",
        "1.0503",
        "1045 steel",
        "C45 steel",
        "EN8 steel",
        "medium carbon steel",
        "engineering steel",
      ],
    },
    {
      id: 31,
      name: "ST52.3 / S355J2G3 / S355JR / 1.0570 / SM490A",
      path: "/products/carbon-steel/st52.3",
      keywords: [
        "ST52.3",
        "ST52",
        "S355J2G3",
        "S355JR",
        "1.0570",
        "SM490A",
        "ST52 steel",
        "S355JR steel",
        "S355 steel",
        "structural steel",
        "carbon structural steel",
        "engineering steel",
      ],
    },
    {
      id: 32,
      name: "EN1A-L&PB / 11SMnPb30 / 1.0718 / SUM22L / 230M07PB",
      path: "/products/carbon-steel/en1a-l-pb",
      keywords: [
        "EN1A",
        "EN1A-L",
        "EN1A PB",
        "EN1A-L&PB",
        "11SMnPb30",
        "1.0718",
        "SUM22L",
        "230M07PB",
        "free cutting steel",
        "free machining steel",
        "EN1A steel",
        "lead free cutting steel",
        "carbon steel EN1A",
      ],
    },
    {
      id: 33,
      name: "EN9 / 1055 / 1.0535 / S55C",
      path: "/products/carbon-steel/en9",
      keywords: [
        "EN9",
        "1055",
        "1.0535",
        "S55C",
        "EN9 steel",
        "1055 steel",
        "S55C steel",
        "medium carbon steel",
        "high strength carbon steel",
        "engineering steel",
      ],
    },
    {
      id: 34,
      name: "Spring Steel",
      path: "/products/spring-steel",
      keywords: [
        "spring steel",
        "spring steel grades",
        "alloy spring steel",
        "high carbon spring steel",
        "leaf spring steel",
        "coil spring steel",
      ],
    },
    {
      id: 35,
      name: "EN47 / 50CrV4 / 51CrV4 / AISI 6150 / DIN 1.8159 / SUP10",
      path: "/products/spring-steel/en47",
      keywords: [
        "EN47",
        "50CrV4",
        "51CrV4",
        "AISI 6150",
        "6150",
        "DIN 1.8159",
        "SUP10",
        "EN47 steel",
        "50CrV4 steel",
        "51CrV4 steel",
        "AISI 6150 steel",
        "SUP10 steel",
        "spring steel EN47",
        "chromium vanadium spring steel",
        "leaf spring steel",
      ],
    },
    {
      id: 36,
      name: "SAE 9254 / SUP11A / SUP11",
      path: "/products/spring-steel/sae9254",
      keywords: [
        "SAE9254",
        "SAE 9254",
        "9254 steel",
        "SUP11A",
        "SUP11",
        "SUP11A steel",
        "SUP11 steel",
        "silicon manganese spring steel",
        "spring steel 9254",
        "coil spring steel",
        "automotive spring steel",
      ],
    },
    {
      id: 37,
      name: "52CrMoV4 / 50CrMoV4 / 50Cr4MoV2 / DIN 1.7701",
      path: "/products/spring-steel/52CrMoV4",
      keywords: [
        "52CrMoV4",
        "50CrMoV4",
        "50Cr4MoV2",
        "1.7701",
        "DIN 1.7701",
        "52CrMoV4 steel",
        "50CrMoV4 steel",
        "50Cr4MoV2 steel",
        "chromium molybdenum vanadium steel",
        "spring steel 52CrMoV4",
        "heavy duty spring steel",
      ],
    },
    {
      id: 38,
      name: "55Si7 / 56Si7 / SAE 9255 / DIN 1.5026",
      path: "/products/spring-steel/55Si7",
      keywords: [
        "55Si7",
        "56Si7",
        "SAE9255",
        "SAE 9255",
        "1.5026",
        "DIN 1.5026",
        "55Si7 steel",
        "56Si7 steel",
        "9255 steel",
        "silicon spring steel",
        "spring steel 55Si7",
        "leaf spring steel",
      ],
    },
    {
      id: 39,
      name: "SUP9",
      path: "/products/spring-steel/sup9",
      keywords: [
        "SUP9",
        "SUP9 steel",
        "spring steel SUP9",
        "manganese chromium spring steel",
        "automotive spring steel",
        "leaf spring steel",
        "coil spring steel",
      ],
    }
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
                email="inquiry@venturasteels.com"
                label="inquiry@venturasteels.com"
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
      <nav
        className={`navbar navbar-light bg-navbar d-lg-none ${
          hideTopBar ? "navbar-top" : ""
        }`}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Custom Toggler */}
          <button
            className={`custom-toggler ${isSidebarOpen ? "active" : ""}`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Logo */}
          <img
            src="/image/Ventura New Logo Up.png"
            alt="Ventura logo"
            height={50}
            className="navbar-logo"
          />
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
            src="/image/Ventura New Logo Side.png"
            alt="Ventura Steels"
            className="sidebar-logo rounded mb-2"
          />
        </div>

        {/* <div
          className={`sidebar ${isSidebarOpen ? "open" : ""}`}
          ref={sidebarRef}
        >
          <div className="sidebar-header d-flex justify-content-between align-items-center">
            <img
              src="/image/Semi Circle Logo.jpg"
              alt="Ventura Steels"
              className="sidebar-logo rounded mb-2"
            />
          </div> */}

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
                  <path fill="#2f2b60" d="M7 10l5 5 5-5z" />
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
                    to: "/products/cold-work-steel",
                    text: "Cold Work Steel",
                  },
                  {
                    to: "/products/plastic-mould-steel",
                    text: "Plastic Mould Steel ",
                  },
                  {
                    to: "/products/spring-steel",
                    text: "Spring Steel",
                  },
                  { to: "/products/alloy-steel", text: "Alloy Steel" },
                  { to: "/products/carbon-steel", text: "Carbon Steel" },
                  // { to: "/products/boron-steel", text: "Boron Steel" },
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
              { to: "/cutting-services", text: "Cutting Services" },
              { to: "/certifications", text: "Certifications" },
              { to: "/enquiry", text: "Enquiry" },
              // { to: "/blogs", text: "Blogs" },
              { to: "/career", text: "Careers" },
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
      {/* </div> */}

      {/* Desktop Nav */}
      <nav
        className={`bg-navbar d-none d-lg-flex ${
          hideTopBar ? "navbar-top" : ""
        }`}
      >
        {/* middle logo */}
        <div className="text-center d-flex align-items-center justify-content-center ">
          <a href="/">
            <img
              src="/image/Ventura New Logo Side.png"
              alt="Ventura Logo"
              className=" "
              height={35}
            />
          </a>
        </div>
        <div className=" d-flex gap-4 py-2 px-4 align-items-center justify-content-center navbar-section">
          <a href="/" className=" text-decoration-none nav-link">
            Home
          </a>
          <button
            onClick={() => handleNavClick("/about")}
            className=" text-decoration-none nav-link bg-transparent border-0"
          >
            About Us
          </button>

          <div className="nav-item dropdown position-static">
            <button
              className="nav-link dropdown-toggle "
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
                  <div className="region-tabs">
                    <button
                      onMouseEnter={() => setHoveredRegion("IND")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/in.png" alt="India" />
                      <span>IND</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("EU")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/eu.png" alt="Europe" />
                      <span>EU</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("US")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/us.png" alt="USA" />
                      <span>US</span>
                    </button>
                  </div>

                  <div className="grade-list p-2">
                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("db6")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/hot-work-steel/db6")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        DB6
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        DIN 2714
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        AISI L6
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("h13")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/hot-work-steel/h13")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        H13
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        DIN 2344
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        AISI H13
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("h11")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/hot-work-steel/h11")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        H11
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        DIN 2343
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        AISI H11
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("1-2367-x38crmov5-3")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick(
                          "/products/hot-work-steel/1.2367-x38crmov5-3",
                        )
                      }
                    >
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.2367 / X38CrMoV5-3
                      </span>
                    </button>

                    {/* <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("1-8407")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/hot-work-steel/1.8407")
                      }
                    >
                      1.8407
                    </button> */}
                    {/* url removed */}
                  </div>
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
                  <div className="region-tabs">
                    <button
                      onMouseEnter={() => setHoveredRegion("IND")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/in.png" alt="India" />
                      <span>IND</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("EU")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/eu.png" alt="Europe" />
                      <span>EU</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("US")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/us.png" alt="USA" />
                      <span>US</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("JPN")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w40/jp.png" alt="Japan" />
                      <span>JPN</span>
                    </button>
                  </div>

                  <div className="grade-list p-2">
                    <button
                      className="dropdown-item "
                      onMouseEnter={() => setHoveredGrade("d2")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/cold-work-steel/d2")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        D2
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.2379
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        HCHCR D2
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("d3")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/cold-work-steel/d3")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        D3
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.2080
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        HCHCR D3
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("d5")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/cold-work-steel/d5")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        D5
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        Cr12MoV
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.2601
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("sae52100")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/cold-work-steel/sae52100")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 52100
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        100Cr6 / 1.3505
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SUJ2
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("o1")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/cold-work-steel/o1")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        O1
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.2510 / 100MnCrW4
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        OHNS O1
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SK53
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("a2")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/cold-work-steel/a2")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        A2
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.2363 / X100CrMoV5-1
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SKD12
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("d6")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/cold-work-steel/d6")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        D6
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        X210CrW 12 / 1.2436
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Plastic Mould Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() =>
                    handleNavClick("/products/plastic-mould-steel")
                  }
                  className="dropdown-item"
                >
                  Plastic Mould Steel ▸
                </button>

                <div className="dropdown-menu sub-dropdown">
                  <div className="region-tabs">
                    <button
                      onMouseEnter={() => setHoveredRegion("IND")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/in.png" alt="India" />
                      <span>IND</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("EU")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/eu.png" alt="Europe" />
                      <span>EU</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("US")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/us.png" alt="USA" />
                      <span>US</span>
                    </button>
                  </div>

                  <div className="grade-list p-2">
                    <button
                      className="dropdown-item "
                      onMouseEnter={() => setHoveredGrade("p20-1.2311")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick(
                          "/products/plastic-mould-steel/p20-1.2311",
                        )
                      }
                    >
                      <span
                        className={
                          hoveredRegion === "IND" || hoveredRegion === "US"
                            ? "active-part"
                            : ""
                        }
                      >
                        P20
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.2311
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("p20ni")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/plastic-mould-steel/p20ni")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        P20+NI
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.2738
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("1-2316")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/plastic-mould-steel/1-2316")
                      }
                    >
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.2316 / X36CrMo17
                      </span>
                    </button>
                  </div>
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
                  <div className="region-tabs">
                    <button
                      onMouseEnter={() => setHoveredRegion("IND")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/in.png" alt="India" />
                      <span>IND</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("EU")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/eu.png" alt="Europe" />
                      <span>EU</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("US")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/us.png" alt="USA" />
                      <span>US</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("JPN")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w40/jp.png" alt="Japan" />
                      <span>JPN</span>
                    </button>
                  </div>

                  <div className="grade-list p-2">
                    <button
                      className="dropdown-item "
                      onMouseEnter={() => setHoveredGrade("20mncr5")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/alloy-steel/20mncr5")
                      }
                    >
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        20MnCr5 / 16MnCr5
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("sae4140")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/alloy-steel/sae4140")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 4140
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        EN19
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        42CrMo4 / 1.7224
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SCM440
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("en24")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/alloy-steel/en24")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        EN24
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 4340
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        34CrNiMo6 / 1.6582
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("en36")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/alloy-steel/en36")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        EN36
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        14NiCr14 / 1.5752
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SNCM220
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("sae8620")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/alloy-steel/sae8620")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 8620
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        20NiCrMo2-2
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("sae4130")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/alloy-steel/sae4130")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 4130
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        25CrMo4 / 1.7218
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SCM430
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("41cr4")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/alloy-steel/41cr4")
                      }
                    >
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        41Cr4 / 1.7035 / 40Cr4B
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SCr440
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        EN18
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("sae1020")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/alloy-steel/sae1020")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 1020
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        C22E / 1.1151
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        S20C
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("en353")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/alloy-steel/en353")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        EN353
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.6523
                      </span>
                    </button>
                  </div>
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
                  <div className="region-tabs">
                    <button
                      onMouseEnter={() => setHoveredRegion("IND")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/in.png" alt="India" />
                      <span>IND</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("EU")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/eu.png" alt="Europe" />
                      <span>EU</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("US")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/us.png" alt="USA" />
                      <span>US</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("JPN")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w40/jp.png" alt="Japan" />
                      <span>JPN</span>
                    </button>
                  </div>

                  <div className="grade-list p-2">
                    <button
                      className="dropdown-item "
                      onMouseEnter={() => setHoveredGrade("sae1018")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/carbon-steel/sae1018")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 1018 / ASTM A29
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        C18E / 1.0402
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        S18C
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("c45")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/carbon-steel/c45")
                      }
                    >
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        C45 / CK45 / 1.0503
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        EN8 / EN8A / EN8D / EN8M / EN8DM / 45C8
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        AISI 1045
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("st52.3")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/carbon-steel/st52.3")
                      }
                    >
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        ST52.3 / S355J2G3 / S355JR / 1.057
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        SM490A
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("en1a-l-pb")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/carbon-steel/en1a-l-pb")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        EN1A-L & PB / 230M07 PB
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        11SMnPb30 / 1.0718
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SUM22L
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("en9")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/carbon-steel/en9")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        EN9
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 1055
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        1.0535
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        S55C
                      </span>
                    </button>
                  </div>
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
                  <div className="region-tabs">
                    <button
                      onMouseEnter={() => setHoveredRegion("IND")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/in.png" alt="India" />
                      <span>IND</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("EU")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/eu.png" alt="Europe" />
                      <span>EU</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("US")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/us.png" alt="USA" />
                      <span>US</span>
                    </button>
                    <button
                      onMouseEnter={() => setHoveredRegion("JPN")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/jp.png" alt="Japan" />
                      <span>JPN</span>
                    </button>
                  </div>

                  <div className="grade-list p-2">
                    <button
                      className="dropdown-item "
                      onMouseEnter={() => setHoveredGrade("en47")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/spring-steel/en47")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        EN47
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        50CrV4 / 51CrV4 / DIN 8159
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        AISI 6150
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SUP10
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("sae9254")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/spring-steel/sae9254")
                      }
                    >
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 9254
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SUP11A / SUP1
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("52CrMoV4")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/spring-steel/52CrMoV4")
                      }
                    >
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        52CrMoV4 / 50Cr4MoV2 / 50Cr4MoV4 / 1.770
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("55Si7")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/spring-steel/55Si7")
                      }
                    >
                      <span
                        className={hoveredRegion === "EU" ? "active-part" : ""}
                      >
                        55Si7 / 56Si7 / 1.5026
                      </span>
                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        SAE 9255
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("sup9")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/spring-steel/sup9")
                      }
                    >
                      <span
                        className={hoveredRegion === "JPN" ? "active-part" : ""}
                      >
                        SUP9
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Boron Steel */}
              {/* <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/boron-steel")}
                  className="dropdown-item"
                >
                  Boron Steel ▸
                </button>

                <div className="dropdown-menu sub-dropdown">
                  <div className="region-tabs">
                    <button
                      onMouseEnter={() => setHoveredRegion("IND")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/in.png" alt="India" />
                      <span>IND</span>
                    </button>

                    <button
                      onMouseEnter={() => setHoveredRegion("US")}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <img src="https://flagcdn.com/w20/us.png" alt="USA" />
                      <span>US</span>
                    </button>
                  </div>

                  <div className="grade-list">
                    <button
                      className="dropdown-item "
                      onMouseEnter={() => setHoveredGrade("10b21")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/boron-steel/10b21")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        20MnB4
                      </span>

                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        10B21
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("15b25")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/boron-steel/15b25")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        25MnB4
                      </span>

                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        15B25
                      </span>
                    </button>

                    <button
                      className="dropdown-item"
                      onMouseEnter={() => setHoveredGrade("10b35")}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() =>
                        handleNavClick("/products/boron-steel/10b35")
                      }
                    >
                      <span
                        className={hoveredRegion === "IND" ? "active-part" : ""}
                      >
                        35MnB4
                      </span>

                      {" / "}
                      <span
                        className={hoveredRegion === "US" ? "active-part" : ""}
                      >
                        10B35
                      </span>
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* <button
            onClick={() => handleNavClick("/quality")}
            className="text-decoration-none nav-link bg-transparent border-0"
          >
            Quality
          </button>
          <button
            onClick={() => handleNavClick("/cutting-services")}
            className="text-decoration-none nav-link bg-transparent border-0"
          >
            Cutting Services
          </button>
          <button
            onClick={() => handleNavClick("/infrastructure")}
            className="text-decoration-none nav-link bg-transparent border-0"
          >
            Infrastructure
          </button> */}
          <div className="nav-dropdown">
            <button className="nav-dropdown-btn">Capabilities</button>

            <div className="nav-dropdown-menu">
              <button onClick={() => handleNavClick("/quality")}>
                Quality
              </button>

              <button onClick={() => handleNavClick("/cutting-services")}>
                Cutting Services
              </button>

              <button onClick={() => handleNavClick("/infrastructure")}>
                Infrastructure
              </button>
            </div>
          </div>
          <button
            onClick={() => handleNavClick("/certifications")}
            className="text-decoration-none nav-link bg-transparent border-0"
          >
            Certifications
          </button>

          {/* <button
            onClick={() => handleNavClick("/blogs")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Blogs
          </button> */}
          <button
            onClick={() => handleNavClick("/career")}
            className="text-decoration-none nav-link bg-transparent border-0"
          >
            Careers
          </button>
          <button
            onClick={() => handleNavClick("/contact-us")}
            className="text-decoration-none nav-link bg-transparent border-0"
          >
            Contact Us
          </button>

          <button
            onClick={() => handleNavClick("/enquiry")}
            className="enquiry-nav-btn"
          >
            <FaPaperPlane className="enquiry-nav-icon" />
            Enquiry
          </button>

          {/* Search Icon */}
          <FaSearch
            className="search-icon"
            onClick={() => setShowSearchModal(true)}
          />

          {/* Modal */}
          {showSearchModal && (
            <div
              className="search-overlay"
              onClick={() => setShowSearchModal(false)}
            >
              <div
                className="search-modal-box"
                onClick={(e) => e.stopPropagation()}
              >
                <FaTimes
                  className="search-close"
                  onClick={() => setShowSearchModal(false)}
                />

                <h3 className="search-heading">Search Products</h3>

                <div className="search-input-wrapper">
                  <SearchBar
                    data={productData}
                    onClose={() => setShowSearchModal(false)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
