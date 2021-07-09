const { Category } = require("../models");

const categories = async () => {
  const categoriesData = await Category.find({});

  return categoriesData;
};

module.exports = categories;
