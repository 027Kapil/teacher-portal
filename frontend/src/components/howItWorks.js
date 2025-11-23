import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ROUTE } from "./utils";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
    const navigate=useNavigate();
      // Event: Handle link clicks
  const handleNavigation = (path, linkName) => {
   // setActiveLink(linkName);ddx   zz
    navigate(path);
  };
  return (
    <div style={{  minHeight: "100vh" }}>
      <div className="container py-5">
        
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">How It Works?</h2>
          <p className="text-muted">
            Your all-in-one job search & hiring platform designed for Teachers & Schools in India.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="#forJobSeekers"><button className="btn btn-primary px-4">For Job Seekers</button></a>
            <a href="#forEmployers" ><button className="btn btn-outline-primary px-4">For Employers</button></a>
          </div>
        </div>

        {/* Intro Box */}
        <div className="text-center mb-5" style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h5 className="fw-semibold">Welcome to Teachers Recruiter!</h5>
          <p className="text-muted">
            A job search portal for connecting teachers, educators, and schools across India. 
            Whether you're looking to apply for teaching jobs or hire qualified teachers, 
            Teachers Recruiter makes the process simple and efficient.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* JOB SEEKERS SECTION */}
            <h4 className="fw-bold mt-4"  id="forJobSeekers">For Job Seekers</h4>
            <hr />

            <Feature title="Create Free Profile">
              Build your teaching profile and get discovered by schools that match your experience and preferences.
            </Feature>

            <Feature title="Verify Your Documents">
              Upload your experience certificates and qualifications to build trust & improve your chances.
            </Feature>

            <Feature title="Apply for Relevant Jobs">
              Explore teaching opportunities at top schools around India and apply instantly with one click.
            </Feature>

            <Feature title="Manage Your Applications">
              Track your applied jobs, interview updates, school responses, and application status.
            </Feature>

            <Feature title="Receive Job Alerts">
              Get instant notifications for new jobs that match your skills and experience.
            </Feature>

            <div className="mb-4">
              <button className="btn btn-success px-4"  onClick={() => handleNavigation(ROUTE.TEACHER_REGISTRATION, "Start Your Job Search")}>Start Your Job Search</button>
            </div>

            {/* SCHOOLS / INSTITUTIONS SECTION */}
            <h4 className="fw-bold mt-5" id="forEmployers">For Schools / Institutions</h4>
            <hr />

            <Feature title="Post Job Openings">
              Upload job openings for teachers, coordinators, principals, or admin staff.
            </Feature>

            <Feature title="Promote Job Openings">
              Highlight your institution’s job posts to attract the best talent faster.
            </Feature>

            <Feature title="Access Candidate Database">
              Search through India’s largest database of verified teachers and applicants.
            </Feature>

            <Feature title="Applicant Tracking">
              Review applications, shortlist candidates, schedule interviews, and manage the hiring workflow.
            </Feature>

            <Feature title="Hiring Plans">
              Choose cost-effective subscription plans tailored for schools of all sizes.
            </Feature>

            <div className="mt-4 mb-5">
              <button className="btn btn-success px-4"  onClick={() => handleNavigation(ROUTE.SCHOOL_REGISTRATION, "Start Hiring")}>Start Hiring</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

// Reusable sub-component for checkmark bullet points
const Feature = ({ title, children }) => (
  <div className="d-flex mb-3">
    <span className="text-success me-3" style={{ fontSize: "20px" }}>✔</span>
    <div>
      <h6 className="fw-semibold mb-1">{title}</h6>
      <p className="text-muted mb-0">{children}</p>
    </div>
  </div>
);

export default HowItWorks;
