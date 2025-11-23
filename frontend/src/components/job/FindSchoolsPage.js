import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, useNavigate } from "react-router-dom";
import { ROUTE } from "../utils";

const FindSchoolsPage = () => {
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState({
    institutionType: [],
  });

  const schools = [
    {
      id: 1,
      name: "Shri Ganesh Group of Institutions",
      board: "SCHOOL",
      location: "Sidhi, Madhya Pradesh, India",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      featured: true,
      vacancies: 0,
    },
    {
      id: 2,
      name: "Heartfulness International School",
      board: "CBSE Board School",
      location: "Hyderabad, Telangana, India",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
      featured: true,
      vacancies: 3,
    },
    {
      id: 3,
      name: "Trinity School",
      board: "CBSE Board School",
      location: "Bahadurgarh, Haryana, India",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      featured: true,
      vacancies: 2,
    },
    {
      id: 4,
      name: "Sahajanand International School",
      board: "CBSE Board School",
      location: "Anand, Gujarat, India",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
      featured: true,
      vacancies: 2,
    },
    {
      id: 5,
      name: "The Premia Academy",
      board: "Cambridge Board School, CBSE Board School",
      location: "Hyderabad, Telangana, India",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135714.png",
      featured: true,
      vacancies: 7,
    },
  ];

  const handleCheckboxChange = (value) => {
    setFilters((prev) => {
      const updated = [...prev.institutionType];
      if (updated.includes(value)) {
        return { ...prev, institutionType: updated.filter((v) => v !== value) };
      } else {
        return { ...prev, institutionType: [...updated, value] };
      }
    });
  };
    const navigate = useNavigate();
   
  
    // Event: Handle link clicks
    const handleNavigation = (path, schoolId) => {
      navigate(path);
    };
  

  return (
    <div className="container-fluid bg-light py-4 px-5">
      {/* Header */}
      <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
        <h4 className="fw-bold mb-2">Find Schools</h4>
        <p className="text-muted mb-0">
          Search schools in your location, apply for the active jobs, and connect directly.
        </p>
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

            <h6 className="fw-semibold mb-3">Institution Type</h6>
            {[
              "All",
              "Nursing College",
              "Medical College",
              "Sports Academy",
              "CBSE Board School",
              "Cambridge Board School",
              "Play School",
              "Degree College",
              "EdTech Company",
              "University",
              "Coaching Institute",
            ].map((type, i) => (
              <div key={i} className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={filters.institutionType.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                  id={`type-${i}`}
                />
                <label htmlFor={`type-${i}`} className="form-check-label">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-lg-9">
          {/* Results Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="text-muted mb-0">
              <strong>{schools.length}</strong> School Results
            </h6>
            <div className="d-flex gap-3 align-items-center">
              <select className="form-select form-select-sm" style={{ width: "150px" }}>
                <option>Most Recent</option>
                <option>Alphabetical</option>
              </select>
              <select className="form-select form-select-sm" style={{ width: "150px" }}>
                <option>25 per page</option>
                <option>50 per page</option>
              </select>
            </div>
          </div>

          {/* School Cards */}
          {schools.map((school) => (
            <div
              key={school.id}
              className="bg-white p-4 mb-3 rounded-4 shadow-sm position-relative d-flex justify-content-between align-items-center" onClick={() => handleNavigation(ROUTE.SCHOOL_JOB_DETAIL, school.id)}
            >
              <div className="d-flex align-items-center">
                <img
                  src={school.logo}
                  alt={school.name}
                  style={{ width: "70px", height: "70px" }}
                  className="me-3 rounded-circle"
                />
                <div>
                  <h6 className="fw-bold mb-1 text-primary">{school.board}</h6>
                  <h5 className="fw-semibold mb-1">{school.name}</h5>
                  <p className="text-muted small mb-0">
                    <i className="bi bi-geo-alt"></i> {school.location}
                  </p>
                </div>
              </div>

              <div className="text-end">
                {school.featured && (
                  <span
                    className="badge bg-warning text-dark position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    ★ Featured
                  </span>
                )}
                {school.vacancies > 0 && (
                  <button className="btn btn-outline-primary btn-sm fw-semibold mt-3">
                    {school.vacancies} Vacancies
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindSchoolsPage;
