import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Sidebar from "./Sidebar";
import Notifications from "./Notifications";
import ProfileStats from "./ProfileStats";
import Footer from "../footer/Footer";
import { FaUser, FaFilePdf, FaUpload, FaBriefcase, FaCheck, FaBullhorn, FaHeart, FaBell, FaBoxOpen, FaExchangeAlt, FaVideo, FaStar, FaUserFriends, FaKey, FaSignOutAlt } from "react-icons/fa";


const TeachersDashboard = () => {
    const [stats, setStats] = useState({ applied: 0, favorite: 0, alerts: 0, total: 0 });
    const menuItems = [
        { name: "Dashboard", path: "/", icon: <FaUser /> },
        { name: "Manage Profile", path: "/profile", icon: <FaUser /> },
        { name: "Create PDF Resume", path: "/resume", icon: <FaFilePdf /> },
        { name: "Manage/Upload CV", path: "/cv", icon: <FaUpload /> },
        { name: "Find Jobs", path: "/jobs", icon: <FaBriefcase /> },
        { name: "Applied Jobs", path: "/applied", icon: <FaCheck /> },
        { name: "Promote Profile", path: "/promote", icon: <FaBullhorn /> },
        { name: "Favorite Jobs", path: "/favorites", icon: <FaHeart /> },
        { name: "Job Alerts", path: "/alerts", icon: <FaBell /> },
        { name: "My Packages", path: "/packages", icon: <FaBoxOpen /> },
        { name: "Transactions", path: "/transactions", icon: <FaExchangeAlt /> },
        { name: "Meetings", path: "/meetings", icon: <FaVideo /> },
        { name: "Reviews", path: "/reviews", icon: <FaStar /> },
        { name: "Following", path: "/following", icon: <FaUserFriends /> },
        { name: "Change Password", path: "/password", icon: <FaKey /> },
        { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
    ];
  
    useEffect(() => {
      // Simulate API call
      setTimeout(() => {
        setStats({ applied: 0, favorite: 0, alerts: 0, total: 0 });
      }, 500);
    }, []);
  
    return (
      <div className="container-fluid bg-light min-vh-100 p-4">
        {/* <Header /> */}
        <div className="row">
         
        {/* <div className="col-md-2 mb-4">
            <Sidebar menuItems={menuItems} />
          </div> */}
          <div className="col-md-12">
            <Notifications />
            <ProfileStats stats={stats} />
          </div>
          {/* <div className="col-md-2 mb-4">
            <Sidebar menuItems={menuItems} />
          </div> */}
        </div>
        {/* <Footer /> */}
      </div>
    );
};

export default TeachersDashboard;
