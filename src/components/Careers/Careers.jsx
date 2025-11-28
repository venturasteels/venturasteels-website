import React, { useState } from "react";
import { Button, Modal, Form, Card, Row, Col, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CareerApplicationModal from "./CareersForm";
import "./Careers.css";

const jobOpenings = [
  {
    id: 1,
    title: "Executive - Data Analysis",
    location: "Mumbai",
    experience: "4 - 5 Years",
    department: "Finance & Management",
    genderPreference: "Female (Age 25–28 years)",
    description:
      "The Executive - Data Analysis will be responsible for managing and analyzing organizational data to ensure accuracy, reliability, and actionable insights. The candidate should be proactive, detail-oriented, and capable of supporting financial and business decision-making through data-driven reporting.",

    responsibilities: [
      "Manage master data including creation, updates, and deletion",
      "Commission and decommission data sets as required",
      "Process and safeguard confidential data according to company guidelines",
      "Develop and maintain analytical reports and dashboards",
      "Design and manage the reporting environment including data sources, security, and metadata",
      "Support initiatives to ensure data integrity and normalization",
      "Generate reports from single or multiple systems",
      "Troubleshoot reporting and database environments",
      "Train end-users on new reports and analytical tools",
      "Provide technical expertise in data storage, data mining, and data cleansing",
    ],

    skills: [
      "Proven experience in data analysis",
      "Strong understanding of analytical and computational methods",
      "Excellent attention to detail and accuracy in reporting",
      "Proficiency in Excel, Power BI, or other data visualization tools",
      "Knowledge of financial data and business operations",
      "Problem-solving and critical-thinking skills",
      "Effective communication and interpersonal abilities",
      "Self-starter and proactive attitude",
    ],
  },

  {
    id: 2,
    title: "Executive - Admin",
    location: "Mumbai",
    experience: "4 - 8 Years",
    department: "HR & Admin",
    genderPreference: "Female (Age 30–40 years)",
    description:
      "The Executive - Admin will be responsible for providing comprehensive administrative support to the Managing Director’s office and ensuring smooth day-to-day operations across departments. The ideal candidate should be proactive, organized, and capable of multitasking in a fast-paced environment.",

    responsibilities: [
      "Provide administrative support to the Managing Director’s office",
      "Handle travel arrangements, ticketing, VISA formalities, and hotel bookings",
      "Coordinate and communicate effectively with all departments",
      "Manage and maintain documentation, records, and filing systems",
      "Oversee and manage office expenses efficiently",
      "Serve as the central point of contact for MD’s office operations",
      "Prepare correspondence, reports, and presentations using MS Office tools",
      "Ensure professionalism, confidentiality, and timely task completion",
      "Handle pressure situations with composure and effectiveness",
      "Report daily office work and updates to the Managing Director",
    ],

    skills: [
      "4–8 years of proven experience in administration",
      "Excellent command over English (written and verbal)",
      "Proficiency in MS Word, Excel, PowerPoint, and email correspondence",
      "Smart, proactive, and responsible attitude",
      "Strong interpersonal and coordination skills",
      "Good documentation and organizational ability",
      "Presentable and confident personality",
      "Ability to handle multiple tasks efficiently",
    ],
  },
  {
    id: 3,
    title: "Executive - Sales & Marketing",
    location: "Mumbai",
    experience: "1 - 3 Years",
    department: "Sales & Marketing",
    age: "25 - 30 Years",
    description:
      "We are seeking a motivated and result-oriented Sales & Marketing Executive (Cold Calling) to join our dynamic team. The candidate will be responsible for lead generation, client communication, and supporting marketing initiatives to drive business growth. Occasional client visits for meetings and follow-ups may be required.",

    responsibilities: [
      "Make outbound cold calls to potential customers to generate leads and inquiries",
      "Identify and qualify prospects through phone calls, emails, and online research",
      "Maintain and update customer databases and CRM records",
      "Follow up with leads to convert them into business opportunities",
      "Coordinate with sales and marketing teams for lead management and strategy execution",
      "Present company products and services to clients professionally",
      "Assist in preparing quotations, proposals, and sales reports",
      "Visit clients or sites for meetings, discussions, or business development as required",
      "Achieve daily, weekly, and monthly lead generation and call targets",
      "Contribute innovative ideas for improving sales strategies and revenue growth",
    ],

    skills: [
      "Graduate in any discipline (MBA in Marketing preferred)",
      "0–3 years experience in cold calling, inside sales, or lead generation",
      "Excellent communication and interpersonal skills",
      "Confident, self-motivated, and target-driven personality",
      "Basic computer skills (MS Excel, Google Sheets, CRM tools)",
      "Strong analytical skills to interpret data and market trends",
      "Proactive, organized, and systematic in execution",
      "Willingness to travel locally for client meetings",
    ],
  },
  {
    id: 4,
    title: "Executive - Imports",
    location: "Mumbai",
    experience: "4 - 7 Years",
    department: "Imports & Logistics",
    age: "30 - 40 Years",
    description:
      "We are looking for a detail-oriented and experienced Executive - Imports to manage and streamline international import operations. The ideal candidate will have hands-on experience in handling import documentation, coordination with C&F agents, and communication with carriers for smooth and timely shipment delivery.",

    responsibilities: [
      "Coordinate with Customs Brokers and C&F Agents for efficient import operations",
      "Ensure smooth delivery and clearance of imported goods via sea and air",
      "Conduct vessel and airline inquiries and track shipments proactively",
      "Prepare and manage import documentation as per Air and Sea import procedures",
      "Verify and handle Bills of Lading and related customs documents",
      "Maintain up-to-date knowledge of customs tariff, notifications, and regulatory procedures",
      "Assist in carrier selection with a focus on cost efficiency and operational improvement",
      "Communicate with carriers to provide booking instructions and shipment updates",
      "Investigate, negotiate, and process claims related to transportation when necessary",
      "Coordinate effectively with internal departments, clients, and logistics partners",
    ],

    skills: [
      "Graduate in any discipline (preferably Commerce or International Trade)",
      "4–7 years of experience in Import Department handling sea and air shipments",
      "Strong knowledge of import documentation and procedures",
      "Good understanding of customs tariffs, notifications, and clearance processes",
      "Proficiency in MS Excel, MS Word, and Internet-based tools",
      "Excellent communication and written English skills",
      "Knowledge of shipment policy, insurance, and freight handling",
      "Detail-oriented, proactive, and able to handle multiple import tasks efficiently",
    ],
  },
  {
    id: 5,
    title: "Executive - Import Sourcing",
    location: "Mumbai",
    experience: "5 - 10 Years",
    department: "Imports & Sourcing",
    age: "30 - 40 Years",
    description:
      "We are seeking an experienced and proactive Executive - Import Sourcing to handle global supplier sourcing and procurement operations. The candidate will be responsible for identifying reliable international suppliers, negotiating contracts, ensuring quality and timely delivery, and maintaining strong supplier relationships to optimize sourcing efficiency.",

    responsibilities: [
      "Source new suppliers in international markets based on company requirements",
      "Research, identify, and evaluate potential international suppliers based on quality, pricing, reliability, and other relevant criteria",
      "Conduct supplier negotiations to secure competitive pricing and favorable procurement terms",
      "Assess foreign suppliers by analyzing performance in pricing, supply consistency, delivery timelines, and product quality",
      "Develop and maintain strong relationships with global suppliers through regular communication and visits when necessary",
      "Verify business and financial references of prospective suppliers before engagement",
      "Recommend potential suppliers to the purchasing director or other senior staff for approval",
      "Coordinate trial orders and ensure successful import execution",
      "Oversee delivery schedules, product quality, and order sufficiency",
      "Negotiate payment terms and identify preferred international payment methods",
      "Coordinate and expedite import procedures to ensure timely order fulfillment",
      "Stay updated on global import regulations, taxes, tariffs, and economic factors affecting pricing and availability",
      "Perform other related duties as assigned to support import and sourcing operations",
    ],

    skills: [
      "Graduate or Post Graduate (preferably in International Business, Commerce, or Supply Chain)",
      "5–10 years of experience in Import or International Sourcing department",
      "Excellent command of spoken and written English",
      "Strong knowledge of global supplier sourcing and import documentation",
      "Proficiency in MS Excel, MS Word, and Internet research tools",
      "Excellent negotiation and analytical skills",
      "Ability to evaluate supplier performance and maintain quality standards",
      "Proactive, detail-oriented, and capable of handling multiple sourcing projects efficiently",
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

      <div className="careers-container container pb-5 ">
        {/* Intro Section */}
        <div className="w-100 mb-5 careers-banner">
          <img
            src="/image/career-bg2.jpg"
            alt="Careers Banner Image"
            className="img-fluid"
          />
        </div>
        <Card className="careers-intro shadow-sm border-0 mb-5">
          <Card.Body>
            <Row>
              <Col md={9}>
                <h2 className="fw-bold">Careers at Ventura Steels</h2>
                <p className="text-muted fs-5">
                  Work with a team that builds industry-leading steel solutions.
                  We hire for growth, craftsmanship and impact.
                </p>
              </Col>
              <Col md={3} className="text-end careers-stats">
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
          <Col md={8}>
            <h2 className="mb-4 careers-heading text-center mb-2 mt-3 ">
              Join Our Team
            </h2>
            <p className="text-center fs-3 text-muted "> No job found</p>
            {/* <Row>
              {jobOpenings.map((job) => (
                <Col md={6} key={job.id} className="mb-4">
                  <Card className="job-card shadow-sm h-100">
                    <Card.Body>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {job.location} | {job.experience}
                      </Card.Subtitle>
                      <Card.Text>
                        <strong>Department:</strong> {job.department}
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleViewDetails(job)}
                      >
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row> */}
          </Col>

          {/* Sidebar Quick Apply */}
          <Col md={4}>
            <Card className="shadow-sm border-0 p-3 why-join-card">
              <div className="text-center">
                <img
                  src="/image/logo-v.png"
                  alt="Ventura Logo"
                  className="mb-3"
                  height={50}
                />
                <h5 className="fw-bold">Why Join Ventura?</h5>
                <p className="text-muted">
                  Impactful work, technical growth and a supportive culture in
                  an industrial leader.
                </p>
                <Button
                  variant="outline-primary"
                  href="mailto:careers@venturasteels.com"
                  className="mb-3"
                >
                  Contact HR
                </Button>
              </div>

              {/* <div className="mb-3">
                <strong>Competitive Pay</strong>
                <p className="text-muted small mb-2">
                  Market-aligned compensation & benefits
                </p>
              </div> */}
              <div className="mb-3">
                <strong>Career Growth</strong>
                <p className="text-muted small mb-2">
                  Certifications, training & mentorship
                </p>
              </div>
              <div className="mb-4">
                <strong>Health & Safety</strong>
                <p className="text-muted small">
                  Comprehensive coverage & wellbeing programs
                </p>
              </div>

              <h6 className="fw-bold">Quick Apply</h6>
              <p className="text-muted small">
                Select a job then click Apply to open the application panel.
              </p>
              <Button
                className="w-100 quick-apply-btn"
                onClick={handleQuickApply}
              >
                {" "}
                Apply Now
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Job Details Modal */}
        <Modal
          show={showDetail}
          onHide={() => setShowDetail(false)}
          size="lg"
          centered
          className="job-detail-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedJob?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Location:</strong> {selectedJob?.location}
            </p>
            <p>
              <strong>Experience:</strong> {selectedJob?.experience}
            </p>
            <p>
              <strong>Department:</strong> {selectedJob?.department}
            </p>
            {selectedJob?.genderPreference && (
              <p className="text-black">
                <strong>Preference:</strong> {selectedJob.genderPreference}
              </p>
            )}

            <p>{selectedJob?.description}</p>

            {selectedJob?.responsibilities &&
              selectedJob.responsibilities.length > 0 && (
                <>
                  <h6 className="mt-3">
                    <strong>Responsibilities:</strong>
                  </h6>
                  <ul className="text-muted small">
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

            {selectedJob?.skills && selectedJob.skills.length > 0 && (
              <>
                <h6 className="mt-3">
                  <strong>Skills & Qualifications:</strong>
                </h6>
                <ul className="text-muted small">
                  {selectedJob.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => handleApplyNow(selectedJob)}
            >
              Apply Now
            </Button>
          </Modal.Footer>
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
