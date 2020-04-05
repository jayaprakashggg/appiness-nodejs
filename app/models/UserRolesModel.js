var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserRolesSchema = new Schema({
  role_name: {
    type: String,
    trim: true,
    required: true,
  },
  created_by: {
    type: String,
    trim: true,
    required: true,
  },
  modified_by: {
    type: String,
    trim: true,
    required: true,
  },
  created_date: {
    type: Date,
    required: true,
  },
  modified_date: {
    type: Date,
    default: new Date(),
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User_Roles", UserRolesSchema);
