import React, { useState } from "react";
import { Button, Modal, Form, Card, Row, Col, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CareerApplicationModal from "./CareersForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Careers.css";

const jobOpenings = [
  {
    id: 1,
    title: "Import Manager",
    location: "Kandivali, Mumbai",
    experience: "5 - 10 Years",
    // department: "Finance & Management",
    // genderPreference: "Female (Age 25–28 years)",
    description:
      "We are looking for an experienced Imports Manager with strong knowledge of international trade, customs regulations, supplier management, and end-to-end import operations. The ideal candidate should be able to lead the import team, handle documentation and compliance, coordinate shipments efficiently, and resolve logistical issues",

    responsibilities: [
      "Lead supplier onboarding, negotiations, and contract finalization.",
      "Monitor shipments, ETA, IGM, clearance, and DO coordination.",
      "Resolve container damage, detention, rejections, and claims with suppliers.",
      "Manage financial coordination for advances, payments, and insurance.",
      "Guide junior import team members and oversee their documentation work.",
      "Maintain MIS reports including freight sheets, NOC sheets, and fluctuation sheets.",
      "Work on new supplier development and attend domestic/international exhibitions.",
      "Regularly monitor BIS and Ministry of Steel notifications for updates and compliance requirements.",
    ],

    skills: [
      "Bachelor’s degree in Commerce/International Business/Logistics (MBA preferred).",
      " Minimum 5–7 years of hands-on experience in import operations and documentation.",
      "Strong background in customs procedures, international trade, and supplier/freight coordination.",
      "Strong expertise in import documentation, customs regulations, and international trade processes.",
      "Advanced negotiation, supplier management, and problem-solving skills.",
      "Excellent coordination, communication, and MIS/reporting proficiency.",
    ],
  },

  {
    id: 2,
    title: "Executive Telecalling-Sales",
    location: "Kandivali, Mumbai",
    experience: "2 - 4 Years",
    // genderPreference: "Female (Age 30–40 years)",
    description:
      "Possess strong working knowledge of computers, Google Sheets, MS Excel, MS Word, and internet-based tools to manage and analyze calling data efficiently.",

    responsibilities: [
      "Conduct outbound cold calls to generate new leads, identify potential customers, and build a healthy sales pipeline.",
      "Maintain and update accurate records of new, existing, and prospective customers in CRM/Google Sheets.",
      "Convert enquiries into confirmed orders through effective follow-ups, persuasion, and relationship management, thereby increasing company sales revenue.",
      "Demonstrate excellent verbal and written communication skills in English for professional interaction with customers.",
      "Be proactive, self-driven, organized, and systematic in executing daily calling targets and follow-up activities.",
      "Analyze calling data, customer responses, and market feedback to identify trends and improve sales strategies.",
      "Have prior experience in Sales, Tele-calling, Marketing, or back-end sales operations.",
      "Build and maintain strong relationships with customers, address their queries, and resolve issues or grievances promptly.",
      "Engage in negotiation and persuasive communication to close deals and enhance customer engagement.",
      "Conduct market research and data analysis to identify new business opportunities and support sales planning.",
    ],

    skills: [
      "Should be smart and willing to take responsibilities",
      "Good Knowledge of MS-Word, MS-Excel, MS- PPT and email correspondence ",
      "Excellent Communication Skill",
    ],
  },
  {
    id: 3,
    title: "Import Coordinator",
    location: "Kandivali, Mumbai",
    experience: "2 - 3 Years",
    description:
      "We are looking for a proactive Import Coordinator to manage end-to-end import operations, including documentation, supplier coordination, and shipment tracking through ICEGATE. The role requires accuracy, strong coordination skills, and a willingness to take on additional tasks to support smooth and efficient import processes.",

    responsibilities: [
      "Track Bill of Lading status and monitor shipment progress using ICEGATE and related online portals.",
      "Manage contract amendments, advance adjustments, and supplier reconciliations.",
      "Coordinate and verify import documentation – MTC, CO, SIMS, NOC, Freight Certificates, etc.",
      "Arrange and manage insurance coverage for all FOB shipments to ensure transit risk protection.",
      "Handle shipment rejections and manage claims with suppliers.",
      "Maintain records for USD/RMB currency fluctuation, ICD, and payment schedules.",
      "Submit necessary documents to Accounts and follow up on pending supplier payments and invoices.",
    ],

    skills: [
      "Graduate in any discipline (MBA or Specialization in Supply Chain/ International Trading preferred)",
      "2-3 years of relevant experience in Import Coordination / Logistics / Supply Chain Management.",
      "Prior experience handling shipping documentation, CHA coordination, and supplier communication.",
      "Exposure to freight negotiation, payment processing, and claims handling preferred.",
      "Excellent communication and coordination abilities.",
      "Strong attention to detail and documentation accuracy.",
      "Ability to multitask and meet strict deadlines.",
      "Analytical mindset with good problem-solving skills.",
    ],
  },
  {
    id: 4,
    title: "Stock Inventory Executive ",
    location: "Kandivali, Mumbai",
    experience: "2 - 5 Years",
    description:
      "The Warehouse Stock Inventory Executive is responsible for accurate inventory control, material verification, documentation, stock reporting, and coordination with internal teams to ensure smooth warehouse operations.",

    responsibilities: [
      "Verify incoming materials as per Purchase Order (PO), Delivery Challan, and Invoice.",
      "Prepare GRN (Goods Receipt Note) against Delivery Challan and Invoice.",
      "Follow up on shortage, excess, or damaged materials with the Godown Head and concerned departments.",
      "Issue materials strictly as per approved Material Requisition.",
      "Monitor and maintain inward and outward material records.",
      "Maintain accurate stock registers and inventory records.",
      "Prepare and update daily, weekly, and monthly stock reports in MS Excel.",
      "Conduct internal stock audits and assist in physical stock verification.",
      "Identify stock discrepancies and report variances immediately.",
      "Ensure proper storage, labeling, and organization of materials in the warehouse.",
      "Coordinate with Purchase, Production, and Accounts departments for inventory reconciliation.",
    ],

    skills: [
      "Graduate / Diploma in any discipline (Logistics, Supply Chain preferred).",
      "1-4 years of experience in warehouse or inventory management (preferred).",
      "Excellent knowledge of MS Excel (stock reports, VLOOKUP/XLOOKUP, Pivot Tables, data analysis).",
      "Knowledge of warehouse inventory procedures and documentation",
      "Strong attention to detail and accuracy.",
      "Good communication and coordination skills.",
    ],
  },
  {
    id: 5,
    title: "Warehouse Stock Inventory Executive ",
    location: "Bhiwandi",
    experience: "2 - 5 Years",
    description:
      "The Warehouse Stock Inventory Executive is responsible for accurate inventory control, material verification, documentation, stock reporting, and coordination with internal teams to ensure smooth warehouse operations.",

    responsibilities: [
      "Verify incoming materials as per Purchase Order (PO), Delivery Challan, and Invoice.",
      "Prepare GRN (Goods Receipt Note) against Delivery Challan and Invoice.",
      "Follow up on shortage, excess, or damaged materials with the Godown Head and concerned departments.",
      "Issue materials strictly as per approved Material Requisition.",
      "Monitor and maintain inward and outward material records.",
      "Maintain accurate stock registers and inventory records.",
      "Prepare and update daily, weekly, and monthly stock reports in MS Excel.",
      "Conduct internal stock audits and assist in physical stock verification.",
      "Identify stock discrepancies and report variances immediately.",
      "Ensure proper storage, labeling, and organization of materials in the warehouse.",
      "Coordinate with Purchase, Production, and Accounts departments for inventory reconciliation.",
    ],

    skills: [
      "Graduate / Diploma in any discipline (Logistics, Supply Chain preferred).",
      "1-4 years of experience in warehouse or inventory management (preferred).",
      "Excellent knowledge of MS Excel (stock reports, VLOOKUP/XLOOKUP, Pivot Tables, data analysis).",
      "Knowledge of warehouse inventory procedures and documentation",
      "Strong attention to detail and accuracy.",
      "Good communication and coordination skills.",
    ],
  },
];

export default function Careers() {
  const [showDetail, setShowDetail] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isQuickApply, setIsQuickApply] = useState(false);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setShowDetail(true);
  };

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setIsQuickApply(false);
    setShowDetail(false);
    setShowForm(true);
  };

  const handleQuickApply = () => {
    setIsQuickApply(true);
    setShowForm(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("show-recaptcha");
    } else {
      document.body.classList.remove("show-recaptcha");
    }

    return () => document.body.classList.remove("show-recaptcha");
  }, [showForm]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Careers | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Build your career with Ventura Alloy & Steels Pvt. Ltd. Explore opportunities to work with a leading steel supplier in India, fostering growth, innovation, and excellence."
          />
          <meta
            name="keywords"
            content="Ventura Steels Careers, Steel Industry Jobs India, Alloy Steel Company Careers, Tool Steel Jobs, Engineering Steel Careers, Work with Ventura Steels, Job Openings Steel Supplier"
          />
          <link rel="canonical" href="https://venturasteels.com/career" />
        </Helmet>
      </HelmetProvider>

      <div className="careers-container container pb-5 recaptcha-page">
        {/* Intro Section */}
        <div className="w-100 mb-5 careers-banner" data-aos="fade-down">
          <img
            src="/image/career-bg2.jpg"
            alt="Careers Banner Image"
            className="img-fluid"
          />
        </div>
        <Card
          className="careers-intro shadow-sm border-0 mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Card.Body>
            <Row>
              <Col md={9}>
                <h2 className="fw-bold" data-aos="fade-right">
                  Careers at Ventura Steels
                </h2>
                <p
                  className="text-muted fs-5"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  Work with a team that builds industry-leading steel solutions.
                  We hire for growth, craftsmanship and impact.
                </p>
              </Col>
              <Col
                md={3}
                className="text-end careers-stats"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div>
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div>
                  <span className="stat-number">70+</span>
                  <span className="stat-label">Employees</span>
                </div>
                <div>
                  <span className="stat-number">1800+</span>
                  <span className="stat-label">Clients</span>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* job listings */}
        <Row>
          {/* Job Listings */}
          <Col md={8}>
            <h2 className="careers-heading text-center mt-3 mb-4">
              Ventura’s Openings
            </h2>

            <Row>
              {jobOpenings.map((job, index) => (
                <Col
                  md={6}
                  key={job.id}
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card className="job-card h-100">
                    <Card.Body className="d-flex flex-column">
                      {/* Job Title */}
                      <Card.Title className="job-title">{job.title}</Card.Title>

                      {/* Meta info */}
                      <div className="job-meta mb-3">
                        <span>{job.location}</span>
                        <span className="dot">•</span>
                        <span>{job.experience}</span>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleViewDetails(job)}
                        >
                          View Details
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Sidebar – Why Join Ventura */}
          <Col md={4} data-aos="fade-left" data-aos-delay="500">
            <Card className="why-join-card shadow-sm border-0">
              <div className="why-join-header text-center">
                <img
                  src="/image/logo-v.png"
                  alt="Ventura Logo"
                  height={54}
                  className="mb-3"
                />
                <h5 className="fw-bold mb-2">Build Your Career at Ventura</h5>
                <p className="text-muted small">
                  Join a team driving excellence in industrial and alloy steel
                  solutions.
                </p>
              </div>

              <div className="why-join-body">
                <div className="why-join-point">
                  <span className="accent-bar" />
                  <div>
                    <strong>Structured Career Growth</strong>
                    <p className="text-muted small">
                      Continuous learning, skill development & leadership
                      opportunities.
                    </p>
                  </div>
                </div>

                <div className="why-join-point">
                  <span className="accent-bar" />
                  <div>
                    <strong>Safety & Process Excellence</strong>
                    <p className="text-muted small">
                      Safety-first operations with globally aligned processes.
                    </p>
                  </div>
                </div>

                <div className="why-join-point">
                  <span className="accent-bar" />
                  <div>
                    <strong>Industry-Scale Exposure</strong>
                    <p className="text-muted small">
                      Work on complex, high-impact industrial projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="why-join-footer">
                <h6 className="fw-bold mb-1">Quick Apply</h6>
                <p className="text-muted small mb-3">
                  Select an open role to begin your application.
                </p>

                <Button
                  className="w-100 quick-apply-btn"
                  onClick={handleQuickApply}
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Job Details Modal */}
        <Modal
          show={showDetail}
          onHide={() => setShowDetail(false)}
          size="xl"
          centered
          className="job-spec-modal"
        >
          <Modal.Body className="p-0">
            {/* MOBILE TOP BAR */}
            <div className="job-mobile-header d-md-none">
              <button
                className="job-mobile-close"
                onClick={() => setShowDetail(false)}
                aria-label="Close job details"
              >
                ×
              </button>

              <span className="job-mobile-title">Job Details</span>
            </div>

            <div className="job-spec-wrapper">
              {/* LEFT – JOB CONTENT */}
              <div className="job-spec-content">
                <div className="job-spec-header">
                  <h4>{selectedJob?.title}</h4>
                  <div className="job-spec-meta">
                    <span>{selectedJob?.location}</span>
                    <span> | </span>
                    <span>{selectedJob?.experience}</span>
                  </div>
                </div>

                {selectedJob?.description && (
                  <section>
                    <h6>Role Overview</h6>
                    <p>{selectedJob.description}</p>
                  </section>
                )}

                {selectedJob?.responsibilities?.length > 0 && (
                  <section>
                    <h6>Responsibilities</h6>
                    <ul>
                      {selectedJob.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {selectedJob?.skills?.length > 0 && (
                  <section>
                    <h6>Skills & Qualifications</h6>
                    <ul>
                      {selectedJob.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              {/* RIGHT – ACTION PANEL */}
              <div className="job-spec-action">
                <h6>Apply for this role</h6>
                <p>
                  This position contributes directly to Ventura’s sales and
                  customer engagement operations.
                </p>

                <Button
                  className="job-apply-btn"
                  onClick={() => handleApplyNow(selectedJob)}
                >
                  Apply Now
                </Button>
              </div>
            </div>
            {/* MOBILE CTA */}
            <div className="mobile-apply-cta d-md-none">
              <Button
                className="job-apply-btn w-100"
                onClick={() => handleApplyNow(selectedJob)}
              >
                Apply Now
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        {/* Application Form Modal */}
        <CareerApplicationModal
          showForm={showForm}
          setShowForm={setShowForm}
          selectedJob={selectedJob}
          jobOpenings={jobOpenings}
          isQuickApply={isQuickApply}
        />
      </div>
    </>
  );
}
