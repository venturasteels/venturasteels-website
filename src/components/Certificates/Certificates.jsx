import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Modal } from "react-bootstrap";
import { FaSearchPlus } from "react-icons/fa";
import "./Certificates.css";

const certificates = [
  {
    title: "ISO 9001:2015 Certificate",
    image: "/image/certificates/BSCIC-ISO.png",
    description: "Certified for Quality Management System",
  },
  {
    title: "Indo-German Chamber of Commerce (IGCC)",
    image: "/image/certificates/AHK-membership.png",
    description: "Certified for Quality Management System",
  },
  {
    title: "Association of Indian Forging Industry (AIFI)",
    image: "/image/certificates/CII-membership.png",
    description: "Certified for Quality Management System",
  },
  {
    title: "Darukhana Iron Steel & Scrap Merchants Association (DISMA)",
    image: "/image/certificates/TAGMA-updated.png",
    description: "Certified for Quality Management System",
  },
  {
    title: "Metal and Stainless Steel Merchants Association (MASSMA)",
    image: "/image/certificates/MASSMA-2.jpg",
    description: "Certified for Quality Management System",
  },
  {
    title: "Thane Small Scale Industries Association (TSSIA)",
    image: "/image/certificates/TSSIA-Membership.jpg",
    description: "Certified for Quality Management System",
  },
  {
    title: "Steel Chamber of India (SCI)",
    image: "/image/certificates/SCI.jpg",
    description: "Certified for Quality Management System",
  },
  {
    title: "Steel Users Federation of India (SUFI)",
    image: "/image/certificates/SUFI.jpg",
    description: "Certified for Quality Management System",
  },
  {
    title: "Chamber of Association of Maharashtra Industry & Trade (CAMIT)",
    image: "/image/certificates/CAMIT.jpg",
    description: "Certified for Quality Management System",
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
