import React from "react";

const ProfileToggle = ({ profileType, setProfileType, navigateTo }) => (
  <div className="text-center mt-2 mb-4">
    <h6 className="text-muted mb-3">SELECT YOUR PROFILE TYPE</h6>

    <div className="d-flex justify-content-center gap-3">

      <button
        type="button"
        className={`btn d-flex align-items-center gap-2 px-4 py-2 rounded-3 ${
          profileType === "JobSeeker" ? "btn-primary text-white" : "btn-outline-primary"
        }`}
        onClick={() => { setProfileType("JobSeeker"); navigateTo(); }}
      >
        <i className="bi bi-person"></i> I'm a Job Seeker
      </button>

      <button
        type="button"
        className={`btn d-flex align-items-center gap-2 px-4 py-2 rounded-3 ${
          profileType === "Employer" ? "btn-success text-white" : "btn-outline-success"
        }`}
        onClick={() => { setProfileType("Employer"); navigateTo(); }}
      >
        <i className="bi bi-building"></i> I'm an Employer
      </button>

    </div>
  </div>
);

export default ProfileToggle;
