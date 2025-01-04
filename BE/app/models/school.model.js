module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
    schoolName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true, match: /^[0-9]{10}$/ },
    website: { type: String },
    principalName: { type: String, required: true },
    principalEmail: { type: String, required: true },
    establishedYear: { type: Number, required: true },
    boardAffiliation: { type: String, required: true },
    schoolType: {
      type: String,
      required: true,
      enum: ["Public", "Private", "International"]
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    totalStudents: { type: Number, required: true, min: 0 },
    totalTeachers: { type: Number, required: true, min: 0 },
    facilities: { type: [String], default: [] },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const School = mongoose.model("school", schema);
  return School;
};



// const mongoose = require("mongoose");

// const schoolSchema = new mongoose.Schema(
//   {
//     schoolName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     contactNumber: { type: String, required: true, match: /^[0-9]{10}$/ },
//     website: { type: String },
//     principalName: { type: String, required: true },
//     principalEmail: { type: String, required: true },
//     establishedYear: { type: Number, required: true },
//     boardAffiliation: { type: String, required: true },
//     schoolType: {
//       type: String,
//       required: true,
//       enum: ["Public", "Private", "International"]
//     },
//     address: {
//       street: { type: String, required: true },
//       city: { type: String, required: true },
//       state: { type: String, required: true },
//       zipCode: { type: String, required: true },
//       country: { type: String, required: true },
//     },
//     totalStudents: { type: Number, required: true, min: 0 },
//     totalTeachers: { type: Number, required: true, min: 0 },
//     facilities: { type: [String], default: [] },
//   },
//   { timestamps: true } // Automatically adds createdAt and updatedAt fields
// );

// const School = mongoose.model("School", schoolSchema);

// module.exports = School;
