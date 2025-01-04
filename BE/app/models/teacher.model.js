module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    contactNumber: { type: String, required: true, match: /^[0-9]{10}$/ },
    qualifications: { type: [String], required: true },
    subjectExpertise: { type: String, required: true },
    experienceYears: { type: Number, required: true, min: 0 },
    schoolName: { type: String },
    dateOfBirth: { type: Date, required: true },
    address:  { type: String, required: true },
    
    // {
    //   street: { type: String, required: true },
    //   city: { type: String, required: true },
    //   state: { type: String, required: true },
    //   zipCode: { type: String, required: true },
    //   country: { type: String, required: true },
    // },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);


schema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});


const Teacher = mongoose.model("teacher", schema);
return Teacher;
};

