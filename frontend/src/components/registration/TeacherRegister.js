import React, { useState } from "react";
import axios from "axios";
import "./TeacherRegister.css";

const TeacherRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, skills, experience } = formData;

    // Converting skills to array
    const formattedSkills = skills.split(",").map((skill) => skill.trim());

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/teacher/register",
        {
          name,
          email,
          password,
          skills: formattedSkills,
          experience,
        }
      );
      alert(response.data);
    } catch (err) {
      alert(err.response ? err.response.data : "An error occurred");
    }
  };

  return (
    <div className="teacher-register">
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a secure password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Skills (comma-separated):</label>
          <input
            type="text"
            name="skills"
            placeholder="E.g., Math, Physics, English"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Experience (in years):</label>
          <input
            type="number"
            name="experience"
            placeholder="Enter your teaching experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TeacherRegister;
