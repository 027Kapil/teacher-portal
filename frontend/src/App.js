// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/Abount';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import TeacherRegistrationForm from './components/registration/teacher/TeacherRegistrationForm';
import Registration from './components/registration/RegistrationChoice ';
import Services from './components/services/Services';
import OpenJobs from './components/job/OpenJobs';
import { ROUTE } from './components/utils';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import SchoolRegistrationForm from './components/registration/school/SchoolRegistration';
import ViewAndUpdateSchool from './components/registration/school/EditSchoolRegistration';
import ViewAndUpdateTeacher from './components/registration/teacher/EditTeacherRegistrationForm';
import JobPostingForm from './components/job/JobPostingForm';
import MySchoolPostedtJobList from './components/job/MySchoolPostedtJobList';
import FindJobPage from './components/job/FindJobPage';
import ApplyJobPage from './components/job/ApplyJobPage';
import TeachersDashboard from './components/profile/ProfileDashboard';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/common/Sidebar';
import { FaBell, FaBoxOpen, FaBriefcase, FaBullhorn, FaCheck, FaExchangeAlt, FaFilePdf, FaHeart, FaKey, FaSignOutAlt, FaStar, FaUpload, FaUser, FaUserFriends, FaVideo } from 'react-icons/fa';
import FindSchoolsPage from './components/job/FindSchoolsPage';
import PromotePlans from './components/common/PromotePlans';
import Checkout from './components/common/Checkout';
import SchoolJobDetails from './components/job/SchoolJobDetails';
import SchoolRegistration from './components/registration/school/SchoolRegistration';
import { useSelector } from 'react-redux';
import { selectIsLogin, selectUserType } from './store/login/loginSelector';
import HowItWorks from './components/howItWorks';
import HireTeachers from './components/HireTeachers';
import RegistrationChoice from './components/registration/RegistrationChoice ';
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


function App() {

  const isLoggedIn = useSelector(selectIsLogin);
  const userType = useSelector(selectUserType);

  return (

    <div className="container-fluid bg-light min-vh-100 p-4">

      <div className="row">

        <Router>
          <Header />
          <div className="col-md-9">
            <Routes>
              {/* <Route path={ROUTE.HOME} exact  element={<TeachersDashboard/>} /> */}
              <Route path={ROUTE.TEACHER_DASHBOARD} exact element={<TeachersDashboard />} />
              <Route path={ROUTE.ABOUT_US} exact element={<About />} />
              <Route path={ROUTE.SERVICES} exact element={<Services />} />
              <Route path={ROUTE.CONTACT_US} exact element={<Contact />} />
              <Route path={ROUTE.REGISTRATION} exact element={<RegistrationChoice />} />
              <Route path={ROUTE.SCHOOL_REGISTRATION} exact element={<SchoolRegistration />} />
              <Route path={ROUTE.TEACHER_REGISTRATION} exact element={<TeacherRegistrationForm />} />
              <Route path={ROUTE.OPEN_JOBS} exact element={<OpenJobs />} />
              <Route path={ROUTE.LOGOUT} exact element={<Home />} />
              <Route path={ROUTE.LOGIN} exact element={<Login />} />
              <Route path={ROUTE.VIEW_AND_UPDATE_SCHOOL} exact element={<ViewAndUpdateSchool />} />
              <Route path={ROUTE.VIEW_AND_UPDATE_TEACHER} exact element={<ViewAndUpdateTeacher />} />
              <Route path={ROUTE.ADD_JOB} exact element={<JobPostingForm />} />
              <Route path={ROUTE.MY_SCHOOL_JOBS} exact element={<MySchoolPostedtJobList />} />
              <Route path={ROUTE.JOB_SEARCH} exact element={<FindJobPage />} />
              <Route path={ROUTE.SCHOOL_PAGE} exact element={<FindSchoolsPage />} />
              <Route path={ROUTE.APPLY_JOB} exact element={<ApplyJobPage />} />
              <Route path={ROUTE.PROMOTE} exact element={<PromotePlans />} />
              <Route path={ROUTE.CHECKOUT_PLAN} exact element={<Checkout />} />
              <Route path={ROUTE.SCHOOL_JOB_DETAIL} exact element={<SchoolJobDetails />} />
              <Route path={ROUTE.HOW_IT_WORKS} exact element={<HowItWorks />} />
              <Route path={ROUTE.START_HIRING} exact element={<HireTeachers/>} />
            </Routes >
          </div>
          {isLoggedIn && <div className="col-md-3 mb-4">
            <Sidebar menuItems={menuItems} />
          </div>
          }
        </Router>


      </div>




      {/* // <Router>
    //   <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/add-school" element={<AddSchool />} />
    //     <Route path="/post-job" element={<PostJob />} />
    //     <Route path="/view-jobs/:schoolId" element={<ViewJobs />} />
    //   </Routes>
    // </Router> */}
      <Footer />

    </div>
  );
}

export default App;
