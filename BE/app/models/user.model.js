module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        firstName: {
            type:String,
            required:true
        },
        lastName: {
            type:String,
            required:true
        },
        emailId:  {
            type:String,
            required:true,
            unique:true
        },
        password: {
            type:String,
            required:true
        },
        userType: {
            type:String,
            required:true
        },
        gender: {
            type:String,
            required:true
        },
        contactNumber: {
            type:String,
            required:true
        }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("user", schema);
    return User;
  };
  