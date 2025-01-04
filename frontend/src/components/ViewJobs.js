import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewJobs() {
  const { schoolId } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(`http://localhost:5000/jobs/${schoolId}`);
      setJobs(response.data);
    };

    fetchJobs();
  }, [schoolId]);

  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <small>{new Date(job.datePosted).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewJobs;
