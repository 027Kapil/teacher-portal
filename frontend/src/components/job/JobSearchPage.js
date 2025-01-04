import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobPosting from './JobPosting';

const JobSearchPage = () => {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    jobType: 'all',
    salaryRange: 'all',
  });

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Company',
      location: 'New York',
      jobType: 'Full-Time',
      salary: 80000,
      description:
        'Develop and maintain web applications. Develop and maintain web applications. Develop and maintain web applications. Develop and maintain web applications. Develop and maintain web applications. Develop and maintain web applications. Develop and maintain web applications. Develop and maintain web applications. Develop and maintain web applications. Develop and maintain web applications. Develop and maintain web applications. '
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Tech Solutions',
      location: 'San Francisco',
      jobType: 'Part-Time',
      salary: 60000,
      description:
        'Design and build server-side logic. Design and build server-side logic. Design and build server-side logic. Design and build server-side logic. Design and build server-side logic. Design and build server-side logic. Design and build server-side logic. Design and build server-side logic. Design and build server-side logic. Design and build server-side logic.'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      location: 'Remote',
      jobType: 'Contract',
      salary: 70000,
      description:
        'Create and improve user interfaces. Create and improve user interfaces. Create and improve user interfaces. Create and improve user interfaces. Create and improve user interfaces. Create and improve user interfaces. Create and improve user interfaces. Create and improve user interfaces. Create and improve user interfaces. Create and improve user interfaces.'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Analytics Corp',
      location: 'Boston',
      jobType: 'Full-Time',
      salary: 120000,
      description:
        'Analyze and interpret complex data. Analyze and interpret complex data. Analyze and interpret complex data. Analyze and interpret complex data. Analyze and interpret complex data. Analyze and interpret complex data. Analyze and interpret complex data. Analyze and interpret complex data. Analyze and interpret complex data. Analyze and interpret complex data.'
    },
    {
      id: 5,
      title: 'Project Manager',
      company: 'Enterprise Solutions',
      location: 'Seattle',
      jobType: 'Full-Time',
      salary: 95000,
      description:
        'Manage and oversee project execution. Manage and oversee project execution. Manage and oversee project execution. Manage and oversee project execution. Manage and oversee project execution. Manage and oversee project execution. Manage and oversee project execution. Manage and oversee project execution. Manage and oversee project execution. Manage and oversee project execution.'
    }
  ]);

//   const sampleJobs = [
//     {
//       title: 'Software Engineer',
//       company: 'Tech Company',
//       location: 'New York, NY',
//       type: 'Full-time',
//       description: 'Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications. Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications. Develop and maintain web applications.Develop and maintain web applications.Develop and maintain web applications.  '
//     },
//     {
//       title: 'Product Manager',
//       company: 'Innovative Solutions',
//       location: 'San Francisco, CA',
//       type: 'Full-time',
//       description: 'Lead the product development team.'
//     },
//     {
//       title: 'Graphic Designer',
//       company: 'Creative Agency',
//       location: 'Remote',
//       type: 'Part-time',
//       description: 'Design graphics for various projects.'
//     }
//   ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesKeyword = job.title.toLowerCase().includes(filters.keyword.toLowerCase());
    const matchesLocation = filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
    const matchesJobType = filters.jobType === 'all' || job.jobType === filters.jobType;
    const matchesSalaryRange =
      filters.salaryRange === 'all' ||
      (filters.salaryRange === 'below50k' && job.salary < 50000) ||
      (filters.salaryRange === '50k-100k' && job.salary >= 50000 && job.salary <= 100000) ||
      (filters.salaryRange === 'above100k' && job.salary > 100000);

    return matchesKeyword && matchesLocation && matchesJobType && matchesSalaryRange;
  });

  return (
    <div className="job-search-page container mt-5">
      <h1 className="text-center mb-4">Find Jobs</h1>
      <div className="filter-bar row mb-4">
        <div className="col-md-3 mb-3">
          <input
            type="text"
            name="keyword"
            className="form-control"
            placeholder="Keyword (e.g., Developer)"
            value={filters.keyword}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="Location (e.g., Remote, New York)"
            value={filters.location}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-md-3 mb-3">
          <select
            name="jobType"
            className="form-select"
            value={filters.jobType}
            onChange={handleFilterChange}
          >
            <option value="all">All Job Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="col-md-3 mb-3">
          <select
            name="salaryRange"
            className="form-select"
            value={filters.salaryRange}
            onChange={handleFilterChange}
          >
            <option value="all">All Salaries</option>
            <option value="below50k">Below $50k</option>
            <option value="50k-100k">$50k - $100k</option>
            <option value="above100k">Above $100k</option>
          </select>
        </div>
      </div>
      <div className="job-listings row">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job,index) => (
            <JobPosting key={index} job={job} />
            // <div key={job.id} className="job-card col-md-4 mb-4">
            //   <div className="card h-100">
            //     <div className="card-body">
            //       <h5 className="card-title">{job.title}</h5>
            //       <p className="card-text">Location: {job.location}</p>
            //       <p className="card-text">Type: {job.jobType}</p>
            //       <p className="card-text">Salary: ${job.salary.toLocaleString()}</p>
            //     </div>
            //   </div>
            // </div>
          ))
        ) : (
          <p className="text-center">No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default JobSearchPage;
