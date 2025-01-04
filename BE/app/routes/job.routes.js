module.exports = app => {
    const job = require("../controllers/job.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", job.createJob);
    router.get("/", job.getAllJobs);
    router.get("/:id", job.getJobById);
    router.put("/:id", job.updateJob);
    router.delete("/:id", job.deleteJob);
    router.delete("/", job.deleteAllJob);  

    app.use("/api/jobs", router);
  };
  