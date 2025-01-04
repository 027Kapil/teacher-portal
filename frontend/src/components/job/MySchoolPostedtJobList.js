    // Import necessary modules
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../utils';
import { useLocation } from 'react-router-dom';

const MySchoolPostedtJobList = () => {
    const location = useLocation();    
    const schoolId = new URLSearchParams(location.search).get('schoolId');
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [message, setMessage] = useState('');

  const fetchJobs = async () => {
    try {
      const response = await fetch(BASE_URL+'/api/jobs/'+schoolId);
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };
  // Fetch job postings
  useEffect(() => {
    if(schoolId)
        fetchJobs();
  }, [schoolId]);

  // Handle form input changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Enable edit mode
  const handleEditClick = (job) => {
    setEditingJob(job._id);
    setEditFormData(job);
  };

  // Cancel edit mode
  const handleCancelClick = () => {
    setEditingJob(null);
    setEditFormData({});
  };

  // Submit edited job
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/jobs/${editingJob}`, editFormData);
      setMessage(response.data.message);
      setEditingJob(null);
      setJobs(jobs.map((job) => (job._id === editingJob ? response.data.job : job)));
    } catch (error) {
      console.error('Error updating job:', error);
      setMessage('An error occurred while updating the job.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Job Postings</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Qualifications</th>
            <th>Salary</th>
            <th>Location</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              {editingJob === job._id ? (
                <>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={editFormData.title}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <textarea
                      className="form-control"
                      name="description"
                      value={editFormData.description}
                      onChange={handleEditChange}
                    ></textarea>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="qualifications"
                      value={editFormData.qualifications}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="salaryRange"
                      value={editFormData.salaryRange}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={editFormData.location}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      className="form-control"
                      name="applicationDeadline"
                      value={editFormData.applicationDeadline}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <button className="btn btn-success" onClick={handleEditSubmit}>Save</button>
                    <button className="btn btn-secondary ms-2" onClick={handleCancelClick}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{job.title}</td>
                  <td>{job.description}</td>
                  <td>{job.qualifications}</td>
                  <td>{job.salaryRange}</td>
                  <td>{job.location}</td>
                  <td>{new Date(job.applicationDeadline).toLocaleDateString()}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleEditClick(job)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySchoolPostedtJobList;
