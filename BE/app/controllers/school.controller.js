// const School = require("../models/school.model");

const { UserType, NA } = require("../config/appUtils");
const db = require("../models");
const School = db.schools;
const User = db.users;

// Register a new school
const registerSchool = async (req, res) => {
  try {
    const {
      schoolName,
      email,
      password,
      contactNumber,
      website,
      principalName,
      principalEmail,
      establishedYear,
      boardAffiliation,
      schoolType,
      address,
      totalStudents,
      totalTeachers,
      facilities,
    } = req.body;

    // Check if school already exists
    const existingSchool = await School.findOne({ email });
    if (existingSchool) {
      return res.status(400).json({ message: "School with this email already exists." });
    }

    // Create a new school
    const school = new School({
      schoolName,
      email,
      password, 
      contactNumber,
      website,
      principalName,
      principalEmail,
      establishedYear,
      boardAffiliation,
      schoolType,
      address,
      totalStudents,
      totalTeachers,
      facilities,
    });


    // const user = new User({
    //   firstName: schoolName,
    //   lastName: schoolName,
    //   emailId: email,
    //   password: password,
    //   userType: 'School',
    //   gender: 'NA',
    //   contactNumber:contactNumber
    // });

    await school.save();
    //await user.save();

    res.status(201).json({ message: "School registered successfully.", school });
  } catch (error) {
    res.status(500).json({ message: "Error registering school.", error });
  }
};

// Get all schools
const getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schools.", error });
  }
};

// Get a single school by ID
const getSchoolById = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) {
      return res.status(404).json({ message: "School not found." });
    }
    res.status(200).json(school);
  } catch (error) {
    res.status(500).json({ message: "Error fetching school.", error });
  }
};

// Update school details
const updateSchool = async (req, res) => {
  try {
    const updatedSchool = await School.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedSchool) {
      return res.status(404).json({ message: "School not found." });
    }
    res.status(200).json({ message: "School updated successfully.", updatedSchool });
  } catch (error) {
    res.status(500).json({ message: "Error updating school.", error });
  }
};

// Delete a school
const deleteSchool = async (req, res) => {
  try {
    const deletedSchool = await School.findByIdAndDelete(req.params.id);
    if (!deletedSchool) {
      return res.status(404).json({ message: "School not found." });
    }
    res.status(200).json({ message: "School deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting school.", error });
  }
};

module.exports = {
  registerSchool,
  getAllSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
};
