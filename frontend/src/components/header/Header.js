import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../utils";
import { selectIsLogin, selectUserType } from "../../store/login/loginSelector";
import { useSelector } from "react-redux";

const Header = () => {
  const defaultMenuItems = [
{ label: "Find Jobs", path: "/jobSearch" },
{ label: "How It Works", path: "/howItworks" },
{ label: "Start Hiring", path: "/startHiring" },
{label: "Login", path:ROUTE.LOGIN},
{label: "Sign Up Now", path:ROUTE.REGISTRATION},
];

//  <Route path={ROUTE.SCHOOL_REGISTRATION} exact element={<SchoolRegistration />} />
//               <Route path={ROUTE.TEACHER_REGISTRATION} exact element={<TeacherRegistrationForm />} />
//                <Route path={ROUTE.LOGIN} exact element={<Login />} />

  const teacherLoggedInMenuItems = [
{label: "MY DASHBOARD", path:"/teacherDashboard"},
{label: "JOBS", path:"/jobSearch"},
{label: "SCHOOLS", path:"/SCHOOLS"},
{label: "PROMOTE YOUR PROFILE", path:"/promote"},
{label: "My Account", path:"/teacherDashboard"}
];

  const schoolLoggedInMenuItems = [

{label: "MY DASHBOARD", path:"/schoolDashboard"},
{label: "Add JOBS", path:"/addNewJob"},
{label: "VIEW JOBS", path:"/viewJobs"},
{label: "PROMOTE YOUR PROFILE", path:"/promote"},
{label: "My Account", path:"/schoolDashboard"}
];
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("dashboard");
  const userType = useSelector(selectUserType);
    const isLoggedIn = useSelector(selectIsLogin);
  // Event: Handle link clicks
  const handleNavigation = (path, linkName) => {
    setActiveLink(linkName);
    navigate(path);
  };

 

  return (
    <div className="bg-white shadow-sm p-3 mb-4 d-flex justify-content-between align-items-center">
      <h4 className="text-danger m-0">
        teachers<span className="text-dark">Nest</span>
      </h4>

      <div className="d-flex align-items-center gap-4">
        {!isLoggedIn && defaultMenuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleNavigation(item.path, item.label)}
          className={`btn btn-link text-decoration-none ${
            activeLink === item.label ? "fw-bold text-primary" : "text-dark"
          }`}
        >
          {item.label}
        </button>
    ))}
      {isLoggedIn &&userType=='teacher' && teacherLoggedInMenuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleNavigation(item.path, item.label)}
          className={`btn btn-link text-decoration-none ${
            activeLink === item.label ? "fw-bold text-primary" : "text-dark"
          }`}
        >
          {item.label}
        </button>
    ))}
      {isLoggedIn&& userType=='school' &&schoolLoggedInMenuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleNavigation(item.path, item.label)}
          className={`btn btn-link text-decoration-none ${
            activeLink === item.label ? "fw-bold text-primary" : "text-dark"
          }`}
        >
          {item.label}
        </button>
    ))}
      </div>
    </div>
  );
};

export default Header;
