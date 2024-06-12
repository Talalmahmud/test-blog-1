const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./route/user.route.js");
const bodyParser = require("body-parser");

app.use(cors("*"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.use("*", (err, req, res) => {
  res.status(404).json({
    msg: "Some thing is wrong , please try again",
  });
});

app.listen(4000, () => console.log("Server ready on port 3000."));

module.exports = app;
