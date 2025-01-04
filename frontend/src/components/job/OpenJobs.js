// src/App.js
import React from 'react';
import JobPostingsList from './JobPostingsList';
import './OpenJobs.css';

const sampleJobs = [
  {
    title: 'Software Engineer',
    company: 'Tech Company',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications. Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications. Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications.  '
  },
  {
    title: 'Product Manager',
    company: 'Innovative Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead the product development team.'
  },
  {
    title: 'Graphic Designer',
    company: 'Creative Agency',
    location: 'Remote',
    type: 'Part-time',
    description: 'Design graphics for various projects.'
  }
];

function OpenJobs() {
  return (
    <div className="container mt-5">
      <h2  className="text-center mb-4"> Job Postings</h2>
      <JobPostingsList jobs={sampleJobs} />
    </div>
  );
}

export default OpenJobs;
