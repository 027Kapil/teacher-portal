import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

const ApplyJobPage = () => {
    const location = useLocation();
    const { job } = location.state || {}; // Retrieve the passed job object
  
    console.log("job => ",job)
  const [application, setApplication] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    jobTitle: 'Teacher',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication({ ...application, [name]: value });
  };

  const handleFileChange = (e) => {
    setApplication({ ...application, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', application);
    alert('Your application has been submitted successfully!');
  };

  return (
    <div className="apply-job-page container mt-5">
      <h1 className="text-center mb-4">Apply for a Teaching Job</h1>
      <form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={application.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={application.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            value={application.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coverLetter" className="form-label">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            className="form-control"
            rows="4"
            value={application.coverLetter}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJobPage;
