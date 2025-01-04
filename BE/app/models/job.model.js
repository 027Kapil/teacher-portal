module.exports = mongoose => {
    var schema = mongoose.Schema(
      {

        title: { type: String, required: true },
        description: { type: String, required: true },
        schoolName: { type: String, required: true },
        schoolId:  { type:String, required:true}, 
        qualifications: { type: String, required: true },
        salaryRange: { type: String, required: true },
        location: { type: String, required: true },
        applicationDeadline: { type: Date, required: true },
        contactNumber: {type:String,  required:true },
        type: {type:String,  required:true, enum: ["Full Time", "Part Time"]},       
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Job = mongoose.model("job", schema);
    return Job;
  };
  