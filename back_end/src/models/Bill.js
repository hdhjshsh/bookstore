const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true }
    }
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed", "canceled"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

const Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
