import React from 'react';
import './JobPosting.css';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../utils';

const JobPosting = ({ job }) => {
  const navigate=useNavigate();
  const handleCLick=(job)=>{
    navigate(ROUTE.APPLY_JOB)
  }
  
  return (
    <div className="job-posting">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.jobType}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <button onClick={handleCLick}>Apply Now</button>
    </div>
  );
};

export default JobPosting;