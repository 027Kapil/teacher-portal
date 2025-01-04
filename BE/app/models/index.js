const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.schools = require("./school.model.js")(mongoose);
db.jobs = require("./job.model.js")(mongoose);
db.teachers = require("./teacher.model.js")(mongoose);
// const Teacher = require("../models/teacher.model");
module.exports = db;
