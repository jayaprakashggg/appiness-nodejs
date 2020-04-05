var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },
  user_role: {
    type: Schema.Types.ObjectId,
    ref: "User_Roles",
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

module.exports = mongoose.model("Users", UsersSchema);
