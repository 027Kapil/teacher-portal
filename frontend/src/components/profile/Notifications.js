import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Notifications = () => (
    <div className="bg-white shadow-sm p-3 rounded mb-4">
      <h5>Notifications</h5>
      <p className="text-muted">You have no notifications.</p>
      <button className="btn btn-primary btn-sm">Manage</button>
    </div>
  );
  
  export default Notifications;