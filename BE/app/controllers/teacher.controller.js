// const Teacher = require("../models/teacher.model");
const { UserType } = require("../config/appUtils");
const db = require("../models");
const Teacher = db.teachers;
const User = db.users;
// Register a new teacher
const registerTeacher = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      emailId,
      password,
      gender,
      contactNumber,
      qualifications,
      subjectExpertise,
      experienceYears,
      schoolName,
      dateOfBirth,
      address,
    } = req.body;

    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ emailId });
    if (existingTeacher) {
      return res.status(400).json({ message: "Teacher with this email already exists." });
    }

    // Create a new teacher
    const teacher = new Teacher({
      firstName,
      lastName,
      emailId,
      password,
      gender,
      contactNumber,
      qualifications,
      subjectExpertise,
      experienceYears,
      schoolName,
      dateOfBirth,
      address,
    });

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      password: req.body.password,
      userType: UserType.TEACHER,
      gender: req.body.gender,
      contactNumber:req.body.contactNumber
    });
    await teacher.save();
    await user.save();

    res.status(201).json({ message: "Teacher registered successfully.", teacher });
  } catch (error) {
    console.log("errrr =>", error)
    res.status(500).json({ message: "Error registering teacher.", error });
  }
};

// Get all teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teachers.", error });
  }
};

// Get a single teacher by ID
const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found." });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teacher.", error });
  }
};

// Update teacher details
const updateTeacher = async (req, res) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found." });
    }
    res.status(200).json({ message: "Teacher updated successfully.", updatedTeacher });
  } catch (error) {
    res.status(500).json({ message: "Error updating teacher.", error });
  }
};

// Delete a teacher
const deleteTeacher = async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found." });
    }
    res.status(200).json({ message: "Teacher deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting teacher.", error });
  }
};

module.exports = {
  registerTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
