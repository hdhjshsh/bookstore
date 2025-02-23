require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/database");

connectDB();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
