import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Modal } from "react-bootstrap";
import { FaSearchPlus } from "react-icons/fa";
import "./Certificates.css";

const certificates = [
  {
    title: "ALUCAST (Life Member)",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829424/alucast_certificate-1_q9nrul.png",
    description:
      "Life Member (Corporate) of Aluminium Casters’ Association, India.",
  },
  {
    title: "AIFI (2026–2027)",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829442/AIFI_CERTIFICATE_OF_MEMBERSHIP_updated_qjxy0l.jpg",
    description:
      "Associate Member of the Association of Indian Forging Industry.",
  },
  {
    title: "BSCIC ISO 9001:2015 (2024–2027)",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829430/BSCIC-ISO_n5qkly.png",
    description:
      "Certified for Quality Management System – Importer & Stockist of Alloy & Die Steels.",
  },
  {
    title: "IGCC (2025)",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829431/AHK-membership_noeskw.png",
    description: "Member of the Indo-German Chamber of Commerce (IGCC).",
  },
  {
    title: "CII (2025)",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829428/CII-membership_cxbqqi.png",
    description: "Member of the Confederation of Indian Industry (CII).",
  },
  {
    title: "TAGMA India Membership",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1782987508/TAGMA_MEMBERSHIP_2026-27_page-0001_gzrkfu.jpg",
    description:
      "Membership certificate for Ventura Alloy And Steels Pvt. Ltd., Mumbai (2025–2026).",
  },
  {
    title: "DISMA Life Membership",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829432/DISMA_umxs8o.jpg",
    description:
      "Life Membership certificate from The Darukhana Iron Steel & Scrap Merchants Association.",
  },
  {
    title: "MASSMA Life Membership",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829431/MASSMA-2_bymnix.jpg",
    description:
      "Life Membership certificate from the Metal and Stainless Steel Merchants’ Association.",
  },
  {
    title: "TSSIA (Life Member)",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829426/TSSIA-Membership_p7rca3.jpg",
    description: "Life Member of Thane Small Scale Industries Association.",
  },
  {
    title: "Steel Chamber of India (Permanent Member)",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829431/SCI_i7yhcb.jpg",
    description: "Permanent Member of the Steel Chamber of India.",
  },
  {
    title: "SUFI (2016)",
    image:
      "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1778829423/SUFI_muvv0x.jpg",
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
          <title>
            Certifications & Memberships | ISO 9001:2015 Certified Steel
            Supplier India | Ventura Alloy & Steels Pvt. Ltd.
          </title>

          <meta
            name="description"
            content="Ventura Alloy & Steels Pvt. Ltd. holds ISO 9001:2015 certification and is a member of leading industry bodies like CII, IGCC, TAGMA, and AIFI. Our certifications reflect commitment to quality, reliability, and global standards in steel supply."
          />

          <meta
            name="keywords"
            content="
  Ventura Steels certifications,
  Ventura quality certifications,
  ISO 9001:2015 steel company India,
  ISO certified steel supplier India,
  certified steel supplier Mumbai,
  quality certified steel stockist,
  steel certification India,
  steel quality compliance,
  industrial certification steel supplier,

  steel industry memberships India,
  certified steel company India,
  quality assurance certification,
  global steel standards,
  quality approved steel supplier,
  trusted steel supplier India,

  CII member steel company,
  AIFI member India,
  TAGMA member India,
  IGCC member India,
  BSIC certification,
  steel association memberships,
  industry recognized steel supplier,
  accredited steel supplier India,

  steel quality standards,
  compliance certified steel company,
  certified industrial steel supplier,
  steel supplier with certifications,
  steel testing and compliance,
  reliable steel stockist India,
  trusted steel sourcing
"
          />

          <link
            rel="canonical"
            href="https://venturasteels.com/certifications"
          />
        </Helmet>
      </HelmetProvider>

      <div className="container certification-container py-4 ">
        <h1 className="text-center mb-4">Certifications</h1>
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
