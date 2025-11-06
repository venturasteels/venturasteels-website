import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Modal } from "react-bootstrap";
import { FaSearchPlus } from "react-icons/fa";
import "./Certificates.css";

const certificates = [
  {
    title: "ALUCAST (Life Member)",
    image: "/image/certificates/alucast certificate-1.png",
    description:
      "Life Member (Corporate) of Aluminium Casters’ Association, India.",
  },
  {
    title: "AIFI (2025–2026)",
    image:
      "/image/certificates/(Sept) A Membership Certificate FY 25-26-6-1.png",
    description:
      "Associate Member of the Association of Indian Forging Industry.",
  },
  {
    title: "BSCIC ISO 9001:2015 (2024–2027)",
    image: "/image/certificates/BSCIC-ISO.png",
    description:
      "Certified for Quality Management System – Importer & Stockist of Alloy & Die Steels.",
  },
  {
    title: "IGCC (2025)",
    image: "/image/certificates/AHK-membership.png",
    description: "Member of the Indo-German Chamber of Commerce (IGCC).",
  },
  {
    title: "CII (2025)",
    image: "/image/certificates/CII-membership.png",
    description: "Member of the Confederation of Indian Industry (CII).",
  },
  {
    title: "TAGMA India Membership",
    image: "/image/certificates/TAGMA-updated.png",
    description:
      "Membership certificate for Ventura Alloy And Steels Pvt. Ltd., Mumbai (2025–2026).",
  },
  {
    title: "DISMA Life Membership",
    image: "/image/certificates/DISMA.jpg",
    description:
      "Life Membership certificate from The Darukhana Iron Steel & Scrap Merchants Association.",
  },
  {
    title: "MASSMA Life Membership",
    image: "/image/certificates/MASSMA-2.jpg",
    description:
      "Life Membership certificate from the Metal and Stainless Steel Merchants’ Association.",
  },
  {
    title: "TSSIA (Life Member)",
    image: "/image/certificates/TSSIA-Membership.jpg",
    description: "Life Member of Thane Small Scale Industries Association.",
  },
  {
    title: "Steel Chamber of India (Permanent Member)",
    image: "/image/certificates/SCI.jpg",
    description: "Permanent Member of the Steel Chamber of India.",
  },
  {
    title: "SUFI (2016)",
    image: "/image/certificates/SUFI.jpg",
    description: "Member of the Steel Users Federation of India (SUFI).",
  },
];

export default function Certifications() {
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleOpenModal = (imgSrc) => {
    setActiveImage(imgSrc);
    setShowModal(true);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Certifications | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Ventura Alloy & Steels Pvt. Ltd. is ISO 9001:2015 certified, demonstrating our commitment to quality, reliability, and global standards in steel supply and services."
          />
          <meta
            name="keywords"
            content="Ventura Steels Certifications, ISO 9001:2015 Steel Supplier, Certified Steel Stockist, Quality Certifications, Steel Industry Standards, Trusted Steel Supplier India"
          />
        </Helmet>
      </HelmetProvider>

      <div className="container certification-container py-4">
        <h2 className="text-center mb-4">Certifications</h2>
        <p className="certifications-description text-muted">
          Our certifications reflect our dedication to quality, compliance and
          trustworthy sourcing, ensuring all materials we supply meet global
          industry standards.
        </p>
        <hr className="mb-5" />
        <div className="row g-5">
          {certificates.map((cert, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div
                className="certificate-card"
                onClick={() => handleOpenModal(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="img-fluid cert-image"
                />
                <div className="cert-overlay">
                  <FaSearchPlus className="magnify-icon" />
                  <h6>{cert.title}</h6>
                  <p>{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          size="xl"
          dialogClassName="certificate-modal"
          fullscreen
        >
          {/* Custom Close Button */}
          <button className="close-btns" onClick={() => setShowModal(false)}>
            ✕
          </button>

          <Modal.Body className="p-0 d-flex justify-content-center align-items-center">
            {activeImage && (
              <img
                src={activeImage}
                alt="Certificate"
                className="modal-full-image"
              />
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
