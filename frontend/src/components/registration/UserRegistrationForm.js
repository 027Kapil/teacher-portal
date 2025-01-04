import React, { useState } from "react";
import { BASE_URL, ROUTE } from "../utils";
import { useNavigate } from "react-router-dom";

const SchoolRegistrationForm = () => {
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    userType: "Teacher",
    gender: "",
    contactNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (formData.contactNumber && !/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be 10 digits.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
    
    fetch(BASE_URL+"/api/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => 
    {
      console.log("response ", response)
      if(response.status ==200){
        navigate(ROUTE.HOME);
      }
  })
  .then(json => console.log(json))
  .catch(error=>{
    console.log("error : ", error)
  });

    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-light border rounded">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailId" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <div className="text-danger mt-1">{errors.confirmPassword}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="userType" className="form-label">User Type</label>
          <select
            className="form-select"
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
          >
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {errors.contactNumber && (
            <div className="text-danger mt-1">{errors.contactNumber}</div>
          )}
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default SchoolRegistrationForm;

