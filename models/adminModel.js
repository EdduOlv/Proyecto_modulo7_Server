const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
    {
      adminName: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const Admin = mongoose.model("Admin", AdminSchema);
  
  module.exports = Admin;
  