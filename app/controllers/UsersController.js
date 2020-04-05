var UsersModel = require("../models/UsersModel");
var UserRolesModel = require("../models/UserRolesModel");
const errorhelper = require("../helper/errorhelper");

/**
 * UsersController.js
 *
 * @description :: Server-side logic for managing Userss.
 */
module.exports = {
  /**
   * UsersController.listUserRole()
   */
  listUserRole: function (req, res) {
    UserRolesModel.find(function (err, userRoles) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: errorhelper.getErrorMessage(err),
        });
      } else if (!userRoles) {
        return res.json({
          success: false,
          message: "No such user roles.",
        });
      } else {
        return res.json({
          success: true,
          user_roles: userRoles,
        });
      }
    });
  },

  /**
   * UsersController.listUsers()
   */
  listUsers: function (req, res) {
    UsersModel.find({})
      .populate("user_role")
      .exec((err, users) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: errorhelper.getErrorMessage(err),
          });
        } else if (!users) {
          return res.json({
            success: false,
            message: "No such users.",
          });
        } else {
          return res.json({
            success: true,
            users: users,
          });
        }
      });
  },

  /**
   * UsersController.createUserRole()
   */
  createUserRole: function (req, res) {
    var userRoles = new UserRolesModel({
      role_name: req.body.role_name,
      created_by: req.body.created_by,
      modified_by: req.body.modified_by,
      created_date: new Date(),
    });
    userRoles.save(function (err, role) {
      if (err) {
        res.json({
          success: false,
          message: errorhelper.getErrorMessage(err),
        });
      } else if (role && role !== null && role._id) {
        res.json({
          success: true,
          message: `${role.role_name} profile successfully created!`,
        });
      } else {
        res.json({
          success: false,
          message: "Something went wrong. Please try again later!",
        });
      }
    });
  },

  /**
   * UsersController.createUsers()
   */
  createUsers: function (req, res) {
    UsersModel.countDocuments(function (err, count) {
      if (err) {
        res.json({
          success: false,
          message: errorhelper.getErrorMessage(err),
        });
      } else {
        UserRolesModel.findOne(
          { role_name: count == 0 ? "Admin" : "User" },
          "_id",
          function (err, role) {
            if (err) {
              res.json({
                success: false,
                message: errorhelper.getErrorMessage(err),
              });
            } else if (role && role !== null && role._id) {
              var users = new UsersModel({
                name: req.body.name,
                age: req.body.age,
                address: req.body.address,
                user_role: role._id,
                created_by: req.body.created_by,
                modified_by: req.body.modified_by,
                created_date: new Date(),
              });
              users.save(function (err, user) {
                if (err) {
                  res.json({
                    success: false,
                    message: errorhelper.getErrorMessage(err),
                  });
                } else if (user && user !== null && user._id) {
                  res.json({
                    success: true,
                    message: `${user.name} profile successfully created!`,
                  });
                } else {
                  res.json({
                    success: false,
                    message: "Something went wrong. Please try again later!",
                  });
                }
              });
            } else {
              res.json({
                success: false,
                message:
                  "Something went wrong. Please update user role details and try again later!",
              });
            }
          }
        );
      }
    });
  },
};
