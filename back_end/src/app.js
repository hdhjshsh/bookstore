const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

module.exports = app;
