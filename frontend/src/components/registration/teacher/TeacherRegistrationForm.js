import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTE } from "../../utils";
import ModalWrapper from "../../registration-1/ModalWrapper";
import ProfileToggle from "../../registration-1/ProfileToggle";
import InputField from "../../common/InputField";
import SelectField from "../../common/SelectField";
import FileUpload from "../../common/FileUpload";

const JobSeekerRegistration = () => {
  const navigate = useNavigate();
  const [profileType, setProfileType] = useState("JobSeeker");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    institutionType: "",
    preferredLocation: "",
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword)
      return alert("Passwords do not match!");

    console.log("Job Seeker Registration:", formData);
  };

  return (
    <>
      <h4 className="fw-bold text-primary w-100 text-center">REGISTER NOW</h4>

      <ProfileToggle
        profileType={profileType}
        setProfileType={setProfileType}
        navigateTo={() => navigate(ROUTE.SCHOOL_REGISTRATION)}
      />

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange}/>
          <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange}/>
          <InputField type="email" label="Email Address" name="email" value={formData.email} onChange={handleChange}/>
          <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange}/>

          <InputField label="Create Password" type="password" name="password"
                      value={formData.password} onChange={handleChange}/>
          <InputField label="Re-enter Password" type="password" name="confirmPassword"
                      value={formData.confirmPassword} onChange={handleChange}/>

          <SelectField
            label="Institution Type"
            name="institutionType"
            value={formData.institutionType}
            onChange={handleChange}
            options={["School", "College", "Coaching"]}
          />

          <InputField label="Preferred Location" name="preferredLocation"
                      value={formData.preferredLocation} onChange={handleChange}/>

          <FileUpload onChange={handleChange} />

          <div className="col-12 form-check mt-3">
            <input type="checkbox" required />
            <label>I agree to Terms & Privacy Policy</label>
          </div>

          <div className="col-12 text-center mt-4">
            <button className="btn btn-primary px-5 py-2 rounded-pill">Sign Up</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default JobSeekerRegistration;
