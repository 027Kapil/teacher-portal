// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import About from './components/about/Abount';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import TeacherRegistrationForm from './components/registration/teacher/TeacherRegistrationForm';
import Registration from './components/registration/Registration';
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
import ExampleComponent from './ExampleComponent';
import JobSearchPage from './components/job/JobSearchPage';
import ApplyJobPage from './components/job/ApplyJobPage';


function App() {
 
  return (
    <Router>
      <Header />
      <Routes >
        <Route path={ROUTE.HOME} exact  element={<Home/>} />
        <Route path={ROUTE.ABOUT_US} exact  element={<About/>} />
        <Route path={ROUTE.SERVICES} exact  element={<Services/>} />
        <Route path={ROUTE.CONTACT_US} exact  element={<Contact/>} />
        <Route path={ROUTE.REGISTRATION} exact  element={<Registration/>} />
        <Route path={ROUTE.SCHOOL_REGISTRATION}exact  element={<SchoolRegistrationForm/>} />
        <Route path={ROUTE.TEACHER_REGISTRATION} exact  element={<TeacherRegistrationForm/>} />
        <Route path={ROUTE.OPEN_JOBS} exact  element={<OpenJobs/>} /> 
        <Route path={ROUTE.LOGOUT} exact  element={<Home/>} />  
        <Route path={ROUTE.LOGIN} exact  element={<Login/>} />       
        <Route path={ROUTE.VIEW_AND_UPDATE_SCHOOL} exact  element={<ViewAndUpdateSchool/>} />   
        <Route path={ROUTE.VIEW_AND_UPDATE_TEACHER} exact  element={<ViewAndUpdateTeacher/>} />   
        <Route path={ROUTE.ADD_JOB} exact  element={<JobPostingForm/>} />
        <Route path={ROUTE.MY_SCHOOL_JOBS} exact  element={<MySchoolPostedtJobList/>} />
        <Route path={ROUTE.JOB_SEARCH} exact  element={<JobSearchPage/>} />  
        <Route path={ROUTE.APPLY_JOB} exact  element={<ApplyJobPage/>} />    

      </Routes >
    </Router>



    // <Router>
    //   <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/add-school" element={<AddSchool />} />
    //     <Route path="/post-job" element={<PostJob />} />
    //     <Route path="/view-jobs/:schoolId" element={<ViewJobs />} />
    //   </Routes>
    // </Router>


  );
}

export default App;
