// const mongoose = require("mongoose");

// const ItemSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String, default: "" },
//     price: { type: Number, required: true },
//     category: { type: String, required: true }, // just store category name, no reference
//   },
//   { timestamps: true },
// );

// module.exports = mongoose.model("Item", ItemSchema);

const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Item", ItemSchema);