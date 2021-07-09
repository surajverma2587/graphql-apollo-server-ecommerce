const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const categorySchema = {
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
};

const Category = model("Category", new Schema(categorySchema));

module.exports = Category;
