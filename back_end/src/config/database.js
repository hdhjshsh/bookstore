require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected!");
  } catch (error) {
    console.error("Failed to connect database", error);
    process.exit(1);
  }
};

module.exports = connectDB;
