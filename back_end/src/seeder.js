require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");
const Product = require("./models/Product");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

const seedData = async () => {
  await connectDB();

  const user = await User.create({
    name: "Admin",
    email: "admin@example.com",
    password: "123456",
    role: "admin"
  });

  const product = await Product.create({
    name: "Sách Lập Trình",
    price: 200000,
    description: "Sách dành cho lập trình viên",
    stock: 10,
    category: "Công nghệ"
  });

  console.log("✅ Dữ liệu mẫu đã được tạo!");
  process.exit();
};

seedData();
