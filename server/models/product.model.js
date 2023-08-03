const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ProductSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      required: false,
    },
    countInStock: {
      type: Number,
      required: false,
    },
    ratings: {
      type: Array,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const Product = model("products", ProductSchema);

module.exports = Product;
