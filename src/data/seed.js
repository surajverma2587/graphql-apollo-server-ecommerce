const { connect, disconnect } = require("../db");

const { Tag, Category } = require("../models");
const tags = require("./tags");
const categories = require("./categories");

const init = async () => {
  await connect();

  await Tag.deleteMany({});
  await Tag.insertMany(tags);
  console.log("Seeded tags successfully");

  await Category.deleteMany({});
  await Category.insertMany(categories);
  console.log("Seeded categories successfully");

  await disconnect();
};

init();
