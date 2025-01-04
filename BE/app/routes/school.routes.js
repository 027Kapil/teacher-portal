module.exports = app => {
  const school = require("../controllers/school.controller.js"); 
  var router = require("express").Router();
  router.post("/register", school.registerSchool);
  router.get("/", school.getAllSchools);
  router.get("/:id", school.getSchoolById);
  router.put("/:id", school.updateSchool);
  router.delete("/:id", school.deleteSchool);

  app.use("/api/schools", router);
};
