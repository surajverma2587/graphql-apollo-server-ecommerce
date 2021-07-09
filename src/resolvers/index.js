const categories = require("./categories");
const tags = require("./tags");
const products = require("./products");

const resolvers = {
  Query: {
    categories,
    tags,
    products,
  },
};

module.exports = resolvers;
