const mongoose=require("mongoose")

const adminSchema = new mongoose.Schema(
    {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      gender: { type: String, required: true },
      age: { type: Number, required: true },
      email: { type: String, required: true },
     
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  const Admin = mongoose.model("admin", userSchema);
  
  module.exports=Admin;