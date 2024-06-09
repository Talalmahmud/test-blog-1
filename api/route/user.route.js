const express = require("express");
const { userCreate } = require("../controller/user.controller");
const route = express.Router();

route.get("/hello", userCreate);

module.exports = route;
