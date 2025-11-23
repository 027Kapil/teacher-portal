import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTE } from "../../utils";
import ModalWrapper from "../../registration-1/ModalWrapper";
import ProfileToggle from "../../registration-1/ProfileToggle";
import InputField from "../../common/InputField";
import SelectField from "../../common/SelectField";

const SchoolRegistration = () => {
  const navigate = useNavigate();

  const [profileType, setProfileType] = useState("Employer");
  const [passwordStrength, setPasswordStrength] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    institutionName: "",
    institutionType: "",
    designation: "",
    location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === "password") {
      setPasswordStrength(
        value.length < 6 ? "Weak" : value.length < 10 ? "Medium" : "Strong"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword)
      return alert("Passwords do not match!");

    console.log("School Registration:", formData);
  };

  return (
    <>
      <h4 className="fw-bold text-primary w-100 text-center">REGISTER NOW</h4>

      <ProfileToggle
        profileType={profileType}
        setProfileType={setProfileType}
        navigateTo={() => navigate(ROUTE.TEACHER_REGISTRATION)}
      />

      <form onSubmit={handleSubmit}>
        <div className="row g-3">

          <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange}/>
          <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange}/>
          <InputField type="email" label="Email Address" name="email" value={formData.email} onChange={handleChange}/>
          <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange}/>

          {/* Password */}
          <div className="col-md-6 position-relative">
            <InputField label="Create Password" type="password" name="password"
                        value={formData.password} onChange={handleChange} />
            {passwordStrength && (
              <small className={`position-absolute end-0 top-50 translate-middle-y me-3 px-2 rounded text-white 
                  ${passwordStrength === "Weak" ? "bg-danger" :
                    passwordStrength === "Medium" ? "bg-warning text-dark" : "bg-success"
                  }`}>
                {passwordStrength}
              </small>
            )}
          </div>

          <InputField label="Re-enter Password" type="password" name="confirmPassword"
                      value={formData.confirmPassword} onChange={handleChange}/>

          <InputField label="Institution Name" name="institutionName" value={formData.institutionName} onChange={handleChange}/>

          <SelectField
            label="Institution Type"
            name="institutionType"
            value={formData.institutionType}
            onChange={handleChange}
            options={["School", "College", "Coaching"]}
          />

          <InputField label="Designation" name="designation" value={formData.designation} onChange={handleChange}/>
          <InputField label="Location" name="location" value={formData.location} onChange={handleChange}/>

          <div className="col-md-6 mt-3">
            <div className="border rounded p-2 bg-light w-100 text-center" style={{ height: "70px" }}>
              <span className="text-muted">[ reCAPTCHA Placeholder ]</span>
            </div>
          </div>

          <div className="col-12 form-check mt-3">
            <input type="checkbox" className="form-check-input" required />
            <label className="form-check-label">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <div className="col-12 text-center mt-4">
            <button className="btn btn-primary px-5 py-2 rounded-pill">Sign Up</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SchoolRegistration;