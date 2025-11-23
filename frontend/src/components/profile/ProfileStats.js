import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StatCard from "./StatCard";
const ProfileStats = ({ stats }) => (
    <div className="bg-white shadow-sm p-3 rounded position-relative">
      <h5>Applications Statistics</h5>
  
      <div className="alert alert-success mt-3" role="alert">
        Your account is active, you can now apply to the desired jobs.
      </div>
  
      <div className="row text-center mt-4">
        <StatCard label="APPLIED JOBS" value={stats.applied} color="primary" sub="to find a career" />
        <StatCard label="FAVORITE JOBS" value={stats.favorite} color="purple" sub="against opportunities" />
        <StatCard label="JOB ALERTS" value={stats.alerts} color="success" sub="to get the latest updates" />
      </div>
  
      <div className="text-center mt-4">
        <small className="text-muted">Applied Jobs: {stats.applied}, Favorite Jobs: {stats.favorite}, Job Alerts: {stats.alerts}</small>
        <div className="mt-2 text-secondary small">(Graph Placeholder)</div>
      </div>
  
      <div className="position-absolute top-100 end-0 mt-4 me-3 p-3 border rounded bg-white shadow-sm text-center" style={{ width: '200px' }}>
        <div className="fs-2">🎯</div>
        <h5 className="mb-0">{stats.total}</h5>
        <p className="text-muted small">Total Applied Jobs</p>
        <div className="d-flex justify-content-center gap-2">
          <span className="text-primary">●</span>
          <span className="text-purple">●</span>
          <span className="text-success">●</span>
        </div>
      </div>
    </div>
  );

  export default ProfileStats;