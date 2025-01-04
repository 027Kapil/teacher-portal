const db = require("../models");
const Job = db.jobs;



// Create and Save a new User
exports.createJob = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const job = new Job({
  jobId: req.body.jobId,
  jobTitle:req.body.jobTitle,
  jobDescription: req.body.jobDescription,
  jobType:req.body.jobType,              
  jobLocation:req.body.jobLocation,
  mobileNumber: req.body.mobileNumber,
  jobAtSchoolName:  req.body.jobAtSchoolName, 
  jobAtSchoolEmailId: req.body.jobAtSchoolEmailId, 
  });


  job
    .save(job)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Jobs from the database.
exports.getAllJobs = (req, res) => {
  const emailId = req.query.emailId;
  var condition = emailId ? { emailId: { $regex: new RegExp(emailId), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single job with an id
exports.getJobById = (req, res) => {
  const emailId = req.params.emailId;

  User.findOne({emailId:emailId})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with emailId " + emailId });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with emailId=" + emailId });
    });
};

// Update a User by the id in the request

exports.updateJob = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.deleteJob = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all User from the database.
exports.deleteAllJob = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} User were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    });
};
