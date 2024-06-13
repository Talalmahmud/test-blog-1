const express = require("express");
const { getUsers, createUser, updateUser } = require("../controllers/user");
const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.patch("/users", updateUser);

module.exports = { userRouter: router };
