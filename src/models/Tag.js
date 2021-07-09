const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const tagSchema = {
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
};

const Tag = model("Tag", new Schema(tagSchema));

module.exports = Tag;
