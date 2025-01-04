// src/components/JobPostingsList.js
import React from 'react';
import JobPosting from './JobPosting';
import './JobPostingsList.css';

const JobPostingsList = ({ jobs }) => {
  return (
    <div className="job-postings-list" >
  
      {jobs.map((job, index) => (
        <JobPosting key={index} job={job} />
      ))}
    </div>
  );
};

export default JobPostingsList;
