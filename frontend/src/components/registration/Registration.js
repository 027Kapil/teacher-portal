// // src/components/RegistrationForm.js
// import React from 'react';
// import './Registration.css';
// import { Link } from 'react-router-dom';
// import { ROUTE } from '../utils';
// const Registration = () => {

//   return (
//     <div className="registration-form">

     
//         <div class="row">
//         <div class="column"> <Link to={ROUTE.SCHOOL_REGISTRATION}> As a School </Link></div>
//         <div class="column"> <Link to={ROUTE.TEACHER_REGISTRATION}>As a Teacher </Link>
          
//         </div>
//         </div>
      

//     </div>
//   );
// };

// export default Registration;


import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../utils";

const Registration = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    
      navigate(path);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome to Registration</h2>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <div className="card p-4" style={{ width: "30rem" }}>
          <h3 className="text-center mb-4">Choose Registration Type</h3>
          <div className="d-grid gap-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigateTo(ROUTE.SCHOOL_REGISTRATION)}
            >
              Register as School
            </button>
            <button
              className="btn btn-light btn-lg"
              onClick={() => navigateTo(ROUTE.TEACHER_REGISTRATION)}
            >
              Register as Teacher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
