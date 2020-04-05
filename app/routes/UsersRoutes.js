var express = require("express");
var router = express.Router();
var UsersController = require("../controllers/UsersController");

/*
 * GET
 */
router.get("/role", UsersController.listUserRole);

/*
 * POST
 */
router.post("/role", UsersController.createUserRole);

/*
 * GET
 */
router.get("/", UsersController.listUsers);

/*
 * POST
 */
router.post("/", UsersController.createUsers);

module.exports = router;
