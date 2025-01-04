  module.exports = app => {
    const teacher = require("../controllers/teacher.controller.js"); 
    var router = require("express").Router();
    router.post("/register", teacher.registerTeacher);
    router.get("/", teacher.getAllTeachers);
    router.get("/:id", teacher.getTeacherById);
    router.put("/:id", teacher.updateTeacher);
    router.delete("/:id", teacher.deleteTeacher);
  
    app.use("/api/teachers", router);
  };
  