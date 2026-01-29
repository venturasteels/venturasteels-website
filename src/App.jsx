import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Products from "./components/Products/Products.jsx";
import ReactGA from "react-ga4";
import usePageTracking from "./hooks/usePageTracking.jsx";
import FloatingContact from "./components/FloatingContact/FloatingContact.jsx";
import NotFound from "./components/Pages/NotFound.jsx";
import CuttingServices from "./components/CuttingServices/CuttingServices.jsx";
import "./App.css";
// HotWork
import HotWork from "./components/Products/Hot-Work/hot-work.jsx";
import DB6 from "./components/Products/Hot-Work/Grades/DB6/DB6.jsx";
import H13 from "./components/Products/Hot-Work/Grades/H13/H13.jsx";
import H11 from "./components/Products/Hot-Work/Grades/H11/H11.jsx";
import H21 from "./components/Products/Hot-Work/Grades/H21/H21.jsx";
import H10 from "./components/Products/Hot-Work/Grades/H10/H10.jsx";
import H12 from "./components/Products/Hot-Work/Grades/H12/H12.jsx";

// Boron
import Boron from "./components/Products/Boron-Steel/boron-steel.jsx";
import Boron15B25 from "./components/Products/Boron-Steel/Grades/15B25/15B25.jsx";
import Boron10B21 from "./components/Products/Boron-Steel/Grades/10B21/10B21.jsx";
import Boron10B35 from "./components/Products/Boron-Steel/Grades/10B35/10B35.jsx";

// ColdWork
import ColdWork from "./components/Products/Cold-Work/cold-work.jsx";
import D2 from "./components/Products/Cold-Work/Grades/D2/D2.jsx";
import D3 from "./components/Products/Cold-Work/Grades/D3/D3.jsx";
import D5 from "./components/Products/Cold-Work/Grades/D5/D5.jsx";
import A2 from "./components/Products/Cold-Work/Grades/A2/A2.jsx";
import O1 from "./components/Products/Cold-Work/Grades/O1/O1.jsx";

// Plastic Mould
import PlaticMould from "./components/Products/Plastic-Mould/plastic-mould.jsx";
import P20Ni from "./components/Products/Plastic-Mould/Grades/P20+Ni/P20+Ni.jsx";
import P20 from "./components/Products/Plastic-Mould/Grades/P20/P20.jsx";
import PlasticMould2316 from "./components/Products/Plastic-Mould/Grades/1.2316/1.2316.jsx";

// Spring Steels
import SpringSteel from "./components/Products/Spring-Steel/spring-steel.jsx";
import SpringSteelEN47 from "./components/Products/Spring-Steel/Grades/EN47/EN47.jsx";
import SUP9 from "./components/Products/Spring-Steel/Grades/SUP9/SUP9.jsx";
import SpringSteelSAE9254 from "./components/Products/Spring-Steel/Grades/SAE9254/SAE9254.jsx";
import EN31 from "./components/Products/Alloy-Steel/Grades/EN31/EN31.jsx";
import EN45 from "./components/Products/Spring-Steel/Grades/EN45/EN45.jsx";
import SAE5160 from "./components/Products/Spring-Steel/Grades/SAE5160/SAE5160.jsx";
import SpringSteel52CrMoV4 from "./components/Products/Spring-Steel/Grades/52CrMoV4/52CrMoV4.jsx";
import SpringSteel52CrV4 from "./components/Products/Spring-Steel/Grades/52CrV4/52CrV4.jsx";
import SpringSteel55Si7 from "./components/Products/Spring-Steel/Grades/55Si7/55Si7.jsx";

// Alloy Steel
import AlloySteel from "./components/Products/Alloy-Steel/alloy-steel.jsx";
import AlloySteel20MnCr5 from "./components/Products/Alloy-Steel/Grades/20MnCr5/20MnCr5.jsx";
import AlloySteelSAE4140 from "./components/Products/Alloy-Steel/Grades/SAE4140/SAE4140.jsx";
import AlloySteelSAE1020 from "./components/Products/Alloy-Steel/Grades/SAE1020/SAE1020.jsx";
import AlloySteel41Cr4 from "./components/Products/Alloy-Steel/Grades/41Cr4/41Cr4.jsx";
import AlloySteelEN41B from "./components/Products/Alloy-Steel/Grades/EN41B/EN41B.jsx";
import AlloySteelEN24 from "./components/Products/Alloy-Steel/Grades/EN24/EN24.jsx";
import AlloySteelSAE4130 from "./components/Products/Alloy-Steel/Grades/SAE4130/SAE4130.jsx";
import AlloySteelEN36C from "./components/Products/Alloy-Steel/Grades/EN36C/EN36C.jsx";
import AlloySteelSAE8620 from "./components/Products/Alloy-Steel/Grades/SAE8620/SAE8620.jsx";

// Carbon Steel
import CarbonSteel from "./components/Products/Carbon-Steel/carbon-steel.jsx";
import CarbonSteelC45 from "./components/Products/Carbon-Steel/Grades/C45/C45.jsx";
import CarbonSteelSAE1018 from "./components/Products/Carbon-Steel/Grades/SAE1018/SAE1018.jsx";
import CarbonSteelST52 from "./components/Products/Carbon-Steel/Grades/ST52.3/ST52.3.jsx";
import CarbonSteelEN1A from "./components/Products/Carbon-Steel/Grades/EN1A/EN1A.jsx";
import CarbonSteel35C8 from "./components/Products/Carbon-Steel/Grades/35C8/35C8.jsx";
import CarbonSteelSAE1541 from "./components/Products/Carbon-Steel/Grades/SAE1541/SAE1541.jsx";
import CarbonSteel27C15 from "./components/Products/Carbon-Steel/Grades/27C15/27C15.jsx";
import CarbonSteelSAE1117 from "./components/Products/Carbon-Steel/Grades/SAE1117/SAE1117.jsx";
import CarbonSteelEN43BCr from "./components/Products/Carbon-Steel/Grades/EN43BCr/EN43BCr.jsx";
import CarbonSteelSAE1141 from "./components/Products/Carbon-Steel/Grades/SAE1141/SAE1141.jsx";

import Quality from "./components/Quality/Quality.jsx";
import Infrastructure from "./components/Infrastructure/Infrastructure.jsx";
import Certifications from "./components/Certificates/Certificates.jsx";
import EnquiryForm from "./components/Enquiry/Enquiry.jsx";
import Careers from "./components/Careers/Careers.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Automotive from "./components/Industries/Automative/Automative.jsx";
import Aerospace from "./components/Industries/Aerospace/Aerospace.jsx";
import Tooling from "./components/Industries/Tooling/Tooling.jsx";
import InfrastructureEnergy from "./components/Industries/Infrastructure/Infrastructure-energy.jsx";
import Plastics from "./components/Industries/Plastics/Plastics.jsx";

ReactGA.initialize("G-PNNRG2K7VQ");

const App = () => {
  // disable copy, right click and f12
  // useEffect(() => {
  //   const handleContextMenu = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   const handleKeyDown = (e) => {
  //     if (
  //       (e.ctrlKey && ["u", "s", "p", "c"].includes(e.key.toLowerCase())) ||
  //       e.key === "F12"
  //     ) {
  //       e.preventDefault();
  //     }
  //   };
  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Router>
        <FloatingContact />
        <PageTrackerWrapper />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/cutting-services" element={<CuttingServices />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          <Route path="/career" element={<Careers />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/products/hot-work-steel" element={<HotWork />}>
            <Route path="db6" element={<DB6 />} />
            <Route path="h13" element={<H13 />} />
            <Route path="h11" element={<H11 />} />
            <Route path="h21" element={<H21 />} />
            <Route path="h10" element={<H10 />} />
            <Route path="h12" element={<H12 />} />
          </Route>
          <Route path="/products/cold-work-steel" element={<ColdWork />}>
            <Route path="d2" element={<D2 />} />
            <Route path="d3" element={<D3 />} />
            <Route path="d5" element={<D5 />} />
            <Route path="a2" element={<A2 />} />
            <Route path="o1" element={<O1 />} />
          </Route>
          <Route path="/products/plastic-mould-steel" element={<PlaticMould />}>
            <Route path="p20ni" element={<P20Ni />} />
            <Route path="p20-1.2311" element={<P20 />} />
            <Route path="1.2316" element={<PlasticMould2316 />} />
          </Route>
          <Route path="/products/spring-steel" element={<SpringSteel />}>
            <Route path="en47" element={<SpringSteelEN47 />} />
            <Route path="sup9" element={<SUP9 />} />
            <Route path="sae9254" element={<SpringSteelSAE9254 />} />
            <Route path="en45" element={<EN45 />} />
            <Route path="sae5160" element={<SAE5160 />} />
            <Route path="52crmov4" element={<SpringSteel52CrMoV4 />} />
            <Route path="52crv4" element={<SpringSteel52CrV4 />} />
            <Route path="55si7" element={<SpringSteel55Si7 />} />
          </Route>
          <Route path="/products/alloy-steel" element={<AlloySteel />}>
            <Route path="20mncr5" element={<AlloySteel20MnCr5 />} />
            <Route path="en31" element={<EN31 />} />
            <Route path="sae4140" element={<AlloySteelSAE4140 />} />
            <Route path="sae1020" element={<AlloySteelSAE1020 />} />
            <Route path="41cr4" element={<AlloySteel41Cr4 />} />
            <Route path="en41b" element={<AlloySteelEN41B />} />
            <Route path="en24" element={<AlloySteelEN24 />} />
            <Route path="sae4130" element={<AlloySteelSAE4130 />} />
            <Route path="en36C" element={<AlloySteelEN36C />} />
            <Route path="sae8620" element={<AlloySteelSAE8620 />} />
          </Route>
          <Route path="/products/carbon-steel" element={<CarbonSteel />}>
            <Route path="c45" element={<CarbonSteelC45 />} />
            <Route path="sae1018" element={<CarbonSteelSAE1018 />} />
            <Route path="st52.3" element={<CarbonSteelST52 />} />
            <Route path="en1a" element={<CarbonSteelEN1A />} />
            <Route path="35c8" element={<CarbonSteel35C8 />} />
            <Route path="sae1541" element={<CarbonSteelSAE1541 />} />
            <Route path="27c15" element={<CarbonSteel27C15 />} />
            <Route path="sae1117" element={<CarbonSteelSAE1117 />} />
            <Route path="en43bcr" element={<CarbonSteelEN43BCr />} />
            <Route path="sae1141" element={<CarbonSteelSAE1141 />} />
          </Route>
          <Route path="/products/boron-steel" element={<Boron />}>
            <Route path="10b21" element={<Boron10B21 />} />
            <Route path="15b25" element={<Boron15B25 />} />
            <Route path="10b35" element={<Boron10B35 />} />
          </Route>
          <Route path="/products/automotive" element={<Automotive />} />
          <Route path="/products/aerospace" element={<Aerospace />} />
          <Route path="/products/tooling" element={<Tooling />} />
          <Route
            path="/products/infrastructure-energy"
            element={<InfrastructureEnergy />}
          />
          <Route path="/products/plastics" element={<Plastics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

function PageTrackerWrapper() {
  usePageTracking();
  return null;
}

export default App;
