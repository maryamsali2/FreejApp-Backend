const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true
    },

    // ref to item
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true
    },

    priceAtPurchase: {
      type: Number,
      required: true
    },

    quantity: {
      type: Number,
      required: true,
      default: 1
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("OrderItem", OrderItemSchema);
