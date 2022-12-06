const mongoose = require("mongoose");

const TermsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    terms: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Terms", TermsSchema);
