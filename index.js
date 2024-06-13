require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000; // Fallback to port 3000 if PORT is not defined

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
