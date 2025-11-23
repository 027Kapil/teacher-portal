import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FindJobPage = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState({
    datePosted: "",
    jobRole: [],
  });

  const jobs = [
    {
      id: 1,
      title: "Hindi Language Teacher",
      company: "Gurukulam Global Residential School",
      location: "Denkanikottai, Tamil Nadu, India",
      salary: "₹21000 - ₹25000 / Month",
      jobType: "Full Time",
      posted: "3 days ago",
      board: "CBSE Board School",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      id: 2,
      title: "English Primary Teacher",
      company: "Indian Wisdom School",
      location: "Nalanda, Bihar, India",
      salary: "₹210000 - ₹218000 / Month",
      jobType: "Full Time",
      posted: "3 days ago",
      board: "CBSE Board School",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    },
    {
      id: 3,
      title: "School Principal",
      company: "SRSL Charitable Trust",
      location: "Dungarpur, Rajasthan, India",
      salary: "₹600000 - ₹1200000 / Year",
      jobType: "Full Time",
      posted: "3 weeks ago",
      board: "CBSE Board School",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (filterType === "jobRole") {
        updated.jobRole = prev.jobRole.includes(value)
          ? prev.jobRole.filter((item) => item !== value)
          : [...prev.jobRole, value];
      }
      return updated;
    });
  };

  return (
    <div className="container-fluid bg-light py-4 px-5">
      {/* Search Bar */}
      <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
        <h4 className="fw-bold mb-3">Search Jobs</h4>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title, skill, or company"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn btn-primary px-4">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-4 rounded-4 shadow-sm">
            <h6 className="fw-semibold mb-3">Locations</h6>
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Search by City, State, Postal Code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <h6 className="fw-semibold mb-3">Date Posted</h6>
            {["Last Hour", "Last 24 hours", "Last week", "Last month", "All"].map(
              (label, index) => (
                <div key={index} className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`date-${index}`}
                  />
                  <label htmlFor={`date-${index}`} className="form-check-label">
                    {label}
                  </label>
                </div>
              )
            )}

            <h6 className="fw-semibold mt-4 mb-3">Job Role</h6>
            {[
              "PGT Teacher",
              "TGT Teacher",
              "PRT Teacher",
              "School Principal",
              "Language Teacher",
              "Special Educator",
            ].map((role, index) => (
              <div key={index} className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={filters.jobRole.includes(role)}
                  onChange={() => handleCheckboxChange("jobRole", role)}
                  id={`role-${index}`}
                />
                <label htmlFor={`role-${index}`} className="form-check-label">
                  {role}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Job Results */}
        <div className="col-lg-9">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 mb-3 rounded-4 shadow-sm d-flex justify-content-between align-items-start"
            >
              <div className="d-flex">
                <img
                  src={job.logo}
                  alt={job.title}
                  style={{ width: "60px", height: "60px" }}
                  className="me-3 rounded-circle"
                />
                <div>
                  <h5 className="fw-semibold mb-1">{job.title}</h5>
                  <p className="mb-1 text-muted small">
                    {job.company} · {job.board}
                  </p>
                  <p className="mb-1 text-muted small">
                    <i className="bi bi-geo-alt"></i> {job.location}
                  </p>
                  <p className="mb-1 text-muted small">
                    <i className="bi bi-cash-stack"></i> {job.salary} ·{" "}
                    {job.jobType}
                  </p>
                  <p className="text-secondary small">
                    <i className="bi bi-clock"></i> Published {job.posted}
                  </p>
                  <p>
                         
                <button className="btn btn-secondary" style={{marginRight:"10px"}}>
                  View
                </button>
                <button  className="btn btn-primary">
                  Easy Apply
                </button>
 
                  </p>
                </div>
              </div>
              <i className="bi bi-heart fs-4 text-muted"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobPage;
