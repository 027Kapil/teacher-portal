// Login.js
import React, { useState } from "react";
import { BASE_URL, ROUTE } from "./utils";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setLoggedInUserData, setLoggedInUserType } from "../store/login/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const dispatch=useDispatch();
  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(setIsLoggedIn(false));
    dispatch(setLoggedInUserData({}));
    dispatch(setLoggedInUserType(null))
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your login logic here
    const response =  fetch(BASE_URL+'/api/users/login', {
      method:"POST",
      body:JSON.stringify({ emailId: email,password:password}),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
    });
    response.then(response=>{
     // console.log("response json => ", response.json());
      return response.json();
    }).then(data=>{
      console.log("data => ", data);
      dispatch(setIsLoggedIn(true));
      dispatch(setLoggedInUserData(data));
      dispatch(setLoggedInUserType(data.userType));
      navigate(ROUTE.HOME)
      
    }).catch(err=>{
      console.log("error while login error" +err);
      
    })
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}  className="p-4 bg-light border rounded">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <a href="/register">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
