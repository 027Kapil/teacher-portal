import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const StatCard = ({ label, value, color, sub }) => (
    <div className="col-md-4">
      <div className={`bg-${color} bg-opacity-10 rounded p-3`}>
        <h4 className={`text-${color} mb-0`}>{value}</h4>
        <p className="mb-0">{label}</p>
        <small className="text-muted">{sub}</small>
      </div>
    </div>
  );

  export default StatCard;