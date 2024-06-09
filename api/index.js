const express = require("express");

const app = express();
const router = require("./route/user.route.js");

app.use(express.json());

app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.status(300).json({ message: "Hello" });
});

app.use("*", (err, req, res) => {
  res.status(404).json({
    msg: "Some thing is wrong , please try again",
  });
});

app.listen(4000, () => console.log("Server ready on port 3000."));

module.exports = app;
