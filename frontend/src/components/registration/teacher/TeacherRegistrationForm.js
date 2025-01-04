import React, { useState } from "react";
import { BASE_URL, ROUTE } from "../../utils";
import { useNavigate } from "react-router-dom";

const TeacherRegistrationForm = () => {
   const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    gender: "",
    contactNumber: "",
    qualifications: [""], // Array to hold multiple qualifications
    subjectExpertise: "",
    experienceYears: "",
    schoolName: "",
    dateOfBirth: "",
    address: "",
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
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
       fetch(BASE_URL+"/api/teachers/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => 
          {
            console.log("response ", response)
            if(response.status ==201){
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

  const handleQualificationChange = (index, value) => {
    const newQualifications = [...formData.qualifications];
    newQualifications[index] = value;
    setFormData({ ...formData, qualifications: newQualifications });
  };

  const addQualification = () => {
    setFormData({ ...formData, qualifications: [...formData.qualifications, ""] });
  };

  const removeQualification = (index) => {
    const newQualifications = formData.qualifications.filter((_, i) => i !== index);
    setFormData({ ...formData, qualifications: newQualifications });
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Teacher Registration</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-light border rounded">
        {/* Personal Details */}
        <h4 className="mb-3">Personal Information</h4>
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
            type="emailId"
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
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
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
            required
          />
          {errors.contactNumber && (
            <div className="text-danger mt-1">{errors.contactNumber}</div>
          )}
        </div>

        <h4 className="mt-4 mb-3">Professional Details</h4>
        <div className="mb-3">
          <label htmlFor="qualifications" className="form-label">Qualifications</label>
          {formData.qualifications.map((qualification, index) => (
            <div key={index} className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder={`Qualification ${index + 1}`}
                value={qualification}
                onChange={(e) => handleQualificationChange(index, e.target.value)}
                required
              />
              {formData.qualifications.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeQualification(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={addQualification}
          >
            Add Qualification
          </button>
        </div>
        
        <div className="mb-3">
          <label htmlFor="subjectExpertise" className="form-label">Subject Expertise</label>
          <input
            type="text"
            className="form-control"
            id="subjectExpertise"
            name="subjectExpertise"
            value={formData.subjectExpertise}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="experienceYears" className="form-label">Years of Experience</label>
          <input
            type="number"
            className="form-control"
            id="experienceYears"
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="schoolName" className="form-label">School Name</label>
          <input
            type="text"
            className="form-control"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
          />
        </div>

        {/* Additional Information */}
        <h4 className="mt-4 mb-3">Additional Information</h4>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          {errors.dateOfBirth && (
            <div className="text-danger mt-1">{errors.dateOfBirth}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherRegistrationForm;
