import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistrationChoice.css"; // optional if you want more styling
import { useNavigate } from "react-router-dom";

const RegistrationChoice = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-start"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f8fbff, #eef4ff)",
        paddingTop: "80px",
      }}
    >
      {/* Heading */}
      <h2 className="fw-bold text-dark mb-2">Welcome to Registration</h2>
      <p className="text-muted mb-5">Select the type of account you want to create</p>

      {/* Card */}
      <div
        className="p-4 shadow-lg rounded-4 bg-white"
        style={{ width: "420px", border: "1px solid #e9eef5" }}
      >
        <h4 className="text-center mb-4" style={{ color: "#1d3557" }}>
          Choose Registration Type
        </h4>

        {/* School Button */}
        <button
          className="btn w-100 py-3 mb-3 fw-semibold rounded-3"
          style={{
            background: "#0d6efd",
            color: "white",
            fontSize: "16px",
            transition: "0.3s",
          }}
          onClick={() => navigate("/register/school")}
          onMouseEnter={(e) => (e.target.style.background = "#0056d2")}
          onMouseLeave={(e) => (e.target.style.background = "#0d6efd")}
        >
          Register as School
        </button>

        {/* Teacher Button */}
        <button
          className="btn w-100 py-3 fw-semibold rounded-3"
          style={{
            background: "#f1f4f8",
            color: "#1d3557",
            fontSize: "16px",
            border: "1px solid #d5dce5",
            transition: "0.3s",
          }}
          onClick={() => navigate("/register/teacher")}
          onMouseEnter={(e) => {
            e.target.style.background = "#e3e8ef";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#f1f4f8";
          }}
        >
          Register as Teacher
        </button>
      </div>
    </div>
  );
};

export default RegistrationChoice;
