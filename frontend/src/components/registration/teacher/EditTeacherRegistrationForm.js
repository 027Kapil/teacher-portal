import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../utils";

const ViewAndUpdateTeacher = () => {
  const location = useLocation();    
  const teacherProfileId = new URLSearchParams(location.search).get('teacherProfileId');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
  const [isEditMode, setIsEditMode] = useState(false); 
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

  const fetchTeacherProfileData = async () => {
    let response=  await fetch(BASE_URL+"/api/teachers/"+teacherProfileId);
     
          console.log("response ", response)
          if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setFormData(data);
    
     
      };
  useEffect(() => {
    if (teacherProfileId) {
      fetchTeacherProfileData();
    }
  }, [teacherProfileId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      alert("Teacher Registered Successfully!");
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
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode); // Toggle between view and edit mode
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
            disabled={!isEditMode}
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
            disabled={!isEditMode}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditMode}
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
            disabled={!isEditMode}
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
            disabled={!isEditMode}
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
            disabled={!isEditMode}
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
            disabled={!isEditMode}
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
                disabled={!isEditMode}
                required
              />
              {formData.qualifications.length > 1 && isEditMode && (
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
          {isEditMode && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={addQualification}
            disabled={isEditMode}
          >
            Add Qualification
          </button>
          )}
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
            disabled={!isEditMode}
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
            disabled={!isEditMode}
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
            disabled={!isEditMode}
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
            disabled={!isEditMode}
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
            disabled={!isEditMode}
            required
          />
        </div>

        <div className="d-grid">
         
          {/* Toggle Edit Mode */}
          {!isEditMode && (
            <button
              type="button"
              className="btn btn-warning w-100 mb-3"
              onClick={toggleEditMode}
            >
              Edit School Details
            </button>
          )}

          {/* Submit Button */}
          {isEditMode && (
            <button type="submit" className="btn btn-primary w-100">
              Update School
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ViewAndUpdateTeacher;
