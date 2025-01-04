// Import necessary modules
import React, { useState } from 'react';


const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    schoolName: '',
    qualifications: '',
    salaryRange: '',
    location: '',
    applicationDeadline: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/jobs'
        
        , formData);
      setMessage(response.data.message);
      setFormData({
        title: '',
        description: '',
        schoolName: '',
        qualifications: '',
        salaryRange: '',
        location: '',
        applicationDeadline: '',        
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Create Job Posting</h2>

      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit} className="p-4 bg-light border rounded">
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">School Name</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={formData.schoolName}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Qualifications</label>
          <input
            type="text"
            className="form-control"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary Range</label>
          <input
            type="text"
            className="form-control"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Application Deadline</label>
          <input
            type="date"
            className="form-control"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default JobPostingForm;