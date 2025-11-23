import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "./utils";

const HireTeachers = () => {
       const navigate=useNavigate();
          // Event: Handle link clicks
      const handleNavigation = (path, linkName) => {
       // setActiveLink(linkName);
        navigate(path);
      };
  return (
  
      <div className="container py-5">

        {/* ==================== HEADER ==================== */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Hire Qualified Teachers Faster and Smarter</h2>
          <p className="text-muted">Reach 700k+ Educators Across India</p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <button className="btn btn-outline-primary px-4">
              Start Hiring
            </button>
            <button className="btn btn-outline-primary px-4">
              Hiring Plans & Pricing
            </button>
          </div>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div
          className="d-flex justify-content-center flex-wrap gap-4 p-3 mt-4 mb-5"
          style={{
            border: "1px solid #D6E7FF",
            borderRadius: "12px",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <Stat label="Social Followers" value="700k+" />
          <Stat label="Registered Educators" value="65000+" />
          <Stat label="With B.Ed Qualification" value="25000+" />
          <Stat label="Montessori or Equivalent" value="8000+" />
          <Stat label="Principal & Other Academicians" value="10000+" />
        </div>

        {/* ==================== INTRO SECTION ==================== */}
        <div className="text-left mb-5" style={{ maxWidth: "850px", margin: "0 auto" }}>
          <p className="text-muted">
            As a school authority, you know how challenging it can be to find the right teachers
            for your school. You want educators who are experienced, passionate, and dedicated.
          </p>
          <p className="text-muted">
            Teachers Recruiter is designed to help schools find qualified teachers quickly and efficiently.
            We support schools to post job openings and receive applications from educators who are 
            actively looking for opportunities.
          </p>
          <p className="text-muted">
            Our mission is to provide a comprehensive recruitment system for schools and educational institutions.
          </p>
        </div>

<div className="text-left mb-5" style={{ maxWidth: "850px", margin: "0 auto" }}>    {/* ==================== SERVICES ==================== */}
        <h3 className="fw-bold mb-2">Services</h3>
        <p className="text-muted mb-4">We have a range of services to simplify school hiring processes</p>

        {/* ========== JOB POSTING SECTION ========== */}
        <div className="mb-5">
          <h5 className="fw-bold">
            <span style={{ color: "#8A2BE2", fontSize: "22px" }}>📂</span> Job Posting
          </h5>
          <p className="text-muted">
            Streamline your time, effort, and budget with our job posting feature.
          </p>

          <Bullet>Post job openings and receive applications directly from qualified candidates.</Bullet>
          <Bullet>Use screening filters to receive pre-screened applications that match your preferences.</Bullet>
          <Bullet>You only pay for each candidate you hire.</Bullet>

          <small className="text-muted d-block mt-2 mb-2">
            Create your school profile, subscribe to a hiring plan and start hiring.
          </small>

          <button
            className="btn text-white mt-2"
            style={{ background: "#3A3A3A" }}
             onClick={() => handleNavigation(ROUTE.SCHOOL_REGISTRATION, "School Registration")}
          >
            Start Hiring – Setup a Profile Now
          </button>
        </div>

        {/* ========== RESUME DATABASE ========== */}
        <div className="mb-5">
          <h5 className="fw-bold">
            <span style={{ color: "#1C7CF8", fontSize: "22px" }}>🔎</span> Resume database access
          </h5>
          <p className="text-muted">
            Easily search and filter candidates from our database of verified educator resumes.
          </p>

          <Bullet>Filter resumes by job roles, subjects, experience, location, and qualifications.</Bullet>
          <Bullet>Download CVs and contact candidates instantly.</Bullet>
          <Bullet>Shortlist your preferred candidates.</Bullet>

          <small className="text-muted d-block mt-2">
            Setup your school profile and subscribe to a resume plan.
          </small>
        </div>

      </div>
   
   </div>
 
  );
};

/* ==================== COMPONENTS ==================== */

const Stat = ({ label, value }) => (
  <div className="text-center px-3">
    <h5 style={{ color: "#96918dff" }} className="fw-bold">{value}</h5>
    <p className="text-muted">{label}</p>
  </div>
);

const Bullet = ({ children }) => (
  <div className="d-flex align-items-start mb-2">
    <span
      className="me-2"
      style={{ color: "#19A463", fontSize: "18px" }}
    >
      ✔
    </span>
    <p className="text-muted mb-0">{children}</p>
  </div>
);

export default HireTeachers;
