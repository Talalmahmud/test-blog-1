const express = require("express");
const {
  userCreate,
  getUser,
  updateUser,
} = require("../controller/user.controller.js");
const route = express.Router();

route.post("/signup", userCreate);
route.patch("/update", updateUser);
route.get("/all", getUser);

module.exports = route;
