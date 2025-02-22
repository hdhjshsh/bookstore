require("dotenv").config();
const express = require("express");

const connectDB = require("./database");

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
