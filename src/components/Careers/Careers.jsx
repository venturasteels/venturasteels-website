import React, { useState } from "react";
import { Button, Modal, Form, Card, Row, Col, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Careers.css";

const jobOpenings = [
  {
    id: 1,
    title: "Web Developer",
    location: "Mumbai",
    experience: "3+ Years",
    department: "Engineering",
    description:
      "Responsible for developing, testing, and maintaining company websites using modern frameworks and tools.",
    skills: ["React.js", "Node.js", "JavaScript", "HTML/CSS"],
  },
  {
    id: 2,
    title: "Sales Executive",
    location: "Mumbai",
    experience: "2+ Years",
    department: "Sales",
    description:
      "Develop and manage client relationships, drive business growth, and achieve sales targets.",
    skills: ["Communication", "Negotiation", "CRM Tools"],
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    location: "Mumbai",
    experience: "0–3 Years",
    department: "Marketing",
    description:
      "Run paid & organic acquisition, content and analytics to grow Ventura's digital footprint.",
    skills: ["Google Ads", "Social Media", "Content"],
  },
  {
    id: 4,
    title: "Marketing Manager",
    location: "Mumbai",
    experience: "5+ Years",
    department: "Marketing",
    description:
      "Own brand strategy, campaigns and lead funnels for industrial audiences. Strong experience in B2B marketing required.",
    skills: ["SEO/SEM", "Campaigns", "Analytics"],
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
    <div className="careers-container container py-5">
      {/* Intro Section */}
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
                <span className="stat-number">15+</span>{" "}
                <span className="stat-label">Years</span>
              </div>
              <div>
                <span className="stat-number">70+</span>{" "}
                <span className="stat-label">Employees</span>
              </div>
              <div>
                <span className="stat-number">300+</span>{" "}
                <span className="stat-label">Clients</span>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* job listings */}
      <Row>
        <Col md={8}>
          <h2 className="mb-4 careers-heading text-center mb-2 mt-3 ">Join Our Team</h2>
          <Row>
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
          </Row>
        </Col>

        {/* Sidebar Quick Apply */}
        {/* Right Column: Why Join Us */}
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
                Impactful work, technical growth and a supportive culture in an
                industrial leader.
              </p>
              <Button
                variant="outline-primary"
                href="mailto:careers@venturasteels.com"
                className="mb-3"
              >
                Contact HR
              </Button>
            </div>

            <div className="mb-3">
              <strong>Competitive Pay</strong>
              <p className="text-muted small mb-2">
                Market-aligned compensation & benefits
              </p>
            </div>
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
          <p>{selectedJob?.description}</p>
          <h6>Required Skills:</h6>
          <ul>
            {selectedJob?.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleApplyNow(selectedJob)}>
            Apply Now
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Application Form Modal */}
      <Modal
        show={showForm}
        onHide={() => setShowForm(false)}
        size="lg"
        centered
        className="apply-form-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {!isQuickApply ? (
              <Form.Group className="mb-3">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedJob?.title || ""}
                  readOnly
                />
              </Form.Group>
            ) : (
              <Form.Group className="mb-3">
                <Form.Label>Position</Form.Label>
                <Form.Select>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Resume</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Submit Application</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
