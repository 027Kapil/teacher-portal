import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Sidebar = ({ menuItems }) => (
    <div className="bg-white shadow-sm p-3 rounded text-center">
    <div className="mx-auto rounded-circle border border-primary d-flex align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}>
      <span className="text-secondary fs-1">👤</span>
    </div>
    <div className="text-primary mt-2">52%</div>
    <button className="btn btn-link btn-sm p-0">+ Upload Photo</button>
    <h5 className="mt-2">Vinod Yadav</h5>
    <p className="text-muted small">3% Increase profile score by Profile Image.</p>
    <button className="btn btn-sm btn-primary">Profile Status</button>

    <ul className="list-group mt-4 text-start">
      {menuItems.map(item => (
        <li key={item.path} className="list-group-item d-flex align-items-center">
          <span className="me-2">{item.icon}</span>
          <Link to={item.path} className="text-decoration-none text-dark">{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  );

  export default Sidebar;