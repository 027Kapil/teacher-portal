import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../utils";

const ViewAndUpdateSchool = ( ) => {
    const location = useLocation();    
    const schoolId = new URLSearchParams(location.search).get('schoolId');
    const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    schoolName: "",
    email: "",
    contactNumber: "",
    website: "",
    principalName: "",
    principalEmail: "",
    establishedYear: "",
    boardAffiliation: "",
    schoolType: "Private",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    totalStudents: "",
    totalTeachers: "",
  });

  const [isEditMode, setIsEditMode] = useState(false); // Track whether in edit mode or view-only mode
  const fetchSchoolData = async () => {
    let response=  await fetch(BASE_URL+"/api/schools/"+schoolId);
     
          console.log("response ", response)
          if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setFormData(data);
    
     
      };
  useEffect(() => {
    if (schoolId) {
      fetchSchoolData();
    }
  }, [schoolId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address")) {
      const addressKey = name.split(".")[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressKey]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.contactNumber && !/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be 10 digits.";
    }
    return newErrors;
  };
  const updateSchoolData = async (e) => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
    
    fetch(BASE_URL+"/api/schools/"+schoolId, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => 
    {
      console.log("response ", response)
      if(response.status ==200){
        setIsEditMode(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      // Update the school data if in edit mod
      updateSchoolData();
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode); // Toggle between view and edit mode
  };

  return (
    <div className="container mt-5">
   
        <h2 className="text-center mb-4">{isEditMode ? "Edit School Registration" : "View School Details"}</h2>
        <form onSubmit={handleSubmit} className="p-4 bg-light border rounded">
          {/* School Name */}
          <div className="mb-3">
            <label htmlFor="schoolName" className="form-label">
              School Name
            </label>
            <input
              type="text"
              className="form-control"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              School Email
            </label>
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

          {/* Contact Number */}
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
              Contact Number
            </label>
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
             {errors.contactNumber && isEditMode && (
            <div className="text-danger mt-1">{errors.contactNumber}</div>
             )}
          </div>

          {/* Website */}
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Website
            </label>
            <input
              type="url"
              className="form-control"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              disabled={!isEditMode}
            />
          </div>

          {/* Principal Name */}
          <div className="mb-3">
            <label htmlFor="principalName" className="form-label">
              Principal's Name
            </label>
            <input
              type="text"
              className="form-control"
              id="principalName"
              name="principalName"
              value={formData.principalName}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>

          {/* Principal Email */}
          <div className="mb-3">
            <label htmlFor="principalEmail" className="form-label">
              Principal's Email
            </label>
            <input
              type="email"
              className="form-control"
              id="principalEmail"
              name="principalEmail"
              value={formData.principalEmail}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>

          {/* Established Year */}
          <div className="mb-3">
            <label htmlFor="establishedYear" className="form-label">
              Established Year
            </label>
            <input
              type="number"
              className="form-control"
              id="establishedYear"
              name="establishedYear"
              value={formData.establishedYear}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>

          {/* Board Affiliation */}
          <div className="mb-3">
            <label htmlFor="boardAffiliation" className="form-label">
              Board Affiliation
            </label>
            <input
              type="text"
              className="form-control"
              id="boardAffiliation"
              name="boardAffiliation"
              value={formData.boardAffiliation}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>

          {/* School Type */}
          <div className="mb-3">
            <label htmlFor="schoolType" className="form-label">
              School Type
            </label>
            <select
              className="form-select"
              id="schoolType"
              name="schoolType"
              value={formData.schoolType}
              onChange={handleChange}
              disabled={!isEditMode}
            >
              <option value="Private">Private</option>
              <option value="Public">Public</option>
              <option value="International">International</option>
            </select>
          </div>

          {/* Address */}
          <h5>Address</h5>
          <div className="mb-3">
            <label htmlFor="address.street" className="form-label">
              Street
            </label>
            <input
              type="text"
              className="form-control"
              id="address.street"
              name="address.street"
              value={formData?.address?.street}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address.city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="address.city"
              name="address.city"
              value={formData?.address?.city}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address.state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="address.state"
              name="address.state"
              value={formData?.address?.state}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address.zipCode" className="form-label">
              Zip Code
            </label>
            <input
              type="text"
              className="form-control"
              id="address.zipCode"
              name="address.zipCode"
              value={formData?.address?.zipCode}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address.country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="address.country"
              name="address.country"
              value={formData?.address?.country}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>

          {/* Total Students */}
          <div className="mb-3">
            <label htmlFor="totalStudents" className="form-label">
              Total Students
            </label>
            <input
              type="number"
              className="form-control"
              id="totalStudents"
              name="totalStudents"
              value={formData.totalStudents}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>

          {/* Total Teachers */}
          <div className="mb-3">
            <label htmlFor="totalTeachers" className="form-label">
              Total Teachers
            </label>
            <input
              type="number"
              className="form-control"
              id="totalTeachers"
              name="totalTeachers"
              value={formData.totalTeachers}
              onChange={handleChange}
              disabled={!isEditMode}
              required
            />
          </div>

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
        </form>
      </div>
   
  );
};

export default ViewAndUpdateSchool;
