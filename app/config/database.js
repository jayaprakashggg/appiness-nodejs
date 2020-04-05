const express = require("express");
const app = express();
const config = require("./settings")[app.get("env")];

const database = `${config.database.protocol}://${config.database.host}:${
  config.database.port
}/${config.database.database}`;

module.exports = database;
